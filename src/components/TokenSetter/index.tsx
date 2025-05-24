'use client'

import validateToken from '@/apis/weather/validate'
import { useTokenStore } from '@/providers/token'
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'

const TokenSetter: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()

  const update = useTokenStore(state => state.update)

  const [error, setError] = useState(false)

  const { isMutating, trigger } = useSWRMutation(
    'validateToken',
    validateToken,
    {
      onSuccess: data => {
        setError(false)
        update(data)
        enqueueSnackbar('API token set successfully!', { variant: 'success' })
      },
      onError: error => {
        switch (error.response?.status) {
          case 401:
            enqueueSnackbar('Invalid API token. Please set a valid token.', {
              variant: 'error',
            })
            break

          default:
            break
        }
        setError(true)
      },
    }
  )

  const handleSubmit = (formData: FormData) => {
    trigger(formData.get('token') as string)
  }

  return (
    <Box
      component='form'
      action={handleSubmit}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        name='token'
        size='small'
        label='OpenWeather API Key'
        variant='outlined'
        required
        disabled={isMutating}
        error={error}
        sx={{ width: 224 }}
      />
      <Button
        size='small'
        variant='contained'
        type='submit'
        color='primary'
        loading={isMutating}
        sx={{ height: 40, px: 5.5 }}
      >
        Set
      </Button>
      <Button
        size='small'
        variant='text'
        title='Get Token'
        href='https://openweathermap.org/price#free'
        target='_blank'
        endIcon={<OpenInNewOutlinedIcon />}
        sx={{ height: 40 }}
      >
        Get Token
      </Button>
    </Box>
  )
}

export default TokenSetter

import type { TWeatherSearch } from '@/libs/validations/weather'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchForm: React.FC<{
  defaultValue?: TWeatherSearch
  onSubmit: (data: TWeatherSearch) => void
  error?: boolean
}> = ({ defaultValue, onSubmit, error }) => {
  const handleSubmit = (formData: FormData) => {
    onSubmit({
      city: formData.get('city') as string,
      country: formData.get('country') as string,
    })
  }

  return (
    <Box>
      <Box
        component='form'
        action={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2,
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          spacing={2}
          sx={{ width: { xs: 1 / 1, sm: 'auto' } }}
        >
          <Typography>City</Typography>
          <TextField
            name='city'
            size='small'
            variant='outlined'
            defaultValue={defaultValue?.city}
            required
            error={error}
            sx={{ width: 132, flexGrow: 1 }}
          />
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          spacing={2}
          sx={{ width: { xs: 1 / 1, sm: 'auto' } }}
        >
          <Typography>Country</Typography>
          <TextField
            name='country'
            size='small'
            variant='outlined'
            defaultValue={defaultValue?.country}
            required
            error={error}
            sx={{ width: 132, flexGrow: 1 }}
          />
        </Stack>
        <Button
          size='small'
          variant='contained'
          type='submit'
          color='primary'
          autoCapitalize='off'
          sx={{
            height: 40,
            px: 5.5,
          }}
        >
          Search
        </Button>
      </Box>
      {error && (
        <Typography
          variant='caption'
          color='error.main'
          sx={{ mt: 1.5, ml: 5 }}
        >
          Not found the city or country
        </Typography>
      )}
    </Box>
  )
}

export default SearchForm

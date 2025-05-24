'use client'

import SearchForm from '@/components/SearchForm'
import TokenSetter from '@/components/TokenSetter'
import WeatherCard from '@/components/WeatherCard'
import type { TWeather, TWeatherSearch } from '@/libs/validations/weather'
import { Stack, Typography } from '@mui/material'
import useSWRMutation from 'swr/mutation'
import { useEffect, useState } from 'react'
import fetchWeather from '@/apis/weather/fetch'
import { useSnackbar } from 'notistack'
import { useTokenStore } from '@/providers/token'

export default function Home() {
  const { enqueueSnackbar } = useSnackbar()

  const { token, clear } = useTokenStore(state => state)

  const [params, setParams] = useState<TWeatherSearch>({
    city: '',
    country: '',
  })

  const [weather, setWeather] = useState<TWeather | null>(null)
  const [error, setError] = useState(false)

  const { isMutating, trigger } = useSWRMutation(
    `https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&units=metric&appid=${token}`,
    fetchWeather,
    {
      onSuccess: data => {
        setError(false)
        if (!data) {
          enqueueSnackbar('No weather data returned.', {
            variant: 'info',
          })
          setWeather(null)
          return
        }
        setWeather(data)
      },
      onError: error => {
        switch (error.response?.status) {
          case 401:
            enqueueSnackbar('Invalid API token. Please set a valid token.', {
              variant: 'error',
            })
            clear()
            break

          case 404:
            enqueueSnackbar(
              'Cannot find the city or country. Please try another city or country.',
              {
                variant: 'error',
              }
            )
            setError(true)
            break

          default:
            enqueueSnackbar('Failed to fetch weather data. Please try again.', {
              variant: 'error',
            })
            break
        }
        setWeather(null)
      },
    }
  )

  const handleSearchSubmit = (data: TWeatherSearch) => {
    setParams(data)
  }

  useEffect(() => {
    if (!params.city || !token) return undefined
    trigger()
  }, [params, token, trigger])

  return (
    <>
      <Typography variant='h1' gutterBottom>
        Today’s Weather
      </Typography>
      {!token && <TokenSetter />}
      {!!token && (
        <Stack spacing={4}>
          <SearchForm
            defaultValue={params}
            onSubmit={handleSearchSubmit}
            error={error}
          />
          <WeatherCard weather={weather} loading={isMutating} />
        </Stack>
      )}
    </>
  )
}

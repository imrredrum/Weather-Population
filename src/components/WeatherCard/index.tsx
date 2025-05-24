import type { TWeather } from '@/libs/validations/weather'
import {
  LocationOnOutlined as LocationOnOutlinedIcon,
  OpacityOutlined as OpacityOutlinedIcon,
  ThermostatOutlined as ThermostatOutlinedIcon,
} from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import calendar from 'dayjs/plugin/calendar'
import dayjs from 'dayjs'
import Image from 'next/image'

dayjs.extend(calendar)

const DAYJS_FORMAT_CONFIG = {
  sameDay: '[Today] h:mm A',
  nextDay: '[Tomorrow] h:mm A',
  nextWeek: 'dddd h:mm A',
  lastDay: '[Yesterday] h:mm A',
  lastWeek: '[Last] dddd h:mm A',
  sameElse: 'DD/MM/YYYY',
}

const WeatherCard: React.FC<{
  weather: TWeather | null
  loading: boolean
}> = ({ weather, loading }) => (
  <Card variant='outlined' sx={{ width: 1 / 1, maxWidth: 540 }}>
    <CardContent
      sx={{
        p: 4,
        minHeight: 387,
        display: 'flex',
        flexDirection: 'column',
        ':last-child': { pb: 4 },
      }}
    >
      {loading ? (
        <Stack flexGrow={1} justifyContent='center' alignItems='center'>
          <CircularProgress color='primary' size={128} thickness={1.5} />
        </Stack>
      ) : weather ? (
        <Grid container spacing={2}>
          <Grid size={6}>
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
              color='primary.main'
            >
              <LocationOnOutlinedIcon />
              <Typography fontSize='1.25rem' fontWeight='bold'>
                {weather.city}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={6}>
            <Typography color='primary.main' textAlign='right'>
              {dayjs().calendar(dayjs(weather.datetime), DAYJS_FORMAT_CONFIG)}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Stack
              direction={{ sm: 'row' }}
              justifyContent='center'
              alignItems='center'
              spacing={1.5}
              sx={{ aspectRatio: { sm: '2 / 1' } }}
            >
              <Box
                width={{ xs: 200, sm: 128 }}
                sx={{ aspectRatio: '1 / 1', position: 'relative' }}
              >
                <Image
                  fill
                  src={`https://openweathermap.org/img/wn/${weather.iconCode}@4x.png`}
                  alt='weather-icon'
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes='(max-width: 600px) 200px, 128px'
                />
              </Box>
              <Stack
                spacing={0.25}
                color='primary.main'
                width={{ xs: 1, sm: 'auto' }}
              >
                <Typography fontSize='4rem' lineHeight='4.625rem'>
                  {weather.temperature}℃
                </Typography>
                <Typography fontSize='1.5rem' lineHeight='1.75rem'>
                  {weather.title}
                </Typography>
                <Typography>{weather.description}</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
              color='primary.main'
            >
              <OpacityOutlinedIcon />
              <Typography>Humidity: {weather.humidity}%</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 'grow' }}>
            <Stack
              direction='row'
              justifyContent={{ sm: 'flex-end' }}
              alignItems='center'
              spacing={0.5}
              color='primary.main'
            >
              <ThermostatOutlinedIcon />
              <Typography>
                Temperature {weather.temperatureRange.min}℃ ~{' '}
                {weather.temperatureRange.max}℃
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Stack flexGrow={1} justifyContent='center' alignItems='center'>
          No Data
        </Stack>
      )}
    </CardContent>
  </Card>
)

export default WeatherCard

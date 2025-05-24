import { WeatherSchema } from '@/libs/validations/weather'
import axios from 'axios'
import type { Fetcher } from 'swr'
import { z } from 'zod'

const ResponseSchema = z.object({
  weather: z.array(
    z.object({
      id: z.number().int(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    humidity: z.number().int().min(0).max(100),
  }),
  dt: z.number(),
})
type TResponse = z.infer<typeof ResponseSchema>

const ResolvedDataSchema = WeatherSchema.omit({
  city: true,
})
type TResolvedData = z.infer<typeof ResolvedDataSchema>

const dataResolver = (data: TResponse) => {
  const resolvedData: TResolvedData = {
    code: data.weather[0].id,
    title: data.weather[0].main,
    description: data.weather[0].description,
    iconCode: data.weather[0].icon,
    temperature: data.main.temp,
    temperatureRange: {
      min: data.main.temp_min,
      max: data.main.temp_max,
    },
    humidity: data.main.humidity,
    datetime: new Date(data.dt * 1000),
  }

  const parseResolvedData = ResolvedDataSchema.safeParse(resolvedData)
  if (!parseResolvedData.success) {
    console.error(
      'Resolved data structure is invalid:',
      '\n',
      parseResolvedData.error.flatten().fieldErrors
    )
    return undefined
  }

  return parseResolvedData.data
}

const fetchWeather: Fetcher<TResolvedData | undefined, string> = async url => {
  const { data } = await axios.get(url)

  const parseResponse = ResponseSchema.safeParse(data)
  if (!parseResponse.success) {
    console.error(
      'Respond structure is invalid:',
      '\n',
      parseResponse.error.flatten().fieldErrors
    )
    return undefined
  }

  return dataResolver(parseResponse.data)
}

export default fetchWeather

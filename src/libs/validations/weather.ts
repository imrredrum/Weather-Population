import { z } from 'zod'

export const WeatherSearchSchema = z.object({
  city: z.string(),
  country: z.string(),
})
export type TWeatherSearch = z.infer<typeof WeatherSearchSchema>

export const WeatherSchema = z.object({
  city: z.string(),
  code: z.number().int(),
  title: z.string(),
  description: z.string(),
  iconCode: z.string(),
  temperature: z.number(),
  temperatureRange: z.object({
    min: z.number(),
    max: z.number(),
  }),
  humidity: z.number().int().min(0).max(100),
  datetime: z.coerce.date(),
})
export type TWeather = z.infer<typeof WeatherSchema>

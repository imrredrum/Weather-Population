import { z } from 'zod'

export const PopulationSchema = z.array(
  z.object({
    year: z.number().int(),
    male: z.number().int().min(0),
    female: z.number().int().min(0),
  })
)

export type TPopulation = z.infer<typeof PopulationSchema>

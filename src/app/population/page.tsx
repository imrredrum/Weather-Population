import PopulationChart from '@/components/PopulationChart'
import type { TPopulation } from '@/libs/validations/population'
import { LocationOnOutlined as LocationOnOutlinedIcon } from '@mui/icons-material'
import {
  Card,
  CardContent,
  CardHeader,
  cardHeaderClasses,
  Stack,
  Typography,
} from '@mui/material'

const POPULATION_MOCK_DATA: TPopulation = [
  { year: 2015, male: 104752, female: 96771 },
  { year: 2016, male: 102046, female: 94827 },
  { year: 2017, male: 95090, female: 88352 },
  { year: 2018, male: 88146, female: 82426 },
  { year: 2019, male: 87291, female: 80920 },
  { year: 2020, male: 81634, female: 75673 },
  { year: 2021, male: 77117, female: 72201 },
  { year: 2022, male: 68164, female: 63444 },
]

export default function PopulationPage() {
  return (
    <>
      <Typography variant='h1' gutterBottom>
        Population
      </Typography>
      <Card variant='outlined' sx={{ borderRadius: 2 }}>
        <CardHeader
          title={
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
              color='primary.main'
            >
              <LocationOnOutlinedIcon />
              <Typography fontSize='1.25rem' fontWeight='bold'>
                Birth in Taiwan
              </Typography>
            </Stack>
          }
          subheader='source: Ministry of the Interior'
          sx={{
            px: 4,
            pt: 4,
            pb: 3.5,
            [`.${cardHeaderClasses.content}`]: {
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 1,
            },
            [`.${cardHeaderClasses.subheader}`]: {
              flexGrow: 1,
              textAlign: 'right',
            },
          }}
        />
        <CardContent sx={{ px: 3, pt: 0, '&:last-child': { pb: 4 } }}>
          <PopulationChart data={POPULATION_MOCK_DATA} />
        </CardContent>
      </Card>
    </>
  )
}

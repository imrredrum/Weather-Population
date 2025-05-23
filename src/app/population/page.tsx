'use client'

import { formatNumber } from '@/libs/utils'
import type { TPopulation } from '@/libs/validations/population'
import { LocationOnOutlined as LocationOnOutlinedIcon } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  cardHeaderClasses,
  Stack,
  Typography,
} from '@mui/material'
import {
  type AllSeriesType,
  ChartDataProvider,
  ChartsAxisHighlight,
  ChartsGrid,
  ChartsLegend,
  ChartsSurface,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  labelMarkClasses,
  legendClasses,
  LineHighlightPlot,
  LinePlot,
  MarkPlot,
} from '@mui/x-charts'

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

const series: AllSeriesType[] = [
  {
    type: 'line',
    label: 'Male',
    color: '#80B4FF',
    curve: 'linear',
    data: POPULATION_MOCK_DATA.map(population => population.male),
    highlightScope: { highlight: 'item' },
  },
  {
    type: 'line',
    label: 'Female',
    color: '#E86997',
    curve: 'linear',
    data: POPULATION_MOCK_DATA.map(population => population.female),
    highlightScope: { highlight: 'item' },
  },
]

export default function PopulationPage() {
  return (
    <Box>
      <Typography variant='h1' gutterBottom>
        Population
      </Typography>
      <Card variant='outlined' sx={{ borderRadius: 2 }}>
        <CardHeader
          title={
            <Stack
              direction='row'
              alignItems='center'
              gap={0.5}
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
          <ChartDataProvider
            series={series}
            height={330}
            xAxis={[
              {
                id: 'year',
                data: POPULATION_MOCK_DATA.map(population => population.year),
                scaleType: 'band',
                valueFormatter: value => String(value),
              },
            ]}
            yAxis={[
              {
                id: 'population',
                scaleType: 'linear',
                position: 'left',
                valueFormatter: value => formatNumber(value),
                min:
                  Math.floor(
                    POPULATION_MOCK_DATA.reduce(
                      (min, d) => Math.min(min, d.male, d.female),
                      Infinity
                    ) /
                      10_000 -
                      1
                  ) * 10_000,
              },
            ]}
          >
            <ChartsSurface>
              <ChartsGrid horizontal />
              <ChartsAxisHighlight x='line' />
              <LinePlot />
              <MarkPlot />
              <LineHighlightPlot />
              <ChartsXAxis axisId='year' disableTicks disableLine />
              <ChartsYAxis axisId='population' disableTicks disableLine />
              <ChartsTooltip />
            </ChartsSurface>
            <ChartsLegend
              direction='horizontal'
              slotProps={{
                legend: {
                  position: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                  sx: {
                    justifyContent: 'center',
                    gap: 2.5,
                    [`.${labelMarkClasses.root}`]: {
                      [`&.${labelMarkClasses.line}`]: {
                        width: 60,
                        [`.${labelMarkClasses.mask}`]: {
                          height: 10,
                        },
                      },
                    },
                    [`& .${legendClasses.label}`]: {
                      fontSize: '0.875rem',
                    },
                  },
                },
              }}
            />
          </ChartDataProvider>
        </CardContent>
      </Card>
    </Box>
  )
}

'use client'

import { formatNumber } from '@/libs/utils'
import type { TPopulation } from '@/libs/validations/population'
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

const series: AllSeriesType[] = [
  {
    type: 'line',
    label: 'Male',
    color: '#80B4FF',
    curve: 'linear',
    dataKey: 'male',
    highlightScope: { highlight: 'item' },
  },
  {
    type: 'line',
    label: 'Female',
    color: '#E86997',
    curve: 'linear',
    dataKey: 'female',
    highlightScope: { highlight: 'item' },
  },
]

const PopulationChart: React.FC<{ data: TPopulation }> = ({ data }) => (
  <ChartDataProvider
    series={series}
    dataset={data}
    height={330}
    xAxis={[
      {
        id: 'year',
        dataKey: 'year',
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
            data.reduce((min, d) => Math.min(min, d.male, d.female), Infinity) /
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
)

export default PopulationChart

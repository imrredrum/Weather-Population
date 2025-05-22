import {
  BarChart as BarChartIcon,
  WbSunnyOutlined as WbSunnyOutlinedIcon,
} from '@mui/icons-material'

export type TMenuListItem = {
  key: string
  text: string
  icon?: React.ReactNode
  link?: string
  disabled?: boolean
}

export const MENU_LIST_ITEMS: {
  main?: TMenuListItem[]
  secondary?: TMenuListItem[]
} = {
  main: [
    {
      text: 'Today’s Weather',
      key: 'root',
      icon: <WbSunnyOutlinedIcon />,
      link: '/',
    },
    {
      text: 'Population',
      key: 'population',
      icon: <BarChartIcon />,
      link: '/population',
    },
  ],
}

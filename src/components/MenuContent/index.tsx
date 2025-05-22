'use client'

import type { TMenuListItem } from '@/libs/config'
import {
  alpha,
  List,
  ListItem,
  ListItemButton,
  listItemButtonClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  Stack,
  styled,
} from '@mui/material'
import Link from 'next/link'

const StyledList = styled(List)(({ theme }) => ({
  [`.${listItemButtonClasses.root}`]: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(4),
    color: alpha(theme.palette.text.primary, 0.4),
  },
  [`.${listItemButtonClasses.selected}`]: {
    borderRightWidth: 3,
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  [`.${listItemIconClasses.root}`]: { minWidth: 36 },
}))

type ListItem = TMenuListItem & {
  onClick?: () => void
  selected?: boolean
}

const MenuContent: React.FC<{
  mainListItems?: ListItem[]
  secondaryListItems?: ListItem[]
}> = ({ mainListItems = [], secondaryListItems = [] }) => (
  <Stack
    sx={{
      py: 5.25,
      flexGrow: 1,
      justifyContent: 'space-between',
    }}
  >
    <StyledList disablePadding>
      {mainListItems.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            selected={item.selected}
            disabled={item.disabled}
            {...{
              ...(item.link && { LinkComponent: Link, href: item.link }),
              ...(item.onClick && { onClick: item.onClick }),
            }}
          >
            {!!item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
    <StyledList disablePadding>
      {secondaryListItems.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            selected={item.selected}
            disabled={item.disabled}
            {...{
              ...(item.link && { LinkComponent: Link, href: item.link }),
              ...(item.onClick && { onClick: item.onClick }),
            }}
          >
            {!!item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
  </Stack>
)

export default MenuContent

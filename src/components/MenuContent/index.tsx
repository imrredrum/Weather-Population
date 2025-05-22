'use client'

import type { TMenuListItem } from '@/libs/config'
import {
  List,
  ListItem,
  ListItemButton,
  listItemButtonClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  Stack,
  useTheme,
} from '@mui/material'
import Link from 'next/link'

type ListItem = TMenuListItem & {
  onClick?: () => void
  selected?: boolean
}

const MenuContent: React.FC<{
  mainListItems?: ListItem[]
  secondaryListItems?: ListItem[]
}> = ({ mainListItems = [], secondaryListItems = [] }) => {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        py: 5.25,
        flexGrow: 1,
        justifyContent: 'space-between',
        [`.${listItemButtonClasses.root}`]: { py: 1.5, pl: 4 },
        [`.${listItemButtonClasses.selected}`]: {
          borderRight: `3px solid ${theme.palette.primary.main}`,
        },
        [`.${listItemIconClasses.root}`]: { minWidth: 36 },
      }}
    >
      <List disablePadding>
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
      </List>
      <List disablePadding>
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
      </List>
    </Stack>
  )
}

export default MenuContent

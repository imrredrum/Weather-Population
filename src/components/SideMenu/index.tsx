'use client'

import {
  Box,
  drawerClasses,
  Drawer as MuiDrawer,
  styled,
  Toolbar,
} from '@mui/material'
import MenuContent from '../MenuContent'
import { MENU_LIST_ITEMS } from '@/libs/config'
import { usePathname } from 'next/navigation'

const drawerWidth = 240

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
})

const SideMenu: React.FC = () => {
  const pathname = usePathname()
  const currentCategory = pathname.split('/').filter(Boolean)[0] || 'root'

  return (
    <Drawer
      variant='permanent'
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Toolbar />
      <Box overflow='auto' height={1 / 1} display='flex' flexDirection='column'>
        <MenuContent
          mainListItems={MENU_LIST_ITEMS.main?.map(item => ({
            ...item,
            selected: item.key === currentCategory,
          }))}
          secondaryListItems={MENU_LIST_ITEMS.secondary?.map(item => ({
            ...item,
            selected: item.key === currentCategory,
          }))}
        />
      </Box>
    </Drawer>
  )
}

export default SideMenu

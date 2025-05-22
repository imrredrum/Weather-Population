'use client'

import {
  Divider,
  Drawer as MuiDrawer,
  drawerClasses,
  Stack,
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

const SideMenuMobile: React.FC<{
  open: boolean | undefined
  toggleDrawer: (newOpen: boolean) => () => void
}> = ({ open, toggleDrawer }) => {
  const pathname = usePathname()

  const currentCategory = pathname.split('/').filter(Boolean)[0] || 'root'

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Toolbar />
      <Stack
        sx={{
          maxWidth: '70dvw',
          height: '100%',
        }}
      >
        <Stack sx={{ flexGrow: 1 }}>
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
          <Divider />
        </Stack>
      </Stack>
    </Drawer>
  )
}

export default SideMenuMobile

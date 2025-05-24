'use client'

import {
  AccountCircle as AccountCircleIcon,
  KeyboardArrowDownRounded as KeyboardArrowDownRoundedIcon,
  MenuRounded as MenuRoundedIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Stack,
  Toolbar as MuiToolbar,
  Typography,
  styled,
  tabsClasses,
  SvgIcon,
  Box,
  Button,
  buttonClasses,
} from '@mui/material'
import { useState } from 'react'
import MenuButton from '../MenuButton'
import { LogoSvg } from '@/libs/assets'
import SideMenuMobile from '../SideMenuMobile'

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.list}`]: {
    gap: '8px',
    p: '8px',
    pb: 0,
  },
})

const AppNavbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar
      position='fixed'
      color='inherit'
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar variant='regular'>
        <Stack
          direction='row'
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            gap: 1,
          }}
        >
          <Stack
            direction='row'
            sx={{ justifyContent: 'center', mr: 'auto' }}
            alignItems='center'
          >
            <SvgIcon>
              <LogoSvg />
            </SvgIcon>
            <Typography color='textPrimary' fontSize={24} ml={1.5} mr={0.375}>
              Analysis
            </Typography>
            <Typography color='textPrimary' sx={{ opacity: 0.6 }}>
              .dev
            </Typography>
          </Stack>
          <Box display={{ xs: 'none', md: 'block' }}>
            <Button
              color='inherit'
              variant='text'
              startIcon={<AccountCircleIcon />}
              endIcon={<KeyboardArrowDownRoundedIcon />}
              sx={{
                [`.${buttonClasses.startIcon}`]: { color: 'primary.main' },
              }}
            >
              username
            </Button>
          </Box>
          <Box display={{ xs: 'block', md: 'none' }}>
            <MenuButton
              aria-label='menu'
              color='inherit'
              onClick={toggleDrawer(true)}
            >
              <MenuRoundedIcon />
            </MenuButton>
            <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default AppNavbar

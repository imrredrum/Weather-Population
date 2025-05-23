'use client'

import AppNavbar from '@/components/AppNavbar'
import SideMenu from '@/components/SideMenu'
import { Box, Container, Toolbar } from '@mui/material'
import { PropsWithChildren } from 'react'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <SideMenu />
    <AppNavbar />
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container sx={{ px: { md: 5 }, py: 5.25 }}>{children}</Container>
    </Box>
  </Box>
)

export default AppLayout

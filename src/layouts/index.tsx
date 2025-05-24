'use client'

import AppNavbar from '@/components/AppNavbar'
import SideMenu from '@/components/SideMenu'
import { Box, Container, styled, Toolbar } from '@mui/material'
import { MaterialDesignContent, SnackbarProvider } from 'notistack'

const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: theme.palette.primary.main,
    },
    '&.notistack-MuiContent-info': {
      backgroundColor: theme.palette.primary.main,
    },
  })
)

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <SnackbarProvider
    Components={{
      success: StyledMaterialDesignContent,
      info: StyledMaterialDesignContent,
    }}
  >
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar />
        <Container
          maxWidth={false}
          sx={{ px: { md: 5 }, py: 5.25, bgcolor: 'grey.50', flexGrow: 1 }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  </SnackbarProvider>
)

export default AppLayout

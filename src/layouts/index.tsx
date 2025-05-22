import SideMenu from '@/components/SideMenu'
import { Box, Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <SideMenu />
    {/* <AppNavbar /> */}
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: 'center',
          mx: 3,
          pb: 5,
          mt: { xs: 8, md: 0 },
        }}
      >
        {/* <Header /> */}
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
          {children}
        </Box>
      </Stack>
    </Box>
  </Box>
)

export default AppLayout

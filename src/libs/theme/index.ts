'use client'

import { createTheme } from '@mui/material'

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 400,
      lineHeight: '2.5625rem',
    },
  },
  palette: {
    primary: {
      main: '#16538E',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'initial',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        slotProps: {
          input: {
            sx: {
              background: '#fff',
            },
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1', gutterBottom: true },
          style: {
            marginBottom: 40,
          },
        },
      ],
    },
  },
})

export default theme

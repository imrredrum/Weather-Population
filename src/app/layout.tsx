import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/libs/theme'
import AppLayout from '@/layouts'
import { TokenStoreProvider } from '@/providers/token'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Weather & Population App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-Hant-TW'>
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <TokenStoreProvider>
              <AppLayout>{children}</AppLayout>
            </TokenStoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

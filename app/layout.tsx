import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-providers'
import ConvexClientProvider from '@/components/providers/convex-provider'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'The connected workspace for your team',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        href: '/logo-dark.svg',
        url: '/logo-dark.svg',
      },
      {
        media: '(prefers-color-scheme: light)',
        href: '/logo.svg',
        url: '/logo.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(font.className, 'antialiased')}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='jotion-theme-key'
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}

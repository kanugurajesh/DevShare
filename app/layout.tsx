import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevShare',
  description: 'I share my blogs here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        rel="preload"
        href="/hero_use_case.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

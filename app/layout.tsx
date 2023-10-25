import Navbar from '@/components/navbar/Navbar'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import {ThemeContextProvider } from '@/components/context/ThemeContext'
import ThemeProvider from '@/components/providers/ThemeProvider'

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
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className={"container"}>
              <div className={"wrapper"}>
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}

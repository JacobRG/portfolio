import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacob Gambrell - Developer Portfolio',
  description: 'Created by Jacob Gambrell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='winter'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

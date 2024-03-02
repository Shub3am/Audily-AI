import type { Metadata } from 'next'
import '@/styles/globals.css'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'

export const metadata: Metadata = {
  title: 'Audily',
  description:
    '✨ Ingenium Hackathon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col overflow-x-hidden font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Vollkorn, Fira_Mono } from 'next/font/google'
import './globals.css'

const inter = Vollkorn({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'snacksquid',
  description: 'a site for squids',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'JS Pratice',
  description: 'Javascript Pratice Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100'>{children}</body>
    </html>
  )
}

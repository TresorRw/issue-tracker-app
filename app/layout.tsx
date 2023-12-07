import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tracker Project',
  description: 'an issue tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='winter'>
      <body className="">
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  )
}

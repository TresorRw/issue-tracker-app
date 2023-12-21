import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'
import { Toaster } from 'react-hot-toast';

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
        <SpeedInsights />
        <Analytics />
        <Toaster position='top-right' />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sudhanshu Kumar Sinha - Full Stack Developer',
  description: 'Building scalable web apps with React, Next.js, Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

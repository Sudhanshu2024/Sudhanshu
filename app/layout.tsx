import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sudhanshu Kumar Sinha - Full Stack Developer',
  description: 'Building scalable web apps with React, Next.js, Node.js',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  openGraph: {
    title: 'Sudhanshu Kumar Sinha - Full Stack Developer',
    description: 'Building scalable web apps with React, Next.js, Node.js',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudhanshu Kumar Sinha - Full Stack Developer',
    description: 'Building scalable web apps with React, Next.js, Node.js',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f23' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

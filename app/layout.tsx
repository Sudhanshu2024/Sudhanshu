import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sudhanshukrsinha.vercel.app'
const siteName = 'Sudhanshu Kumar Sinha - Portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sudhanshu Kumar Sinha | AI / Full-Stack Developer',
    template: '%s | Sudhanshu Kumar Sinha',
  },
  description: 'Portfolio of Sudhanshu Kumar Sinha - AI / Full-Stack Developer specializing in React, Next.js, Node.js, TypeScript, and Machine Learning. Building scalable web applications and innovative AI solutions.',
  keywords: [
    'Sudhanshu Kumar Sinha',
    'Sudhanshu Sinha',
    'Sudhanshu K Sinha',
    'Full Stack Developer',
    'AI Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Machine Learning Engineer',
    'Web Developer',
    'JavaScript Developer',
    'Portfolio',
    'Software Engineer',
  ],
  authors: [{ name: 'Sudhanshu Kumar Sinha', url: siteUrl }],
  creator: 'Sudhanshu Kumar Sinha',
  publisher: 'Sudhanshu Kumar Sinha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'Sudhanshu Kumar Sinha | AI / Full-Stack Developer',
    description: 'Portfolio of Sudhanshu Kumar Sinha - AI / Full-Stack Developer specializing in React, Next.js, Node.js, TypeScript, and Machine Learning.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Sudhanshu Kumar Sinha - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudhanshu Kumar Sinha | AI / Full-Stack Developer',
    description: 'Portfolio of Sudhanshu Kumar Sinha - AI / Full-Stack Developer specializing in React, Next.js, Node.js, TypeScript, and Machine Learning.',
    creator: '@sudhanshukrsinha',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
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
        <link rel="canonical" href={siteUrl} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="author" content="Sudhanshu Kumar Sinha" />
        <meta name="geo.region" content="IN" />
        <meta name="application-name" content="Sudhanshu Kumar Sinha Portfolio" />
        <StructuredData />
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

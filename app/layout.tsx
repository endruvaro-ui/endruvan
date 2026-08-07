import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://endruvan.com',
  ),
  title: 'Endru Van — DJ & Producer | Melodic Techno',
  description:
    'Official site of Endru Van, melodic techno DJ and producer. Latest releases on Spotify and Beatport, tour dates, Instagram feed and bookings.',
  generator: 'v0.app',
  keywords: [
    'Endru Van',
    'melodic techno',
    'techno DJ',
    'music producer',
    'Beatport',
    'Spotify',
    'DJ booking',
  ],
  openGraph: {
    title: 'Endru Van — DJ & Producer',
    description:
      'Melodic techno DJ and producer. Latest releases, tour dates and bookings.',
    type: 'website',
    images: ['/images/hero-endru-van.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0c10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

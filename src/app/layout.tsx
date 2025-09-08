import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'UltraSonic Solar Deer Repellent - Professional Deer Control',
    template: '%s | DeerRepellent.store'
  },
  description: 'Professional solar-powered deer repellent system. Motion-activated ultrasonic technology for effective garden protection. Weatherproof, eco-friendly, and 100% effective deer deterrent.',
  keywords: [
    'deer repellent',
    'ultrasonic deer deterrent',
    'solar powered deer repellent',
    'motion activated deer control',
    'garden protection',
    'deer control system',
    'wildlife deterrent',
    'eco friendly deer repellent'
  ],
  authors: [{ name: 'DeerRepellent.store' }],
  creator: 'DeerRepellent.store',
  publisher: 'DeerRepellent.store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://deerrepellent.store'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'UltraSonic Solar Deer Repellent - Professional Deer Control',
    description: 'Professional solar-powered deer repellent system with motion-activated ultrasonic technology.',
    siteName: 'DeerRepellent.store',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Deer Repellent in Garden Setting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UltraSonic Solar Deer Repellent - Professional Deer Control',
    description: 'Professional solar-powered deer repellent system',
    images: ['/images/twitter-card.jpg'],
    creator: '@deerrepellent',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L62LP213DJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L62LP213DJ');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
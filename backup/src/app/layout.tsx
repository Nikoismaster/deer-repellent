import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Solar Deer Repellent - Ultrasonic Animal Deterrent | DeerRepellent.store',
    template: '%s | DeerRepellent.store'
  },
  description: 'Protect your garden with our solar-powered ultrasonic deer repellent. Motion-activated, weatherproof, and 100% effective. Starting at $49.99 with free shipping.',
  keywords: [
    'deer repellent',
    'ultrasonic animal deterrent', 
    'solar powered deer repellent',
    'motion activated deer deterrent',
    'garden protection',
    'deer control',
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
    title: 'Solar Deer Repellent - Protect Your Garden 24/7',
    description: 'Effective, humane deer control with solar power. Motion-activated ultrasonic technology that works day and night.',
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
    title: 'Solar Deer Repellent - Protect Your Garden 24/7',
    description: 'Effective, humane deer control with solar power',
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
}

// 客户端组件用于Google Analytics
function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  if (!gaId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DeerRepellent.store" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DeerRepellent.store",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
              "description": "Professional deer repellent solutions for garden and property protection"
            })
          }}
        />
        
        {/* Product structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Solar Powered Ultrasonic Deer Repellent",
              "description": "Motion-activated ultrasonic deer deterrent with solar power and weatherproof design",
              "brand": {
                "@type": "Brand",
                "name": "DeerRepellent.store"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "price": "49.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer", 
                  "price": "79.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`} style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        lineHeight: '1.6',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
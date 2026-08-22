import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import { PageMotion } from '@/components/page-motion'
import { StudentChatWidget } from '@/components/student-chat-widget'
import { SiteJsonLd } from '@/components/site-json-ld'
import { DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME, SITE_URL } from '@/lib/seo'
import './globals.css'

// Runs before the body is parsed so entry animations never flash their final
// state. The timeout is a failsafe: if PageMotion never mounts, the guard drops
// on its own and the page renders normally.
const MOTION_GUARD = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var e=document.documentElement;e.classList.add('motion-armed');setTimeout(function(){e.classList.remove('motion-armed')},2500)}catch(_){}})();`

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  // Lets every page express its canonical and OG urls as plain paths.
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Khanjahan Ali College of Science & Technology (KACST) | Khulna, Bangladesh',
    template: '%s | KACST',
  },
  description:
    'Khanjahan Ali College of Science & Technology (KACST) in Khulna, Bangladesh offers honours and diploma programmes, modern laboratories and a student-focused campus.',
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    url: SITE_URL,
    title:
      'Khanjahan Ali College of Science & Technology (KACST) | Khulna, Bangladesh',
    description:
      'Honours and diploma programmes, research, modern facilities and campus life at KACST, Khulna.',
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} campus` },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khanjahan Ali College of Science & Technology (KACST)',
    description:
      'Honours and diploma programmes, research, modern facilities and campus life at KACST, Khulna.',
    images: [DEFAULT_OG_IMAGE],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp',
      },
    ],
    apple: 'https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#120A80' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0754' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`bg-background ${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased font-sans">
        <Script id="motion-guard" strategy="beforeInteractive">
          {MOTION_GUARD}
        </Script>
        <SiteJsonLd />
        <PageMotion />
        {children}
        <StudentChatWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

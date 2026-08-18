import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import { PageMotion } from '@/components/page-motion'
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
  title: {
    default: 'Khanjahan Ali College of Science & Technology(KACST)',
    template: '%s | KACST',
  },
  description:
    'Khulna Khan Jahan Science and Technology University (KACST) is committed to developing competent professionals and ethical leaders through quality education, research and innovation.',
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
        <PageMotion />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

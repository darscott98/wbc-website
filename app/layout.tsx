import type { Metadata } from 'next'
import { Prata, Red_Hat_Text, Red_Hat_Display } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './globals.scss'

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-prata',
  display: 'swap',
})

const redHatText = Red_Hat_Text({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-red-hat-text',
  display: 'swap',
})

const redHatDisplay = Red_Hat_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Support After Cancer | Women Beyond Cancer',
  description:
    'Supporting women through cancer treatment and recovery with community, wellbeing programmes, and expert-led support.',

  keywords: [
    'cancer support for women',
    'cancer community',
    'life after cancer',
    'cancer wellbeing',
    'support groups for cancer patients',
    'women cancer recovery',
  ],

  metadataBase: new URL('https://womenbeyondcancer.co'),

  authors: [{ name: 'Women Beyond Cancer' }],
  creator: 'Women Beyond Cancer',
  publisher: 'Women Beyond Cancer',

  openGraph: {
    title: 'Support After Cancer | Women Beyond Cancer',
    description:
      'A supportive space for women navigating and moving beyond cancer.',
    url: 'https://womenbeyondcancer.co',
    siteName: 'Women Beyond Cancer',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Women Beyond Cancer community',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  icons: {
    icon: '/logos/favicon.png',
  },

  robots: {
    index: true,
    follow: true,
  },

  category: 'health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${redHatText.variable} ${redHatDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Support After Cancer | Women Beyond Cancer',
              url: 'https://womenbeyondcancer.co',
              description:
                'Supporting women through cancer treatment and recovery with community, wellbeing programmes, and expert-led support.',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

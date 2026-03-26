import type { Metadata } from 'next'
import { Prata, Red_Hat_Text, Red_Hat_Display } from 'next/font/google'
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
  title: 'Women Beyond Cancer',
  description:
    'Supporting women through and beyond cancer with community, wellbeing programmes, and hope. No woman should face this journey alone.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${redHatText.variable} ${redHatDisplay.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

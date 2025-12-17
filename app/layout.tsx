import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bayside Green Solutions - Professional Landscaping Services in Bayside, Melbourne',
  description: 'Expert landscaping services across Bayside, Melbourne. Garden design, lawn care, maintenance, and more. Call for a free quote today!',
  keywords: 'landscaping Bayside, garden design Melbourne, lawn care Bayside, landscaper Melbourne VIC',
  openGraph: {
    title: 'Bayside Green Solutions - Professional Landscaping Services',
    description: 'Expert landscaping services across Bayside, Melbourne',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

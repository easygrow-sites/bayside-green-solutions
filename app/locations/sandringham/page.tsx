import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Sandringham VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Sandringham, Melbourne. Local Sandringham landscaper. Call for a free quote!',
  keywords: 'landscaping Sandringham, Sandringham landscaper, garden design Sandringham, lawn care Sandringham VIC',
}

export default function SandringhamPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Sandringham</h1>
          <p className="text-xl text-primary-50">
            Quality landscaping and garden maintenance for Sandringham properties
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sandringham's Trusted Landscaper</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bayside Green Solutions brings professional landscaping expertise to Sandringham. From beachside properties to suburban gardens, we create and maintain beautiful outdoor spaces that suit your lifestyle and enhance your property value.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Landscaping Services for Sandringham:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Landscape Design & Installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Mowing & Fertilizing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Tree & Hedge Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Sprinkler Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Outdoor Paving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
              <p className="mb-6">Call now for expert landscaping in Sandringham</p>
              <a href="tel:0400000000" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block">
                Call 0400 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

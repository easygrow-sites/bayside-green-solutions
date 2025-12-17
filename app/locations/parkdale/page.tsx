import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Parkdale VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Parkdale, Melbourne. Local Parkdale landscaper. Call for a free quote!',
  keywords: 'landscaping Parkdale, Parkdale landscaper, garden design Parkdale, lawn care Parkdale VIC',
}

export default function ParkdalePage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Parkdale</h1>
          <p className="text-xl text-primary-50">
            Expert landscaping and garden maintenance in Parkdale
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Parkdale's Local Landscaper</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bayside Green Solutions offers comprehensive landscaping services to Parkdale residents. From complete garden transformations to weekly maintenance, we're committed to creating outdoor spaces that enhance your lifestyle and property value.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Parkdale Landscaping Services:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Mowing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Hedge Trimming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Irrigation Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Hardscaping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Seasonal Care</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Transform Your Parkdale Garden</h3>
              <p className="mb-6">Contact us for a free consultation</p>
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

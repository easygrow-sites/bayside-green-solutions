import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Bentleigh VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Bentleigh, Melbourne. Local Bentleigh landscaper. Call for a free quote!',
  keywords: 'landscaping Bentleigh, Bentleigh landscaper, garden design Bentleigh, lawn care Bentleigh VIC',
}

export default function BentleighPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Bentleigh</h1>
          <p className="text-xl text-primary-50">
            Quality landscaping solutions for Bentleigh properties
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Bentleigh's Expert Landscaper</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bayside Green Solutions provides professional landscaping services throughout Bentleigh. Whether you're looking for a complete garden makeover or regular maintenance, our experienced team delivers outstanding results.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Bentleigh Landscaping Services:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Transformations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Pruning & Shaping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Irrigation Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Outdoor Paving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Complete Garden Care</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Contact Your Bentleigh Landscaper</h3>
              <p className="mb-6">Free quotes available now</p>
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

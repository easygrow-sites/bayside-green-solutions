import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Hampton East VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Hampton East, Melbourne. Local Hampton East landscaper. Call for a free quote!',
  keywords: 'landscaping Hampton East, Hampton East landscaper, garden design Hampton East, lawn care Hampton East VIC',
}

export default function HamptonEastPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Hampton East</h1>
          <p className="text-xl text-primary-50">
            Quality landscaping solutions for Hampton East homes
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hampton East's Trusted Landscaper</h2>
            <p className="text-lg text-gray-700 mb-6">
              Enhance your Hampton East property with professional landscaping from Bayside Green Solutions. Our local team provides comprehensive services from design to maintenance, creating outdoor spaces that you'll love for years to come.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Hampton East Landscaping:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Custom Garden Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Pruning Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Sprinkler Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Paving & Retaining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Seasonal Care</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Start Your Hampton East Project</h3>
              <p className="mb-6">Free quotes for all services</p>
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

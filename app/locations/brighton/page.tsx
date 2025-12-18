import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Brighton VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Brighton, Melbourne. Local Brighton landscaper. Call for a free quote!',
  keywords: 'landscaping Brighton, Brighton landscaper, garden design Brighton, lawn care Brighton VIC',
}

export default function BrightonPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&h=800&fit=crop"
            alt="Landscaping Services in Brighton"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Brighton</h1>
          <p className="text-xl text-primary-50">
            Professional landscaping and garden care for Brighton residents
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Your Local Brighton Landscaper</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bayside Green Solutions is proud to serve the Brighton community with comprehensive landscaping services. Whether you need regular lawn maintenance, a complete garden transformation, or seasonal cleanup, our experienced team delivers exceptional results that enhance your property's beauty and value.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Services We Provide in Brighton:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Design & Landscaping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Care & Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Tree & Hedge Trimming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Irrigation Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Paving & Retaining Walls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Cleanup & Mulching</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Why Brighton Residents Choose Us</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg">Local Expertise</h4>
                <p className="text-gray-600">
                  We understand Brighton's unique characteristics and design gardens that thrive in the local climate.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg">Fast Response</h4>
                <p className="text-gray-600">
                  As a local Brighton landscaper, we provide quick response times and flexible scheduling.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg">Quality Workmanship</h4>
                <p className="text-gray-600">
                  Our experienced team delivers high-quality results that exceed expectations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg">Competitive Pricing</h4>
                <p className="text-gray-600">
                  Fair, transparent pricing with free quotes and no hidden fees.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
              <p className="mb-6">Call us now to discuss your Brighton landscaping project</p>
              <a href="tel:0456994959" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block">
                Call 0456 994 959
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

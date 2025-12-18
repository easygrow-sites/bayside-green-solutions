import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Carnegie VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Carnegie, Melbourne. Local Carnegie landscaper. Call for a free quote!',
  keywords: 'landscaping Carnegie, Carnegie landscaper, garden design Carnegie, lawn care Carnegie VIC',
}

export default function CarnegiePage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&h=800&fit=crop"
            alt="Landscaping Services in Carnegie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Carnegie</h1>
          <p className="text-xl text-primary-50">
            Professional landscaping and garden maintenance in Carnegie
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Carnegie Landscaping Experts</h2>
            <p className="text-lg text-gray-700 mb-6">
              Transform your Carnegie garden with Bayside Green Solutions. Our comprehensive landscaping services cover everything from initial design and installation to regular maintenance, ensuring your outdoor space looks beautiful all year.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Our Carnegie Services:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Landscape Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Tree Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Watering Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Paving & Walls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Cleanup</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Get Your Carnegie Quote</h3>
              <p className="mb-6">Professional landscaping services</p>
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

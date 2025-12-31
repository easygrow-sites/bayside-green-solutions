import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Lawn Care & Maintenance Services Bayside | Bayside Green Solutions',
  description: 'Professional lawn mowing, fertilizing, and maintenance services in Bayside, Melbourne. Keep your lawn healthy and green year-round.',
  keywords: 'lawn care Bayside, lawn mowing Melbourne, lawn maintenance, fertilizing services',
}

export default function LawnCarePage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1920&h=800&fit=crop"
            alt="Professional lawn care and maintenance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lawn Care & Maintenance</h1>
          <p className="text-xl text-primary-50">
            Professional lawn care services to keep your grass healthy, lush, and beautiful
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive Lawn Care in Bayside</h2>
                <p className="text-lg text-gray-700 mb-4">
                  A healthy, well-maintained lawn enhances your property's appearance and provides a perfect space for outdoor activities. Our professional lawn care services ensure your grass stays green and healthy throughout the year.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop"
                  alt="Lush green lawn"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Our Lawn Care Services Include:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Regular lawn mowing and edging</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Fertilization programs tailored to your lawn type</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Weed control and treatment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Aeration and dethatching</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Seasonal lawn treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Lawn repair and renovation</span>
              </li>
            </ul>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Regular Maintenance Plans</h3>
              <p className="text-gray-700 mb-4">
                We offer flexible maintenance plans to suit your needs and budget. From weekly mowing to comprehensive year-round care, we'll keep your lawn looking its best in every season.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Get a Free Lawn Care Quote</h3>
              <p className="mb-6">Contact us today to discuss your lawn care needs</p>
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

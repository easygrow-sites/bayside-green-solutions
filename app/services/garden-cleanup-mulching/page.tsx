import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Garden Cleanup & Mulching Services Bayside | Bayside Green Solutions',
  description: 'Professional garden cleanup, waste removal, and mulching services in Bayside, Melbourne. Keep your garden pristine year-round.',
  keywords: 'garden cleanup Bayside, mulching services Melbourne, garden waste removal, seasonal cleanup',
}

export default function GardenCleanupPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=1920&h=800&fit=crop"
            alt="Garden Cleanup & Mulching"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garden Cleanup & Mulching</h1>
          <p className="text-xl text-primary-50">
            Comprehensive cleanup and mulching services to keep your garden healthy and beautiful
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Garden Cleanup Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              Keep your garden looking its best with our comprehensive cleanup and mulching services. From seasonal cleanups to regular maintenance, we'll ensure your outdoor space stays healthy, tidy, and beautiful throughout the year.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Seasonal garden cleanup and preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Leaf and debris removal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Garden bed weeding and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Premium mulch application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Green waste removal and disposal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Garden bed edging and definition</span>
              </li>
            </ul>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Benefits of Regular Garden Cleanup</h3>
              <p className="text-gray-700 mb-4">
                Regular garden maintenance prevents problems before they start. Removing debris and weeds reduces pest habitats, while fresh mulch suppresses weeds, retains moisture, and improves soil health. Our cleanup services keep your garden looking pristine while promoting healthy plant growth.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Mulching Services</h3>
              <p className="text-gray-700 mb-4">
                Quality mulch is essential for garden health. We offer a range of mulch options including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium hardwood mulch</li>
                <li>• Pine bark mulch</li>
                <li>• Sugar cane mulch</li>
                <li>• Decorative pebbles and stones</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Need Garden Cleanup Services?</h3>
              <p className="mb-6">Call us today for a free quote</p>
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

import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Mordialloc VIC | Bayside Green Solutions',
  description: 'Professional landscaping, garden design, and lawn care services in Mordialloc, Melbourne. Local Mordialloc landscaper. Call for a free quote!',
  keywords: 'landscaping Mordialloc, Mordialloc landscaper, garden design Mordialloc, lawn care Mordialloc VIC',
}

export default function MordiallocPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&h=800&fit=crop"
            alt="Landscaping Services in Mordialloc"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/locations" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Locations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services in Mordialloc</h1>
          <p className="text-xl text-primary-50">
            Professional garden care and landscaping in Mordialloc
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mordialloc Landscaping Specialists</h2>
            <p className="text-lg text-gray-700 mb-6">
              Enhance your Mordialloc property with expert landscaping from Bayside Green Solutions. Our local team provides reliable, professional service for all your garden and outdoor needs, from design to maintenance.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mordialloc Services:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Complete Landscaping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Lawn Care Programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Tree & Shrub Care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Water Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Paving Projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden Upkeep</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Call Mordialloc's trusted landscaper today</p>
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

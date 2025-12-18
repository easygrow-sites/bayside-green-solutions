import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Tree & Hedge Trimming Services Bayside | Bayside Green Solutions',
  description: 'Professional tree pruning and hedge trimming services in Bayside, Melbourne. Expert care for healthy trees and manicured hedges.',
  keywords: 'tree trimming Bayside, hedge pruning Melbourne, tree services, hedge maintenance',
}

export default function TreeHedgeTrimmingPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=800&fit=crop"
            alt="Tree & Hedge Trimming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tree & Hedge Trimming</h1>
          <p className="text-xl text-primary-50">
            Expert pruning and trimming services for healthy, beautiful trees and hedges
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Tree & Hedge Care</h2>
            <p className="text-lg text-gray-700 mb-8">
              Proper pruning and trimming is essential for the health and appearance of your trees and hedges. Our qualified arborists provide expert care that promotes healthy growth while maintaining the aesthetic appeal of your landscape.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Professional tree pruning and trimming</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Hedge shaping and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Dead wood removal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Crown thinning and reduction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Formative pruning for young trees</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Seasonal hedge trimming programs</span>
              </li>
            </ul>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Safety & Expertise</h3>
              <p className="text-gray-700">
                Tree and hedge work requires specialized knowledge and equipment. Our experienced team follows industry best practices to ensure safe, effective results that enhance the health and appearance of your plants.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Need Tree or Hedge Services?</h3>
              <p className="mb-6">Call us for a free assessment and quote</p>
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

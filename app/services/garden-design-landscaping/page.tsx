import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Garden Design & Landscaping Services Bayside | Bayside Green Solutions',
  description: 'Professional garden design and landscaping services in Bayside, Melbourne. Custom designs, plant selection, and complete garden transformations.',
  keywords: 'garden design Bayside, landscaping Melbourne, garden makeover, landscape design',
}

export default function GardenDesignPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garden Design & Landscaping</h1>
          <p className="text-xl text-primary-50">
            Transform your outdoor space with professional garden design and landscaping services
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6">Expert Garden Design Services in Bayside</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Bayside Green Solutions, we specialize in creating stunning outdoor spaces that reflect your personal style and enhance your property's value. Our experienced landscape designers work closely with you to bring your vision to life.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Garden Design Services Include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Custom garden design and planning tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Professional plant selection suitable for Bayside's climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Complete landscape installation and garden construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Water feature design and installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Outdoor lighting design for ambiance and security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Garden bed preparation and soil improvement</span>
                </li>
              </ul>

              <div className="bg-primary-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4">Why Choose Our Garden Design Services?</h3>
                <p className="text-gray-700 mb-4">
                  Our team brings years of experience in landscape design and horticulture. We understand the unique characteristics of Bayside's environment and select plants that thrive in local conditions. From contemporary minimalist designs to lush cottage gardens, we create outdoor spaces that are both beautiful and sustainable.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Design Process</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
                  <h4 className="font-semibold mb-2">Consultation</h4>
                  <p className="text-gray-600">We visit your property to understand your vision and assess the space</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                  <h4 className="font-semibold mb-2">Design</h4>
                  <p className="text-gray-600">Our designers create detailed plans with plant selection and materials</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                  <h4 className="font-semibold mb-2">Installation</h4>
                  <p className="text-gray-600">Our skilled team brings the design to life with precision and care</p>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Garden?</h3>
                <p className="mb-6">Call us today for a free consultation and quote</p>
                <a href="tel:0400000000" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block">
                  Call 0400 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

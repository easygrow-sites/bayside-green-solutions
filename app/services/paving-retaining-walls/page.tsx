import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Paving & Retaining Walls Bayside | Bayside Green Solutions',
  description: 'Professional paving and retaining wall construction in Bayside, Melbourne. Create stunning outdoor living areas with quality hardscaping.',
  keywords: 'paving Bayside, retaining walls Melbourne, outdoor paving, garden walls, pathways',
}

export default function PavingRetainingWallsPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paving & Retaining Walls</h1>
          <p className="text-xl text-primary-50">
            Quality hardscaping solutions for functional and beautiful outdoor spaces
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Paving & Retaining Wall Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              Transform your outdoor space with professionally installed paving and retaining walls. Our hardscaping services combine functionality with aesthetic appeal, creating durable outdoor areas perfect for entertaining and relaxation.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Outdoor patio and entertainment area paving</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Garden pathways and stepping stones</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Driveway paving and resurfacing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Retaining wall construction and repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Garden edging and borders</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Natural stone and paver installation</span>
              </li>
            </ul>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Quality Materials & Workmanship</h3>
              <p className="text-gray-700 mb-4">
                We use premium materials and proven construction techniques to ensure your paving and retaining walls stand the test of time. From natural stone to modern pavers, we'll help you select the perfect materials to complement your property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg">Paving Options</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Natural stone pavers</li>
                  <li>• Concrete pavers</li>
                  <li>• Bluestone</li>
                  <li>• Travertine</li>
                  <li>• Exposed aggregate</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg">Retaining Wall Types</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Timber sleeper walls</li>
                  <li>• Concrete block walls</li>
                  <li>• Natural stone walls</li>
                  <li>• Rendered walls</li>
                  <li>• Gabion walls</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Start Your Hardscaping Project</h3>
              <p className="mb-6">Contact us for a free consultation and detailed quote</p>
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

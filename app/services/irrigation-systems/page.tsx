import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Irrigation Systems & Installation Bayside | Bayside Green Solutions',
  description: 'Professional irrigation system design and installation in Bayside, Melbourne. Automated watering solutions for efficient garden care.',
  keywords: 'irrigation systems Bayside, sprinkler installation Melbourne, automated watering, drip irrigation',
}

export default function IrrigationSystemsPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=800&fit=crop"
            alt="Irrigation Systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Irrigation Systems</h1>
          <p className="text-xl text-primary-50">
            Efficient automated watering solutions for your garden and lawn
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Irrigation Solutions</h2>
            <p className="text-lg text-gray-700 mb-8">
              Save time, water, and money with a professionally designed irrigation system. Our automated watering solutions ensure your garden receives the right amount of water at the right time, promoting healthy plant growth while conserving water.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Irrigation Services:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Custom irrigation system design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Sprinkler system installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Drip irrigation for garden beds</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Smart controller installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>System maintenance and repairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Water efficiency audits</span>
              </li>
            </ul>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Benefits of Automated Irrigation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Save up to 50% on water usage with efficient systems</li>
                <li>• Consistent watering schedule for healthier plants</li>
                <li>• Reduce time spent on manual watering</li>
                <li>• Smart controllers adjust for weather conditions</li>
                <li>• Increase property value with professional systems</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for an Irrigation System?</h3>
              <p className="mb-6">Contact us for a free consultation and quote</p>
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

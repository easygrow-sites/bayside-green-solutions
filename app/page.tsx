import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'

const services = [
  {
    title: 'Garden Design & Landscaping',
    description: 'Transform your outdoor space with custom garden designs that reflect your style and enhance your property value.',
    slug: 'garden-design-landscaping',
    icon: '🌳'
  },
  {
    title: 'Lawn Care & Maintenance',
    description: 'Keep your lawn lush and healthy with our regular mowing, fertilizing, and maintenance services.',
    slug: 'lawn-care-maintenance',
    icon: '🌱'
  },
  {
    title: 'Tree & Hedge Trimming',
    description: 'Professional pruning and trimming services to keep your trees and hedges healthy and looking their best.',
    slug: 'tree-hedge-trimming',
    icon: '✂️'
  },
  {
    title: 'Irrigation Systems',
    description: 'Efficient watering solutions with automated irrigation systems designed to save water and time.',
    slug: 'irrigation-systems',
    icon: '💧'
  },
  {
    title: 'Paving & Retaining Walls',
    description: 'Create stunning outdoor living areas with quality paving, pathways, and structural retaining walls.',
    slug: 'paving-retaining-walls',
    icon: '🧱'
  },
  {
    title: 'Garden Cleanup & Mulching',
    description: 'Seasonal garden cleanup, waste removal, and mulching services to keep your garden pristine.',
    slug: 'garden-cleanup-mulching',
    icon: '🍂'
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Landscaping Services in Bayside, Melbourne
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Transform your outdoor space with Bayside Green Solutions. Expert garden design, maintenance, and landscaping services across Melbourne's Bayside suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0400000000" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center text-lg">
                Call 0400 000 000
              </a>
              <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 transition-colors duration-200 text-center text-lg border-2 border-white">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Landscaping Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored to your needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bayside Green Solutions?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Qualified and experienced landscapers committed to delivering exceptional results
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Fair, transparent pricing with free quotes and no hidden fees
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee on all our landscaping services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicing Bayside Suburbs</h2>
            <p className="text-xl text-gray-600">
              Professional landscaping across Melbourne's Bayside area
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['Brighton', 'Hampton', 'Sandringham', 'Black Rock', 'Beaumaris', 'Cheltenham', 'Mentone', 'Moorabbin', 'Highett', 'Parkdale', 'Mordialloc', 'Bentleigh', 'Carnegie', 'Elsternwick', 'Hampton East'].map((suburb) => (
              <Link
                key={suburb}
                href={`/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium"
              >
                {suburb}
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/locations" className="btn-secondary text-lg px-8 py-4">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

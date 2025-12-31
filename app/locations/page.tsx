import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Service Locations in Bayside Melbourne | Bayside Green Solutions',
  description: 'Professional landscaping services across Bayside suburbs including Brighton, Hampton, Sandringham, Beaumaris, and more.',
  keywords: 'landscaping Bayside suburbs, Brighton landscaper, Hampton garden services, Sandringham lawn care',
}

const locations = [
  { name: 'Brighton', slug: 'brighton' },
  { name: 'Hampton', slug: 'hampton' },
  { name: 'Sandringham', slug: 'sandringham' },
  { name: 'Black Rock', slug: 'black-rock' },
  { name: 'Beaumaris', slug: 'beaumaris' },
  { name: 'Cheltenham', slug: 'cheltenham' },
  { name: 'Mentone', slug: 'mentone' },
  { name: 'Moorabbin', slug: 'moorabbin' },
  { name: 'Highett', slug: 'highett' },
  { name: 'Parkdale', slug: 'parkdale' },
  { name: 'Mordialloc', slug: 'mordialloc' },
  { name: 'Bentleigh', slug: 'bentleigh' },
  { name: 'Carnegie', slug: 'carnegie' },
  { name: 'Elsternwick', slug: 'elsternwick' },
  { name: 'Hampton East', slug: 'hampton-east' }
]

export default function LocationsPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&h=800&fit=crop"
            alt="Our Service Locations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Locations</h1>
          <p className="text-xl text-primary-50">
            Professional landscaping services across Bayside, Melbourne
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Servicing Bayside Suburbs</h2>
            <p className="text-lg text-gray-700">
              Bayside Green Solutions proudly serves residential and commercial properties across Melbourne's Bayside area. Our local team provides fast, reliable service to all surrounding suburbs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
                <p className="text-gray-600 mb-3">
                  Professional landscaping services in {location.name}
                </p>
                <span className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Local?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Local team means quick response times for all service calls
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                We understand Bayside's climate and soil conditions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
              <p className="text-gray-600">
                Supporting local businesses and building lasting relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

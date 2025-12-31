import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'

const services = [
  {
    title: 'Garden Design & Landscaping',
    description: 'Transform your outdoor space with custom garden designs that reflect your style and enhance your property value.',
    slug: 'garden-design-landscaping',
    icon: '🌳',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&h=600&fit=crop'
  },
  {
    title: 'Lawn Care & Maintenance',
    description: 'Keep your lawn lush and healthy with our regular mowing, fertilizing, and maintenance services.',
    slug: 'lawn-care-maintenance',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&h=600&fit=crop'
  },
  {
    title: 'Tree & Hedge Trimming',
    description: 'Professional pruning and trimming services to keep your trees and hedges healthy and looking their best.',
    slug: 'tree-hedge-trimming',
    icon: '✂️',
    image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=800&h=600&fit=crop'
  },
  {
    title: 'Irrigation Systems',
    description: 'Efficient watering solutions with automated irrigation systems designed to save water and time.',
    slug: 'irrigation-systems',
    icon: '💧',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop'
  },
  {
    title: 'Paving & Retaining Walls',
    description: 'Create stunning outdoor living areas with quality paving, pathways, and structural retaining walls.',
    slug: 'paving-retaining-walls',
    icon: '🧱',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop'
  },
  {
    title: 'Garden Cleanup & Mulching',
    description: 'Seasonal garden cleanup, waste removal, and mulching services to keep your garden pristine.',
    slug: 'garden-cleanup-mulching',
    icon: '🍂',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&h=600&fit=crop'
  }
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop', alt: 'Beautiful landscaped garden in Bayside Melbourne' },
  { src: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&h=400&fit=crop', alt: 'Professional backyard landscaping' },
  { src: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=600&h=400&fit=crop', alt: 'Stunning garden patio design' },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop', alt: 'Lush green lawn maintenance' },
  { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop', alt: 'Outdoor living space design' },
  { src: 'https://images.unsplash.com/photo-1599619351208-3e6906b69161?w=600&h=400&fit=crop', alt: 'Colorful garden flower beds' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1920&h=1080&fit=crop"
            alt="Professional landscaping in Bayside Melbourne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Landscaping Services in Bayside, Melbourne
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Transform your outdoor space with Bayside Green Solutions. Expert garden design, maintenance, and landscaping services across Melbourne's Bayside suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0456994959" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center text-lg">
                Call 0456 994 959
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

      {/* Services Overview with Images */}
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
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1592650996789-7ee59a23a331?w=800&h=600&fit=crop"
                alt="Bayside Green Solutions landscaping team"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Bayside Green Solutions?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-600">
                      Qualified and experienced landscapers committed to delivering exceptional results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">
                      Fair, transparent pricing with free quotes and no hidden fees
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Quality Guarantee</h3>
                    <p className="text-gray-600">
                      100% satisfaction guarantee on all our landscaping services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-xl text-gray-600">
              See examples of our landscaping projects across Bayside Melbourne
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group aspect-[3/2]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-4 text-center">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicing Bayside Suburbs</h2>
              <p className="text-xl text-gray-600 mb-8">
                Professional landscaping across Melbourne's Bayside area
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Brighton', 'Hampton', 'Sandringham', 'Black Rock', 'Beaumaris', 'Cheltenham', 'Mentone', 'Moorabbin', 'Highett', 'Parkdale', 'Mordialloc', 'Bentleigh', 'Carnegie', 'Elsternwick', 'Hampton East'].map((suburb) => (
                  <Link
                    key={suburb}
                    href={`/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-center py-3 px-4 bg-white rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium shadow-sm"
                  >
                    {suburb}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/locations" className="btn-secondary text-lg px-8 py-4">
                  View All Locations
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&h=600&fit=crop"
                alt="Bayside Melbourne suburbs we service"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
              Bayside Green Solutions transformed our tired backyard into a beautiful oasis. Professional service from start to finish!
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                alt="Happy customer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">Sarah Mitchell</p>
                <p className="text-primary-200">Brighton, VIC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

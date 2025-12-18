import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Garden Design & Landscaping Services Bayside | Bayside Green Solutions',
  description: 'Professional garden design and landscaping services in Bayside, Melbourne. Custom designs, plant selection, and complete garden transformations.',
  keywords: 'garden design Bayside, landscaping Melbourne, garden makeover, landscape design',
}

const galleryImages = [
  { src: 'https://source.unsplash.com/600x400/?garden,design&sig=gd1', alt: 'Modern garden design' },
  { src: 'https://source.unsplash.com/600x400/?landscaping,backyard&sig=gd2', alt: 'Backyard landscaping' },
  { src: 'https://source.unsplash.com/600x400/?garden,plants&sig=gd3', alt: 'Garden plant arrangement' },
  { src: 'https://source.unsplash.com/600x400/?outdoor,garden&sig=gd4', alt: 'Outdoor living space' },
]

export default function GardenDesignPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x800/?garden,design,landscaping&sig=gdhero"
            alt="Professional garden design and landscaping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-white">
          <Link href="/services" className="text-primary-200 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garden Design & Landscaping</h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            Transform your outdoor space with professional garden design and landscaping services
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Intro with Side Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Garden Design Services in Bayside</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Bayside Green Solutions, we specialize in creating stunning outdoor spaces that reflect your personal style and enhance your property's value. Our experienced landscape designers work closely with you to bring your vision to life.
                </p>
                <p className="text-gray-700">
                  Whether you're looking for a complete garden makeover or subtle enhancements, our team has the expertise to deliver exceptional results that will transform your outdoor living experience.
                </p>
              </div>
              <div>
                <img
                  src="https://source.unsplash.com/600x400/?beautiful,garden,landscape&sig=gdintro"
                  alt="Beautiful landscape garden design"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Our Garden Design Services Include:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-primary-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Custom Garden Design</h4>
                  <p className="text-gray-600">Tailored designs that match your style and budget</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-primary-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Professional Plant Selection</h4>
                  <p className="text-gray-600">Plants suited to Bayside's unique climate</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-primary-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Complete Installation</h4>
                  <p className="text-gray-600">Full landscape construction and planting</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-primary-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Water Features</h4>
                  <p className="text-gray-600">Beautiful ponds, fountains, and water elements</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-primary-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Garden Lighting</h4>
                  <p className="text-gray-600">Ambient and security lighting design</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-primary-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Soil Preparation</h4>
                  <p className="text-gray-600">Garden bed prep and soil improvement</p>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Our Garden Design Work</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Why Choose Our Garden Design Services?</h3>
                  <p className="text-gray-700 mb-4">
                    Our team brings years of experience in landscape design and horticulture. We understand the unique characteristics of Bayside's environment and select plants that thrive in local conditions.
                  </p>
                  <p className="text-gray-700">
                    From contemporary minimalist designs to lush cottage gardens, we create outdoor spaces that are both beautiful and sustainable.
                  </p>
                </div>
                <img
                  src="https://source.unsplash.com/500x400/?landscaper,gardening&sig=gdwhy"
                  alt="Professional landscaper at work"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Our Design Process</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-3">1</div>
                <h4 className="font-semibold mb-2 text-lg">Consultation</h4>
                <p className="text-gray-600">We visit your property to understand your vision and assess the space</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-3">2</div>
                <h4 className="font-semibold mb-2 text-lg">Design</h4>
                <p className="text-gray-600">Our designers create detailed plans with plant selection and materials</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-3">3</div>
                <h4 className="font-semibold mb-2 text-lg">Installation</h4>
                <p className="text-gray-600">Our skilled team brings the design to life with precision and care</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Garden?</h3>
              <p className="mb-6 text-gray-300">Call us today for a free consultation and quote</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0400000000" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block">
                  Call 0400 000 000
                </a>
                <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

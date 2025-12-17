import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Bayside Green Solutions - Get Your Free Quote',
  description: 'Contact Bayside Green Solutions for professional landscaping services in Bayside, Melbourne. Call 0400 000 000 or request a free quote online.',
  keywords: 'contact landscaper Bayside, free landscaping quote, Bayside Green Solutions contact',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-50">
            Get in touch for a free, no-obligation quote
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to transform your outdoor space? Contact Bayside Green Solutions today for a free consultation and quote. We're here to answer your questions and discuss your landscaping needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:0400000000" className="text-primary-600 hover:text-primary-700 text-lg font-semibold">
                      0400 000 000
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Mon - Sat: 7am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@baysidegreensolutions.com.au" className="text-primary-600 hover:text-primary-700">
                      info@baysidegreensolutions.com.au
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-700">
                      Bayside, Melbourne VIC
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Serving all Bayside suburbs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Free quotes & consultations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Licensed & insured</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>15+ years experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We Service All Bayside Suburbs</h2>
            <p className="text-lg text-gray-600">
              Professional landscaping across Melbourne's Bayside area
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto text-center">
            {['Brighton', 'Hampton', 'Sandringham', 'Black Rock', 'Beaumaris', 'Cheltenham', 'Mentone', 'Moorabbin', 'Highett', 'Parkdale', 'Mordialloc', 'Bentleigh', 'Carnegie', 'Elsternwick', 'Hampton East'].map((suburb) => (
              <div key={suburb} className="text-gray-700 font-medium">
                {suburb}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

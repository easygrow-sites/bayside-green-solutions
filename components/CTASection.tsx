import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-primary-600 text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Garden?
        </h2>
        <p className="text-xl mb-8 text-primary-50">
          Get a free, no-obligation quote today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:0400000000" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg">
            Call 0400 000 000
          </a>
          <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200 text-lg">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

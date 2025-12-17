import Link from 'next/link'

const services = [
  'Garden Design & Landscaping',
  'Lawn Care & Maintenance',
  'Tree & Hedge Trimming',
  'Irrigation Systems',
  'Paving & Retaining Walls',
  'Garden Cleanup'
]

const locations = [
  'Brighton', 'Hampton', 'Sandringham', 'Black Rock', 'Beaumaris',
  'Cheltenham', 'Mentone', 'Moorabbin', 'Highett', 'Parkdale'
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">
              Bayside Green Solutions
            </h3>
            <p className="text-gray-400 mb-4">
              Professional landscaping services across Bayside, Melbourne. Your garden transformation experts.
            </p>
            <a href="tel:0400000000" className="text-primary-400 hover:text-primary-300 font-semibold">
              Call: 0400 000 000
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {locations.slice(0, 6).map((location) => (
                <li key={location}>
                  <Link
                    href={`/locations/${location.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  All Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bayside Green Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

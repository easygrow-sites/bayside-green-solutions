import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            Bayside Green Solutions
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary-600 transition-colors">
              Locations
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <a href="tel:0400000000" className="btn-primary">
              Call Now
            </a>
          </div>

          <div className="md:hidden">
            <a href="tel:0400000000" className="btn-primary text-sm px-4 py-2">
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

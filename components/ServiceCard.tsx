import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  slug: string
  icon: string
}

export default function ServiceCard({ title, description, slug, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={`/services/${slug}`}
        className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
      >
        Learn More →
      </Link>
    </div>
  )
}

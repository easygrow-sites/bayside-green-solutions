import type { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Landscaping Services in Bayside | Bayside Green Solutions',
  description: 'Professional landscaping services including garden design, lawn care, tree trimming, irrigation, paving, and more. Servicing Bayside, Melbourne.',
  keywords: 'landscaping services Bayside, garden design, lawn care, tree trimming Melbourne',
}

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

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Landscaping Services</h1>
          <p className="text-xl text-primary-50">
            Comprehensive landscaping solutions for residential and commercial properties in Bayside, Melbourne
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

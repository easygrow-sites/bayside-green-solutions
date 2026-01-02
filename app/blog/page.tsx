import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'

// Enable ISR - revalidate every 60 seconds for new content
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Landscaping Tips & Garden Advice Blog | Bayside Green Solutions',
  description: 'Expert landscaping tips, garden maintenance advice, and outdoor living inspiration from the Bayside Green Solutions team in Melbourne.',
  keywords: 'landscaping blog, garden tips Melbourne, lawn care advice, landscaping ideas Bayside',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Landscaping Tips & Garden Advice
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert insights, seasonal tips, and inspiration for your outdoor spaces from the Bayside Green Solutions team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌱</div>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Coming Soon!
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We're working on some great landscaping tips and garden advice. Check back soon for expert insights from our team.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}

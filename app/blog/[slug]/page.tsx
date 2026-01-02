import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'
import CTASection from '@/components/CTASection'

// Enable ISR - revalidate every 60 seconds for new content
export const revalidate = 60
export const dynamicParams = true

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: `${post.title} | Bayside Green Solutions Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      {/* Hero with Featured Image */}
      <section className="relative">
        {post.featuredImage ? (
          <div className="relative h-[400px] w-full">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container-custom">
                <Link href="/blog" className="text-primary-300 hover:text-white mb-4 inline-block">
                  ← Back to Blog
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <p className="text-primary-200">
                  {formattedDate} • By {post.author || 'Bayside Green Solutions'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
            <div className="container-custom">
              <Link href="/blog" className="text-primary-300 hover:text-white mb-4 inline-block">
                ← Back to Blog
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-primary-200">
                {formattedDate} • By {post.author || 'Bayside Green Solutions'}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <div
            className="prose prose-lg prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          {/* Additional Images Gallery */}
          {post.images && post.images.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${post.title} - Image ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tags/Keywords */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <p className="text-gray-600">
                <span className="font-semibold">Topics: </span>
                {post.keywords.map((keyword, index) => (
                  <span key={keyword}>
                    <span className="text-primary-600">{keyword}</span>
                    {index < post.keywords.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </>
  )
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  if (!markdown) return ''

  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-8 mb-4 text-gray-900">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-12 mb-6 text-gray-900">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc list-inside my-4 space-y-2">$&</ul>')
    // Numbered lists
    .replace(/^\d+\.\s+(.*$)/gim, '<li class="ml-4">$1</li>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:underline">$1</a>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="my-4 text-gray-700 leading-relaxed">')
    // Line breaks
    .replace(/\n/g, '<br />')

  return `<p class="my-4 text-gray-700 leading-relaxed">${html}</p>`
}

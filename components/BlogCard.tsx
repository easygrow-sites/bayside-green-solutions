import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 w-full">
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 text-4xl">🌿</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <p className="text-sm text-primary-600 mb-2">{formattedDate}</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <span className="text-primary-600 font-semibold hover:text-primary-700">
            Read More →
          </span>
        </div>
      </Link>
    </article>
  )
}

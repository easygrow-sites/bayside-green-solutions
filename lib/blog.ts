import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  featuredImage: string
  images: string[]
  keywords: string[]
  metaDescription: string
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(blogDirectory)
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const post = JSON.parse(fileContents) as BlogPost
        return post
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.json`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return JSON.parse(fileContents) as BlogPost
  } catch (error) {
    console.error('Error reading blog post:', error)
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return []
    }
    return fs.readdirSync(blogDirectory)
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => fileName.replace('.json', ''))
  } catch (error) {
    return []
  }
}

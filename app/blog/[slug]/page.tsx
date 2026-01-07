import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { blogPosts } from '@/lib/blogs'
import type { Metadata } from 'next'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sudhanshukrsinha.vercel.app'

  if (!post) {
    return {
      title: 'Post Not Found | Sudhanshu Kumar Sinha',
    }
  }

  return {
    title: `${post.title} | Sudhanshu Kumar Sinha`,
    description: `${post.excerpt} - Blog post by Sudhanshu Kumar Sinha, AI / Full-Stack Developer.`,
    keywords: [
      ...post.tags,
      'Sudhanshu Kumar Sinha',
      'Sudhanshu Sinha',
      'Blog',
      'Tech Blog',
      'Web Development',
      'Full Stack Developer',
    ],
    authors: [{ name: post.author, url: siteUrl }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage ? [{ url: `${siteUrl}${post.coverImage}`, alt: post.title }] : [],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  }
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* <Link
            href="/blog"
            className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors mb-12"
          >
            ← Back to Blog
          </Link> */}

          <article>
            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary dark:text-dark-text mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <time className="text-text-secondary dark:text-dark-text-secondary text-sm">
                  {formatDate(post.date)}
                </time>
                <span className="text-text-secondary dark:text-dark-text-secondary">•</span>
                <span className="text-text-secondary dark:text-dark-text-secondary text-sm">
                  {post.author}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-bg-secondary dark:bg-dark-bg-secondary text-text-secondary dark:text-dark-text-secondary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {post.coverImage && (
              <div className="mb-12">
                <div className="aspect-video bg-bg-secondary dark:bg-dark-bg rounded-lg overflow-hidden flex items-center justify-center">
                  <span className="text-text-secondary dark:text-dark-text-secondary">Cover Image</span>
                </div>
              </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-6">
                <div className="text-lg text-text-primary dark:text-dark-text leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

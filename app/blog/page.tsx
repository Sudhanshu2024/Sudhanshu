'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogGrid from '@/components/BlogGrid'
import { blogPosts } from '@/lib/blogs'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-12 lg:px-[100px] mb-16">
          {/* <Link
            href="/"
            className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors mb-8"
          >
            ← Back to Home
          </Link> */}
        </div>
        <BlogGrid posts={blogPosts} />
      </main>
      <Footer />
    </>
  )
}

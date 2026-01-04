'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blogs'

interface BlogGridProps {
  posts: BlogPost[]
  limit?: number
}

export default function BlogGrid({ posts, limit }: BlogGridProps) {
  const displayPosts = limit ? posts.slice(0, limit) : posts

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section className="bg-bg-primary dark:bg-dark-bg py-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-[100px]">
        <h2 className="text-[32px] font-semibold leading-[42px] text-text-primary dark:text-dark-text text-center mb-8 md:mb-[60px]">
          Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[60px] justify-items-center max-w-[1080px] mx-auto">
          {displayPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group w-full md:w-[315px]"
            >
              <div className="flex flex-col gap-[25px]">
                {/* Thumbnail */}
                {post.coverImage ? (
                  <div className="w-full aspect-square relative overflow-hidden bg-bg-secondary dark:bg-dark-bg-secondary rounded-lg group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src={post.coverImage} 
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 315px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Read More</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-square relative overflow-hidden bg-bg-secondary dark:bg-dark-bg-secondary rounded-lg group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <span className="text-text-secondary dark:text-dark-text-secondary text-sm">Cover Image</span>
                  </div>
                )}
                
                {/* Content */}
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-[20px] font-semibold leading-[30px] text-text-primary dark:text-dark-text group-hover:text-accent dark:group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[17px] font-normal leading-[27px] text-text-secondary dark:text-dark-text-secondary line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary/70 mt-2">
                    {formatDate(post.date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

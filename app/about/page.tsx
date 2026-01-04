'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Framer Motion',
  'Git', 'Docker', 'AWS', 'Vercel'
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* <Link
              href="/"
              className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors mb-8"
            >
              ← Back to Home
            </Link> */}
            <h1 className="text-4xl sm:text-5xl font-black text-text-primary dark:text-dark-text mb-8">
              About Me
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">👤</span>
              </div>
              <div className="flex-1 space-y-6">
                <div className="space-y-4 text-lg text-text-primary dark:text-dark-text leading-relaxed">
                  <p>
                    I&apos;m a full-stack developer passionate about building scalable web applications
                    that solve real-world problems. With expertise in modern JavaScript frameworks and
                    cloud technologies, I create performant and user-friendly digital experiences.
                  </p>
                  <p>
                    My approach focuses on clean code, thoughtful design, and continuous learning.
                    I enjoy working with React, Next.js, and Node.js to build applications that are
                    both fast and maintainable.
                  </p>
                  <p>
                    When I&apos;m not coding, I love contributing to open-source projects, exploring
                    new technologies, and sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="pt-8 border-t border-border-primary dark:border-dark-border">
              <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-bg-secondary dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

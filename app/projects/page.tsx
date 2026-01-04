'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ProjectsGrid from '@/components/ProjectsGrid'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="container px-4 md:px-12 lg:px-[100px] mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors mb-8"
          >
            ← Back to Home
          </Link>
        </div>
        <ProjectsGrid projects={projects} />
      </main>
    </>
  )
}

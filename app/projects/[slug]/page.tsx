import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Your Name`,
    description: project.shortDescription,
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors mb-12"
          >
            ← Back to Projects
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary dark:text-dark-text mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-bg-secondary dark:bg-dark-bg-secondary text-text-secondary dark:text-dark-text-secondary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent dark:bg-accent-blue text-white font-medium rounded-lg hover:bg-accent/90 dark:hover:bg-accent-blue/90 transition-colors"
                >
                  View Live →
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-accent dark:border-accent-blue text-accent dark:text-accent-blue font-medium rounded-lg hover:bg-accent dark:hover:bg-accent-blue hover:text-white transition-colors"
                >
                  View Code →
                </a>
              )}
            </div>
          </div>

          {(project.demoVideoUrl || project.demoVideoFile) && (
            <div className="mb-12">
              <div className="aspect-video bg-bg-secondary dark:bg-dark-bg rounded-lg overflow-hidden">
                {project.demoVideoUrl ? (
                  // YouTube embed
                  <iframe
                    src={project.demoVideoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : project.demoVideoFile ? (
                  // Self-hosted video file
                  <video
                    src={project.demoVideoFile}
                    className="w-full h-full object-contain"
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="aspect-video bg-bg-secondary dark:bg-dark-bg rounded-lg overflow-hidden mb-12 flex items-center justify-center">
              <span className="text-text-secondary dark:text-dark-text-secondary">Project Thumbnail</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text mb-4">About This Project</h2>
              <p className="text-lg text-text-primary dark:text-dark-text leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-border-primary dark:border-dark-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">Year</h3>
                  <p className="text-lg font-medium text-text-primary dark:text-dark-text">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">Tech Stack</h3>
                  <p className="text-lg font-medium text-text-primary dark:text-dark-text">{project.techStack.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="border border-border-primary dark:border-dark-border rounded-lg overflow-hidden bg-bg-primary dark:bg-dark-bg-secondary hover:border-accent dark:hover:border-accent-blue transition-colors">
          <div className="aspect-video bg-bg-secondary dark:bg-dark-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center">
              <span className="text-text-secondary dark:text-dark-text-secondary text-sm">Thumbnail</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text mb-2 group-hover:text-accent dark:group-hover:text-accent-blue transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-bg-secondary dark:bg-dark-bg text-text-secondary dark:text-dark-text-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium text-text-secondary dark:text-dark-text-secondary">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center text-accent dark:text-accent-blue font-medium group-hover:gap-2 transition-all">
              View Project
              <span className="ml-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

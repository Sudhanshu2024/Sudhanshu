'use client'

import { Code, Database, Layout, Brain } from 'lucide-react'
import { skillCategories } from '@/lib/skills'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Code: Code,
  Database: Database,
  Layout: Layout,
  Terminal: Layout, // Fallback
  Brain: Brain,
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-bg-secondary/30 dark:bg-dark-bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header - word-by-word hover glow */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text">
            {['Skills', '&', 'Technologies'].map((word, i) => (
              <span
                key={i}
                className="hover:text-accent dark:hover:text-accent-blue hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block mx-1"
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {['My', 'technical', 'arsenal', 'for', 'building', 'modern', 'applications.'].map((word, i) => (
              <span
                key={i}
                className="hover:text-text-primary dark:hover:text-dark-text hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block mx-[1px]"
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code

            return (
              <div
                key={category.id}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[350px] rounded-lg border border-border-primary dark:border-dark-border bg-bg-primary dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text shadow-sm p-6 hover:shadow-2xl hover:shadow-accent/20 dark:hover:shadow-accent-blue/20 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent dark:text-accent-blue group-hover:scale-110 transition-transform duration-300 p-2 bg-accent/10 dark:bg-accent-blue/10 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-accent dark:text-accent-blue group-hover:text-text-primary dark:group-hover:text-dark-text group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.8)] dark:group-hover:drop-shadow-[0_0_16px_rgba(96,165,250,0.8)] group-hover:scale-110 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-default group-hover:text-text-primary/90 dark:group-hover:text-dark-text/90"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

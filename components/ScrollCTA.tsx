'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition < window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      onClick={scrollToProjects}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 flex flex-col items-center gap-2 text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors group"
      aria-label="Scroll to projects"
    >
      <span className="text-sm font-medium">View My Work</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-3 bg-current rounded-full"
        />
      </motion.div>
    </motion.button>
  )
}

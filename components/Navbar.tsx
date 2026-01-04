'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 dark:bg-dark-bg/95 backdrop-blur-sm border-b border-border-primary dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-text-primary dark:text-dark-text hover:text-accent dark:hover:text-accent-blue transition-colors">
            {"<Dev/>"}
          </Link>
          <div className="flex items-center space-x-4 flex-1 justify-center">
            <div className="hidden md:flex space-x-8">
              <Link href="/#projects" className="text-text-primary dark:text-dark-text hover:text-accent dark:hover:text-accent-blue transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-text-primary dark:text-dark-text hover:text-accent dark:hover:text-accent-blue transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-text-primary dark:text-dark-text hover:text-accent dark:hover:text-accent-blue transition-colors">
                About
              </Link>
              <a
                href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary dark:text-dark-text hover:text-accent dark:hover:text-accent-blue transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

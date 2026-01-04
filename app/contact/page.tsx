'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const socialLinks = [
  { name: 'Email', href: 'mailto:your.email@example.com', icon: '✉️', label: 'your.email@example.com' },
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: '🐙', label: 'github.com/yourusername' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: '💼', label: 'linkedin.com/in/yourusername' },
  { name: 'X', href: 'https://x.com/yourusername', icon: '𝕏', label: 'x.com/yourusername' },
]

export default function ContactPage() {
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
            <Link
              href="/"
              className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-black text-text-primary dark:text-dark-text mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-6 border border-border-primary dark:border-dark-border rounded-lg hover:border-accent dark:hover:border-accent-blue transition-colors group"
              >
                <span className="text-3xl">{link.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary dark:text-dark-text group-hover:text-accent dark:group-hover:text-accent-blue transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary">{link.label}</p>
                </div>
                <span className="text-accent dark:text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  )
}

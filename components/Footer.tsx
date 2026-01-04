'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { name: 'Email', href: 'mailto:your.email@example.com', icon: '✉️' },
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: '🐙' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: '💼' },
    { name: 'X', href: 'https://x.com/yourusername', icon: '𝕏' },
  ]

  return (
    <footer className="border-t border-border-primary dark:border-dark-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
            © {new Date().getFullYear()} Sudhanshu Kumar Sinha. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors text-lg"
                aria-label={link.name}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

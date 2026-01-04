'use client'

import { useTheme } from '@/components/ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme()}
      className="p-2 rounded-full bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-accent/10 dark:hover:bg-accent/20 transition-all"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </button>
  )
}

'use client'

import { useTheme } from '@/components/ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300
        ${isDark ? 'bg-black' : 'bg-[#E5E5E5]'}
      `}
      aria-label="Toggle theme"
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-sm"
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#707070]" // Matching the dark grey moon
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#F2994A]" // Matching the orange sun
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  )
}
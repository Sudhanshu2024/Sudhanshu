'use client'

import { motion } from 'framer-motion'
import CanvasParticles from './CanvasParticles'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section
      className="relative py-20 md:py-32 min-h-screen flex items-center justify-center bg-bg-primary dark:bg-dark-bg overflow-hidden"
      data-hero-section="true"
    >
      <CanvasParticles />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight floating-text glowing-text"
            >
              Hello, I&apos;m Sudhanshu
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-mono text-text-primary dark:text-dark-text floating-text-delayed"
            >
              AI / Full-Stack Developer
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed max-w-3xl mx-auto text-text-secondary dark:text-dark-text-secondary opacity-90"
            >
              Where complexity meets clarity: I ask the right questions and engineer innovative solutions that actually work
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

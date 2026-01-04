'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, Container } from '@tsparticles/engine'
import { motion } from 'framer-motion'
import CustomCursor from './CustomCursor'
import ScrollCTA from './ScrollCTA'
import { useTheme } from './ThemeProvider'





export default function Hero() {
  const { theme } = useTheme()
  //const [particlesInit, setParticlesInit] = useState<((engine: Engine) => Promise<void>) | null>(null)

 

  // const particlesLoaded = useCallback(async (container: any) => {
  //   // Particles loaded callback
  // }, [])

  const isDark = theme === 'dark'

  const particleOptions = {
    preset: 'stars' as const,
    particles: {
      number: {
        value: isDark ? 100 : 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: isDark ? ['#ffffff', '#a5b4fc', '#3b82f6', '#c084fc'] : ['#0f172a', '#3b82f6', '#6366f1'],
      },
      shape: {
        type: 'circle' as const,
      },
      opacity: {
        value: isDark ? { min: 0.3, max: 0.8 } : { min: 0.2, max: 0.6 },
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 0.8 },
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: {
          default: 'out' as const,
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      twinkle: {
        particles: {
          opacity: {
            value: { min: 0.3, max: 0.8 },
          },
        },
      },
    },
    interactivity: {
      detectsOn: 'canvas' as const,
      events: {
        onHover: {
          enable: true,
          mode: 'repulse' as const,
        },
        onClick: {
          enable: true,
          mode: 'push' as const,
        },
        resize: { enable: true },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: {
        value: isDark ? '#0a0a1a' : '#ffffff',
      },
    },
    retina_detect: true,
  }

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

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 dark:from-dark-bg dark:via-purple-900/20 dark:to-dark-bg">
      {/* Particles Background */}
      {/* ✅ v3 Correct Syntax */}
      <Particles
  id="tsparticles"
  options={particleOptions}
  className="absolute inset-0 z-0 w-full h-full"
  style={{ 
    position: 'absolute', 
    width: '100%', 
    height: '100%' 
  }}
/>

      

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-400/90 to-purple-400/90 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
              HELLO I&apos;M
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-400/90 to-purple-400/90 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
              SUDHANSHU
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 dark:text-dark-text mb-6 tracking-wide"
          >
            AI / Full-Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 dark:text-dark-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Where complexity meets clarity: I ask the right questions and engineer innovative solutions that actually work.
          </motion.p>

          <motion.div variants={itemVariants}>
            <ScrollCTA />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Cursor */}
      <CustomCursor />
    </section>
  )
}

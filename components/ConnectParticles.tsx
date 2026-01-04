'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

// Generate 60+ particles with random but distributed rotateZ, rotateY values and staggered delays
const generateParticles = () => {
  const particles = []
  const count = 60
  for (let i = 0; i < count; i++) {
    particles.push({
      rotateZ: Math.random() * 360,
      rotateY: Math.random() * 360,
      delay: (i / count) * 2, // Staggered from 0s to 2s
    })
  }
  return particles
}

const PARTICLES = generateParticles()

export default function ConnectParticles() {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorStarRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      if (cursorStarRef.current) {
        cursorStarRef.current.style.opacity = '1'
        cursorStarRef.current.style.left = `${e.clientX}px`
        cursorStarRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseLeave = () => {
      if (cursorStarRef.current) {
        cursorStarRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Theme-aware colors
  const primaryColor = theme === 'dark' ? '#9fbbd1' : '#6b7280'
  const secondaryColor = theme === 'dark' ? '#c1d3e1' : '#9ca3af'

  return (
    <>
      {/* Cursor Star */}
      <div
        ref={cursorStarRef}
        className="cursor-star fixed w-[3px] h-[3px] rounded-full opacity-0 z-50 pointer-events-none mix-blend-screen transition-opacity duration-200"
        style={{
          background: primaryColor,
          boxShadow: `0 0 6px ${primaryColor}`,
          left: '0px',
          top: '0px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Particle Orb Container */}
      <div
        ref={containerRef}
        className="particle-orb-container absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        <div
          className="particle-orb-wrap absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
        >
          {PARTICLES.map((particle, i) => {
            const isSmallVariant = (i + 1) % 5 === 0
            const size = isSmallVariant ? 2.5 : 3
            const color = isSmallVariant ? secondaryColor : primaryColor

            return (
              <div
                key={i}
                className="particle-3d absolute rounded-[50%] opacity-0"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: color,
                  boxShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
                  '--rotate-z': `${particle.rotateZ}deg`,
                  '--rotate-y': `${particle.rotateY}deg`,
                  '--delay': `${particle.delay}s`,
                  animationDelay: `${particle.delay}s`,
                } as React.CSSProperties}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}


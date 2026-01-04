'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/components/ThemeProvider'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  size: number
  baseOpacity: number
  color: string
}

export default function CanvasParticles({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Theme-aware colors (calculated inside effect)
    const particleColors = theme === 'dark' 
      ? ['#ffffff', '#a5b4fc', '#3b82f6', '#60a5fa'] 
      : ['#0f172a', '#3b82f6', '#64748b', '#1e293b']

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const particles: Particle[] = []
    const particleCount = 120

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.5 + 0.2,
        size: Math.random() * 3 + 1,
        baseOpacity: Math.random() * 0.5 + 0.3,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      })
    }

    particlesRef.current = particles

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Animation loop
    const animate = () => {
      if (!ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Mouse repulsion (particles flee cursor)
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          // Repulsion radius: 120px
          const force = ((120 - distance) / 120) * 3
          p.vx += (dx / distance) * force * 0.1
          p.vy += (dy / distance) * force * 0.1
        }

        // Update position
        p.x += p.vx
        p.y += p.vy
        
        // Friction (smooth return to drift)
        p.vx *= 0.95
        p.vy *= 0.95

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Twinkle effect (random opacity flicker)
        p.opacity = p.baseOpacity + Math.sin(Date.now() * 0.001 + p.x * 0.01) * 0.3

        // Draw particle with glow
        ctx.save()
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity))
        ctx.fillStyle = p.color
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [theme]) // Recreate on theme change

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ zIndex: 1 }}
    />
  )
}

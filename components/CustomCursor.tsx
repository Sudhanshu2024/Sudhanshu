'use client'

import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number; opacity: number }>>([])
  const trailIdRef = useRef(0)

  useEffect(() => {
    const trailLength = 12
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add new point to trail
      setTrail((prev) => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: trailIdRef.current++, opacity: 1 },
          ...prev.slice(0, trailLength - 1),
        ]
        return newTrail
      })
    }

    const animate = () => {
      setTrail((prev) =>
        prev.map((point, index) => ({
          ...point,
          opacity: Math.max(0, 1 - index / trailLength),
        }))
      )
      animationFrameId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-3 h-3 bg-accent dark:bg-accent-blue rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-lg transition-transform duration-150 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Sparkle trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-1.5 h-1.5 bg-white dark:bg-blue-300 rounded-full pointer-events-none z-[9998] blur-sm"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.05})`,
            opacity: point.opacity * 0.6,
          }}
        />
      ))}
    </>
  )
}

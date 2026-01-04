'use client'

export default function ParticleOrbs() {
  return (
    <div className="particle-orb-container absolute inset-0 overflow-hidden pointer-events-none">
      <div className="particle-orb-wrap w-[200vh] h-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle-3d absolute w-4 h-4 bg-gradient-to-r from-accent/40 dark:from-accent-blue/40 via-white/30 to-accent/20 dark:to-accent-blue/20 rounded-full opacity-70 shadow-lg"
            style={{
              '--rotate-z': `${(i * 7.2) % 360}deg`,
              '--rotate-y': `${(i * 5.7) % 360}deg`,
              '--delay': `${i * 0.02}s`,
              animationDelay: `${i * 0.02}s`,
              left: `${Math.sin(i * 0.3) * 50 + 50}%`,
              top: `${Math.cos(i * 0.4) * 50 + 50}%`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}


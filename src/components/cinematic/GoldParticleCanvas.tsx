import { useEffect, useRef } from 'react'

interface GoldParticleCanvasProps {
  className?: string
  density?: number
}

interface Particle {
  x: number
  y: number
  radius: number
  speedX: number
  speedY: number
  alpha: number
}

export function GoldParticleCanvas({ className = '', density = 55 }: GoldParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let width = 0
    let height = 0
    let animationFrame = 0

    const particles: Particle[] = []

    const init = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
      particles.length = 0
      for (let i = 0; i < density; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.6 + 0.6,
          speedX: (Math.random() - 0.5) * 0.16,
          speedY: Math.random() * -0.3 - 0.05,
          alpha: Math.random() * 0.6 + 0.2,
        })
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      const waveShift = (Math.sin(Date.now() * 0.00035) + 1) * 0.5
      const glow = context.createLinearGradient(0, 0, width, height)
      glow.addColorStop(0, `rgba(212,175,55,${0.015 + waveShift * 0.03})`)
      glow.addColorStop(1, 'rgba(212,175,55,0)')
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.y < -10) particle.y = height + 10
        if (particle.x < -10) particle.x = width + 10
        if (particle.x > width + 10) particle.x = -10

        context.beginPath()
        context.fillStyle = `rgba(212,175,55,${particle.alpha})`
        context.shadowBlur = 8
        context.shadowColor = 'rgba(212,175,55,0.5)'
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      })

      context.shadowBlur = 0
      animationFrame = requestAnimationFrame(draw)
    }

    init()
    draw()

    const resizeObserver = new ResizeObserver(init)
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
    }
  }, [density])

  return <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />
}

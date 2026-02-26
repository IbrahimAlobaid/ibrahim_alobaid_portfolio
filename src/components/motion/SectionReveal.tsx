import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function SectionReveal({ children, className = '', delayMs = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setVisible(true), delayMs)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [delayMs])

  return (
    <div ref={ref} className={`section-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

import type { ReactNode } from 'react'

interface StaggerListProps {
  items: ReactNode[]
  className?: string
}

export function StaggerList({ items, className = '' }: StaggerListProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="stagger-item" style={{ animationDelay: `${index * 120}ms` }}>
          {item}
        </div>
      ))}
    </div>
  )
}

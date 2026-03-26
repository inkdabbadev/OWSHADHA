import { useRef, useState, useEffect } from 'react'
import { CATEGORIES } from '../data/gallery'

export default function FilterBar({ active, onChange }) {
  const [showLeft,  setShowLeft]  = useState(false)
  const [showRight, setShowRight] = useState(false)
  const scrollRef = useRef(null)

  const check = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 8)
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    check()
    const el = scrollRef.current
    el?.addEventListener('scroll', check, { passive: true })
    return () => el?.removeEventListener('scroll', check)
  }, [])

  return (
    <div className="relative">
      {/* Fade masks */}
      {showLeft  && <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-warm to-transparent z-10 pointer-events-none" />}
      {showRight && <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-warm to-transparent z-10 pointer-events-none" />}

      <div ref={scrollRef} className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
        {CATEGORIES.map(cat => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={[
                'shrink-0 px-4 py-1.5 font-sans text-[0.68rem] tracking-[0.14em] uppercase transition-all duration-200 rounded-none',
                isActive
                  ? 'bg-ink text-warm border border-ink'
                  : 'border border-stone-md text-ink-muted hover:border-ink/50 hover:text-ink bg-transparent',
              ].join(' ')}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}

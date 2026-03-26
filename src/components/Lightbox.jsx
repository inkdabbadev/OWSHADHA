import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index]

  const prev = useCallback(() => onChange(i => (i - 1 + items.length) % items.length), [items.length, onChange])
  const next = useCallback(() => onChange(i => (i + 1) % items.length), [items.length, onChange])

  useEffect(() => {
    const h = e => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', h)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const ArrowBtn = ({ dir, onClick }) => (
    <button
      onClick={e => { e.stopPropagation(); onClick() }}
      className={`fixed ${dir === 'prev' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-ink/[0.12] text-ink/50 hover:text-ink hover:border-ink/30 hover:bg-ink/[0.06] transition-all duration-200`}
    >
      {dir === 'prev'
        ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      }
    </button>
  )

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        className="fixed inset-0 z-[300] bg-warm/96 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="fixed top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-ink/[0.12] text-ink/50 hover:text-ink hover:border-ink/30 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Image panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[88vw] max-h-[86vh] shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={item.src.replace('w=900', 'w=1600')}
              alt={item.category}
              className="max-w-[88vw] max-h-[86vh] object-contain"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-warm/80 to-transparent">
              <span className="font-sans text-[0.75rem] tracking-[0.22em] uppercase text-ink/80">{item.category}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <ArrowBtn dir="prev" onClick={prev} />
        <ArrowBtn dir="next" onClick={next} />

        {/* Counter */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 font-sans text-[0.8rem] tracking-[0.22em] text-ink/60">
          {String(index + 1).padStart(2, '0')}
          <span className="opacity-30 mx-2">/</span>
          {String(items.length).padStart(2, '0')}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

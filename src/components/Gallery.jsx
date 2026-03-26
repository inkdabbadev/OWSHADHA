import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import FilterBar from './FilterBar'
import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === active)

  return (
    <section id="gallery" className="bg-warm py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-sans font-extrabold uppercase tracking-tighter text-[clamp(2.2rem,4vw,3.2rem)] text-gradient-wood leading-tight"
            >
              Selected Works
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <FilterBar active={active} onChange={cat => { setActive(cat); setLightboxIdx(null) }} />
          </motion.div>
        </div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="font-sans text-[0.68rem] tracking-[0.12em] text-ink-ghost mb-6"
        >
          {filtered.length} {active === 'All' ? 'projects' : active.toLowerCase() + ' projects'}
        </motion.p>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => setLightboxIdx(i)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {lightboxIdx !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onChange={setLightboxIdx}
        />
      )}
    </section>
  )
}

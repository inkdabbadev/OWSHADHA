import { useState } from 'react'
import { motion } from 'framer-motion'

export default function GalleryCard({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.32), ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer bg-stone aspect-[4/3] rounded-[3px]"
      onClick={onClick}
    >
      {/* Shimmer placeholder */}
      {!loaded && (
        <div className="absolute inset-0 shimmer-bg" />
      )}

      {/* Image */}
      <img
        src={item.src}
        alt={item.category}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.07] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-void/75 via-void/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <span className="font-sans text-[0.66rem] tracking-[0.2em] uppercase text-white/80">{item.category}</span>
      </div>

      {/* Expand icon */}
      <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center border border-white/25 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-void/30 backdrop-blur-sm">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M6.5 1h3.5v3.5M9.5 1.5L6 5M4.5 10H1V6.5M1.5 9.5L5 6" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
        </svg>
      </div>
    </motion.div>
  )
}

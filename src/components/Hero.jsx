import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const STRIP_WORDS = ['Living Rooms', '·', 'Bedrooms', '·', 'Kitchens', '·', 'Bathrooms', '·', 'Closets', '·', 'Home Offices', '·', 'Dining Spaces', '·', 'Balconies', '·']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fadeOp = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-warm">

      {/* Grid pattern (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(85,50,18,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(85,50,18,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-wood/[0.045] blur-[110px] pointer-events-none" />

      {/* Main content */}
      <motion.div
        style={{ y: bgY, opacity: fadeOp }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pt-32 pb-16"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-wood/45" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-wood/45" />
        </motion.div>

        {/* Headline line 1 */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-extrabold uppercase text-[clamp(3.2rem,8.5vw,7.5rem)] leading-[0.9] text-gradient-wood tracking-tighter"
          >
            Spaces That
          </motion.h1>
        </div>
        {/* Headline line 2 */}
        <div className="overflow-hidden mb-9">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.0, delay: 0.50, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-bold uppercase text-[clamp(3.2rem,8.5vw,7.5rem)] leading-[0.9] text-gradient-wood tracking-tighter"
          >
            Breathe<span className="text-wood">.</span>
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="font-sans font-normal text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.8] text-ink/70 max-w-[420px] mb-10 tracking-wide"
        >
          We design interiors that balance structure and flow —
          yielding bold modern spaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.88 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#gallery"
            className="group flex items-center gap-3 px-8 py-3.5 bg-wood text-[#f9eee1] font-sans text-[0.7rem] tracking-[0.22em] uppercase hover:bg-wood-lt active:scale-[0.98] transition-all duration-200"
          >
            Explore Our Work
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
              className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="font-sans text-[0.75rem] tracking-[0.22em] uppercase text-ink/60 hover:text-ink/90 border-b border-transparent hover:border-ink/40 pb-0.5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 flex items-center gap-12 sm:gap-16"
        >
          {[
            { num: '120+', label: 'Projects' },
            { num: '8+', label: 'Years' },
            { num: '100%', label: 'Custom' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="font-sans font-bold text-[2.2rem] text-ink/90 leading-none mb-1.5 tracking-tight">{s.num}</p>
              <p className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-ink/50 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

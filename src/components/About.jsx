import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const pillars = [
  {
    num: '01',
    label: 'Craftsmanship',
    desc: 'Every joint, finish, and fixture is chosen with precision — no shortcuts, no compromises on quality.',
  },
  {
    num: '02',
    label: 'Intention',
    desc: 'We design around how you live, not just how things look. Form follows function; beauty follows both.',
  },
  {
    num: '03',
    label: 'Harmony',
    desc: 'Light, texture, proportion — the invisible forces that make a room feel effortlessly, undeniably right.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-28 sm:py-36 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-20 md:mb-28">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-gold/50" />
                <span className="font-sans text-[0.6rem] tracking-[0.32em] uppercase text-gold">Our Philosophy</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif font-light text-[clamp(2.6rem,5.5vw,4rem)] leading-[1.02] text-ink text-balance">
                Beauty lives<br />
                <em className="not-italic text-gold">in the details.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="font-sans font-light text-[0.93rem] leading-[1.9] text-ink-mid">
              Owshadha Interior Works was born from one conviction: the spaces we inhabit shape who we become.
              Every project we take on is a study in restraint, refinement, and resonance — delivering interiors
              that stand the test of time and trend.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#gallery"
                className="group flex items-center gap-2.5 font-sans text-[0.7rem] tracking-[0.18em] uppercase text-gold hover:text-gold-lt transition-colors duration-200">
                View Our Work
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={0.1 + i * 0.1}>
              <div className="group border-t-2 border-stone-md hover:border-gold pt-8 transition-colors duration-500 cursor-default">
                <span className="font-serif italic text-gold/70 text-[0.9rem] block mb-4">{p.num}</span>
                <h3 className="font-serif text-[1.3rem] text-ink mb-3 group-hover:text-gold transition-colors duration-300">{p.label}</h3>
                <p className="font-sans font-light text-[0.84rem] leading-[1.8] text-ink-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

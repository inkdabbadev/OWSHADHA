import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const CARDS = [
  {
    label: 'Call Us',
    primary: '+91 98419 41984',
    href: 'tel:+919876543210',
    cta: 'Call now',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M3 4h4l2 4.5-2.5 1.5c1 2.5 3 4.5 5.5 5.5L13.5 13 18 15v4c0 1-1 2-2 2C7.5 21 -1 12.5 1 4c0-1 1-2 2-2z"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    primary: '+91 98419 41984',
    href: 'https://wa.me/919841941984',
    cta: 'Message us',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.36 2 11.5c0 1.9.58 3.68 1.59 5.17L2 22l5.46-1.56C8.87 21.44 10.39 22 12 22c5.52 0 10-4.36 10-9.5S17.52 2 12 2z"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 9.5s.5-1 1.5-1 2 1 2 1v.5l-1 1s.5 1.5 2 3l1-1h.5s1 1 1 2-1 1.5-1 1.5c-2 0-5-2-6.5-4.5-.8-1.3-1-2.5-1-2.5z"
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Visit',
    primary: 'Chennai, Tamil Nadu',
    href: 'https://maps.google.com',
    cta: 'Get directions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-warm py-28 sm:py-36 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Reveal delay={0.1}>
          <h2 className="font-sans font-extrabold uppercase tracking-tighter text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.02] text-gradient-wood mb-5">
            Let's create<br />
            <span className="text-wood">your space.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-sans font-light text-[1rem] leading-[1.85] text-ink/70 max-w-md mb-16">
            Share your vision and we'll bring it to life. Every project starts with a simple conversation.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.label} delay={0.15 + i * 0.1}>
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group block border border-ink/[0.07] p-7 hover:border-wood/35 hover:-translate-y-1 hover:bg-ink/[0.03] transition-all duration-350"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-ink/10 text-wood/60 group-hover:border-wood/40 group-hover:text-wood mb-7 transition-all duration-300">
                  {card.icon}
                </div>
                <span className="font-sans text-[0.7rem] tracking-[0.26em] uppercase text-ink/50 block mb-2">{card.label}</span>
                <p className="font-sans font-bold tracking-tight text-[1.15rem] text-ink/90 mb-1 leading-tight">{card.primary}</p>
                <p className="font-sans font-light text-[0.85rem] text-ink/60 mb-7">{card.secondary}</p>
                <div className="flex items-center gap-2 font-sans text-[0.75rem] tracking-[0.16em] uppercase text-wood/60 group-hover:text-wood transition-colors duration-200">
                  {card.cta}
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M1 4h8M6 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

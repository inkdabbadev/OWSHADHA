import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ onEnquireClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'py-3 bg-warm/96 backdrop-blur-md border-b border-ink/[0.05]'
        : 'py-5 bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/logo/logo-1.svg" alt="Owshadha Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="font-sans text-[0.85rem] tracking-[0.18em] uppercase text-ink/70 hover:text-ink transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={onEnquireClick}
            className="hidden md:flex items-center gap-2.5 px-6 py-2.5 border border-wood/50 text-wood font-sans text-[0.8rem] tracking-[0.2em] uppercase hover:bg-wood hover:text-warm hover:border-wood transition-all duration-300"
          >
            Enquire Now
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-ink/70 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-ink/70 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-ink/70 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-warm/98 backdrop-blur-md flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="font-serif font-light text-[2.4rem] text-ink/70 hover:text-wood transition-colors duration-200"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              onClick={() => { setMenuOpen(false); onEnquireClick() }}
              className="mt-4 px-10 py-4 border border-wood/60 text-wood font-sans text-[0.85rem] tracking-[0.22em] uppercase hover:bg-wood hover:text-warm transition-all duration-300"
            >
              Enquire Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Footer() {
  return (
    <footer className="bg-warm border-t border-ink/[0.05] py-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Logo mark */}
        <div className="flex items-center">
          <img src="/logo/logo-1.svg" alt="Owshadha Logo" className="h-9 sm:h-11 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </div>

        <p className="font-sans text-[0.75rem] tracking-[0.1em] text-ink/40 text-center">
          © {new Date().getFullYear()} Owshadha Interior Works · Chennai, Tamil Nadu
        </p>

        <nav className="flex items-center gap-6">
          {['Gallery', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-[0.75rem] tracking-[0.18em] uppercase text-ink/50 hover:text-ink/80 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  )
}

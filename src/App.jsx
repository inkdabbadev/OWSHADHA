import Header  from './components/Header'
import Hero    from './components/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import useLenis from './hooks/useLenis'

export default function App() {
  useLenis()

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-warm antialiased">
      <Header onEnquireClick={scrollToContact} />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

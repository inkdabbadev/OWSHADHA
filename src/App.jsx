import Header  from './components/Header'
import Hero    from './components/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
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

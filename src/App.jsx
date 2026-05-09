import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Donate from './sections/Donate'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Donate />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

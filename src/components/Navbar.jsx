import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, contact } from '../data/siteContent'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gold-200 shadow-gold'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-4 focus:outline-none group">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-gold-300 shadow-gold flex items-center justify-center bg-charcoal-900 transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="Swaraj Samsthe Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-700 text-xl leading-none text-charcoal-900" style={{fontWeight:700}}>Swaraj Samsthe</p>
              <p className="font-sans text-[11px] text-gold-600 tracking-widest uppercase mt-1">Empowering & Sustainability</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 rounded-xl font-sans text-sm font-500 transition-all duration-200 group ${
                  active === link.href
                    ? 'text-gold-700 bg-gold-50'
                    : 'text-charcoal-700 hover:text-gold-600 hover:bg-gold-50/60'
                }`}
                style={{fontWeight: active === link.href ? 600 : 500}}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gold-gradient"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${contact.phones[0]}`} className="btn-outline-gold text-xs px-5 py-2.5 flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-1.5"><Phone size={13} />{contact.phones[0]}</span>
            </a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs px-5 py-2.5">
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gold-200 text-gold-600 hover:bg-gold-50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gold-200 shadow-gold-lg lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-sans text-sm transition-all duration-200 ${
                    active === link.href
                      ? 'bg-gold-100 text-gold-700 font-600'
                      : 'text-charcoal-800 hover:bg-gold-50 hover:text-gold-600'
                  }`}
                  style={{fontWeight: active === link.href ? 600 : 500}}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-gold-100">
                <a href={`tel:${contact.phones[0]}`} className="btn-gold flex-1 text-xs py-3 text-center">
                  <span>📞 Call Now</span>
                </a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-whatsapp flex-1 text-xs py-3 text-center">
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

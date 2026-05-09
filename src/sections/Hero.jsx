import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Sparkles } from 'lucide-react'
import { hero, contact, brand } from '../data/siteContent'
import logo from '../assets/logo.png'

const stagger = {
  container: { transition: { staggerChildren: 0.12 } },
  item: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-pattern"
      style={{
        background: 'linear-gradient(135deg, #FFFBEB 0%, #FDF8EC 30%, #FEF3C7 60%, #FFFBEB 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F0C040 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.05'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger.container}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={stagger.item}>
              <span className="badge-gold">
                <Sparkles size={12} />
                {hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={stagger.item}>
              <h1 className="section-title">
                <span className="block">{hero.headline}</span>
                <span className="block relative mt-2" style={{
                  background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 40%, #F0C040 70%, #C9A84C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {hero.headlineAccent}
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p variants={stagger.item} className="font-body text-charcoal-700 text-lg leading-relaxed max-w-xl">
              {hero.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-gold text-sm px-8 py-4 rounded-2xl shadow-gold-lg">
                <span className="flex items-center gap-2">
                  <Sparkles size={15} />
                  {hero.cta1}
                </span>
              </a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm px-8 py-4 rounded-2xl">
                <span className="flex items-center gap-2">
                  <MessageCircle size={15} />
                  WhatsApp Us
                </span>
              </a>
              <a href={`tel:${contact.phones[0]}`} className="btn-outline-gold text-sm px-8 py-4 rounded-2xl">
                <span className="flex items-center gap-2">
                  <Phone size={15} />
                  {contact.phones[0]}
                </span>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={stagger.item} className="grid grid-cols-4 gap-4 pt-4">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-800 text-2xl text-gold-600" style={{fontWeight:800,
                    background:'linear-gradient(135deg,#B8860B,#F0C040)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
                  }}>
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-charcoal-600 mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Logo + trust card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            {/* Logo showcase */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-charcoal-900 flex items-center justify-center shadow-gold-xl float-anim border-4 border-gold-400"
                style={{ boxShadow: '0 0 0 12px rgba(201,168,76,0.15), 0 20px 60px rgba(201,168,76,0.4)' }}>
                <img src={logo} alt="Swaraj Samsthe" className="w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl" />
              </div>
              {/* Orbiting badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center text-white font-sans text-xs font-700 text-center leading-tight shadow-gold"
                style={{fontWeight:700}}
              >
                <span>Est.<br/>2016</span>
              </motion.div>
            </div>

            {/* Trust card */}
            <div className="glass-card px-8 py-5 w-full max-w-sm text-center border border-gold-200">
              <p className="font-display text-lg font-700 text-charcoal-900 italic" style={{fontWeight:700}}>
                "Empowering Communities, Sustaining Futures"
              </p>
              <div className="gold-divider mt-3 mx-auto w-24" />
              <p className="font-sans text-xs text-charcoal-600 mt-3 tracking-widest uppercase">
                {brand.fullName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold-500 hover:text-gold-700 transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-sans text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}

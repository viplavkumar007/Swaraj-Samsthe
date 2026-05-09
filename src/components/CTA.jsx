import { motion } from 'framer-motion'
import { Phone, MessageCircle, Heart } from 'lucide-react'
import { contact } from '../data/siteContent'

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden py-20" style={{
      background: 'linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 40%, #1A1A1A 100%)',
    }}>
      {/* Pulsing gold glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.3) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.04'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-2 text-gold-400">
            <Heart size={18} className="fill-gold-400" />
            <span className="font-sans text-xs uppercase tracking-widest" style={{fontWeight:600}}>Join Our Mission</span>
            <Heart size={18} className="fill-gold-400" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-700 text-white leading-tight" style={{fontWeight:700}}>
            Together, We Can{' '}
            <span style={{
              background:'linear-gradient(135deg,#F0C040,#D4AF37)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
            }}>Change Lives</span>
          </h2>

          <p className="font-body text-lg max-w-2xl" style={{color:'#ccc'}}>
            Whether you want to volunteer, donate, or partner with us — every act of support helps a family in Chikkamagaluru build a better future.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#donate" onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-gold px-8 py-4 text-sm shadow-gold-xl animate-pulse-gold">
              <span className="flex items-center gap-2">💛 Donate Now</span>
            </a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"
              className="btn-whatsapp px-8 py-4 text-sm">
              <span className="flex items-center gap-2"><MessageCircle size={15} />Chat on WhatsApp</span>
            </a>
            <a href={`tel:${contact.phones[0]}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm border-2 border-gold-500/60 text-gold-300 hover:border-gold-400 hover:text-gold-200 transition-all duration-300"
              style={{fontWeight:600}}>
              <Phone size={15} />{contact.phones[0]}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

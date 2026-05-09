import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { about } from '../data/siteContent'
import presidentImg from '../assets/president.jpg'

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 40%, #FFFBEB 100%)' }}>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F0C040, transparent 70%)', transform: 'translate(40%,-40%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-flex">🏛️ {about.badge}</span>
          <h2 className="section-title">
            {about.title}{' '}
            <span style={{
              background:'linear-gradient(135deg,#B8860B,#F0C040)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
            }}>{about.titleAccent}</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {about.body.map((para, i) => (
              <p key={i} className="font-body text-charcoal-700 text-base leading-relaxed">{para}</p>
            ))}

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {about.values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-gold p-4 text-center hover:border-gold-300"
                >
                  <div className="text-3xl mb-2">{val.icon}</div>
                  <h4 className="font-sans font-700 text-charcoal-900 text-sm" style={{fontWeight:700}}>{val.title}</h4>
                  <p className="font-sans text-xs text-charcoal-600 mt-1 leading-tight">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — President card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            {/* President photo */}
            <div className="relative">
              <div className="w-64 h-72 rounded-3xl overflow-hidden border-4 border-gold-300 shadow-gold-xl"
                style={{ boxShadow: '0 8px 40px rgba(201,168,76,0.35)' }}>
                <img src={presidentImg} alt="Founder Rajendra K K" className="w-full h-full object-cover" loading="eager" />
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-gold-400 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-gold-400 rounded-br-lg" />
            </div>

            {/* Name + title card */}
            <div className="glass-card p-6 w-full max-w-sm text-center border border-gold-200">
              <p className="font-sans text-xs text-gold-600 uppercase tracking-widest mb-2">Leadership</p>
              <h3 className="font-display text-xl font-700 text-charcoal-900" style={{fontWeight:700}}>{about.president.name}</h3>
              <p className="font-sans text-sm text-gold-600 mt-1">{about.president.org}</p>
              <div className="gold-divider w-16 mx-auto my-4" />
              <div className="flex justify-center mb-3">
                <Quote size={20} className="text-gold-400" />
              </div>
              <p className="font-body text-charcoal-700 text-sm leading-relaxed italic">
                "{about.president.quote}"
              </p>
            </div>

            {/* Mission image */}
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-card h-48">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80"
                alt="Community work"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

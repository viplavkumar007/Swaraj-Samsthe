import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { services } from '../data/siteContent'

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="card-gold group cursor-default"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-card border border-white/60">
          {service.icon}
        </div>
        {/* Bottom label */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-sans text-xs text-gold-300 uppercase tracking-widest">{service.subtitle}</p>
          <h3 className="font-display text-xl font-700 text-white mt-0.5" style={{fontWeight:700}}>{service.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-5">
        <p className="font-body text-charcoal-700 text-sm leading-relaxed">{service.description}</p>

        {/* Features */}
        <ul className="grid grid-cols-1 gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 font-sans text-sm text-charcoal-800">
              <CheckCircle2 size={14} className="text-gold-500 flex-shrink-0" style={{color: service.accent}} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 font-sans text-sm font-600 text-gold-600 hover:text-gold-700 group/btn transition-colors"
          style={{fontWeight:600}}
        >
          Get Involved
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.04'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-flex">🌟 Our Programs</span>
          <h2 className="section-title">
            What We Do <span className="gold-underline pb-2" style={{
              background:'linear-gradient(135deg,#B8860B,#F0C040)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
            }}>for Communities</span>
          </h2>
          <p className="font-body text-charcoal-600 text-lg mt-4 max-w-2xl mx-auto">
            Three core pillars of sustainable development — working together to empower rural Karnataka
          </p>
          <div className="gold-divider w-32 mx-auto mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Star, Quote, Egg, ArrowRight } from 'lucide-react'
import { testimonials, featuredBeneficiary } from '../data/siteContent'

function TestiCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-gold p-7 flex flex-col gap-4 h-full"
    >
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
        ))}
      </div>

      <Quote size={24} className="text-gold-300" />

      <p className="font-body text-charcoal-700 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>

      <div className="flex items-center gap-3 pt-2 border-t border-gold-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-700 text-white text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)', fontWeight: 700 }}
        >
          {t.initial}
        </div>
        <div>
          <p className="font-sans font-600 text-charcoal-900 text-sm" style={{ fontWeight: 600 }}>{t.name}</p>
          <p className="font-sans text-xs text-gold-600">{t.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-charcoal-900 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.04'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div
        className="absolute top-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-sans text-gold-400 border border-gold-700 bg-gold-900/30 mb-4"
            style={{ fontWeight: 600 }}
          >
            Community Voices
          </span>
          <h2 className="section-title text-white">
            Lives{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#F0C040,#D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Transformed
            </span>
          </h2>
          <p className="font-body text-charcoal-600 text-lg mt-4 max-w-2xl mx-auto" style={{ color: '#aaa' }}>
            Real stories from the communities we serve across Chikkamagaluru
          </p>
          <div className="gold-divider w-32 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 overflow-hidden rounded-[2rem] border border-gold-700/60 bg-white/95 shadow-gold-lg"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[26rem] bg-charcoal-950">
              <img
                src={featuredBeneficiary.primaryImage}
                alt={`${featuredBeneficiary.name} poultry work`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/25 to-transparent" />
              <div className="absolute bottom-4 right-4 w-56 h-56 rounded-[1.5rem] overflow-hidden border-4 border-white/80 shadow-2xl hidden sm:block">
                <img
                  src={featuredBeneficiary.secondaryImage}
                  alt={`${featuredBeneficiary.name} at poultry unit`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
              <span
                className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full text-xs font-sans text-gold-700 bg-gold-50 border border-gold-200 uppercase tracking-[0.2em]"
                style={{ fontWeight: 700 }}
              >
                <Egg size={14} />
                {featuredBeneficiary.badge}
              </span>

              <div>
                <p className="font-sans text-sm text-gold-700 uppercase tracking-[0.2em] mb-3">{featuredBeneficiary.role}</p>
                <h3 className="font-display text-3xl md:text-4xl leading-tight text-charcoal-900" style={{ fontWeight: 700 }}>
                  {featuredBeneficiary.name}
                </h3>
                <p className="font-display text-xl text-gold-700 mt-2" style={{ fontWeight: 600 }}>
                  {featuredBeneficiary.title}
                </p>
              </div>

              <p className="font-body text-charcoal-700 leading-relaxed text-base">
                {featuredBeneficiary.story}
              </p>

              <div className="grid gap-3">
                {featuredBeneficiary.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-gold-100 bg-gold-50/70 px-4 py-3">
                    <div className="w-9 h-9 rounded-full bg-gold-gradient text-white flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={16} />
                    </div>
                    <p className="font-sans text-sm text-charcoal-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => <TestiCard key={t.id} t={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}

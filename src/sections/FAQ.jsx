import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/siteContent'

function FAQItem({ faq, index, open, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`card-gold overflow-hidden transition-all duration-300 ${open ? 'border-gold-400' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-700 text-gold-700 bg-gold-100 mt-0.5"
            style={{fontWeight:700}}>{index + 1}</span>
          <span className="font-sans font-600 text-charcoal-900 text-sm leading-relaxed" style={{fontWeight:600}}>{faq.q}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={18} className={`transition-colors ${open ? 'text-gold-600' : 'text-charcoal-600'}`} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 pl-16">
              <div className="gold-divider mb-4" />
              <p className="font-body text-charcoal-700 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.06'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-gold mb-4 inline-flex">❓ Common Questions</span>
          <h2 className="section-title">
            Frequently Asked{' '}
            <span style={{
              background:'linear-gradient(135deg,#B8860B,#F0C040)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
            }}>Questions</span>
          </h2>
          <p className="font-body text-charcoal-600 text-lg mt-4">
            Everything you need to know about Swaraj Samsthe and our programs
          </p>
          <div className="gold-divider w-32 mx-auto mt-6" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

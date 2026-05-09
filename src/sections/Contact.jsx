import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle, X } from 'lucide-react'
import { contact } from '../data/siteContent'

function Toast({ toast, onDismiss }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-gold-lg text-sm font-sans font-500 max-w-sm ${
            toast.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
          role="alert"
          aria-live="polite"
          style={{fontWeight:500}}
        >
          {toast.type === 'success'
            ? <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
            : <AlertCircle size={18} className="text-red-500 flex-shrink-0" />}
          <span className="flex-1">{toast.message}</span>
          <button onClick={onDismiss} className="flex-shrink-0 ml-2 hover:opacity-70">
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = 'Valid 10-digit phone required'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setLoading(true)
    const enquiryLines = [
      'Hello Swaraj Samsthe,',
      '',
      'I would like to make an enquiry.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || 'Not provided'}`,
      `Area of Interest: ${form.interest || 'General Enquiry'}`,
      '',
      'Message:',
      form.message.trim(),
    ]

    const enquiryMessage = enquiryLines.join('\n')
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(enquiryMessage)}`
    const emailSubject = encodeURIComponent(`Enquiry from ${form.name.trim()}`)
    const emailBody = encodeURIComponent(enquiryMessage)
    const mailtoUrl = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    window.location.href = mailtoUrl

    setLoading(false)
    setForm({ name: '', email: '', phone: '', message: '', interest: '' })
    setToast({ type: 'success', message: 'WhatsApp and email have been opened with your prefilled enquiry.' })
    setTimeout(() => setToast(null), 4500)
  }

  const Field = ({ id, label, error, children }) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-sans text-xs font-600 text-charcoal-700 uppercase tracking-wider" style={{fontWeight:600}}>{label}</label>
      {children}
      {error && <p className="font-sans text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11} />{error}</p>}
    </div>
  )

  return (
    <>
      <Toast toast={toast} onDismiss={() => setToast(null)} />

      <section id="contact" className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 40%, #FFFBEB 100%)' }}>

        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F0C040, transparent 70%)', transform: 'translate(40%,-30%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="badge-gold mb-4 inline-flex">📬 Reach Out</span>
            <h2 className="section-title">
              Get in{' '}
              <span style={{
                background:'linear-gradient(135deg,#B8860B,#F0C040)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
              }}>Touch</span>
            </h2>
            <p className="font-body text-charcoal-600 text-lg mt-4">
              Have questions, want to volunteer, or partner with us? We'd love to hear from you.
            </p>
            <div className="gold-divider w-32 mx-auto mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Contact cards */}
              {[
                {
                  icon: <Phone size={18} className="text-white" />,
                  label: 'Call Us',
                  lines: contact.phones,
                  href: `tel:${contact.phones[0]}`,
                  btnLabel: 'Call Now',
                  btnClass: 'btn-gold',
                },
                {
                  icon: <MessageCircle size={18} className="text-white" />,
                  label: 'WhatsApp',
                  lines: [`+91 ${contact.phones[0]}`],
                  href: `https://wa.me/${contact.whatsapp}`,
                  btnLabel: 'Chat on WhatsApp',
                  btnClass: 'btn-whatsapp',
                  external: true,
                },
                {
                  icon: <Mail size={18} className="text-white" />,
                  label: 'Email',
                  lines: [contact.email],
                  href: `mailto:${contact.email}`,
                  btnLabel: 'Send Email',
                  btnClass: 'btn-outline-gold',
                },
              ].map((c, i) => (
                <div key={i} className="card-gold p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)' }}>
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-xs text-gold-600 uppercase tracking-widest mb-1">{c.label}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="font-sans font-600 text-charcoal-900 text-sm" style={{fontWeight:600}}>{l}</p>
                    ))}
                    <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noreferrer' : undefined}
                      className={`${c.btnClass} mt-3 text-xs px-4 py-2 inline-flex`}>
                      <span>{c.btnLabel}</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Address */}
              <div className="card-gold p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)' }}>
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gold-600 uppercase tracking-widest mb-1">Address</p>
                  <p className="font-sans font-600 text-charcoal-900 text-sm leading-relaxed" style={{fontWeight:600}}>
                    {contact.address.line1}<br />
                    {contact.address.line2}<br />
                    {contact.address.city}<br />
                    {contact.address.district}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 card-gold p-8"
            >
              <h3 className="font-display text-2xl font-700 text-charcoal-900 mb-6" style={{fontWeight:700}}>
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="name" label="Full Name *" error={errors.name}>
                    <input id="name" className="input-gold" placeholder="Your full name"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </Field>
                  <Field id="phone" label="Phone Number *" error={errors.phone}>
                    <input id="phone" type="tel" className="input-gold" placeholder="10-digit mobile"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </Field>
                </div>

                <Field id="email" label="Email Address" error={errors.email}>
                  <input id="email" type="email" className="input-gold" placeholder="your@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>

                <Field id="interest" label="Area of Interest">
                  <select id="interest" className="input-gold"
                    value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                    <option value="">Select your interest</option>
                    <option>Farm Activities</option>
                    <option>Non-Farm / Livelihood Programs</option>
                    <option>Social Activities</option>
                    <option>Volunteering</option>
                    <option>CSR / Donation Partnership</option>
                    <option>General Enquiry</option>
                  </select>
                </Field>

                <Field id="message" label="Your Message *" error={errors.message}>
                  <textarea id="message" rows={4} className="input-gold resize-none" placeholder="Tell us how we can help or how you'd like to get involved..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </Field>

                <button type="submit" disabled={loading}
                  className={`btn-gold w-full py-4 rounded-2xl text-sm flex items-center justify-center gap-2 disabled:opacity-70 ${loading ? 'cursor-wait' : ''}`}>
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Opening...
                      </>
                    ) : (
                      <><Send size={15} />Send via WhatsApp & Email</>
                    )}
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

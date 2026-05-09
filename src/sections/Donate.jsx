import { motion } from 'framer-motion'
import { Copy, CheckCheck, Building2, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { bank } from '../data/siteContent'
import qrImg from '../assets/qrcode.png'

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="flex items-center justify-between py-3 border-b border-gold-100 last:border-b-0 gap-4">
      <div>
        <p className="font-sans text-xs text-charcoal-600 uppercase tracking-wider">{label}</p>
        <p className="font-sans font-600 text-charcoal-900 text-sm mt-0.5" style={{fontWeight:600}}>{value}</p>
      </div>
      <button onClick={copy}
        className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-gold-100 text-gold-500 hover:text-gold-700"
        aria-label={`Copy ${label}`}
      >
        {copied ? <CheckCheck size={14} className="text-green-500" /> : <Copy size={14} />}
      </button>
    </div>
  )
}

export default function Donate() {
  return (
    <section id="donate" className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FDF3D8 50%, #FFFBEB 100%)' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-flex">💛 Support Our Mission</span>
          <h2 className="section-title">
            Donate &{' '}
            <span style={{
              background:'linear-gradient(135deg,#B8860B,#F0C040)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
            }}>Make an Impact</span>
          </h2>
          <p className="font-body text-charcoal-600 text-lg mt-4 max-w-2xl mx-auto">
            Your contribution directly supports farmers, youth, and families across rural Karnataka. Every rupee counts.
          </p>
          <div className="gold-divider w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Bank Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-gold p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)' }}>
                <Building2 size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-700 text-charcoal-900" style={{fontWeight:700}}>Bank Transfer</h3>
                <p className="font-sans text-xs text-gold-600">Direct bank deposit</p>
              </div>
            </div>

            <div className="bg-gold-50 rounded-2xl px-5 py-2 border border-gold-200">
              <CopyField label="Account Name" value={bank.name} />
              <CopyField label="Account Number" value={bank.accountNo} />
              <CopyField label="IFSC Code" value={bank.ifsc} />
              <CopyField label="Account Type" value={bank.type} />
              <CopyField label="Branch" value={bank.branch} />
              <CopyField label="MICR Code" value={bank.micrCode} />
            </div>

            <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <p className="font-sans text-xs text-amber-700 leading-relaxed">
                <strong>Tax Benefit:</strong> Donations are eligible for 80G Income Tax Exemption. Please send your donation receipt to <a href="mailto:swarajsamsthe2018@gmail.com" className="underline">swarajsamsthe2018@gmail.com</a> for the certificate.
              </p>
            </div>
          </motion.div>

          {/* UPI Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card-gold p-8 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-6 self-start">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)' }}>
                <Smartphone size={18} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl font-700 text-charcoal-900" style={{fontWeight:700}}>Pay via UPI</h3>
                <p className="font-sans text-xs text-gold-600">Scan & pay instantly</p>
              </div>
            </div>

            {/* QR code */}
            <div className="w-52 h-52 bg-white rounded-2xl overflow-hidden border-4 border-gold-300 shadow-gold flex items-center justify-center p-3">
              <img src={qrImg} alt="UPI QR Code" className="w-full h-full object-contain" loading="eager" />
            </div>

            <div className="mt-6 bg-gold-50 rounded-2xl px-6 py-4 border border-gold-200 w-full">
              <p className="font-sans text-xs text-charcoal-600 uppercase tracking-widest mb-2">UPI ID</p>
              <p className="font-sans font-700 text-gold-700 text-lg" style={{fontWeight:700}}>{bank.upiId}</p>
            </div>

            <p className="font-sans text-xs text-charcoal-600 mt-4 leading-relaxed">
              Scan using any UPI app — GPay, PhonePe, Paytm, BHIM, or any bank's UPI app
            </p>

            <div className="flex gap-3 mt-5 text-2xl">
              {['🟢', '🔵', '🟡', '🏦'].map((e, i) => (
                <span key={i} className="w-10 h-10 bg-white rounded-xl border border-gold-100 flex items-center justify-center shadow-sm text-lg">
                  {e}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

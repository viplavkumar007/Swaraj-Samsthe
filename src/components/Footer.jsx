import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Heart, Facebook, Instagram } from 'lucide-react'
import { brand, contact, navLinks, bank } from '../data/siteContent'
import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 relative overflow-hidden">
      {/* Top gold divider */}
      <div className="gold-divider" />

      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.03'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-charcoal-800 border-2 border-gold-700 flex items-center justify-center p-1.5">
                <img src={logo} alt="Swaraj Samsthe" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-display font-700 text-white text-lg leading-none" style={{fontWeight:700}}>Swaraj Samsthe</p>
                <p className="font-sans text-xs text-gold-500 mt-1 tracking-wider">Est. {brand.established}</p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{color:'#999'}}>
              Empowering rural communities through sustainable farm, non-farm, and social development programs since 2016.
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-gold-400">
                <Phone size={13} />
                <span className="font-sans text-sm" style={{color:'#ccc'}}>{contact.phones[0]}</span>
              </span>
              <span className="inline-flex items-center gap-2 text-gold-400">
                <Phone size={13} />
                <span className="font-sans text-sm" style={{color:'#ccc'}}>{contact.phones[1]}</span>
              </span>
              <span className="inline-flex items-center gap-2 text-gold-400">
                <Mail size={13} />
                <a href={`mailto:${contact.email}`} className="font-sans text-sm hover:text-gold-300 transition-colors" style={{color:'#ccc'}}>{contact.email}</a>
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full border border-gold-700 bg-charcoal-800 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 rounded-full border border-gold-700 bg-charcoal-800 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm uppercase tracking-widest mb-5" style={{fontWeight:700}}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-sm hover:text-gold-400 transition-colors text-left" style={{color:'#999'}}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm uppercase tracking-widest mb-5" style={{fontWeight:700}}>Our Address</h4>
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-gold-500 mt-1 flex-shrink-0" />
              <address className="not-italic font-sans text-sm leading-relaxed" style={{color:'#999'}}>
                {contact.address.line1}<br />
                {contact.address.line2}<br />
                {contact.address.city}<br />
                {contact.address.district}<br />
                {contact.address.state}
              </address>
            </div>
          </div>

          {/* Bank quick info */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm uppercase tracking-widest mb-5" style={{fontWeight:700}}>Donate / Bank</h4>
            <div className="flex flex-col gap-2 text-sm" style={{color:'#999'}}>
              <p className="font-sans"><span className="text-gold-500">A/C:</span> {bank.accountNo}</p>
              <p className="font-sans"><span className="text-gold-500">IFSC:</span> {bank.ifsc}</p>
              <p className="font-sans"><span className="text-gold-500">UPI:</span> {bank.upiId}</p>
            </div>
            <div className="mt-5 p-4 rounded-2xl border border-gold-800/50 bg-gold-900/20">
              <p className="font-sans text-xs leading-relaxed" style={{color:'#aaa'}}>
                80G Tax Exemption available. Contact us after donation for certificate.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-xs" style={{color:'#666'}}>
            © {year} {brand.fullName}. All rights reserved.
          </p>
          <p className="font-sans text-xs flex items-center gap-1.5" style={{color:'#666'}}>
            Made with <Heart size={11} className="text-gold-500 fill-gold-500" /> for the communities of Karnataka
          </p>
        </div>
      </div>
    </footer>
  )
}

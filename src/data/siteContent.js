// src/data/siteContent.js
// Central content config — all page content lives here

export const brand = {
  name: "SWARAJ SAAMAJIKA ABHIVRUDDHI SAMSTHE. ( R)",
  fullName: "SWARAJ SAAMAJIKA ABHIVRUDDHI SAMSTHE. ( R)",
  tagline: "Empowering & Sustainability",
  established: "2016",
  location: "Chikkamagaluru, Karnataka",
  reg: "Registered NGO | Empowering Communities Since 2016",
}

export const contact = {
  phones: ["9019868464", "7259444124"],
  email: "swarajsamsthe2018@gmail.com",
  whatsapp: "919019868464",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61574236911780",
    instagram: "https://www.instagram.com/swarajsamstheckm/",
  },
  address: {
    line1: "Room No. 14, C/O M C Investment",
    line2: "Mathaias Tower, IG Road",
    city: "Chikkamagaluru – TQ",
    district: "Chikkamagaluru District – 577101",
    state: "Karnataka, India",
  },
}

export const bank = {
  name: "Swaraj Saamajika Abhivruddhi Samsthe R",
  branch: "Head Office",
  type: "Current Account",
  accountNo: "001011000404",
  ifsc: "UTIB0SCJMSB",
  micrCode: "577259251",
  upiId: "swarajsamsthe2018-1@okicici",
}

export const hero = {
  badge: "Registered NGO | Chikkamagaluru, Karnataka",
  headline: "Empowering Communities,",
  headlineAccent: "Sustaining Futures",
  subtext:
    "SWARAJ SAAMAJIKA ABHIVRUDDHI SAMSTHE. ( R) is a grassroots NGO working since 2016 to uplift rural families through farm support, livelihood programs, and social development activities across Chikkamagaluru district.",
  cta1: "Get Involved",
  cta2: "Contact Us",
  stats: [
    { value: "2016", label: "Established" },
    { value: "5000+", label: "Lives Impacted" },
    { value: "3", label: "Core Programs" },
    { value: "100+", label: "Villages Covered" },
  ],
}

export const services = [
  {
    id: 1,
    icon: "🌾",
    title: "Farm Activities",
    subtitle: "Agricultural Empowerment",
    description:
      "Supporting farmers with sustainable agriculture, organic farming techniques, crop diversification, soil health programs, and access to government schemes. We bridge the gap between farmers and modern farming solutions.",
    features: [
      "Organic Farming Training",
      "Soil & Water Conservation",
      "Crop Diversification",
      "Govt Scheme Linkage",
      "Farmer Self-Help Groups",
    ],
    image: "https://cdn.pixabay.com/photo/2022/05/20/04/47/sheep-7208592_1280.jpg",
    color: "from-green-50 to-emerald-50",
    accent: "#22c55e",
  },
  {
    id: 2,
    icon: "🏭",
    title: "Non-Farm Activities",
    subtitle: "Livelihood & Skills",
    description:
      "Creating sustainable livelihoods through skill development, micro-enterprise support, placement services, vocational training, and women empowerment programs for non-agricultural rural communities.",
    features: [
      "Skill Development Training",
      "Micro-Enterprise Support",
      "Placement Services",
      "Women Empowerment",
      "Self-Help Group Formation",
    ],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    color: "from-blue-50 to-indigo-50",
    accent: "#3b82f6",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Social Activities",
    subtitle: "Community Development",
    description:
      "Building stronger communities through health awareness camps, educational support, sanitation drives, cultural programs, and social welfare initiatives that address the holistic needs of rural Karnataka.",
    features: [
      "Health Awareness Camps",
      "Educational Support",
      "Sanitation Drives",
      "Cultural Programs",
      "Social Welfare Initiatives",
    ],
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80",
    color: "from-amber-50 to-yellow-50",
    accent: "#f59e0b",
  },
]

export const about = {
  badge: "Our Story",
  title: "Rooted in Service,",
  titleAccent: "Growing Together",
  body: [
    "Founded in 2016, Swaraj Saamajika Abhivruddhi Samsthe (R.) emerged from a deep commitment to rural empowerment in the Chikkamagaluru region of Karnataka. The word 'Swaraj' — meaning self-rule — reflects our core belief that communities thrive when they are equipped to govern their own futures.",
    "Over the years, we have worked tirelessly across farm, non-farm, and social sectors, touching thousands of lives through grassroots interventions, capacity building, and sustainable development programs. Our work spans over 100 villages in and around Chikkamagaluru district.",
    "We operate with transparency, accountability, and deep respect for the communities we serve. Every rupee donated goes towards creating lasting, measurable impact.",
  ],
  values: [
    { icon: "🌱", title: "Sustainability", desc: "Long-term, eco-conscious development approaches" },
    { icon: "🤝", title: "Community First", desc: "Every decision centers the community's needs" },
    { icon: "📊", title: "Transparency", desc: "Accountable, audited, and openly governed" },
    { icon: "⚡", title: "Impact-Driven", desc: "Measurable outcomes in every program" },
  ],
  president: {
    name: "RAJENDRA K K",
    org: "Founder",
    quote:
      "Our mission is simple — leave no rural family behind. We believe that with the right support, every community has the power to transform itself.",
  },
}

export const testimonials = [
  {
    id: 1,
    name: "Smt. Manjula",
    role: "Farmer, Togarihankal Village, Chikmagalur",
    text: "With the support and encouragement of Swaraj Samsthe, I have grown my poultry work into a steady livelihood. This opportunity has strengthened my family's income and given me confidence to keep building for the future.",
    rating: 5,
    initial: "M",
  },
  {
    id: 2,
    name: "Suresh Kumar",
    role: "Beneficiary, Skill Program",
    text: "I attended their vocational training program and got placed in a local company within 2 months. This organization truly changed my life and gave me a future I could not have imagined.",
    rating: 5,
    initial: "S",
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    role: "SHG Member, Chikkamagaluru",
    text: "Through the women self-help group formed by Swaraj Samsthe, I started my own small business. Now I support my family independently. Their work empowers us every day.",
    rating: 5,
    initial: "L",
  },
  {
    id: 4,
    name: "Mohan Rao",
    role: "Village Panchayat Member",
    text: "Their health camps and sanitation drives have genuinely improved our village's wellbeing. Swaraj Samsthe works with dedication and professionalism. We are proud to partner with them.",
    rating: 5,
    initial: "M",
  },
]

export const featuredBeneficiary = {
  name: "Smt. Manjula",
  role: "Farmer, Togarihankal Village, Chikmagalur",
  badge: "Featured Poultry Entrepreneur",
  title: "Poultry Work Creating Sustainable Income",
  story:
    "Smt. Manjula is building a strong poultry-based livelihood in Togarihankal Village, Chikmagalur. Her work shows how small-scale poultry farming can become a practical and sustainable path toward self-reliance, confidence, and stable family income.",
  highlights: [
    "Poultry-based livelihood development",
    "Women-led rural enterprise",
    "Better income support for the family",
  ],
  primaryImage: "/src/assets/manjula-poultry-1.jpeg",
  secondaryImage: "/src/assets/manjula-poultry-2.jpeg",
}

export const faqs = [
  {
    q: "What is Swaraj Samsthe and when was it founded?",
    a: "Swaraj Saamajika Abhivruddhi Samsthe (R.) is a registered NGO founded in 2016, based in Chikkamagaluru, Karnataka. We work across farm, non-farm, and social activity sectors to empower rural communities.",
  },
  {
    q: "How can I donate or support your work?",
    a: "You can donate via bank transfer to our current account (A/C No: 001011000404, IFSC: UTIB0SCJMSB) or via UPI ID: swarajsamsthe2018-1@okicici. Scan our QR code on the donate page. All donations are eligible for 80G tax exemption.",
  },
  {
    q: "What areas/districts does Swaraj Samsthe operate in?",
    a: "We primarily operate in Chikkamagaluru district, Karnataka, covering 100+ villages across Chikkamagaluru, Aldur, Koppa, Sringeri, Mudigere, and surrounding taluks.",
  },
  {
    q: "How can I volunteer or partner with Swaraj Samsthe?",
    a: "We welcome volunteers, CSR partners, and institutional donors. Contact us via phone at 9019868464 or email at swarajsamsthe2018@gmail.com. We have structured volunteering programs for individuals and organizations.",
  },
  {
    q: "Is Swaraj Samsthe a government-recognized organization?",
    a: "Yes, Swaraj Samsthe is a registered society under the Karnataka Societies Registration Act. We are also registered for PAN and operate a current account with UTI Bank (JMSB branch). We maintain full financial transparency.",
  },
  {
    q: "What is the impact of your programs so far?",
    a: "Since 2016, we have impacted 5,000+ lives, supported 500+ farmer families, trained 1,000+ youth in vocational skills, formed 50+ self-help groups, and conducted 200+ health and awareness camps across Chikkamagaluru district.",
  },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Donate", href: "#donate" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

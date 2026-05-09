# Swaraj Samsthe — Website

A modern, production-ready NGO website for Swaraj Saamajika Abhivruddhi Samsthe (R.), Chikkamagaluru.

## Tech Stack
- **React 18** (JavaScript)
- **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React** (icons)

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 🏗️ Production Build

```bash
npm run build
# Output in /dist folder

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

### Method 1 — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
# Follow prompts — Framework: Vite, Build: npm run build, Output: dist
```

### Method 2 — Vercel Dashboard
1. Push project to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**

---

## 🌐 Deploy to Netlify

### Method 1 — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### Method 2 — Netlify Dashboard
1. Push project to GitHub
2. Go to https://app.netlify.com/start
3. Connect GitHub repo
4. Build Command: `npm run build`
5. Publish Directory: `dist`
6. Click **Deploy Site**

---

## 📁 Project Structure

```
swaraj-samsthe/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.png          ← Swaraj Samsthe logo
│   │   ├── president.jpg     ← President & CEO photo
│   │   └── qrcode.png        ← UPI QR code
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Donate.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── siteContent.js    ← ALL content config here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Updating Content

All website content (text, phone numbers, services, FAQs, bank details, etc.) lives in:

```
src/data/siteContent.js
```

Edit this file to update any content — no need to touch individual components.

---

## 📞 Contact

- **Phone:** 9019868464, 7259444124
- **Email:** swarajsamsthe2018@gmail.com
- **Address:** Room No. 14, C/O M C Investment, Mathaias Tower, IG Road, Chikkamagaluru – 577101

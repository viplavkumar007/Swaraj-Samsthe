/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#F0C040',
          400: '#D4AF37',
          500: '#C9A84C',
          600: '#B8860B',
          700: '#92690A',
          800: '#6B4C07',
          900: '#3D2B04',
        },
        cream: {
          50:  '#FDFCF7',
          100: '#FDF8EC',
          200: '#FAF3D8',
          300: '#F5E9BF',
        },
        charcoal: {
          900: '#1A1A1A',
          800: '#2C2C2C',
          700: '#3D3D3D',
          600: '#555555',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0C040 0%, #C9A84C 50%, #B8860B 100%)',
        'gold-gradient-light': 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #F0C040 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201,168,76,0.35)',
        'gold-lg': '0 8px 40px rgba(201,168,76,0.45)',
        'gold-xl': '0 16px 60px rgba(201,168,76,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.5)' },
          '50%': { boxShadow: '0 0 0 16px rgba(201,168,76,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
}

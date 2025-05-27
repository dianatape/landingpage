import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette professionnelle "Executive Elegance"
        primary: {
          50: '#F8FAFC',   // Blanc cassé très subtil
          100: '#F1F5F9',  // Gris très clair
          200: '#E2E8F0',  // Gris clair
          300: '#CBD5E1',  // Gris moyen
          400: '#94A3B8',  // Gris bleu
          500: '#64748B',  // Gris bleu principal
          600: '#475569',  // Gris bleu foncé
          700: '#334155',  // Gris anthracite
          800: '#1E293B',  // Anthracite foncé
          900: '#0F172A',  // Presque noir
        },
        accent: {
          blue: '#3B82F6',     // Bleu professionnel
          indigo: '#6366F1',   // Indigo élégant
          teal: '#14B8A6',     // Teal moderne
          emerald: '#10B981',  // Vert émeraude
          slate: '#64748B',    // Gris bleu
        },
        // Couleurs pour les différentes activités (plus sobres)
        antiracism: {
          light: '#F0F9FF',
          main: '#0EA5E9',
          dark: '#0284C7',
        },
        family: {
          light: '#F0FDF4',
          main: '#22C55E',
          dark: '#16A34A',
        },
        couples: {
          light: '#FDF2F8',
          main: '#EC4899',
          dark: '#DB2777',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 
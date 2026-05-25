import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Premium Brand – Refined Maroon Palette */
        volt:          '#6B1F35',   // refined dark maroon
        'volt-light':  '#8B3550',   // medium maroon
        'volt-dark':   '#4A1528',   // deeper maroon
        'volt-vibrant': '#A84563',  // vibrant maroon
        electric:      '#F59E0B',
        pulse:         '#A84563',   // vibrant maroon accent
        
        /* Premium Maroon Tints */
        maroon: {
          50:  '#FDFAFB',
          100: '#FAF4F7',
          200: '#F2E8ED',
          300: '#E4D1DB',
          400: '#D1A8BC',
          500: '#A84563',
          600: '#8B3550',
          700: '#6B1F35',
          800: '#4A1528',
          900: '#2D0E1A',
        },
        
        /* Premium Accent Colors */
        cyan: {
          50:  '#E1F8FF',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        teal: {
          50:  '#E0F9F7',
          500: '#14B8A6',
          600: '#0D9488',
        },
        
        /* Surfaces - Premium */
        'bg-primary':  '#FAFBFC',
        'bg-secondary':'#F4F6F9',
        'bg-card':     '#FFFFFF',
        'bg-elevated': '#FFFFFF',
        
        /* Text - Premium */
        'text-primary':   '#0D1117',
        'text-secondary': '#3D444D',
        'text-dim':       '#8B959E',
        
        /* Border - Premium */
        border:           '#D8DEE4',
        'border-subtle':  '#EAECF0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        heading: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['monospace'],
      },
      boxShadow: {
        'volt':        '0 4px 16px rgba(107,31,53,0.1), 0 1px 3px rgba(0,0,0,0.08)',
        'volt-strong': '0 16px 32px rgba(107,31,53,0.15), 0 2px 8px rgba(0,0,0,0.1)',
        'volt-btn':    '0 4px 12px rgba(107,31,53,0.2)',
        'card':        '0 1px 2px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.06)',
        'card-hover':  '0 12px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(107,31,53,0.08)',
        'card-elevated': '0 20px 40px rgba(0,0,0,0.1)',
        'inner-top':   'inset 0 1px 0 rgba(255,255,255,0.6)',
        'glow-volt':   '0 0 24px rgba(107,31,53,0.15)',
      },
      backgroundImage: {
        'volt-gradient':    'linear-gradient(135deg, #6B1F35 0%, #4A1528 100%)',
        'volt-gradient-soft': 'linear-gradient(135deg, #8B3550 0%, #6B1F35 100%)',
        'amber-gradient':   'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'hero-gradient':    'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        'surface-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'premium-gradient': 'linear-gradient(135deg, #6B1F35 0%, #A84563 50%, #F59E0B 100%)',
      },
      animation: {
        'blob':        'blob 8s ease-in-out infinite',
        'float':       'float 4s ease-in-out infinite',
        'fade-in-up':  'fade-in-up 0.6s ease forwards',
        'marquee':     'marquee 38s linear infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-50px) scale(1.08)' },
          '66%':     { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      backgroundColor: {
        'glass': 'rgba(255,255,255,0.3)',
      },
      borderColor: {
        'glass': 'rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
}
export default config

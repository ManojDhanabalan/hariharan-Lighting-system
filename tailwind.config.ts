import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Brand — remapped to LIGHT theme */
        volt:          '#2563EB',   // Primary Blue
        'volt-light':  '#3B82F6',
        'volt-dark':   '#1D4ED8',
        electric:      '#F59E0B',   // Amber accent
        pulse:         '#0891B2',   // Teal accent
        /* Surfaces */
        'bg-primary':  '#FFFFFF',
        'bg-secondary':'#F8FAFC',
        'bg-card':     '#FFFFFF',
        'bg-elevated': '#F1F5F9',
        /* Text */
        'text-primary':   '#0F172A',
        'text-secondary': '#475569',
        'text-dim':       '#94A3B8',
        /* Border */
        border:           '#E2E8F0',
        'border-subtle':  '#F1F5F9',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        heading: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['monospace'],
      },
      boxShadow: {
        'volt':        '0 0 20px rgba(37,99,235,0.12), 0 4px 20px rgba(37,99,235,0.08)',
        'volt-strong': '0 0 30px rgba(37,99,235,0.25), 0 8px 30px rgba(37,99,235,0.15)',
        'volt-btn':    '0 4px 14px rgba(37,99,235,0.30)',
        'card':        '0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)',
        'card-hover':  '0 8px 30px rgba(0,0,0,0.12), 0 0 0 1px rgba(37,99,235,0.10)',
        'inner-top':   'inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      backgroundImage: {
        'volt-gradient':    'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'amber-gradient':   'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
        'hero-gradient':    'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)',
        'surface-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
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
    },
  },
  plugins: [],
}
export default config

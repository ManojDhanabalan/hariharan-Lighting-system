import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Brand – dark maroon palette */
        volt:          '#7B2D3E',   // dark maroon (primary)
        'volt-light':  '#9B3D52',   // medium maroon
        'volt-dark':   '#5C1F2E',   // deeper maroon
        electric:      '#F59E0B',
        pulse:         '#C4718A',   // light maroon accent
        /* Maroon tints (used like blue-50, blue-100 etc.) */
        maroon: {
          50:  '#FDF2F4',
          100: '#FBDDE3',
          200: '#F6BECA',
          300: '#EE91A5',
          400: '#E26282',
          500: '#C4718A',
          600: '#9B3D52',
          700: '#7B2D3E',
          800: '#5C1F2E',
          900: '#3D1220',
        },
        /* Surfaces */
        'bg-primary':  'var(--bg-primary)',
        'bg-secondary':'var(--bg-secondary)',
        'bg-card':     'var(--bg-card)',
        'bg-elevated': 'var(--bg-elevated)',
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
        'volt':        '0 0 20px rgba(123,45,62,0.12), 0 4px 20px rgba(123,45,62,0.08)',
        'volt-strong': '0 0 30px rgba(123,45,62,0.25), 0 8px 30px rgba(123,45,62,0.15)',
        'volt-btn':    '0 4px 14px rgba(123,45,62,0.30)',
        'card':        '0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)',
        'card-hover':  '0 8px 30px rgba(0,0,0,0.12), 0 0 0 1px rgba(123,45,62,0.10)',
        'inner-top':   'inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      backgroundImage: {
        'volt-gradient':    'linear-gradient(135deg, #7B2D3E 0%, #5C1F2E 100%)',
        'amber-gradient':   'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
        'hero-gradient':    'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)',
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

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,vue,ts}',
    './server/**/*.{js,ts}',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bbd9ff',
          300: '#8fc1ff',
          400: '#5aa0ff',
          500: '#347ff6',
          600: '#1f63db',
          700: '#194fb1',
          800: '#183f8b',
          900: '#17376e',
          950: '#0b2345'
        },
        ntl: {
          navy: '#071b35',
          blue: '#0b2345',
          steel: '#5f6b7a',
          mist: '#eef2f6'
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      boxShadow: {
        'ntl': '0 24px 70px -30px rgba(7, 27, 53, .35)',
        'ntl-dark': '0 24px 80px -30px rgba(0, 0, 0, .65)'
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      backdropBlur: { xs: '2px' }
    }
  },
  plugins: []
}

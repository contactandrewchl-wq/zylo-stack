/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zylo-bg':           '#F7F2EC',
        'zylo-bg-secondary': '#F3EEE6',
        'zylo-surface':      '#FFFFFF',
        'zylo-border':       '#E2E8F0',
        'zylo-text':         '#0F172A',
        'zylo-muted':        '#64748B',
        'zylo-orange':       '#FF6B2C',
        'zylo-pink':         '#FF2D6B',
        'zylo-yellow':       '#FFAA2C',
        // Dark mode
        'zylo-dark':         '#0A0A0A',
        'zylo-dark-warm':    '#1A0800',
        'zylo-dark-surface': '#141414',
        'zylo-dark-border':  '#2A2A2A',
        'zylo-dark-text':    '#F5F5F0',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        // Fondos
        'gradient-soft':    'linear-gradient(135deg, #F7F2EC 0%, #F3EEE6 100%)',
        'gradient-dark':    'linear-gradient(135deg, #1A0800 0%, #0A0A0A 100%)',
        // Degradado principal de marca
        'gradient-brand':   'linear-gradient(135deg, #FF2D6B 0%, #FF6B2C 50%, #FFAA2C 100%)',
        'gradient-orange':  'linear-gradient(135deg, #FF2D6B 0%, #FF6B2C 50%, #FFAA2C 100%)',
        // Variantes
        'gradient-brand-h': 'linear-gradient(90deg,  #FF2D6B 0%, #FF6B2C 50%, #FFAA2C 100%)',
        'gradient-glow':    'radial-gradient(ellipse at center, rgba(255,107,44,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'soft':        '0 1px 3px 0 rgba(15,23,42,0.08), 0 1px 2px 0 rgba(15,23,42,0.04)',
        'soft-md':     '0 4px 6px -1px rgba(15,23,42,0.08), 0 2px 4px -1px rgba(15,23,42,0.04)',
        'soft-lg':     '0 10px 15px -3px rgba(15,23,42,0.1), 0 4px 6px -2px rgba(15,23,42,0.05)',
        'brand':       '0 0 30px rgba(255,107,44,0.25), 0 0 60px rgba(255,45,107,0.1)',
        'brand-lg':    '0 0 50px rgba(255,107,44,0.35), 0 0 100px rgba(255,45,107,0.15)',
        'dark-card':   '0 4px 20px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
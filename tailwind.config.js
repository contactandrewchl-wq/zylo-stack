/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta zylo - Estudio digital
        'zylo-bg': '#F7F7F2',           // fondo principal cálido
        'zylo-bg-secondary': '#F3F0EA', // fondo suave
        'zylo-surface': '#FFFFFF',      // cards / superficies
        'zylo-border': '#E2E8F0',       // bordes sutiles
        'zylo-text': '#0F172A',         // texto principal
        'zylo-muted': '#64748B',        // texto secundario
        'zylo-orange': '#FF6B2C',       // naranja principal (CTA)
        'zylo-orange-hover': '#EA580C', // naranja hover
        'zylo-purple': '#DDD6FE',       // lila suave
        'zylo-blue': '#BFD7FF',         // azul suave
        'zylo-lime': '#D9F99D',         // verde lima suave
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #F7F7F2 0%, #F3F0EA 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6B2C 0%, #EA580C 100%)',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'soft-md': '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -1px rgba(15, 23, 42, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
}
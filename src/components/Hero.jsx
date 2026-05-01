import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT } from '../config/contact'
import ObfuscatedLink from './ObfuscatedLink'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const pills = [
  'Landing Pages',
  'Tiendas Online',
  'Apps Web',
  'Diseño UI/UX',
  'Automatizaciones',
  'Dominio y Hosting',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">

      {/* Glow orbs degradado de marca */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,107,44,0.1),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zylo-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">

        {/* Badge con degradado */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="badge-brand"
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse brand-dot" />
          Estudio Digital — Chile
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zylo-text leading-tight tracking-tight"
        >
          Creamos sitios y apps web
          <br />
          <span className="text-gradient">
            que convierten visitas en clientes
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-xl text-sm sm:text-base md:text-lg text-zylo-muted leading-relaxed"
        >
          Diseñamos landing pages, tiendas online y aplicaciones web para emprendedores, marcas y negocios que quieren{' '}
          <span className="text-zylo-text font-semibold">vender, automatizar y crecer.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center gap-3 mt-1 w-full sm:w-auto"
        >
          <ObfuscatedLink
            type="whatsapp"
            animate
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto btn-primary text-sm"
          >
            <MessageCircle size={16} />
            Quiero cotizar mi proyecto
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </ObfuscatedLink>

          
          <a  href="#servicios"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full border border-zylo-border hover:border-zylo-orange/40 text-zylo-muted hover:text-zylo-text text-sm font-medium transition-all duration-200"
          >
            Ver soluciones
          </a>
        </motion.div>

        {/* Pills de servicios */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-2 mt-2"
        >
          {pills.map((pill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-zylo-border text-zylo-muted hover:border-zylo-orange/30 hover:text-zylo-orange transition-all duration-200 cursor-default"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 text-xs text-zylo-muted mt-1"
        >
          <span className="w-2 h-2 rounded-full animate-pulse brand-dot" />
          Asesoría inicial sin costo · Sin compromiso
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #FF6B2C, transparent)' }}
        />
      </motion.div>

    </section>
  )
}
import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import ObfuscatedLink from './ObfuscatedLink'

const footerLinks = {
  Servicios: [
    'Landing Pages',
    'Tiendas Online',
    'Aplicaciones Web',
    'Diseño UI/UX',
    'Automatizaciones',
    'Dominio y Hosting',
  ],
  Soluciones: [
    'Para emprendedores',
    'Para marcas de ropa',
    'Para servicios profesionales',
    'Para restaurantes',
    'Para startups',
    'Para negocios locales',
  ],
  Empresa: [
    { label: 'Proceso', href: '/#proceso' },
    { label: 'Precios', href: '/precios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/#contacto' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0A0A0A, #0A0005)' }}>

      {/* Glow sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,44,0.05) 0%, transparent 70%)' }} />

      {/* Borde superior con degradado de marca */}
      <div className="w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF2D6B, #FF6B2C, #FFAA2C, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="/" className="inline-block mb-4">
              <img src="/logo_white.svg" alt="zylo stack" className="h-7 w-auto" />
            </a>
            <p className="text-zylo-dark-text/50 text-sm mb-6 leading-relaxed">
              Estudio digital que crea landing pages, tiendas online y aplicaciones web para emprendedores, pymes y marcas que quieren vender mejor en internet.
            </p>
            <div className="flex gap-3">
              <ObfuscatedLink
                type="email"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
              >
                <Mail className="w-4 h-4" />
              </ObfuscatedLink>
              <ObfuscatedLink
                type="whatsapp"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
              >
                <MessageCircle className="w-4 h-4" />
              </ObfuscatedLink>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], columnIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: columnIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-bold text-zylo-dark-text mb-4 text-sm tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const href = typeof link === 'string' ? '#' : link.href
                  const label = typeof link === 'string' ? link : link.label
                  return (
                    <li key={label}>
                      
                      <a  href={href}
                        className="text-sm transition-all duration-200"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                        onMouseEnter={e => e.target.style.color = '#FF6B2C'}
                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-center md:text-left"
            style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {currentYear} zylo. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Hecho con ❤️ en Chile 🇨🇱
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
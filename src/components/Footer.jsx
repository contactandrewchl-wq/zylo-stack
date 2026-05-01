import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import { CONTACT } from '../config/contact'
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
    { label: 'Contacto', href: '/#contacto' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-zylo-bg-secondary border-t border-zylo-border">
      <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />

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
              <span className="font-display font-bold text-xl text-zylo-text">
                zy<span className="bg-gradient-orange bg-clip-text text-transparent">lo.</span>
              </span>
            </a>
            <p className="text-zylo-muted text-sm mb-6 leading-relaxed">
              Estudio digital que crea landing pages, tiendas online y aplicaciones web para emprendedores, pymes y marcas que quieren vender mejor en internet.
            </p>
            <div className="flex gap-3">
              
              <ObfuscatedLink  
                type="email"
                className="w-8 h-8 rounded-lg bg-zylo-surface hover:bg-zylo-border border border-zylo-border flex items-center justify-center text-zylo-muted hover:text-zylo-orange transition-all"
              >
                <Mail className="w-4 h-4" />
              </ObfuscatedLink>
              
              <ObfuscatedLink
                type="whatsapp"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zylo-surface hover:bg-zylo-border border border-zylo-border flex items-center justify-center text-zylo-muted hover:text-zylo-orange transition-all"
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
              <h4 className="font-display font-bold text-zylo-text mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const href = typeof link === 'string' ? '#' : link.href
                  const label = typeof link === 'string' ? link : link.label
                  return (
                    <li key={label}>
                    
                    <a    href={href}
                        className="text-zylo-muted hover:text-zylo-orange transition-colors text-sm"
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
          className="pt-8 border-t border-zylo-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-zylo-muted text-xs text-center md:text-left">
            © {currentYear} zylo. Todos los derechos reservados.
          </p>
          <p className="text-zylo-muted text-xs">
            Hecho con ❤️ en Chile 🇨🇱
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
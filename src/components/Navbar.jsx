import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { CONTACT } from '../config/contact'

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Precios', href: '/precios' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Nosotros', href: '/nosotros' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      
      <div className="w-full px-12 h-16 flex items-center relative">

        {/* Logo — izquierda */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="font-display font-bold text-2xl text-zylo-text tracking-tight">
            zylo<span className="text-zylo-orange">.</span>
          </span>
        </a>

        {/* Nav pill — centro absoluto */}
        <nav className="hidden md:flex items-center gap-8 px-4 py-2 rounded-full bg-white/62 backdrop-blur-xl border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm font-medium text-zylo-muted hover:text-zylo-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA — derecha */}
        <div className="flex items-center gap-4 ml-auto">
          <motion.a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Cotizar proyecto
          </motion.a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-zylo-bg-secondary rounded-lg transition-colors"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-zylo-text" />
            ) : (
              <Menu className="w-5 h-5 text-zylo-text" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/60 backdrop-blur-xl border-b border-white/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-zylo-text hover:text-zylo-orange transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <a  href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 btn-primary text-sm text-center"
              >
                Cotizar proyecto
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
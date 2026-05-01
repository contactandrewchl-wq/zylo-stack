import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { CONTACT } from '../config/contact'
import ObfuscatedLink from './ObfuscatedLink'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Precios', href: '/precios' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Nosotros', href: '/nosotros' },
]

const darkSections = {
  '/':         ['#servicios', '#contacto'],
  '/precios':  ['.faq-dark'],
  '/nosotros': ['.nosotros-dark'],
}

function useDarkSection(selectors = []) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const dark = selectors.some((selector) => {
        const el = document.querySelector(selector)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 80 && rect.bottom >= 80
      })
      setIsDark(dark)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [selectors.join(',')])

  return isDark
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isDark = useDarkSection(darkSections[location.pathname] || [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full px-12 h-16 flex items-center relative">

        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src={isDark ? '/logo_white.svg' : '/logo_black.svg'}
            alt="zylo stack"
            className="h-7 w-auto transition-all duration-300"
          />
        </a>

        {/* Nav pill */}
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

        {/* CTA */}
        <div className="flex items-center gap-4 ml-auto">
          <ObfuscatedLink
            type="whatsapp"
            animate
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Cotizar proyecto
          </ObfuscatedLink>

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
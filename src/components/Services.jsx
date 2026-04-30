import { CONTACT } from '../config/contact'
import { motion } from 'framer-motion'
import {
  Globe,
  ShoppingCart,
  AppWindow,
  Palette,
  Zap,
  Settings,
} from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Globe,
    title: 'Landing Pages',
    description: 'Páginas modernas para presentar tu negocio, servicio o campaña. Diseño responsive, formulario de contacto e integración con WhatsApp.',
    tags: ['Servicios profesionales', 'Marcas personales', 'Campañas'],
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'Tiendas Online',
    description: 'Vende tus productos de forma profesional. Catálogo, carrito, flujo de compra e integración de pagos según tu necesidad.',
    tags: ['Ropa', 'Accesorios', 'Productos digitales'],
  },
  {
    id: 3,
    icon: AppWindow,
    title: 'Aplicaciones Web',
    description: 'Digitaliza procesos de tu negocio con apps a medida. Cotizadores, reservas, paneles internos y formularios avanzados.',
    tags: ['Reservas', 'Cotizadores', 'Gestión interna'],
  },
  {
    id: 4,
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces limpias, modernas y adaptadas a tu marca. Diseñamos pensando en la experiencia del usuario y la conversión.',
    tags: ['Prototipos', 'Rediseños', 'Identidad digital'],
  },
  {
    id: 5,
    icon: Zap,
    title: 'Automatizaciones',
    description: 'Conectamos tu web con WhatsApp, formularios, correos y APIs para que tu proceso de venta funcione solo.',
    tags: ['WhatsApp', 'Formularios', 'Integraciones'],
  },
  {
    id: 6,
    icon: Settings,
    title: 'Dominio y Hosting',
    description: 'Te ayudamos con la configuración de dominio, hosting, correos profesionales y publicación de tu proyecto.',
    tags: ['Dominio', 'Hosting', 'Correos'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  hover: { y: -6, transition: { duration: 0.3 } },
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-zylo-orange/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-zylo-orange text-sm font-semibold tracking-wide uppercase mb-2"
          >
            Nuestros Servicios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl text-zylo-text mb-4 leading-tight"
          >
            Todo lo que tu negocio necesita
            <br />
            <span className="bg-gradient-orange bg-clip-text text-transparent">para vender online</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zylo-muted text-lg max-w-2xl mx-auto"
          >
            Desde una landing page simple hasta una app web a medida. Construimos lo que tu negocio necesita, al ritmo que necesitas crecer.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="card group cursor-pointer hover:border-zylo-orange/30 transition-colors"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-zylo-orange/10 flex items-center justify-center mb-4 group-hover:bg-zylo-orange/20 transition-colors">
                  <Icon className="w-5 h-5 text-zylo-orange" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-zylo-text mb-2">
                  {service.title}
                </h3>

                <p className="text-zylo-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-zylo-surface border border-zylo-border text-zylo-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zylo-muted text-sm mb-4">
            ¿No encuentras lo que buscas? Conversemos sobre tu proyecto.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            Cotizar proyecto personalizado
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
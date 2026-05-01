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
    <section id="servicios" className="relative py-24 px-6 section-dark">

      {/* Glow orb sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,45,107,0.08),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,170,44,0.06) 0%, transparent 70%)' }} />

      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <span className="badge-brand">Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-zylo-dark-text mb-4 leading-tight"
          >
            Todo lo que tu negocio necesita
            <br />
            <span className="text-gradient">para vender online</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zylo-dark-text/60 text-lg max-w-2xl mx-auto"
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
                className="card-dark group cursor-pointer"
              >
                {/* Icon con degradado */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,107,44,0.1)', border: '1px solid rgba(255,107,44,0.2)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#FF6B2C' }} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-zylo-dark-text mb-2">
                  {service.title}
                </h3>

                <p className="text-zylo-dark-text/50 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full text-zylo-dark-text/40 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
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
          <p className="text-zylo-dark-text/40 text-sm mb-4">
            ¿No encuentras lo que buscas? Conversemos sobre tu proyecto.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Cotizar proyecto personalizado
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
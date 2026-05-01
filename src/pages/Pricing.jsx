import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import ObfuscatedLink from "../components/ObfuscatedLink"

const plans = [
  {
    name: 'Landing Start',
    description: 'Para negocios que necesitan presencia profesional.',
    price: '250.000',
    highlight: false,
    includes: [
      'Landing page responsive',
      'Hasta 5 secciones',
      'Formulario de contacto',
      'Botón WhatsApp',
      'Diseño personalizado básico',
      'Publicación en hosting',
    ],
  },
  {
    name: 'Tienda Pro',
    description: 'Para marcas que quieren vender online.',
    price: '600.000',
    highlight: true,
    includes: [
      'Home + catálogo de productos',
      'Página de producto',
      'Carrito de compra',
      'Integración de pagos',
      'Diseño responsive',
      'Configuración inicial',
    ],
  },
  {
    name: 'App Web MVP',
    description: 'Para negocios que necesitan una solución personalizada.',
    price: '900.000',
    highlight: false,
    includes: [
      'Diseño UI/UX',
      'Desarrollo frontend',
      'Funcionalidad personalizada',
      'Panel o flujo interno simple',
      'Base de datos según necesidad',
      'Publicación inicial',
    ],
  },
]

const faqs = [
  {
    q: '¿Cuánto se demora?',
    a: 'Una landing page puede tomar entre 1 y 3 semanas. Una tienda online o app web puede tomar más tiempo dependiendo del diseño, productos y funcionalidades.',
  },
  {
    q: '¿Puedo partir con una landing y luego agregar tienda?',
    a: 'Sí. Podemos construir tu proyecto por etapas para que partas con presencia profesional y luego escales hacia carrito, pagos o funcionalidades personalizadas.',
  },
  {
    q: '¿Incluye dominio y hosting?',
    a: 'Podemos orientarte en la compra y configuración de dominio, hosting y correos. El costo de esos servicios externos se cotiza aparte.',
  },
  {
    q: '¿Trabajan con WordPress?',
    a: 'Sí, podemos trabajar con WordPress/WooCommerce o con desarrollo a medida, según lo que más convenga para tu negocio.',
  },
  {
    q: '¿Puedo administrar mi tienda después?',
    a: 'Sí. Buscamos dejar una solución que puedas administrar de forma simple: cargar productos, editar información o revisar pedidos.',
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen" style={{ background: '#F7F2EC' }}>

      {/* Header */}
      <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,45,107,0.06),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <span className="badge-brand">Precios</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl text-zylo-text mb-4 leading-tight"
          >
            Planes claros,
            <br />
            <span className="text-gradient">sin sorpresas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zylo-muted text-lg"
          >
            Precios desde — cada proyecto puede variar según alcance y funcionalidades.
          </motion.p>
        </div>
      </div>

      {/* Plans */}
              <div className="px-6 pb-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-start">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`card relative flex flex-col ${
                        plan.highlight
                          ? 'shadow-brand'
                          : ''
                      }`}
                      style={plan.highlight ? { borderColor: 'rgba(255,107,44,0.3)' } : {}}
                    >
                      {plan.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                            style={{ background: 'linear-gradient(135deg, #FF2D6B, #FF6B2C, #FFAA2C)' }}>
                            Más popular
                          </span>
                        </div>
                      )}

              <div className="relative inline-flex items-baseline gap-1">
                <span className="text-xs text-zylo-muted">Desde</span>
                <span className="font-display font-black text-3xl text-zylo-text">
                  ${plan.price}
                </span>
                <span className="text-xs text-zylo-muted">CLP</span>
                <span
                  className="flex -top-3 -right-8 text-xs font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(255,107,44,0.1)',
                    border: '1px solid rgba(255,107,44,0.25)',
                    color: '#FF6B2C',
                    fontSize: '9px',
                  }}
                >
                  + IVA
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zylo-text">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#FF6B2C' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <ObfuscatedLink
                type="whatsapp"
                animate
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlight ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar este plan
              </ObfuscatedLink>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-zylo-muted text-sm mb-20 max-w-md mx-auto"
        >
          ¿Tu proyecto no encaja en ningún plan? Escríbenos y armamos una propuesta a medida.
        </motion.p>
      </div>

      {/* FAQ — dark section */}
      <div className="faq-dark relative py-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0800 0%, #0A0A0A 100%)' }}>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,45,107,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl text-zylo-dark-text text-center mb-2"
          >
            Preguntas <span className="text-gradient">frecuentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zylo-dark-text/50 text-center text-sm mb-10"
          >
            Todo lo que necesitas saber antes de empezar.
          </motion.p>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-dark"
              >
                <h3 className="font-display font-bold text-zylo-dark-text mb-2">
                  {faq.q}
                </h3>
                <p className="text-zylo-dark-text/50 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-zylo-dark-text/40 text-sm mb-4">
              ¿Tienes dudas? Escríbenos sin compromiso.
            </p>
            <ObfuscatedLink
              type="whatsapp"
              animate
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Hablar por WhatsApp
            </ObfuscatedLink>
          </motion.div>
        </div>
      </div>

    </div>
  )
}
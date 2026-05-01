import { motion } from 'framer-motion'
import { MessageCircle, Layout, Code2, CheckCircle, Rocket } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Entendemos tu negocio',
    description: 'Conversamos sobre tu idea, tus objetivos, tus clientes y lo que necesitas vender o automatizar.',
  },
  {
    number: 2,
    icon: Layout,
    title: 'Diseñamos la estructura',
    description: 'Definimos las secciones, funcionalidades y estilo visual de tu sitio o aplicación.',
  },
  {
    number: 3,
    icon: Code2,
    title: 'Desarrollamos tu solución',
    description: 'Construimos una web rápida, responsive y preparada para usarse en computador y celular.',
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Revisamos y ajustamos',
    description: 'Probamos contigo el resultado, corregimos detalles y dejamos todo listo para publicar.',
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Publicamos y acompañamos',
    description: 'Te ayudamos con dominio, hosting, correos, formularios, integraciones y soporte inicial.',
  },
]

export default function HowWorks() {
  return (
    <section id="proceso" className="relative py-24 px-6 bg-zylo-bg">

      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <span className="badge-brand">Nuestro Proceso</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-zylo-text mb-4 leading-tight"
          >
            Un proceso simple,
            <br />
            <span className="text-gradient">claro y acompañado</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zylo-muted text-lg max-w-xl mx-auto"
          >
            Te guiamos desde la idea hasta el lanzamiento, paso a paso.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-0">

          

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 pb-10 last:pb-0"
              >
                {/* Ícono con degradado */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center gap-0.5 transition-all duration-300"
                  style={{
                    background: 'rgba(255,107,44,0.08)',
                    border: '1px solid rgba(255,107,44,0.2)',
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#FF6B2C' }} />
                  <span className="text-xs font-bold" style={{ color: 'rgba(255,107,44,0.5)' }}>
                    {step.number}
                  </span>
                </div>

                {/* Contenido */}
                <div className="pt-2">
                  <h3 className="font-display font-bold text-lg text-zylo-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-zylo-muted leading-relaxed text-sm max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zylo-muted mb-6 text-sm">
            ¿Tienes una idea o negocio que necesita una web?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Quiero cotizar mi proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
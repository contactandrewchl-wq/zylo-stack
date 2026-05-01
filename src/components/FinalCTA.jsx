import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import ObfuscatedLink from './ObfuscatedLink'

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0800 0%, #0A0A0A 50%, #0A0005 100%)' }}>

      {/* Glow orbs de marca */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,45,107,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,170,44,0.08) 0%, transparent 70%)' }} />

      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="badge-brand">Hablemos</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display font-black text-4xl sm:text-5xl text-zylo-dark-text mb-4 leading-tight"
        >
          ¿Tienes una idea?
          <br />
          <span className="text-gradient">Conversemos.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zylo-dark-text/60 text-lg mb-10 leading-relaxed"
        >
          Sin formularios largos ni reuniones eternas. Escríbenos directo y en menos de 24 horas te respondemos con ideas y un presupuesto claro.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ObfuscatedLink
            type="whatsapp"
            animate
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center justify-center gap-2 text-base py-3 px-8"
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </ObfuscatedLink>

          <ObfuscatedLink
            type="email"
            animate
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 text-base py-3 px-8 rounded-full font-semibold transition-all duration-300 text-white"
            style={{ border: '1px solid rgba(255,107,44,0.5)', color: '#FFFFFF' }}
          >
            <Mail className="w-5 h-5" />
            Enviar un correo
          </ObfuscatedLink>
        </motion.div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-zylo-dark-text/30 text-sm mt-8"
        >
          Asesoría inicial sin costo. Sin compromiso.
        </motion.p>

      </div>
    </section>
  )
}
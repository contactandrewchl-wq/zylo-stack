import { motion } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { CONTACT } from '../config/contact'

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-zylo-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-zylo-orange text-sm font-semibold tracking-wide uppercase mb-4"
        >
          Hablemos
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl sm:text-5xl text-zylo-text mb-4 leading-tight"
        >
          ¿Tienes una idea?
          <br />
          <span className="bg-gradient-orange bg-clip-text text-transparent">Conversemos.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zylo-muted text-lg mb-10 leading-relaxed"
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
          <motion.a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center justify-center gap-2 text-base py-3 px-8"
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </motion.a>

          <motion.a
            href={CONTACT.emailUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center justify-center gap-2 text-base py-3 px-8"
          >
            <Mail className="w-5 h-5" />
            Enviar un correo
          </motion.a>
        </motion.div>

        {/* Nota tranquilizadora */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-zylo-muted text-sm mt-8"
        >
          Asesoría inicial sin costo. Sin compromiso.
        </motion.p>

      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { MessageCircle, Target, Eye, Heart } from 'lucide-react'
import { CONTACT } from '../config/contact'

const pillars = [
  {
    icon: Heart,
    label: 'Propósito',
    text: 'Creemos que la tecnología debe ser simple, accesible y útil. Acompañamos a emprendedores, pymes y marcas en el proceso de transformar sus ideas en soluciones digitales reales, claras y funcionales.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: Target,
    label: 'Misión',
    text: 'Crear landing pages, tiendas online y aplicaciones web modernas que ayuden a los negocios a vender mejor, automatizar procesos y profesionalizar su presencia en internet.',
    color: 'text-zylo-orange',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Eye,
    label: 'Visión',
    text: 'Convertirnos en un estudio digital referente para emprendedores, pymes y marcas en Chile y Latinoamérica, reconocido por desarrollar soluciones web accesibles, bien diseñadas y orientadas a resultados reales.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
]

export default function Nosotros() {
  return (
    <div className="pt-32 pb-24 bg-zylo-bg min-h-screen overflow-hidden">

      {/* Hero section */}
      <div className="relative px-6 mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zylo-orange/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zylo-orange/30 bg-zylo-orange/10 text-zylo-orange text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zylo-orange animate-pulse" />
            Estudio Digital — Chile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl text-zylo-text mb-6 leading-tight"
          >
            El equipo detrás
            <br />
            <span className="bg-gradient-orange bg-clip-text text-transparent">
              de zylo.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zylo-muted text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Combinamos diseño, desarrollo y estrategia para construir productos digitales que no solo se vean bien, sino que respondan a objetivos concretos: captar clientes, generar confianza, ordenar procesos y facilitar el crecimiento.
          </motion.p>
        </div>
      </div>

      {/* Propósito, Misión, Visión */}
      <div className="px-6 mb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`card ${item.bg} ${item.border} group transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <p className={`${item.color} text-xs font-bold tracking-widest uppercase mb-3`}>
                  {item.label}
                </p>
                <p className="text-zylo-text text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Divisor */}
      <div className="px-6 mb-16">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="flex-1 h-px bg-zylo-border" />
          <span className="text-zylo-muted text-xs font-semibold tracking-widest uppercase">Fundador</span>
          <div className="flex-1 h-px bg-zylo-border" />
        </div>
      </div>

      {/* Fundador */}
      <div className="px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-zylo-orange/10 rounded-3xl blur-2xl" />
              <img
                src="/team/mauricio01.webp"
                alt="Mauricio Pastene"
                className="relative w-full max-w-sm mx-auto rounded-3xl object-cover shadow-[0_20px_60px_rgba(255,107,44,0.15)]"
              />
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              <div>
                <p className="text-zylo-orange text-xs font-bold tracking-widest uppercase mb-2">
                  Fundador & CEO
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-zylo-text leading-tight">
                  Mauricio Pastene
                </h2>
              </div>

              <p className="text-zylo-text text-base leading-relaxed font-medium">
                "Zylo nació de una idea simple: que cualquier negocio, sin importar su tamaño, merece una presencia digital profesional."
              </p>

              <p className="text-zylo-muted text-sm leading-relaxed">
                Vivimos en un momento único. La inteligencia artificial está redefiniendo lo que es posible construir, a qué velocidad y con qué nivel de calidad. Lo que antes requería grandes equipos y meses de trabajo, hoy puede hacerse en días — con precisión, creatividad y propósito.
              </p>

              <p className="text-zylo-muted text-sm leading-relaxed">
                En zylo. aprovechamos ese poder para democratizar el acceso a tecnología web de calidad. No somos solo desarrolladores — somos estrategas digitales que entienden el negocio detrás de cada proyecto. Cada línea de código, cada sección diseñada, tiene un objetivo claro: ayudarte a vender más, generar confianza y crecer.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {['Diseño Web', 'Desarrollo', 'IA Aplicada', 'Estrategia Digital', 'UX/UI'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-zylo-surface border border-zylo-border text-zylo-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-zylo-muted text-sm mb-4">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
          <motion.a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Escríbenos por WhatsApp
          </motion.a>
        </motion.div>
      </div>

    </div>
  )
}
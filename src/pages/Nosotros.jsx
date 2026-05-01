import { motion } from 'framer-motion'
import { MessageCircle, Target, Eye, Heart } from 'lucide-react'
import ObfuscatedLink from "../components/ObfuscatedLink"

const pillars = [
  {
    icon: Heart,
    label: 'Propósito',
    text: 'Creemos que la tecnología debe ser simple, accesible y útil. Acompañamos a emprendedores, pymes y marcas en el proceso de transformar sus ideas en soluciones digitales reales, claras y funcionales.',
    color: '#FF2D6B',
    bg: 'rgba(255,45,107,0.08)',
    border: 'rgba(255,45,107,0.15)',
  },
  {
    icon: Target,
    label: 'Misión',
    text: 'Crear landing pages, tiendas online y aplicaciones web modernas que ayuden a los negocios a vender mejor, automatizar procesos y profesionalizar su presencia en internet.',
    color: '#FF6B2C',
    bg: 'rgba(255,107,44,0.08)',
    border: 'rgba(255,107,44,0.15)',
  },
  {
    icon: Eye,
    label: 'Visión',
    text: 'Convertirnos en un estudio digital referente para emprendedores, pymes y marcas en Chile y Latinoamérica, reconocido por desarrollar soluciones web accesibles, bien diseñadas y orientadas a resultados reales.',
    color: '#FFAA2C',
    bg: 'rgba(255,170,44,0.08)',
    border: 'rgba(255,170,44,0.15)',
  },
]

export default function Nosotros() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ background: '#F7F2EC' }}>

      {/* Hero section — claro */}
      <div className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,45,107,0.06),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="badge-brand">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse brand-dot" />
              Estudio Digital — Chile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl text-zylo-text mb-6 leading-tight"
          >
            El equipo detrás
            <br />
            <span className="text-gradient">de zylo.</span>
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

      {/* Propósito, Misión, Visión — dark */}
      <div className="nosotros-dark relative py-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0800 0%, #0A0A0A 100%)' }}>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,44,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="card-dark group transition-all duration-300"
                style={{ borderColor: item.border }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: item.bg, border: `1px solid ${item.border}` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: item.color }}>
                  {item.label}
                </p>
                <p className="text-zylo-dark-text/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Fundador — claro */}
      <div className="relative py-20 px-6" style={{ background: '#F7F2EC' }}>
        <div className="max-w-5xl mx-auto">

          {/* Divisor */}
          <div className="flex items-center gap-6 mb-16">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,107,44,0.2)' }} />
            <span className="text-zylo-muted text-xs font-semibold tracking-widest uppercase">Fundador</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,107,44,0.2)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl blur-2xl"
                style={{ background: 'rgba(255,107,44,0.08)' }} />
              <img
                src="/team/mauricio01.webp"
                alt="Mauricio Pastene"
                className="relative w-full max-w-sm mx-auto rounded-3xl object-cover"
                style={{ boxShadow: '0 20px 60px rgba(255,107,44,0.15)' }}
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
                <p className="text-xs font-bold tracking-widest uppercase mb-2 text-gradient">
                  Fundador & CEO
                </p>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-zylo-text leading-tight">
                  Mauricio Pastene
                </h2>
              </div>

              <p className="text-zylo-text text-base leading-relaxed font-semibold border-l-2 pl-4"
                style={{ borderColor: '#FF6B2C' }}>
                "Zylo nació de una idea simple: que cualquier negocio, sin importar su tamaño, merece una presencia digital profesional."
              </p>

              <p className="text-zylo-muted text-sm leading-relaxed">
                Vivimos en un momento único. La inteligencia artificial está redefiniendo lo que es posible construir, a qué velocidad y con qué nivel de calidad. Lo que antes requería grandes equipos y meses de trabajo, hoy puede hacerse en días — con precisión, creatividad y propósito.
              </p>

              <p className="text-zylo-muted text-sm leading-relaxed">
                En zylo. aprovechamos ese poder para democratizar el acceso a tecnología web de calidad. No somos solo desarrolladores — somos estrategas digitales que entienden el negocio detrás de cada proyecto.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {['Diseño Web', 'Desarrollo', 'IA Aplicada', 'Estrategia Digital', 'UX/UI'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-zylo-border text-zylo-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA — dark */}
      <div className="nosotros-dark relative py-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0800 0%, #0A0A0A 100%)' }}>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,45,107,0.1) 0%, transparent 70%)' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 max-w-xl mx-auto text-center"
        >
          <p className="text-zylo-dark-text/40 text-sm mb-4">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
          <ObfuscatedLink
            type="whatsapp"
            animate
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Escríbenos por WhatsApp
          </ObfuscatedLink>
        </motion.div>
      </div>

    </div>
  )
}
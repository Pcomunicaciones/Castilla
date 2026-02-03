"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  FileText, 
  Scale, 
  Shield, 
  Eye, 
  Briefcase, 
  ChevronRight, 
  Gavel, 
  ExternalLink 
} from "lucide-react"

const orgStructure = [
  {
    title: "Asamblea General de Accionistas",
    description: "Máximo órgano de decisión y representación de la propiedad.",
    level: 1,
    accent: "border-castilla-yellow"
  },
  {
    title: "Junta Directiva",
    description: "Colegiado encargado de la dirección estratégica y supervisión técnica.",
    level: 2,
    accent: "border-castilla-green"
  },
  {
    title: "Presidencia Ejecutiva",
    description: "Liderazgo operativo y ejecución de los planes de sostenibilidad.",
    level: 3,
    accent: "border-castilla-green-light"
  },
  {
    title: "Comités Externos & Apoyo",
    description: "Vigilancia especializada en Auditoría, Riesgos y Cumplimiento.",
    level: 3,
    accent: "border-castilla-green-light"
  }
]

const principles = [
  {
    icon: Shield,
    title: "Transparencia",
    description: "Garantizamos el acceso a información veraz y oportuna para el mercado.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Scale,
    title: "Equidad",
    description: "Protección de los derechos de todos los accionistas, mayoritarios y minoritarios.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Eye,
    title: "Rendición de Cuentas",
    description: "Estructuras claras de responsabilidad para cada nivel de mando.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: FileText,
    title: "Cumplimiento",
    description: "Adhesión voluntaria a los más altos estándares de ética global.",
    color: "bg-purple-50 text-purple-600"
  }
]

export default function GobiernoCorporativoPage() {
  return (
    <div className="relative space-y-24 pb-24 overflow-hidden">
      {/* fondo decorativo global */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-castilla-green/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-10 h-72 w-72 rounded-full bg-castilla-yellow/10 blur-3xl" />
      </div>

      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            className="h-[2px] w-12 bg-castilla-yellow"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <span className="text-castilla-green font-bold uppercase tracking-[0.3em] text-[11px]">
            Institucional
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-castilla-green-dark mb-4 leading-none tracking-tight">
              Estructura de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-castilla-green-dark via-castilla-green to-castilla-yellow">
                Confianza.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-castilla-gray max-w-2xl leading-relaxed font-light">
              Nuestra gobernanza es el cimiento que asegura la longevidad de Castilla Agrícola S.A., 
              alineando los intereses de la empresa con el bienestar de la sociedad colombiana.
            </p>
          </div>

          {/* Chips/resumen lateral */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3 text-xs md:text-sm"
          >
            {[
              "Gobierno Corporativo",
              "Ética y Cumplimiento",
              "Creación de Valor Sostenible"
            ].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="inline-flex items-center gap-2 rounded-full border border-castilla-green/20 bg-white/70 px-4 py-2 text-castilla-green-dark shadow-sm backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-castilla-yellow" />
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ORGANIGRAMA */}
      <section className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-castilla-green-dark flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-castilla-green/5 text-castilla-green">
              <Users className="h-6 w-6" />
            </span>
            Arquitectura Organizacional
          </h2>
          <p className="hidden md:block text-xs uppercase tracking-[0.25em] text-castilla-gray">
            De lo estratégico a lo operativo
          </p>
        </div>

        <div className="relative max-w-4xl space-y-6">
          {/* Línea vertical */}
          <div className="pointer-events-none absolute left-[-1rem] top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-castilla-green/40 via-gray-100 to-castilla-yellow/40 md:block" />

          {orgStructure.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <motion.div
                whileHover={{ 
                  y: -10, 
                  scale: 1.02, 
                  rotateX: 2, 
                  boxShadow: "0 20px 45px rgba(0,0,0,0.12)" 
                }}
                initial={{ 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
                }}
                animate={{ 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`relative group flex items-start gap-6 p-6 md:p-7 bg-white rounded-2xl border-l-8 ${item.accent} transition-all duration-300`}
                style={{ marginLeft: `${(item.level - 1) * 3}rem` }}
              >
                {/* Conector horizontal */}
                <div className="absolute -left-[2.5rem] top-1/2 hidden h-[2px] w-8 -translate-y-1/2 bg-gray-100 transition-colors group-hover:bg-castilla-yellow md:block" />

                {/* Badge nivel */}
                <div className="relative">
                  <div className="bg-gray-50 p-3 rounded-xl text-castilla-green-dark group-hover:bg-castilla-green group-hover:text-white transition-colors flex items-center justify-center">
                    <Gavel size={22} />
                  </div>
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-castilla-green/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-castilla-green-dark">
                    Nivel {item.level}
                  </span>
                </div>

                <div className="pt-1 space-y-2">
                  <h3 className="text-lg md:text-xl font-black text-castilla-green-dark group-hover:text-castilla-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-castilla-gray leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-300 group-hover:bg-castilla-yellow/10 group-hover:text-castilla-yellow"
                  initial={{ x: 0, opacity: 0.5 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.div>

                {/* Glow hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-castilla-yellow/5 via-transparent to-castilla-green/5 blur-xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-castilla-green-dark">
              Principios de Gobierno Corporativo
            </h2>
            <p className="text-sm text-castilla-gray mt-1">
              Los valores que sostienen cada decisión dentro de la organización.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[11px] text-castilla-gray">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Enfoque de mejora continua
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <motion.div
                initial={{ 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
                }}
                animate={{ 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02, 
                  rotateX: 2, 
                  boxShadow: "0 20px 45px rgba(0,0,0,0.12)" 
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative h-full rounded-[2rem] border border-gray-100 bg-white p-7 text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
              >
                {/* anillo giratorio sutil */}
                <motion.div
                  className="pointer-events-none absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-dashed border-castilla-green/20"
                  animate={{ rotate: [0, 8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div
                  className={`relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ${principle.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  <principle.icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-castilla-green-dark mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-castilla-gray leading-relaxed">
                  {principle.description}
                </p>

                {/* Línea inferior animated */}
                <motion.div
                  className="mt-5 h-[2px] w-10 mx-auto rounded-full bg-gradient-to-r from-castilla-green/20 via-castilla-yellow/60 to-castilla-green/50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CÓDIGO DE ÉTICA */}
      <motion.section
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[3rem] border border-gray-100 bg-white p-10 md:p-16 shadow-2xl"
      >
        {/* decoraciones */}
        <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-castilla-green/6 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-castilla-yellow/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_55%)]" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-castilla-yellow/20 text-castilla-green-dark">
              <Shield size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-castilla-green-dark mb-5 tracking-tight">
              Ética, el centro de <br /> nuestra operación.
            </h2>
            <p className="text-base md:text-lg text-castilla-gray leading-relaxed mb-8">
              Nuestro Código de Ética y Conducta no es solo un documento, es la guía viva que 
              define cómo nos relacionamos con el mundo. Establece tolerancia cero ante la 
              corrupción y el comportamiento anti-ético.
            </p>

            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-2xl bg-castilla-green-dark px-8 py-4 font-semibold text-white shadow-lg shadow-castilla-green/30 hover:bg-castilla-green transition-all"
            >
              <span>Código de Ética y Conducta</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ExternalLink size={18} />
              </motion.span>
            </motion.button>

            {/* mini badges */}
            <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-castilla-gray">
              <span className="inline-flex items-center gap-2 rounded-full bg-castilla-green/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Cultura de integridad
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-castilla-yellow/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Prevención y control
              </span>
            </div>
          </div>

          {/* lista del código */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-[2rem] border border-dashed border-gray-300 bg-gray-50/80 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center justify-between text-xs text-castilla-gray">
              <span className="font-semibold tracking-[0.18em] uppercase">
                Componentes Clave
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-castilla-green" />
                Aplicación transversal
              </span>
            </div>

            <div className="space-y-4">
              {[
                "Protección de Derechos Humanos",
                "Prevención de Conflictos de Interés",
                "Privacidad y Manejo de Datos",
                "Responsabilidad Socio-Ambiental"
              ].map((text, i) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-castilla-yellow" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-castilla-yellow/30" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-semibold text-castilla-green-dark">
                      {text}
                    </span>
                    <span className="mt-1 block text-[11px] text-castilla-gray">
                      Lineamiento #{i + 1} del marco de integridad corporativa.
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { Users, FileText, Scale, Shield, Eye, Briefcase, ChevronRight, Gavel, ExternalLink } from "lucide-react"

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
    <div className="relative space-y-24 pb-20 overflow-hidden">
      
      {/* HEADER DE AUTORIDAD */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-castilla-yellow" />
          <span className="text-castilla-green font-bold uppercase tracking-widest text-xs">Institucional</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-castilla-green-dark mb-6 leading-none">
          Estructura de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-castilla-green-dark to-castilla-green">Confianza.</span>
        </h1>
        <p className="text-xl text-castilla-gray max-w-2xl leading-relaxed font-light">
          Nuestra gobernanza es el cimiento que asegura la longevidad de Castilla Agrícola S.A., 
          alineando los intereses de la empresa con el bienestar de la sociedad colombiana.
        </p>
      </motion.section>

      {/* ORGANIGRAMA INTERACTIVO (Vertical con conectores) */}
      <section className="relative">
        <h2 className="text-2xl font-bold text-castilla-green-dark mb-12 flex items-center gap-3">
          <Users className="text-castilla-yellow" /> Arquitectura Organizacional
        </h2>
        
        <div className="relative space-y-6 max-w-4xl">
          {orgStructure.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className={`relative group flex items-start gap-6 p-6 bg-white rounded-2xl border-l-8 ${item.accent} shadow-sm hover:shadow-xl transition-all`}
              style={{ marginLeft: `${(item.level - 1) * 3}rem` }}
            >
              <div className="absolute -left-[2.5rem] top-1/2 w-8 h-[2px] bg-gray-100 group-hover:bg-castilla-yellow transition-colors hidden md:block" />
              
              <div className="bg-gray-50 p-3 rounded-xl group-hover:bg-castilla-green group-hover:text-white transition-colors">
                <Gavel size={24} />
              </div>
              
              <div>
                <h3 className="text-lg font-black text-castilla-green-dark group-hover:text-castilla-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-castilla-gray leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
              
              <ChevronRight className="ml-auto text-gray-200 group-hover:text-castilla-yellow transition-colors" />
            </motion.div>
          ))}
          {/* Línea vertical de conexión decorativa */}
          <div className="absolute left-[-1rem] top-8 bottom-8 w-[2px] bg-gray-50 hidden md:block" />
        </div>
      </section>

      {/* PRINCIPIOS (Tarjetas con profundidad) */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            whileHover={{ y: -15 }}
            className="p-8 bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 text-center relative group"
          >
            <div className={`w-16 h-16 ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
              <principle.icon size={30} />
            </div>
            <h3 className="text-xl font-bold text-castilla-green-dark mb-4">{principle.title}</h3>
            <p className="text-sm text-castilla-gray leading-relaxed">{principle.description}</p>
          </motion.div>
        ))}
      </section>

      {/* CÓDIGO DE ÉTICA (Diseño de Documento Oficial) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-castilla-green/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="w-12 h-12 bg-castilla-yellow/20 text-castilla-green-dark rounded-xl flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h2 className="text-4xl font-black text-castilla-green-dark mb-6 tracking-tight">
              Ética, el centro de <br /> nuestra operación.
            </h2>
            <p className="text-castilla-gray leading-relaxed mb-8 text-lg">
              Nuestro Código de Ética y Conducta no es solo un documento, es la guía viva que 
              define cómo nos relacionamos con el mundo. Establece tolerancia cero ante la 
              corrupción y el comportamiento anti-ético.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-castilla-green-dark text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-castilla-green transition-all"
            >
              Consultar Código de Conducta <ExternalLink size={18} />
            </motion.button>
          </div>
          
          <div className="bg-gray-50 rounded-[2rem] p-8 border border-dashed border-gray-300">
             <div className="space-y-4">
                {[
                  "Protección de Derechos Humanos",
                  "Prevención de Conflictos de Interés",
                  "Privacidad y Manejo de Datos",
                  "Responsabilidad Socio-Ambiental"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-castilla-yellow" />
                    <span className="font-bold text-sm text-castilla-green-dark">{text}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </motion.section>

    </div>
  )
}

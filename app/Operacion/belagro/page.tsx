"use client"

import { motion, Variants } from "framer-motion"
import { ShieldCheck, Zap, Users2, PackageSearch, ArrowUpRight, TrendingUp } from "lucide-react"

/* --------------------------------------------------------------------------
   CONFIGURACIÓN DE ANIMACIONES (VARIANTS)
   Definimos los tipos para que TypeScript no marque error en 'variants'
   -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima los hijos uno tras otro
    },
  },
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
}

export default function BelagroPage() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden">
      
      {/* Fondo Decorativo Animado */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-castilla-yellow rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </div>

      {/* HEADER DINÁMICO */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 relative"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="inline-flex items-center gap-2 bg-castilla-yellow text-castilla-green-dark px-6 py-2 rounded-2xl text-xs font-black mb-6 uppercase tracking-widest shadow-lg cursor-default"
        >
          <ShieldCheck size={16} /> Marca Aliada Estratégica
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-black text-castilla-green-dark mb-6 tracking-tighter relative inline-block">
          BELAGRO
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-4 left-0 h-4 bg-castilla-yellow/30 -z-10"
          />
        </h1>
        
        <p className="text-xl md:text-2xl text-castilla-gray max-w-3xl mx-auto font-light leading-relaxed px-4">
          Potenciamos la productividad del campo con <span className="font-bold text-castilla-green">tecnología de insumos</span> y logística de vanguardia.
        </p>
      </motion.div>

      {/* GRID DE SERVICIOS CON STAGGER (Contenedor Padre) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-3 gap-8 px-4"
      >
        {[
          {
            title: "Suministro de Insumos",
            desc: "Fertilizantes y protectores de cultivo con fórmulas de liberación controlada.",
            icon: Zap,
            color: "text-amber-500",
            border: "border-amber-400",
            bg: "hover:bg-amber-50"
          },
          {
            title: "Asistencia Técnica",
            desc: "Análisis de suelos y consultoría experta para maximizar el rendimiento por hectárea.",
            icon: Users2,
            color: "text-castilla-green",
            border: "border-castilla-green",
            bg: "hover:bg-green-50"
          },
          {
            title: "Logística a Medida",
            desc: "Cadena de frío y transporte especializado que garantiza la integridad de cada producto.",
            icon: PackageSearch,
            color: "text-castilla-green-dark",
            border: "border-castilla-green-dark",
            bg: "hover:bg-slate-100"
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants} // ERROR SOLUCIONADO
            whileHover={{ y: -15, scale: 1.02 }}
            className={`group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border-b-[6px] ${item.border} transition-all duration-300 ${item.bg} relative overflow-hidden`}
          >
            {/* Decoración interna de la card */}
            <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
               <item.icon size={120} />
            </div>

            <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform ${item.color}`}>
              <item.icon size={28} />
            </div>
            
            <h3 className="text-2xl font-black text-castilla-green-dark mb-4 flex items-center gap-2">
              {item.title}
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-castilla-yellow" />
            </h3>
            
            <p className="text-castilla-gray leading-relaxed mb-6">
              {item.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-castilla-green-dark/40 group-hover:text-castilla-green transition-colors">
              <TrendingUp size={14} /> Alta Eficiencia Certificada
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FOOTER / CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-[2rem] bg-castilla-green-dark text-white flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border-4 border-castilla-yellow flex items-center justify-center font-black text-2xl">B</div>
          <div>
            <h4 className="text-xl font-bold text-white">¿Listo para escalar su producción?</h4>
            <p className="text-white/60">Contáctenos para una auditoría de insumos personalizada.</p>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-castilla-green-dark px-10 py-4 rounded-2xl font-black text-sm hover:bg-castilla-yellow transition-colors shadow-xl"
        >
          CONTACTAR CON BELAGRO
        </motion.button>
      </motion.div>

    </div>
  )
}
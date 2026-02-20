"use client"

import { motion, Variants } from "framer-motion"
import { ShieldCheck, Zap, ArrowUpRight, TrendingUp, Target, Eye, Sprout, Leaf } from "lucide-react"
import Image from "next/image"

/* --------------------------------------------------------------------------
   CONFIGURACIÓN DE ANIMACIONES (VARIANTS)
   -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

// --- RUTA DE LA IMAGEN ---
const BELAGRO_IMAGE_PATH = "/Imagenes/belagro.jpg"

export default function BelagroPage() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden font-[Tahoma,Verdana,sans-serif]">
      
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
        className="text-center mb-16 relative"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="inline-flex items-center gap-2 bg-castilla-yellow text-castilla-green-dark px-6 py-2 rounded-2xl text-xs font-black mb-6 uppercase tracking-widest shadow-lg cursor-default"
        >
          <ShieldCheck size={16} /> Respaldo Castilla Agrícola S.A.
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
        
        {/* TEXTO: ¿QUIÉNES SOMOS? */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
          Somos generadores de soluciones agronómicas para la fertilización líquida de cultivos. Especializados en desarrollar productos innovadores que agregan valor al <span className="font-bold text-castilla-green">campo colombiano</span>.
        </p>
      </motion.div>

      {/* ================= SECCIÓN: IMAGEN Y ENTORNO (APILADA VERTICALMENTE) ================= */}
      <section className="py-12 relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white flex flex-col items-center">
          
          {/* --- 1. Título y Texto (Centrados en la parte superior) --- */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-100 rounded-full mb-6 shadow-sm">
              <Leaf size={14} className="text-castilla-green" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-castilla-green-dark uppercase">Nuestro Entorno</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-castilla-green-dark mb-6 leading-tight">
              El origen de nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-castilla-green to-emerald-500">Inspiración</span>.
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Integrando operaciones eficientes en total armonía con la naturaleza que nos rodea. Nuestro compromiso con el campo se refleja en cada hectárea que impulsamos hacia el futuro.
            </p>
          </motion.div>

          {/* --- 2. Imagen (Parte Inferior, mucho más grande y con marco beige) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            {/* Marco/Sombra Beige idéntico al de tus imágenes de referencia */}
            <div className="absolute -inset-3 md:-inset-5 bg-[#fef4e3] rounded-[2.5rem] md:rounded-[3rem] z-0"></div>
            
            <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] md:border-[8px] border-white group">
              <Image
                src={BELAGRO_IMAGE_PATH}
                alt="Instalaciones y cultivos de Belagro"
                width={1200}
                height={600}
                layout="responsive"
                objectFit="cover"
                className="w-full h-auto bg-slate-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>
      {/* ================= FIN SECCIÓN IMAGEN ================= */}

      {/* GRID DE INFORMACIÓN (Misión, Visión, Promesa) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto"
      >
        {[
          {
            title: "Nuestra Misión",
            desc: "Desarrollar, producir y suministrar fertilizantes líquidos con enfoque técnico e industrial, orientados a una nutrición vegetal eficiente y precisa.",
            icon: Target,
            color: "text-amber-500",
            border: "border-amber-400",
            bg: "hover:bg-amber-50"
          },
          {
            title: "Nuestra Visión",
            desc: "Ser para el año 2027 el principal aliado estratégico de los productores agrícolas de la región, a través de la generación de fertilizantes líquidos, diseñados para potencializar el cultivo en cada una de sus etapas.",
            icon: Eye,
            color: "text-castilla-green",
            border: "border-castilla-green",
            bg: "hover:bg-green-50"
          },
          {
            title: "Nuestra Promesa",
            desc: "Soluciones agronómicas respaldadas por tecnología e investigación, diseñadas específicamente para maximizar el rendimiento y agregar valor real a cada hectárea de su cultivo.",
            icon: Sprout,
            color: "text-castilla-green-dark",
            border: "border-castilla-green-dark",
            bg: "hover:bg-slate-50"
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
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
            
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              {item.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-castilla-green-dark/40 group-hover:text-castilla-green transition-colors mt-auto pt-4 border-t border-slate-100">
              <TrendingUp size={14} /> Nutrición Eficiente
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FOOTER / CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-[2rem] bg-castilla-green-dark text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border-4 border-castilla-yellow flex items-center justify-center font-black text-2xl">B</div>
          <div>
            <h4 className="text-xl font-bold text-white">¿Busca potenciar su cultivo?</h4>
            <p className="text-white/60">Conozca nuestro portafolio de fertilizantes líquidos de alta precisión.</p>
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
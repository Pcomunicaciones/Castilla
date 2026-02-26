"use client"

import { motion, Variants } from "framer-motion"
import { Leaf, Droplets, Sun, CheckCircle2, Waves, Sprout, Wind } from "lucide-react"

/* --------------------------------------------------------------------------
   ANIMACIONES: ECO-SYSTEM INTERACTIVE
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function GestionAmbiental() {
  return (
    <motion.div
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-16 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* SECCIÓN: HEADER CON LÍNEA DE PROGRESO */}
      <motion.div variants={itemVariants} className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-[#a3c74a]" />
          <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.3em]">
            Asuntos Ambientales
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-[#006437] tracking-tighter italic">
          Gestión Ambiental
        </h1>
        
        <p className="text-gray-600 mt-8 text-xl leading-relaxed max-w-3xl font-normal">
          El fortalecimiento de una cultura de preservación es parte de nuestra filosofía. Propiciamos la implementación de acciones para <span className="text-[#006437] font-bold">mitigar el cambio climático</span> y reducir los impactos ambientales.
        </p>
      </motion.div>

      {/* TARJETA DE RESUMEN: DASHBOARD HÍDRICO */}
      <motion.div 
        variants={itemVariants}
        className="group relative bg-white rounded-[3rem] p-1 md:p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
      >
        <div className="bg-gray-50/50 rounded-[2.8rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-md space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold">
              <Waves size={16} className="animate-pulse" /> Elemento Esencial de Vida
            </div>
            <h3 className="text-[#006437] font-bold text-3xl tracking-tight">Comprometidos con el Agua</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              Frente a una disminución del 19.5% en las precipitaciones durante el segundo trimestre de 2024, hemos incrementado el uso de sistemas de riego eficientes para reducir pérdidas y fortalecer nuestra resiliencia climática.
            </p>
            {/* Barra de progreso animada */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#006437]">
                <span>EFICIENCIA EN SISTEMAS DE RIEGO</span>
                <span>En aumento</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#a3c74a]"
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-6 w-full lg:w-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 lg:flex-none bg-white p-8 rounded-[2.5rem] text-center border border-gray-100 shadow-sm flex flex-col justify-center"
            >
              <p className="text-4xl md:text-5xl font-black text-[#006437] mb-1">-19.5%</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">Lluvias (T2 2024)</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 lg:flex-none bg-[#006437] p-8 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                <Droplets size={60} />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-1">Eco</p>
              <p className="text-[10px] uppercase font-bold text-white/60 tracking-widest mt-1">Resiliencia</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* GRID DE PILARES: INTERACTIVE CARDS */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { 
            title: "Cultura de Preservación", 
            icon: Leaf, 
            color: "text-green-600", 
            bg: "bg-green-50",
            desc: "Fomentamos la participación activa de nuestros colaboradores en estrategias que garanticen el cuidado a largo plazo de nuestro entorno."
          },
          { 
            title: "Mitigación Climática", 
            icon: Wind, 
            color: "text-amber-600", 
            bg: "bg-amber-50",
            desc: "Adoptamos nuevas tecnologías sostenibles y prácticas responsables para adaptarnos y mitigar activamente el cambio climático."
          }
        ].map((pilar, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col items-start gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-[#a3c74a]/40 transition-all shadow-sm hover:shadow-xl"
          >
            <div className={`p-5 rounded-2xl ${pilar.bg} ${pilar.color} transition-colors duration-300 group-hover:bg-[#006437] group-hover:text-white`}>
              <pilar.icon size={32} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-[#006437] mb-3">{pilar.title}</h4>
              <p className="text-gray-500 font-normal leading-relaxed">
                {pilar.desc}
              </p>
            </div>
            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <CheckCircle2 className="text-[#a3c74a]" size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* PIE DE SECCIÓN: IMPACTO POSITIVO */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#f1f8e9]/50 rounded-[2rem] border border-[#a3c74a]/10"
      >
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Sun className="text-amber-500" size={24} />
          </div>
          <p className="text-sm font-bold text-[#006437] italic">Construyendo resiliencia climática a través de la tecnología.</p>
        </div>
        <button className="text-xs font-black uppercase tracking-widest text-[#006437] hover:text-[#a3c74a] transition-colors border-b-2 border-[#a3c74a]">
          Ver Reporte de Sostenibilidad
        </button>
      </motion.div>
    </motion.div>
  )
}
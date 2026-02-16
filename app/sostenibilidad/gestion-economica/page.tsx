"use client"

import { TrendingUp, ShieldCheck, Briefcase, BarChart3, PieChart, ArrowUpRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES: ECONOMIC SOLVENCY SYSTEM
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function GestionEconomica() {
  return (
    <motion.div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-12 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* TÍTULO CON INDICADOR DE MERCADO */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#a3c74a] animate-pulse" />
            <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.3em]">Sostenibilidad Financiera</span>
          </div>
          <h1 className="text-5xl font-black text-[#006437] italic tracking-tight">
            Gestión Económica
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estatus Operativo</p>
          <p className="text-sm font-bold text-[#006437] flex items-center gap-2">
            Crecimiento Sostenible <ArrowUpRight size={16} />
          </p>
        </div>
      </motion.div>
      
      {/* GRID PRINCIPAL: BENTO BOX STYLE */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* BLOQUE: VALOR COMPARTIDO (Principal) */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-[#006437] to-[#004d2a] text-white p-10 rounded-[3.5rem] lg:col-span-2 shadow-2xl shadow-green-900/30 relative overflow-hidden group border border-white/5"
        >
          {/* Elemento Decorativo: Gráfico de fondo */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
            <BarChart3 size={300} />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#a3c74a] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <TrendingUp size={32} className="text-[#006437]" />
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Valor Compartido</h2>
            <p className="text-white/80 leading-relaxed text-xl max-w-2xl font-normal">
              Generamos estabilidad económica a través de una operación rentable que 
              <span className="text-[#a3c74a] font-bold"> reinvierte</span> en tecnología y talento local, 
              garantizando la solidez financiera de la región.
            </p>
            
            <div className="mt-10 flex gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#a3c74a]">Reinversión</p>
                <p className="text-2xl font-bold italic">Continua</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#a3c74a]">Modelo</p>
                <p className="text-2xl font-bold italic">Circular</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* BLOQUE: ÉTICA (Vertical) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="bg-white border border-gray-100 p-10 rounded-[3.5rem] flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 group"
        >
          <div className="space-y-6">
            <div className="w-14 h-14 bg-[#f1f8e9] rounded-2xl flex items-center justify-center group-hover:bg-[#006437] transition-colors duration-500">
              <ShieldCheck size={32} className="text-[#006437] group-hover:text-white" />
            </div>
            <h3 className="font-bold text-2xl text-[#006437] tracking-tight">Ética y Transparencia</h3>
            <p className="text-gray-500 text-base leading-relaxed font-normal">
              Cero tolerancia a la corrupción y cumplimiento estricto del marco legal vigente en todas nuestras transacciones.
            </p>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-[10px] font-black text-center text-gray-400 uppercase tracking-widest">Código de Conducta Activo</p>
          </div>
        </motion.div>
      </div>

      {/* BLOQUE SECUNDARIO: INVERSIÓN LOCAL (CENTRADO) */}
      {/* CAMBIO REALIZADO: Usamos flex justify-center en lugar de grid para centrar la tarjeta */}
      <div className="flex justify-center w-full">
        <motion.div 
          variants={itemVariants}
          className="p-8 bg-gray-50/80 backdrop-blur-sm rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:bg-white hover:shadow-lg transition-all w-full max-w-2xl"
        >
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 group-hover:scale-110 transition-transform shrink-0">
            <Briefcase className="text-[#a3c74a]" size={40} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-[#006437] text-2xl mb-2 tracking-tight">Inversión Local</h3>
            <p className="text-gray-500 text-base font-normal leading-relaxed">
              Priorizamos la contratación de proveedores regionales, inyectando capital directamente a la economía del Valle del Cauca.
            </p>
          </div>
        </motion.div>
      </div>

      {/* MÉTRICA DE CIERRE SUTIL */}
      <motion.div 
        variants={itemVariants}
        className="flex justify-center pt-4"
      >
        <div className="flex items-center gap-12 opacity-40">
           <div className="text-center">
              <p className="text-xs font-black"></p>
              <div className="h-0.5 w-full bg-current" />
           </div>
           <PieChart size={24} />
           <div className="text-center">
              <p className="text-xs font-black"></p>
              <div className="h-0.5 w-full bg-current" />
           </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
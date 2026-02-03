"use client"

import { Handshake, FileText, ExternalLink, RefreshCw, ShieldCheck, ArrowRight, Download, Laptop } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES: PARTNER ECOSYSTEM
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 0.5 },
  animate: { 
    scale: [1, 1.1, 1], 
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
}

export default function ProveedoresPage() {
  return (
    <motion.div
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-20 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* HEADER DINÁMICO */}
      <motion.div variants={itemVariants} className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-[#a3c74a]" />
          <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.4em]">Alianzas Estratégicas</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-[#006437] tracking-tighter italic">
          Proveedores y Clientes
        </h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed font-normal italic">
          Impulsamos el <span className="text-[#006437] font-bold">crecimiento mutuo</span> a través de procesos transparentes y tecnología de vanguardia.
        </p>
      </motion.div>

      {/* CARD PRINCIPAL: RED DE VALOR CON EFECTO GLASSMORFISMO */}
      <motion.div
        variants={itemVariants}
        className="group relative bg-gradient-to-br from-[#006437] to-[#004d2a] text-white p-12 rounded-[3.5rem] shadow-2xl overflow-hidden"
      >
        {/* Elementos Decorativos Animados */}
        <motion.div 
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute -top-10 -right-10 w-64 h-64 bg-[#a3c74a]/20 rounded-full blur-3xl" 
        />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0 relative">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] text-[#a3c74a] group-hover:rotate-6 transition-transform duration-500 border border-white/20">
              <Handshake size={60} strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#a3c74a] p-2 rounded-lg text-[#006437] shadow-lg">
              <ShieldCheck size={20} />
            </div>
          </div>
          
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Nuestra Red de Valor</h2>
            <p className="text-white/80 leading-relaxed text-xl max-w-2xl font-light">
              Construimos relaciones de largo plazo basadas en la <span className="text-[#a3c74a] font-bold italic text-2xl uppercase tracking-tighter">lealtad</span> y el cumplimiento estricto de estándares de calidad.
            </p>
          </div>
        </div>
      </motion.div>

      {/* PORTALES Y DOCUMENTOS CON HOVER REVELADOR */}
      <div className="space-y-10">
        <h3 className="text-3xl font-bold text-[#006437] flex items-center gap-4">
           Portales y Gestión <div className="h-[1px] flex-1 bg-gray-100" />
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1: Manual */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col p-1 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all group"
          >
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-5 bg-white shadow-inner rounded-2xl text-[#006437] group-hover:bg-[#006437] group-hover:text-white transition-all duration-500">
                  <FileText size={36} />
                </div>
                <span className="text-[10px] font-black text-gray-300 group-hover:text-[#a3c74a] transition-colors uppercase tracking-widest">PDF • 2.4 MB</span>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-[#006437] mb-2 tracking-tight">Manual de Proveedores</h4>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Consulte nuestra normativa de calidad, ética empresarial y procedimientos logísticos.
                </p>
              </div>
              <a
                href="/documentos/manual-proveedores.pdf"
                download
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#f1f8e9] text-[#006437] font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-[#a3c74a] transition-all duration-300 group/btn"
              >
                Descargar Documento <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Tarjeta 2: Portal */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col p-1 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all group"
          >
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-5 bg-white shadow-inner rounded-2xl text-[#006437] group-hover:bg-[#a3c74a] group-hover:text-[#006437] transition-all duration-500">
                  <RefreshCw size={36} />
                </div>
                <div className="flex items-center gap-1">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">En línea</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-[#006437] mb-2 tracking-tight">Facturación Electrónica</h4>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Gestione sus documentos fiscales y consulte estados de pago en nuestra plataforma segura.
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#006437] text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-[#a3c74a] hover:text-[#006437] transition-all duration-300 group/btn shadow-lg"
              >
                Acceder al Portal <ExternalLink size={18} className="group-hover/btn:rotate-45 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECCIÓN PRÓXIMAMENTE: DISEÑO TECH */}
      <motion.div 
        variants={itemVariants} 
        className="relative p-12 bg-white rounded-[3.5rem] border-2 border-dashed border-gray-200 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Laptop size={120} />
        </div>
        
        <div className="relative z-10 text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-[#f1f8e9] text-[#006437] rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            Proyecto en Desarrollo
          </div>
          <h3 className="text-3xl font-bold text-[#006437] italic tracking-tight">Plataforma Unificada Castilla</h3>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Estamos centralizando todos nuestros servicios en un solo ecosistema digital para 
            <span className="font-bold"> agilizar la comunicación</span> y optimizar los tiempos de respuesta.
          </p>
          
          <div className="flex justify-center items-center gap-2 text-[#a3c74a]">
             <div className="w-2 h-2 rounded-full bg-current" />
             <div className="w-8 h-2 rounded-full bg-current" />
             <div className="w-2 h-2 rounded-full bg-current" />
          </div>
        </div>
      </motion.div>

      {/* FOOTER DE APOYO */}
      <motion.div 
        variants={itemVariants}
        className="text-center"
      >
        <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] hover:text-[#006437] transition-colors cursor-default">
          ¿Dudas con sus procesos? Escríbanos a proveedores@castillaagricola.com
        </p>
      </motion.div>
    </motion.div>
  )
}
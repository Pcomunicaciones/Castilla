"use client"

import { motion, Variants } from "framer-motion"
import { Leaf, Droplets, Sun, CheckCircle2, Waves, TreePine, Wind, BarChart3, Factory } from "lucide-react"
import Link from "next/link" // Importación de Link de Next.js

/* --------------------------------------------------------------------------
   ANIMACIONES: ECO-SYSTEM INTERACTIVE
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      // Fuerza el uso de Tahoma para TODO el componente
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-16 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* ================= SECCIÓN 1: HEADER ================= */}
      <motion.div variants={itemVariants} className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-[#a3c74a]" />
          <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.3em]">
            Sostenibilidad Estratégica
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-[#006437] tracking-tight not-italic">
          Gestión Ambiental
        </h1>
        
        <p className="text-gray-600 mt-8 text-xl leading-relaxed max-w-3xl font-normal">
          Integramos la sostenibilidad en la toma de decisiones mediante <span className="text-[#006437] font-bold">tres ejes estratégicos</span>. Propiciamos acciones para mitigar impactos y adaptarnos a un entorno climático desafiante.
        </p>
      </motion.div>

      {/* ================= EJE 1: GESTIÓN HÍDRICA (DASHBOARD) ================= */}
      <motion.div 
        variants={itemVariants}
        className="group relative bg-white rounded-[3rem] p-1 md:p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
      >
        <div className="bg-gray-50/50 rounded-[2.8rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Información y Barras de Progreso */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                <Waves size={16} className="animate-pulse" /> Eje Estratégico 1
              </div>
              <h3 className="text-[#006437] font-bold text-3xl tracking-tight mb-3">Gestión Hídrica Integral</h3>
              <p className="text-gray-500 leading-relaxed font-normal">
                Optimización del recurso en entornos y cuencas compartidas, garantizando la máxima eficiencia en cada gota de agua utilizada.
              </p>
            </div>

            {/* BARRAS DE DATOS ANIMADAS */}
            <div className="space-y-6">
              {/* Barra 1: Riego Tecnificado */}
              <div>
                <div className="flex justify-between text-sm font-bold text-[#006437] mb-2">
                  <span className="flex items-center gap-2"><Droplets size={16}/> Riego Tecnificado</span>
                  <span>97.5%</span>
                </div>
                <div className="h-3 w-full bg-blue-100 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "97.5%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                  />
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-wider">Crecimiento vs 97% en 2024</p>
              </div>

              {/* Barra 2: Consumo Específico */}
              <div>
                <div className="flex justify-between text-sm font-bold text-[#006437] mb-2">
                  <span className="flex items-center gap-2"><BarChart3 size={16}/> Consumo Específico (m³/Ha)</span>
                  <span>1.066</span>
                </div>
                <div className="h-3 w-full bg-[#f1f8e9] rounded-full overflow-hidden relative">
                  {/* Barra base (2024) */}
                  <div className="absolute top-0 left-0 h-full w-[100%] bg-gray-200" />
                  {/* Barra optimizada animada (2025) */}
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "95%" }} // Visualmente menor para indicar reducción
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-[#a3c74a] rounded-r-full"
                  />
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-wider">Reducción vs 1.072 m³/Ha en 2024</p>
              </div>
            </div>
          </div>
          
          {/* Tarjetas Visuales (Derecha) */}
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 bg-white p-8 rounded-[2.5rem] text-center border border-gray-100 shadow-sm flex flex-col justify-center"
            >
              <p className="text-4xl md:text-5xl font-black text-[#006437] mb-1">1.066</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">m³ por Hectárea</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 bg-[#006437] p-8 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                <Droplets size={60} />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-1">97.5%</p>
              <p className="text-[10px] uppercase font-bold text-white/60 tracking-widest mt-1">Tecnificación</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= EJES 2 y 3: TARJETAS INTERACTIVAS ================= */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* EJE 2: Agricultura Sostenible */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="group relative flex flex-col justify-between gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-[#a3c74a]/40 transition-all shadow-sm hover:shadow-xl overflow-hidden"
        >
          <div>
            <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-colors duration-300 group-hover:bg-[#006437] group-hover:text-white`}>
              <TreePine size={32} />
            </div>
            <h4 className="font-bold text-2xl text-[#006437] mb-3">Agricultura Sostenible</h4>
            <p className="text-gray-500 font-normal leading-relaxed mb-8">
              Conservación estricta de la base natural y del suelo, priorizando la restauración de ecosistemas y corredores biológicos.
            </p>
            
            {/* Métricas Agricultura */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-2xl font-black text-[#a3c74a]">228.17</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mt-1">Hectáreas de Conservación</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-2xl font-black text-[#a3c74a]">2.73</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mt-1">Ha. Restauradas (2025)</p>
              </div>
            </div>
            
            {/* Barra Animada de Árboles */}
            <div className="mt-6">
              <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                <span>Árboles Nativos Sembrados</span>
                <span className="text-[#006437]">760 Unds.</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  className="h-full bg-green-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* EJE 3: Eficiencia Energética y Cambio Climático */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="group relative flex flex-col justify-between gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-amber-400/40 transition-all shadow-sm hover:shadow-xl overflow-hidden"
        >
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
             <Factory size={250} />
          </div>

          <div className="relative z-10">
            <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white`}>
              <Wind size={32} />
            </div>
            <h4 className="font-bold text-2xl text-[#006437] mb-3">Eficiencia Energética y C.C.</h4>
            <p className="text-gray-500 font-normal leading-relaxed mb-6">
              Mitigación activa de impactos ambientales y planes de adaptación estructurados frente a un entorno climático cada vez más desafiante.
            </p>
            
            {/* Box Destacado: Huella de Carbono */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 shadow-inner">
              <div className="flex items-center gap-3 mb-3">
                <Cloud size={20} className="text-amber-500" />
                <h5 className="font-black text-slate-700 uppercase tracking-wide text-sm">Huella de Carbono (Línea Base)</h5>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Formalizamos el inventario de <strong>Gases de Efecto Invernadero (GEI)</strong> bajo los más estrictos estándares internacionales.
              </p>
              
              {/* Timeline Meta 2030 */}
              <div className="relative pt-4 mt-4 border-t border-slate-200/60">
                <div className="flex justify-between items-center relative z-10">
                  <div className="bg-white border-2 border-amber-500 text-amber-600 font-bold text-xs px-3 py-1 rounded-full shadow-sm">Hoy</div>
                  <div className="flex-1 border-t-2 border-dashed border-amber-200 mx-2"></div>
                  <div className="bg-amber-500 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">Metas 2030</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* PIE DE SECCIÓN: REPORTE */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#f1f8e9]/50 rounded-[2rem] border border-[#a3c74a]/10"
      >
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Leaf className="text-[#a3c74a]" size={24} />
          </div>
          <p className="text-sm font-bold text-[#006437] italic">Construyendo un futuro sostenible hectárea a hectárea.</p>
        </div>
        
        {/* 👇 AQUÍ ESTÁ EL ENLACE CORREGIDO SEGÚN TU ESTRUCTURA 👇 */}
        <Link 
          href="/sostenibilidad/informes" 
          className="text-xs font-black uppercase tracking-widest text-[#006437] hover:text-[#a3c74a] transition-colors border-b-2 border-[#a3c74a]"
        >
          Ver Informe de Sostenibilidad
        </Link>
      </motion.div>
    </motion.div>
  )
}

// Icono extra para la tarjeta de energía
function Cloud(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  )
}
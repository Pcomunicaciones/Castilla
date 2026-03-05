"use client"

import React, { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { Leaf, Droplets, Sun, CheckCircle2, Waves, TreePine, Wind, BarChart3, Factory } from "lucide-react"
import Link from "next/link"

/* --------------------------------------------------------------------------
   COMPONENTE AUXILIAR: CONTADOR NUMÉRICO ANIMADO
   -------------------------------------------------------------------------- */
const AnimatedNumber = ({ end, decimals = 0, duration = 2000 }: { end: number, decimals?: number, duration?: number }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setValue(end * easeProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      } else {
        setValue(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCounter)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{value.toLocaleString('es-CO', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>
}

/* --------------------------------------------------------------------------
   ANIMACIONES: ECO-SYSTEM INTERACTIVE
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(300%) skewX(-12deg); }
        }
      `}} />

      <motion.div
        style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
        className="space-y-16 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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

        {/* ================= EJE 1: GESTIÓN HÍDRICA (NUEVO DISEÑO VERTICAL) ================= */}
        <motion.div 
          variants={itemVariants}
          className="group relative bg-white rounded-[3rem] p-1 md:p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
        >
          <div className="bg-gray-50/50 rounded-[2.8rem] p-8 md:p-12 flex flex-col gap-12">
            
            {/* 1. TEXTOS ARRIBA */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-5 shadow-sm">
                <Waves size={16} className="animate-pulse" /> Eje Estratégico 1
              </div>
              <h3 className="text-[#006437] font-black text-4xl lg:text-5xl tracking-tight mb-4">
                Gestión Hídrica Integral
              </h3>
              <p className="text-[#64748b] leading-relaxed font-normal text-[17px] max-w-3xl">
                Optimización del recurso en entornos y cuencas compartidas, garantizando la máxima eficiencia en cada gota de agua utilizada mediante estrategias de reducción de consumo.
              </p>
            </div>

            {/* 2. BARRAS EN EL MEDIO */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pt-2">
              
              {/* Barra Riego Tecnificado */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="flex items-center gap-2 text-[15px] font-bold text-[#006437]">
                    <Droplets size={18}/> Riego Tecnificado
                  </span>
                  <span className="text-xl font-black text-[#006437]">
                    <AnimatedNumber end={97.5} decimals={1} />%
                  </span>
                </div>
                <div className="h-3.5 w-full bg-blue-100/60 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "97.5%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                    className="absolute top-0 left-0 h-full bg-[#3b82f6] rounded-full relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 translate-x-[-150%] animate-[shine_2.5s_ease-out_infinite]" />
                  </motion.div>
                </div>
                <p className="text-[10px] text-[#94a3b8] font-bold uppercase mt-3 tracking-widest">Crecimiento vs 97% en 2024</p>
              </div>

              {/* Barra Consumo Específico */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="flex items-center gap-2 text-[15px] font-bold text-[#006437]">
                    <BarChart3 size={18}/> Consumo Específico (m³/Ha)
                  </span>
                  <span className="text-xl font-black text-[#006437]">
                    <AnimatedNumber end={1066} decimals={0} />
                  </span>
                </div>
                <div className="h-3.5 w-full bg-[#e2e8f0] rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-[100%] bg-[#cbd5e1]/50" />
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "85%" }} 
                    transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-[#a3c74a] rounded-r-full relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/30 w-1/2 -skew-x-12 translate-x-[-150%] animate-[shine_3s_ease-out_infinite]" />
                  </motion.div>
                </div>
                <p className="text-[10px] text-[#94a3b8] font-bold uppercase mt-3 tracking-widest">Reducción vs 1.072 m³/Ha en 2024</p>
              </div>
            </div>

            {/* 3. CARTAS ABAJO */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              
              {/* Tarjeta Blanca */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 lg:p-12 rounded-[3rem] text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center"
              >
                <p className="text-5xl lg:text-7xl font-black text-[#006437] mb-3 tracking-tight">
                  <AnimatedNumber end={1066} decimals={0} />
                </p>
                <p className="text-[12px] uppercase font-bold text-[#94a3b8] tracking-[0.2em]">M³ POR HA</p>
              </motion.div>

              {/* Tarjeta Verde */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#006437] p-8 lg:p-12 rounded-[3rem] text-center shadow-[0_10px_40px_rgba(0,100,55,0.25)] relative overflow-hidden group flex flex-col justify-center"
              >
                <div className="absolute -top-10 -right-10 p-2 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Droplets size={200} />
                </div>
                <p className="text-5xl lg:text-7xl font-black text-white mb-3 tracking-tight relative z-10">
                  <AnimatedNumber end={31.4} decimals={1} />%
                </p>
                <p className="text-[12px] uppercase font-bold text-white/90 tracking-[0.15em] relative z-10">
                  PORCENTAJE DE REDUCCIÓN
                </p>
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-2xl font-black text-[#a3c74a]">
                    <AnimatedNumber end={228.17} decimals={2} />
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mt-1">Ha de Conservación</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-2xl font-black text-[#a3c74a]">
                    <AnimatedNumber end={2.73} decimals={2} />
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mt-1">Ha Restauradas (2025)</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                  <span>Árboles Nativos Sembrados</span>
                  <span className="text-[#006437]">760 Unds.</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
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
              
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 shadow-inner">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud size={20} className="text-amber-500" />
                  <h5 className="font-black text-slate-700 uppercase tracking-wide text-sm">Huella de Carbono (Línea Base)</h5>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Formalizamos el inventario de <strong>Gases de Efecto Invernadero (GEI)</strong> bajo los más estrictos estándares internacionales.
                </p>
                
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
          
          <Link 
            href="/sostenibilidad/informes" 
            className="text-xs font-black uppercase tracking-widest text-[#006437] hover:text-[#a3c74a] transition-colors border-b-2 border-[#a3c74a]"
          >
            Ver Informe de Sostenibilidad
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

function Cloud(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  )
}
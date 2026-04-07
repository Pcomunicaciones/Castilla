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
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes dropFall {
          0% { top: -10%; opacity: 0; transform: scaleY(0.5); }
          20% { opacity: 1; transform: scaleY(1); }
          80% { opacity: 1; transform: scaleY(1); }
          100% { top: 90%; opacity: 0; transform: scaleY(0.5); }
        }
        @keyframes waveMove {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-25%) scaleY(0.8); }
          100% { transform: translateX(-50%) scaleY(1); }
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

        {/* ================= EJE 1: GESTIÓN HÍDRICA (ORDEN VERTICAL ESTRICTO) ================= */}
        <motion.div
          variants={itemVariants}
          className="group relative bg-white rounded-[3rem] p-1 md:p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
        >
          <div className="bg-gray-50/50 rounded-[2.8rem] p-8 md:p-12 flex flex-col gap-10">

            {/* 1. TEXTOS (ARRIBA) */}
            <div className="w-full">
              <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#2563eb] px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm">
                <Waves size={16} className="animate-pulse" /> Eje Estratégico 1
              </div>
              <h3 className="text-[#006437] font-black text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-5">
                Gestión Hídrica Integral
              </h3>
              <p className="text-[#64748b] leading-relaxed font-normal text-[17px] max-w-3xl">
                Optimización del recurso en entornos y cuencas compartidas, garantizando la máxima eficiencia en cada gota de agua utilizada mediante estrategias de reducción de consumo.
              </p>
            </div>

            {/* 2. ANIMACIONES DE BALDE (MEDIO) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

              {/* Balde 1: Riego Tecnificado */}
              <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-blue-100 transition-all">
                <div className="relative w-16 h-24 border-[3px] border-gray-200 rounded-b-xl rounded-t-[4px] overflow-hidden shrink-0 bg-gray-50 shadow-inner">
                  <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="absolute left-[30%] w-1 h-3 bg-blue-400 rounded-full animate-[dropFall_1.2s_linear_infinite]" style={{ animationDelay: '0.1s' }}></div>
                    <div className="absolute left-[60%] w-1.5 h-4 bg-blue-300 rounded-full animate-[dropFall_1.5s_linear_infinite]" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "97.5%" }}
                    transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 absolute bottom-0 left-0 rounded-b-[8px]"
                  >
                    <div className="absolute -top-1 left-0 w-[200%] h-2 bg-blue-200 rounded-full opacity-60 animate-[waveMove_3s_ease-in-out_infinite]"></div>
                  </motion.div>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 text-[14px] font-bold text-[#006437] mb-1">
                    <Droplets size={16} className="shrink-0" /> <span className="truncate">Riego Tecnificado</span>
                  </div>
                  <p className="text-3xl font-black text-blue-600 leading-none mb-2">
                    <AnimatedNumber end={97.5} decimals={1} />%
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest break-words leading-tight">Crecimiento vs 97% en 2024</p>
                </div>
              </div>

              {/* Balde 2: Consumo Específico */}
              <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-[#bfe366] transition-all">
                <div className="relative w-16 h-24 border-[3px] border-gray-200 rounded-b-xl rounded-t-[4px] overflow-hidden shrink-0 bg-gray-50 shadow-inner">
                  <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="absolute left-[30%] w-1 h-3 bg-[#a3c74a] rounded-full animate-[dropFall_1.2s_linear_infinite]" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute left-[60%] w-1.5 h-4 bg-[#bfe366] rounded-full animate-[dropFall_1.6s_linear_infinite]" style={{ animationDelay: '0.7s' }}></div>
                  </div>
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "85%" }}
                    transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
                    className="w-full bg-gradient-to-t from-[#8dae3e] to-[#a3c74a] absolute bottom-0 left-0 rounded-b-[8px]"
                  >
                    <div className="absolute -top-1 left-0 w-[200%] h-2 bg-[#bfe366] rounded-full opacity-60 animate-[waveMove_3s_ease-in-out_infinite]"></div>
                  </motion.div>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 text-[14px] font-bold text-[#006437] mb-1">
                    <BarChart3 size={16} className="shrink-0" /> <span className="truncate">Consumo (m³/Ha)</span>
                  </div>
                  <p className="text-3xl font-black text-[#a3c74a] leading-none mb-2">
                    <AnimatedNumber end={1066} decimals={0} />
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest break-words leading-tight">Reducción vs 1.072 en 2024</p>
                </div>
              </div>

            </div>

            {/* 3. TARJETAS DE INFORMACIÓN (ABAJO) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

              {/* Tarjeta Blanca */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 lg:p-12 rounded-[2.5rem] text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center min-h-[180px]"
              >
                <p className="text-5xl lg:text-7xl font-black text-[#006437] mb-3 tracking-tight">
                  <AnimatedNumber end={1066} decimals={0} />
                </p>
                <p className="text-[12px] uppercase font-bold text-[#94a3b8] tracking-[0.2em]">M³ POR HA</p>
              </motion.div>

              {/* Tarjeta Verde */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#006437] p-8 lg:p-12 rounded-[2.5rem] text-center shadow-[0_10px_40px_rgba(0,100,55,0.25)] relative overflow-hidden group flex flex-col justify-center min-h-[180px]"
              >
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform duration-500">
                  <Droplets size={120} />
                </div>
                <p className="text-5xl lg:text-7xl font-black text-white mb-3 tracking-tight relative z-10">
                  <AnimatedNumber end={42} decimals={1} />%
                </p>
                <p className="text-[12px] uppercase font-bold text-white/90 tracking-[0.15em] relative z-10 leading-snug">
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

              {/* === ANIMACIÓN DE ÁRBOLES CRECIENDO === */}
              <div className="mt-6">
                <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                  <span>Árboles Nativos Sembrados</span>
                  <span className="text-[#006437]">760 Unds.</span>
                </div>

                <div className="relative h-16 w-full rounded-xl bg-green-50 border border-green-100 overflow-hidden mb-3 p-3 flex gap-4 items-end justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <motion.div
                        className="w-5 h-5 bg-[#006437] rounded-full border border-green-100/50 shadow-inner"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                      <motion.div
                        className="w-1.5 bg-[#006437] rounded-t-sm"
                        initial={{ height: 0 }}
                        whileInView={{ height: "20px" }}
                        transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  ))}
                  <Sun className="absolute top-2 right-2 h-4 w-4 text-amber-400 animate-[pulse_3s_ease-in-out_infinite]" />
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}
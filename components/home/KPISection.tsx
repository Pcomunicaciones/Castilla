"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { KPICard } from "./KPICard"

const kpiData = [
  { value: 15000, suffix: "+", label: "Hectáreas", description: "De tierra productiva en operación constante." },
  { value: 2500, suffix: "+", label: "Colaboradores", description: "Trabajando por el desarrollo rural integral." },
  { value: 78, suffix: "", label: "Años", description: "Construyendo historia agrícola en Colombia." },
  { value: 95, suffix: "%", label: "Eficiencia", description: "En procesos de producción y tecnología." },
]

export function KPISection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax: La imagen se mueve ligeramente hacia arriba
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden bg-black">
      {/* 1. IMAGEN DE FONDO ORIGINAL CON TRATAMIENTO */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/Imagenes/Exportado 8.jpg" 
          alt="Cifras Castilla Agrícola"
          className="w-full h-full object-cover scale-110"
        />
        {/* Overlay Verde Intenso para profundidad */}
        <div className="absolute inset-0 bg-[#002b18]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              className="inline-flex items-center gap-3 px-4 py-2 bg-castilla-yellow/10 border border-castilla-yellow/20 rounded-full text-castilla-yellow text-xs font-bold uppercase tracking-[0.5em] mb-6"
            >
              <div className="w-2 h-2 bg-castilla-yellow rounded-full animate-ping" />
              Impacto Real
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Cifras que <br /> <span className="text-castilla-yellow">trascienden.</span>
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="md:max-w-xs"
          >
            <p className="text-white/50 text-xl font-light border-l-2 border-castilla-yellow pl-6">
              Nuestra operación se mide en resultados, pero se vive en el bienestar de nuestra gente.
            </p>
          </motion.div>
        </header>

        {/* 2. GRID DE TARJETAS GLASS INTERACTIVAS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={kpi.label}
              value={kpi.value}
              suffix={kpi.suffix}
              label={kpi.label}
              description={kpi.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>

      {/* 3. ELEMENTO DECORATIVO: LÍNEA DE MOVIMIENTO */}
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  )
}

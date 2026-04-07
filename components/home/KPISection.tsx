"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { KPICard } from "./KPICard"
import Image from "next/image"

const kpiData = [
  { value: 6217, suffix: "+", label: "Hectáreas", description: "Tierra productiva en operación constante y sostenible." },
  { value: 269, suffix: "+", label: "Colaboradores", description: "Impulsando el desarrollo rural y el bienestar social." },
  { value: 81, suffix: "", label: "Años", description: "Más de un siglo cultivando historia y progreso en Colombia." },
]

export function KPISection() {
  const containerRef = useRef(null)

  // OPTIMIZACIÓN 1: 'once: true' ahorra recursos al no re-animar al scrollear hacia arriba
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax optimizado (Valores más cortos para evitar saltos grandes)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden bg-black">

      {/* 1. IMAGEN DE FONDO (Optimizado con will-change) */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 will-change-[transform,opacity]"
      >
        <Image
          src="/Imagenes/Exportado 8.jpg"
          alt="Cifras Castilla Agrícola"
          fill
          className="object-cover scale-110"
          sizes="100vw"
        />
        {/* Overlays estáticos (CSS puro es más rápido que motion.div si no se animan) */}
        <div className="absolute inset-0 bg-[#002b18]/85 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24 text-center flex flex-col items-center justify-center gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-castilla-yellow/10 border border-castilla-yellow/20 rounded-full text-castilla-yellow text-xs font-bold uppercase tracking-[0.5em] mb-6 will-change-[transform,opacity]"
            >
              {/* Ping optimizado con CSS nativo si es posible, o mantenemos este si es suave */}
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
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto will-change-[transform,opacity]"
          >
            <p className="text-white/60 text-xl font-light border-y border-castilla-yellow/30 py-6 px-10">
              Nuestra operación se mide en resultados, pero se vive en el bienestar de nuestra gente.
            </p>
          </motion.div>
        </header>

        {/* 2. GRID DE TARJETAS (Renderizado eficiente) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={kpi.label}
              value={kpi.value}
              suffix={kpi.suffix}
              label={kpi.label}
              description={kpi.description}
              delay={index * 0.1} // Delay ligeramente reducido para sensación más rápida
            />
          ))}
        </div>
      </div>

      {/* 3. ELEMENTO DECORATIVO (Optimizado) */}
      <motion.div
        // Usar animate en lugar de style para loops infinitos es correcto, pero...
        // ...aseguramos que use transform: translateX
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent will-change-transform pointer-events-none"
      />
    </section>
  )
}
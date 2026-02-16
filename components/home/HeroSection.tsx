"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const HERO_SLIDES = [
  {
    id: 1,
    tag: "Agroindustria Sostenible",
    title: "Cultivamos el futuro con responsabilidad",
    description: "En Castilla Agrícola, transformamos la tierra con innovación y compromiso social.",
    image: "/Imagenes/Exportado 1.jpg",
    theme: "#a3c74a",
    primaryBtn: { text: "Conócenos", href: "/compania/quienes-somos" },
    secondaryBtn: { text: "Inversionistas", href: "/inversionistas" }
  },
  {
    id: 2,
    tag: "Compromiso Ambiental",
    title: "Protegemos nuestro entorno natural",
    description: "Implementamos prácticas agrícolas de precisión para preservar la biodiversidad y el agua.",
    image: "/Imagenes/planta arboles.jpg", 
    theme: "#88c336",
    primaryBtn: { text: "Gestión Ambiental", href: "/sostenibilidad/gestion-ambiental" },
    secondaryBtn: { text: "Ver Informes", href: "/sostenibilidad/informes" }
  },
  {
    id: 3,
    tag: "Nuestra Operación",
    title: "Eficiencia y calidad en cada proceso",
    description: "Conoce nuestra cadena de valor y cómo integramos tecnología en nuestros cultivos.",
    image: "/Imagenes/DSC_0422.jpg",
    theme: "#88c336",
    primaryBtn: { text: "Cadena de Valor", href: "/Operacion/cadena-de-valor" },
    secondaryBtn: { text: "Proyectos", href: "/Operacion/proyectos-inmobiliarios" }
  }
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent(current === HERO_SLIDES.length - 1 ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? HERO_SLIDES.length - 1 : current - 1)

  return (
    // CAMBIO 1: min-h-screen para ocupar el 100% de la pantalla sin fugas
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={HERO_SLIDES[current].image}
          initial={{ opacity: 0, scale: 1.1 }} // Zoom inicial ligeramente mayor
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={HERO_SLIDES[current].image}
            alt="Fondo Castilla"
            className="w-full h-full object-cover"
          />
          {/* CAMBIO 2: Overlays ajustados para evitar transparencia en la base */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#002b18]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }} // Entrada desde abajo
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1.5 bg-castilla-yellow rounded-full mb-6 shadow-xl"
              >
                <span className="text-[10px] font-black text-black uppercase tracking-[0.2em]">
                  {HERO_SLIDES[current].tag}
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1] mb-6 drop-shadow-2xl">
                {HERO_SLIDES[current].title}
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl font-light">
                {HERO_SLIDES[current].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={HERO_SLIDES[current].primaryBtn.href}
                    style={{ backgroundColor: HERO_SLIDES[current].theme }}
                    className="inline-flex items-center justify-center px-8 py-4 text-[#002b18] font-bold text-sm rounded-2xl transition-all group shadow-2xl hover:brightness-110"
                  >
                    {HERO_SLIDES[current].primaryBtn.text}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={HERO_SLIDES[current].secondaryBtn.href}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold text-sm rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-white transition-all shadow-xl"
                  >
                    {HERO_SLIDES[current].secondaryBtn.text}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Logo en caja Glassmorphism mejorada */}
          <div className="hidden lg:flex justify-end pr-12">
             
          </div>
        </div>
      </div>

      {/* Controles de Navegación Refinados */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button onClick={prevSlide} className="group p-4 border border-white/20 rounded-2xl text-white hover:bg-castilla-yellow hover:text-black transition-all duration-300">
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button onClick={nextSlide} className="group p-4 border border-white/20 rounded-2xl text-white hover:bg-castilla-yellow hover:text-black transition-all duration-300">
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Indicadores de progreso laterales o inferiores */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 z-20">
        <div className="text-white/40 font-mono text-xs tracking-widest">
          0{current + 1} / 0{HERO_SLIDES.length}
        </div>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                current === index ? "w-12 bg-castilla-yellow" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
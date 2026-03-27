"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

  // Cambio automático cada 9 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent(current === HERO_SLIDES.length - 1 ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? HERO_SLIDES.length - 1 : current - 1)

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black group">
      
      {/* 1. FONDO DE IMAGEN (SLIDER) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={HERO_SLIDES[current].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_SLIDES[current].image}
            alt="Fondo Castilla"
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          {/* Capas oscuras para mejorar lectura */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* 2. CONTENIDO DE TEXTO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="max-w-4xl pb-24 md:pb-0"> {/* Padding bottom aumentado para seguridad */}
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
            >
              {/* Etiqueta / Tag */}
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

              {/* Título Principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] md:leading-[1] mb-6 drop-shadow-2xl">
                {HERO_SLIDES[current].title}
              </h1>

              {/* Descripción */}
              <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl font-light">
                {HERO_SLIDES[current].description}
              </p>

              {/* Botones de Acción (CTA) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    href={HERO_SLIDES[current].primaryBtn.href}
                    style={{ backgroundColor: HERO_SLIDES[current].theme }}
                    className="flex items-center justify-center px-8 py-4 text-[#002b18] font-bold text-sm rounded-2xl transition-all group shadow-2xl hover:brightness-110 w-full sm:w-auto"
                  >
                    {HERO_SLIDES[current].primaryBtn.text}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    href={HERO_SLIDES[current].secondaryBtn.href}
                    className="flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold text-sm rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-white transition-all shadow-xl w-full sm:w-auto"
                  >
                    {HERO_SLIDES[current].secondaryBtn.text}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* 3. CONTROLES DE NAVEGACIÓN - UNIFICADOS (ESQUINA INFERIOR DERECHA) */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 flex gap-3 md:gap-4 z-30">
        <button 
          onClick={prevSlide} 
          className="p-3 md:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-castilla-yellow hover:text-black hover:scale-105 transition-all duration-300 active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={nextSlide} 
          className="p-3 md:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-castilla-yellow hover:text-black hover:scale-105 transition-all duration-300 active:scale-95"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* 4. INDICADORES DE PROGRESO (BARRITAS - IZQUIERDA) */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 flex items-center gap-4 z-20">
        <div className="text-white/40 font-mono text-xs tracking-widest hidden sm:block">
          0{current + 1} / 0{HERO_SLIDES.length}
        </div>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                current === index ? "w-8 md:w-12 bg-castilla-yellow" : "w-2 md:w-3 bg-white/20"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
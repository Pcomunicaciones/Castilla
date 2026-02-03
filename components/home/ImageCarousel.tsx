"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselItems = [
  {
    id: 1,
    title: "Campos de Caña de Azúcar",
    description: "Extensas hectáreas cultivadas con las mejores prácticas agrícolas.",
    image: "/Imagenes/Exportado 5.jpg", 
  },
  {
    id: 2,
    title: "Comunidades",
    description: "Desarrollo social y bienestar para nuestra gente.",
    image: "/Imagenes/Exportado 2.jpg",
  },
  {
    id: 3,
    title: "Innovación Agrícola",
    description: "Tecnología de punta aplicada al campo colombiano.",
    image: "/Imagenes/Exportado 6.jpg", 
  },
  {
    id: 4,
    title: "Sostenibilidad",
    description: "Compromiso real con el medio ambiente.",
    image: "/Imagenes/Foto 2.png", 
  },
]

export function ImageCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentIndex = Math.abs(page % carouselItems.length)

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => paginate(1), 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])

  // Variantes para el efecto de entrada/salida lateral
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4 }
    })
  }

  const currentItem = carouselItems[currentIndex]

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-castilla-green-dark tracking-tight">
            Nuestra Operación
          </h2>
          <div className="w-24 h-1 bg-castilla-yellow mx-auto mt-4 rounded-full" />
        </motion.div>

        <div
          className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-stone-900 h-[500px] md:h-[650px] group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0"
            >
              {/* IMAGEN CON EFECTO KEN BURNS (Zoom lento) */}
              <motion.img 
                animate={{ scale: [1, 1.1] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                src={currentItem.image} 
                alt={currentItem.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* OVERLAY DINÁMICO */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />

              {/* CONTENIDO DE TEXTO ANIMADO */}
              <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-20 text-white max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-1 bg-castilla-yellow text-castilla-green-dark text-xs font-black uppercase tracking-widest rounded-full mb-6">
                    Castilla en Acción
                  </span>
                  <h3 className="text-5xl md:text-7xl font-extrabold mb-6 leading-none">
                    {currentItem.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-white/80 font-light max-w-xl border-l-4 border-castilla-yellow pl-6">
                    {currentItem.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BARRA DE PROGRESO */}
          {isAutoPlaying && (
            <motion.div 
              key={`progress-${currentIndex}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1.5 bg-castilla-yellow z-40 shadow-[0_0_10px_#facc15]"
            />
          )}

          {/* BOTONES DE NAVEGACIÓN (Solo visibles en hover) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => paginate(-1)} 
              className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-castilla-yellow hover:text-castilla-green-dark transition-all active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={() => paginate(1)} 
              className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-castilla-yellow hover:text-castilla-green-dark transition-all active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* INDICADORES (DOTS) */}
          <div className="absolute bottom-10 right-10 flex gap-3 z-30">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const dir = index > currentIndex ? 1 : -1;
                  setPage([index, dir]);
                }}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === index 
                  ? "w-10 h-2 bg-castilla-yellow" 
                  : "w-2 h-2 bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
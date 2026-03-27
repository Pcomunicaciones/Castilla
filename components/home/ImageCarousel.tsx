"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const carouselItems = [
  {
    id: 1,
    title: "Campos de Caña de Azúcar",
    description: "Extensas hectáreas cultivadas con las mejores prácticas agrícolas.",
    image: "/Imagenes/DSC_0131.JPG", 
  },
  {
    id: 2,
    title: "Comunidades",
    description: "Desarrollo social y bienestar para nuestra gente.",
    image: "/Imagenes/comunidades.jpeg",
  },
  {
    id: 3,
    title: "Innovación Agrícola",
    description: "Tecnología de punta aplicada al campo colombiano.",
    image: "/Imagenes/DSC_0094.jpg", 
  },
  {
    id: 4,
    title: "Sostenibilidad",
    description: "Compromiso real con el medio ambiente.",
    image: "/Imagenes/DSC_0391-2.jpg", 
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
    const interval = setInterval(() => paginate(1), 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])


  // Variantes optimizadas para mejor rendimiento
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  }

  const currentItem = carouselItems[currentIndex]

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO DE SECCIÓN */}
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

        {/* CONTENEDOR PRINCIPAL DEL CARRUSEL */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-stone-900 h-[350px] md:h-[450px] group"
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
                x: { type: "spring", stiffness: 350, damping: 40 },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-0"
            >
              {/* IMAGEN DE FONDO */}
              <motion.div 
                animate={{ scale: [1, 1.03] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={currentItem.image} 
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </motion.div>
              
              {/* OVERLAY DEGRADADO */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />

              {/* CONTENIDO DE TEXTO */}
              {/* Ajuste: pb-16 para dar espacio a los controles inferiores en móvil */}
              <div className="relative z-20 h-full flex flex-col justify-center pl-6 md:pl-16 pr-6 pb-16 md:pb-0 text-white max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block px-3 py-0.5 bg-castilla-yellow text-castilla-green-dark text-xs font-black uppercase tracking-widest rounded-full mb-4 shadow-md">
                    Castilla en Acción
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    {currentItem.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 font-light max-w-lg border-l-4 border-castilla-yellow pl-4">
                    {currentItem.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BARRA DE PROGRESO INFERIOR */}
          {isAutoPlaying && (
            <motion.div 
              key={`progress-${currentIndex}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-castilla-yellow z-40"
            />
          )}

          {/* --- BOTONES DE NAVEGACIÓN (NUEVA UBICACIÓN: ABAJO DERECHA) --- */}
          {/* Ajuste: p-2 md:p-3 para ser más pequeños que en el Hero */}
          <div className="absolute bottom-8 right-8 flex gap-3 z-30">
            <button 
              onClick={() => paginate(-1)} 
              className="p-2 md:p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-castilla-yellow hover:text-castilla-green-dark transition-all active:scale-90 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} /> {/* Icono un poco más pequeño */}
            </button>
            <button 
              onClick={() => paginate(1)} 
              className="p-2 md:p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-castilla-yellow hover:text-castilla-green-dark transition-all active:scale-90 shadow-lg"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* --- INDICADORES / PUNTOS (NUEVA UBICACIÓN: ABAJO IZQUIERDA) --- */}
          {/* Movidos a la izquierda para balancear el diseño */}
          <div className="absolute bottom-8 left-8 flex gap-3 z-30">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const dir = index > currentIndex ? 1 : -1;
                  setPage([index, dir]);
                }}
                className={`transition-all duration-500 rounded-full shadow-sm ${
                  currentIndex === index 
                  ? "w-8 h-1.5 bg-castilla-yellow" 
                  : "w-2 h-1.5 bg-white/40 hover:bg-white"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
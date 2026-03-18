"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
              {/* IMAGEN DE FONDO */}
              <motion.img 
                animate={{ scale: [1, 1.1] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                src={currentItem.image} 
                alt={currentItem.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* OVERLAY DEGRADADO */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />

              {/* CONTENIDO DE TEXTO */}
              {/* Ajuste: pb-24 para dar espacio a los controles inferiores en móvil */}
              <div className="relative z-20 h-full flex flex-col justify-center pl-10 md:pl-24 pr-10 pb-24 md:pb-0 text-white max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-1 bg-castilla-yellow text-castilla-green-dark text-xs font-black uppercase tracking-widest rounded-full mb-6 shadow-md">
                    Castilla en Acción
                  </span>
                  <h3 className="text-4xl md:text-7xl font-extrabold mb-6 leading-none drop-shadow-lg">
                    {currentItem.title}
                  </h3>
                  <p className="text-lg md:text-2xl text-white/90 font-light max-w-xl border-l-4 border-castilla-yellow pl-6">
                    {currentItem.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BARRA DE PROGRESO INFERIOR (Opcional, se mantiene si te gusta) */}
          {isAutoPlaying && (
            <motion.div 
              key={`progress-${currentIndex}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
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
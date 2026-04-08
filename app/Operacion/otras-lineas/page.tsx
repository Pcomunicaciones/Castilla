"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Beef, Share2, Wheat } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const lineasNegocio = [
  {
    id: "ganaderia",
    icon: Beef,
    title: "Ganadería Sostenible",
    short: "Crianza de levante y ceba con altos estándares genéticos.",
    details: "Implementamos sistemas silvopastoriles que integran árboles con pasturas, mejorando el bienestar animal y capturando carbono de manera eficiente. Nuestra genética está enfocada en la adaptabilidad y el rendimiento.",
    image: "/Imagenes/imagen.jpg", // <--- Solo esta sección conserva la imagen
    color: "from-emerald-500/10 to-emerald-600/5"
  },
  {
    id: "arroz",
    icon: Wheat,
    title: "Cultivo de Arroz",
    short: "Producción eficiente con manejo responsable del recurso hídrico.",
    details: "Desarrollamos cultivos de arroz implementando tecnologías de precisión para optimizar el riego y el manejo de suelos. Producimos granos de alta calidad nutricional e industrial reduciendo nuestra huella ambiental.",
    // Sin imagen
    color: "from-yellow-500/10 to-yellow-600/5"
  }
]

export default function OtrasLineasPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="relative space-y-16 pb-24 min-h-screen z-10" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>

      {/* HEADER DINÁMICO */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-5xl border-l-4 border-castilla-yellow pl-6 mt-10"
      >
        <span className="text-castilla-green font-bold text-sm uppercase tracking-[0.3em] mb-3 block">
          Diversificación Estratégica
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-castilla-green-dark mb-6 tracking-tight not-italic">
          Otras Líneas de Negocio
        </h1>
        <p className="text-xl text-castilla-gray font-normal leading-relaxed max-w-3xl">
          Nuestra capacidad operativa se extiende a diversos sectores clave,
          optimizando recursos mediante la <span className="text-castilla-green-dark font-bold">economía circular</span> y la excelencia continua en nuestros procesos operacionales.
        </p>
      </motion.div>

      {/* LISTA INTERACTIVA (ACORDEÓN PREMIUM) */}
      <div className="space-y-10 relative">
        {lineasNegocio.map((linea, index) => (
          <motion.div
            key={linea.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className={cn(
              "group bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden",
              expanded === linea.id
                ? "border-castilla-green shadow-[0_30px_60px_rgba(0,0,0,0.12)] scale-[1.02]"
                : "border-gray-100 shadow-md hover:shadow-xl hover:border-castilla-yellow"
            )}
          >
            {/* Cabecera del Item */}
            <div
              className="p-8 md:p-14 flex items-center justify-between cursor-pointer relative"
              onClick={() => setExpanded(expanded === linea.id ? null : linea.id)}
            >
              <div className="flex items-center gap-10 relative z-10 w-full">
                <div className={cn(
                  "w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center transition-all duration-500 shadow-inner shrink-0",
                  expanded === linea.id
                    ? "bg-castilla-green-dark text-white shadow-xl"
                    : "bg-gray-50 text-castilla-green-dark group-hover:bg-castilla-yellow/20"
                )}>
                  {/* Icono Flotando cuando está expandido */}
                  <motion.div
                    animate={
                      expanded === linea.id
                        ? { y: [0, -5, 0], rotate: [0, -5, 5, 0] }
                        : { y: 0, rotate: 0 }
                    }
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <linea.icon className="w-10 h-10 md:w-12 md:h-12" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-castilla-green-dark tracking-tight mb-2">{linea.title}</h3>
                  <p className="text-castilla-gray text-base md:text-lg font-normal">{linea.short}</p>
                </div>
              </div>

              <div className="relative z-10 shrink-0 ml-6">
                <div className={cn(
                  "w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                  expanded === linea.id
                    ? "border-castilla-green bg-castilla-green text-white rotate-180 scale-110 shadow-lg shadow-castilla-green/30"
                    : "border-gray-200 text-gray-400 group-hover:border-castilla-yellow group-hover:text-castilla-yellow"
                )}>
                  {expanded === linea.id ? <Minus size={28} /> : <Plus size={28} />}
                </div>
              </div>

              {/* Decoración sutil de fondo al expandir */}
              <AnimatePresence>
                {expanded === linea.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={cn("absolute inset-0 bg-gradient-to-r", linea.color)}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Contenido Expandible */}
            <AnimatePresence>
              {expanded === linea.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-10 md:px-16 pb-16 pt-8 border-t border-gray-100 overflow-hidden relative">

                    {/* Efecto de partículas/brillo de fondo muy sutil en la tarjeta expandida */}
                    <motion.div
                      className="absolute top-0 right-0 w-64 h-64 bg-castilla-green/5 rounded-full blur-3xl pointer-events-none"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className={cn(
                      "grid gap-16 items-center mt-6 relative z-10",
                      linea.image ? "md:grid-cols-2" : "grid-cols-1"
                    )}>

                      {/* Textos con Stagger */}
                      <div className={cn("space-y-10", linea.image ? "order-2 md:order-1" : "")}>

                        {/* Detalles Deslizándose */}
                        <motion.p
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          className="text-castilla-gray text-xl md:text-2xl leading-relaxed border-l-4 border-castilla-yellow pl-8 py-3 bg-gradient-to-r from-gray-50/50 to-transparent rounded-r-xl"
                        >
                          {linea.details}
                        </motion.p>

                        {/* Chip Animado */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
                          className="flex items-center gap-4 text-sm font-bold text-castilla-green-dark uppercase tracking-widest bg-white shadow-xl shadow-gray-200/50 border border-gray-100 p-5 rounded-2xl inline-flex cursor-pointer hover:bg-castilla-green-dark hover:text-white transition-colors duration-300 group/chip"
                        >
                          <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                          >
                            <Share2 size={22} className="text-castilla-yellow group-hover/chip:text-white transition-colors" />
                          </motion.div>
                          Certificación en Proceso de Calidad
                        </motion.div>

                      </div>

                      {/* Imagen (Renderizado Condicional) */}
                      {linea.image && (
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0, y: 20 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="relative h-80 md:h-[28rem] rounded-[2.5rem] overflow-hidden shadow-2xl order-1 md:order-2 ring-4 ring-castilla-green/10"
                        >
                          <Image
                            src={linea.image}
                            alt={linea.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                      )}

                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

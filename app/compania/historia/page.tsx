"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { Calendar, Award, Globe, Zap, Leaf, Quote, ArrowDownCircle } from "lucide-react"

const timelineEvents = [
  {
    year: "1945",
    title: "Fundación",
    description: "Castilla Agrícola S.A. nace con la visión de transformar el sector agroindustrial colombiano, sembrando las primeras semillas de progreso.",
    icon: Calendar,
    image: "/Imagenes/historia-1.jpg", // Opcional: añadir imágenes por hito
    highlight: true,
  },
  {
    year: "1975",
    title: "Modernización Industrial",
    description: "Revolución técnica: Implementación de tecnología de punta para optimizar la molienda y los procesos de extracción.",
    icon: Zap,
    highlight: false,
  },
  {
    year: "1990",
    title: "Pioneros en Sostenibilidad",
    description: "Fuimos de las primeras empresas en instaurar un departamento dedicado exclusivamente a la preservación del ecosistema.",
    icon: Leaf,
    highlight: true,
  },
  {
    year: "2015",
    title: "Agricultura de Precisión",
    description: "Integración de drones y sensores IoT para el monitoreo en tiempo real de nuestros cultivos.",
    icon: Award,
    highlight: false,
  },
  {
    year: "Presente",
    title: "Liderazgo Global",
    description: "Consolidación como el referente más importante de agroindustria circular y sostenible en la región.",
    icon: Globe,
    highlight: true,
  }
]

function TimelineItem({ event, index }: { event: any, index: number }) {
  const isLeft = index % 2 === 0
  
  return (
    <div className="relative mb-32 last:mb-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Lado del Contenido */}
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`w-full md:w-[45%] ${isLeft ? "md:text-right" : "md:order-2 md:text-left"}`}
        >
          <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-6 shadow-xl ${
            event.highlight ? "bg-castilla-yellow text-black" : "bg-castilla-green-dark text-white"
          }`}>
            <event.icon size={28} />
          </div>
          
          <h3 className="text-5xl font-black text-castilla-green-dark mb-4 tracking-tighter">
            {event.year}
          </h3>
          <h4 className="text-2xl font-bold text-castilla-green mb-4">{event.title}</h4>
          <p className="text-lg text-castilla-gray leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            {event.description}
          </p>
        </motion.div>

        {/* Círculo Central con Pulsación */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
          <motion.div 
            whileHover={{ scale: 1.5 }}
            className={`w-8 h-8 rounded-full border-4 shadow-2xl transition-colors duration-500 ${
              event.highlight ? "bg-castilla-yellow border-white" : "bg-white border-castilla-green"
            }`}
          >
             {event.highlight && <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-castilla-yellow rounded-full" />}
          </motion.div>
        </div>

        {/* Lado Vacío / Imagen (Para equilibrio visual) */}
        <div className="hidden md:block w-[45%]" />
      </div>
    </div>
  )
}

export default function HistoriaPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Línea de progreso que se anima con el scroll
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative space-y-32">
      
      {/* HEADER TIPO REVISTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center max-w-4xl mx-auto pt-10"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block px-4 py-1 bg-castilla-green-dark text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8"
        >
          Desde 1945
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black text-castilla-green-dark mb-8 tracking-tight">
          Nuestra <span className="text-castilla-yellow underline decoration-8">Evolución</span>
        </h1>
        <p className="text-xl text-castilla-gray font-light max-w-2xl mx-auto leading-relaxed">
          Más de siete décadas transformando la tierra en bienestar, innovación y desarrollo para Colombia.
        </p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-16 flex justify-center text-castilla-yellow">
          <ArrowDownCircle size={48} strokeWidth={1} />
        </motion.div>
      </motion.section>

      {/* TIMELINE INTERACTIVO */}
      <section className="relative max-w-7xl mx-auto px-6">
        
        {/* Línea de Fondo (Gris estática) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block rounded-full" />
        
        {/* Línea de Progreso (Verde animada) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-castilla-yellow via-castilla-green to-castilla-green-dark -translate-x-1/2 hidden md:block rounded-full z-0"
        />

        <div className="relative z-10">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* CITA DE LA PRESIDENCIA (DISEÑO PREMIUM) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative py-24 px-8 rounded-[4rem] bg-castilla-green-dark text-white overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]"
      >
        <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/5" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div 
            animate={{ rotate: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 5 }}
            className="flex justify-center mb-10"
          >
            <div className="w-16 h-1 bg-castilla-yellow rounded-full" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-light italic leading-tight mb-12">
            "Nuestra historia no se escribe con tinta, se escribe con el esfuerzo de manos que aman la tierra."
          </h2>
          
          <div className="space-y-2">
            <p className="text-castilla-yellow font-black uppercase tracking-widest text-sm">Presidencia Corporativa</p>
            <p className="text-white/50 text-xs">Castilla Agrícola S.A. - El legado continúa</p>
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        .tracking-tighter { letter-spacing: -0.05em; }
      `}</style>
    </div>
  )
}

"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { Quote, ArrowDownCircle, Target, Sprout, Building2, Droplets, Users, Recycle } from "lucide-react"

// Aquí tenemos la historia central de la empresa. 
// Guardamos cada año clave con su título, lo que pasó, un ícono representativo 
// y si queremos que resalte visualmente o no.
const timelineEvents = [
  {
    year: "1918 - 1945",
    title: "Orígenes Agroindustriales",
    description: "Inicia nuestra trayectoria con la fundación del Ingenio Riopaila y el Ingenio Castilla, sentando las sólidas bases de una tradición agroindustrial centenaria en la región.",
    icon: Sprout,
    highlight: true, // Esto hará que el punto en la línea de tiempo brille un poco más
  },
  {
    year: "2012 - 2013",
    title: "Conformación del Grupo Empresarial",
    description: "Reestructuración operativa y diversificación estratégica. Nace Bengala Agrícola, consolidando al grupo con la siembra de semillas certificadas en sus primeras 100 hectáreas.",
    icon: Building2,
    highlight: false,
  },
  {
    year: "2014 - 2016",
    title: "Innovación, Riego y Exportación",
    description: "Bengala inicia exportaciones marítimas y aéreas. A nivel grupal, implementamos las Fases I y II del Distrito de Riego RIDES, logrando una mejora en la disponibilidad hídrica del 119%.",
    icon: Droplets, 
    highlight: true,
  },
  {
    year: "2017 - 2018",
    title: "Sinergias Operativas",
    description: "Castilla y Riopaila unifican su modelo de gestión asumiendo el control directo de labores agrícolas, una decisión clave para mejorar la eficiencia y minimizar riesgos en campo.",
    icon: Users,
    highlight: false,
  },
  {
    year: "2019 - 2023",
    title: "Diversificación y Economía Circular",
    description: "Apertura de la Planta de Fertilizantes, incursión en el cultivo de caña orgánica y desarrollo de la Etapa II de nuestros proyectos inmobiliarios (Ciudad Amiga).",
    icon: Recycle,
    highlight: true,
  },
  {
    year: "2024 - 2030",
    title: "Mega 2030 y Resiliencia",
    description: "Frente a retos climáticos, trazamos la meta corporativa de alcanzar ingresos por $261.000 MM, siendo líderes nacionales en caña de azúcar, rentabilidad y seguridad alimentaria.",
    icon: Target,
    highlight: false,
  }
]

// Este componente es cada una de las "paradas" en nuestra línea de tiempo.
function TimelineItem({ event, index }: { event: any, index: number }) {
  // Con esto sabemos si la tarjeta debe ir a la izquierda o a la derecha (pares a la izq, impares a la der).
  const isLeft = index % 2 === 0
  
  return (
    <div className="relative mb-24 md:mb-40 last:mb-0">
      {/* Usamos flex-row o flex-row-reverse dependiendo de qué lado toca poner el texto */}
      <div className={`flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} w-full`}>
        
        {/* Aquí va el texto y el ícono. Lo animamos para que entre deslizando desde afuera */}
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full md:w-[45%] ${isLeft ? "md:text-right" : "md:text-left"}`}
        >
          {/* El título con el año súper grande */}
          <div className={`flex items-center gap-4 mb-4 ${isLeft ? "md:flex-row-reverse justify-end" : "md:flex-row justify-start"}`}>
            
            {/* El cuadrito del ícono que cambia de color si es un evento destacado */}
            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg text-white transform transition-transform duration-300 hover:scale-110 ${
               event.highlight ? "bg-castilla-green-dark" : "bg-castilla-green"
            }`}>
              <event.icon size={26} />
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-castilla-green-dark tracking-tighter leading-none">
              {event.year}
            </h3>
          </div>

          {/* El bloque donde va la descripción del evento */}
          <div className="relative">
             {/* Esta es la pequeña rayita amarilla decorativa sobre el título */}
             <div className={`hidden md:block absolute top-0 w-10 h-[2px] bg-castilla-yellow ${isLeft ? "right-0" : "left-0"}`} />
             
             <h4 className="text-xl md:text-2xl font-bold text-castilla-green mb-3 pt-4">{event.title}</h4>
             <p className="text-base md:text-lg text-castilla-gray leading-relaxed font-medium">
               {event.description}
             </p>
          </div>
        </motion.div>

        {/* Este es el círculo central que une la tarjeta con la línea de tiempo */}
        <div className="relative w-full md:w-[10%] h-16 md:h-auto flex items-center justify-center my-4 md:my-0">
           {/* El punto hace "pop" (crece desde 0) cuando haces scroll */}
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-4 shadow-md z-20 relative ${
               event.highlight 
               ? "bg-castilla-yellow border-white ring-4 ring-castilla-yellow/20" 
               : "bg-white border-castilla-green"
             }`}
           />
        </div>

        {/* Este div vacío está acá solo para equilibrar el layout (ocupa el otro 45% del ancho) */}
        <div className="hidden md:block w-[45%]" />
        
      </div>
    </div>
  )
}

// === PÁGINA PRINCIPAL ===
export default function HistoriaPage() {
  // Usamos ref y useScroll para saber en qué parte de la página está el usuario
  const timelineRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  // useSpring le da esa sensación de suavidad o "peso" a la línea cuando va bajando
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  })

  return (
    // Aplicamos Tahoma en todo el contenedor para mantener la identidad visual
    <div className="relative space-y-24 md:space-y-32 bg-[#fafbfc] font-[Tahoma,Verdana,sans-serif]">
      
      {/* --- SECCIÓN DE INTRODUCCIÓN --- */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto pt-20 px-6"
      >
        {/* Etiqueta pequeñita arriba del título */}
        <div className="inline-block px-4 py-1.5 bg-castilla-green-dark/5 text-castilla-green-dark rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-castilla-green-dark/10">
          Trayectoria Corporativa
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-castilla-green-dark mb-6 tracking-tighter leading-none">
          Nuestra <span className="relative inline-block">
            Evolución
            {/* Este span es la mancha de marcador amarillo detrás de la palabra */}
            <span className="absolute bottom-2 left-0 w-full h-3 bg-castilla-yellow/40 -z-10 rounded-full"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-castilla-gray font-light max-w-2xl mx-auto leading-relaxed">
          Más de un siglo transformando la tierra. De ingenios individuales a un sólido grupo agroindustrial comprometido con la innovación y el futuro de Colombia.
        </p>
        
        {/* Flechita que rebota invitando al usuario a bajar */}
        <div className="mt-16 flex justify-center opacity-50">
          <ArrowDownCircle size={32} className="animate-bounce text-castilla-green" />
        </div>
      </motion.section>

      {/* --- EL RECORRIDO DE LA HISTORIA --- */}
      <section ref={timelineRef} className="relative max-w-7xl mx-auto px-6 pb-20">
        
        {/* Esta es la línea gris de fondo que siempre está visible (el "camino") */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full hidden md:block" />
        
        {/* Y esta es la línea mágica que se va dibujando (escala) mientras el usuario hace scroll */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-castilla-green via-castilla-green to-castilla-yellow z-0 shadow-[0_0_15px_rgba(72,187,120,0.6)] hidden md:block"
        >
           {/* La pequeña "luz" blanca al final de la línea láser */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </motion.div>

        {/* Aquí mapeamos (dibujamos) cada evento que pusimos en el arreglo de arriba */}
        <div className="relative z-10 pt-10">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* --- CIERRE INSPIRADOR --- */}
      <div className="px-6 pb-20">
        <motion.section
          // Este bloque verde entra suavemente de abajo hacia arriba
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative max-w-5xl mx-auto py-24 px-8 md:px-20 rounded-[3rem] bg-[#04683A] text-white overflow-hidden text-center"
        >
          {/* Unos detalles visuales para que no sea un color plano */}
          <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-castilla-yellow/20 rounded-full blur-[100px]"></div>
          
          <Quote className="mx-auto w-12 h-12 text-castilla-yellow mb-8 opacity-80" />
          
          <h2 className="relative z-10 text-2xl md:text-3xl font-serif italic leading-relaxed mb-10 text-white/90">
            "Cultivamos la tierra, por un mundo mejor."
          </h2>
          
          {/* El separador final y la firma */}
          <div className="w-16 h-1 bg-castilla-yellow mx-auto mb-6 rounded-full" />
          
          <div className="relative z-10">
            <p className="font-bold tracking-widest text-xs uppercase text-white/80">Propósito Superior</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
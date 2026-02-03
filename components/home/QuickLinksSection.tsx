"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Building2, History, Users2, Sparkles } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  {
    icon: Building2,
    title: "Quiénes Somos",
    description: "Conoce nuestra misión, visión y valores que nos definen como empresa líder.",
    href: "/compania/quienes-somos",
    color: "from-castilla-green-dark to-emerald-900",
  },
  {
    icon: History,
    title: "Historia y Evolución",
    description: "Más de 70 años de trayectoria transformando con pasión el campo colombiano.",
    href: "/compania/historia",
    color: "from-castilla-green to-green-700",
  },
  {
    icon: Users2,
    title: "Gobierno Corporativo",
    description: "Estructura organizacional basada en la transparencia, ética y responsabilidad.",
    href: "/compania/gobierno-corporate",
    color: "from-castilla-green-light to-lime-600",
  },
]

function InteractiveCard({ link, index, isInView }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Efecto de inclinación (Tilt) suave
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (rect) {
      x.set((e.clientX - rect.left) / rect.width - 0.5)
      y.set((e.clientY - rect.top) / rect.height - 0.5)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <Link href={link.href} className="group relative block h-full">
        {/* Fondo con Glassmorphism y Borde Animado */}
        <div className="relative h-full bg-white border border-gray-100 rounded-[2.5rem] p-10 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] group-hover:border-castilla-green/20">
          
          {/* Círculo de fondo que reacciona al hover */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-50 rounded-full transition-all duration-700 group-hover:scale-[3] group-hover:bg-castilla-green/5 z-0" />

          <div className="relative z-10">
            {/* Contenedor del Icono con animación de flotación */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`w-20 h-20 bg-gradient-to-br ${link.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:rotate-[10deg] transition-transform duration-500`}
            >
              <link.icon className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-2xl font-black text-castilla-green-dark mb-4 group-hover:text-castilla-green transition-colors">
              {link.title}
            </h3>
            
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">
              {link.description}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-castilla-green-dark uppercase tracking-widest group-hover:text-castilla-yellow transition-colors">
                Explorar
              </span>
              <div className="relative flex items-center">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5 text-castilla-green group-hover:text-castilla-yellow transition-colors" />
                </motion.div>
                {/* Línea expansiva debajo del botón */}
                <div className="absolute -bottom-1 left-0 h-[2px] bg-castilla-yellow w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Decoración abstracta en la esquina inferior */}
          <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
            <Sparkles size={60} className="text-castilla-green-dark" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function QuickLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Elementos decorativos de fondo de sección */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="max-w-3xl mb-20"
        >
          <span className="inline-block px-4 py-1 bg-castilla-green/10 text-castilla-green text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Nuestra Compañía
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-castilla-green-dark mb-6 tracking-tighter">
            Descubre el corazón de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-castilla-green to-lime-500">
              Castilla Agrícola
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-castilla-yellow rounded-full mb-8" />
          <p className="text-xl text-gray-500 font-medium">
            Siete décadas de compromiso con la tierra y su gente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {quickLinks.map((link, index) => (
            <InteractiveCard 
              key={link.title} 
              link={link} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
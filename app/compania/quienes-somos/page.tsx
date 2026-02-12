"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Eye, Heart, Award, Shield, Handshake, ChevronDown, Leaf } from "lucide-react"
import { useRef } from "react"

const valores = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos la mejora continua en todos nuestros procesos con estándares internacionales.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Integridad",
    description: "Actuamos con honestidad, ética y transparencia total en cada una de nuestras acciones.",
    color: "from-blue-400 to-castilla-green"
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Dedicación profunda con el bienestar de nuestras comunidades y el equilibrio ambiental.",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: Handshake,
    title: "Responsabilidad",
    description: "Asumimos con propiedad las consecuencias de nuestras decisiones y su impacto social.",
    color: "from-green-400 to-castilla-green-dark"
  }
]

export default function QuienesSomosPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Efecto Parallax para elementos decorativos
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <div ref={containerRef} className="relative space-y-24 pb-20">
      
      {/* Elementos Decorativos Flotantes (Parallax) */}
      <motion.div style={{ y: y1, rotate }} className="absolute -top-10 -right-10 opacity-10 pointer-events-none hidden lg:block">
        <Leaf size={300} className="text-castilla-green" />
      </motion.div>

      {/* ================================================================
          HERO SECTION DINÁMICO
          ================================================================ */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative min-h-[40vh] flex flex-col justify-center"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-castilla-green font-black uppercase tracking-[0.3em] text-sm mb-4 block">
            Nuestra Identidad
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-castilla-green-dark mb-6 leading-none">
            Raíces que <br /> <span className="text-castilla-yellow text-stroke">Transforman.</span>
          </h1>
          <p className="text-xl text-castilla-gray leading-relaxed border-l-4 border-castilla-yellow pl-6 italic">
            "En Castilla Agrícola S.A., no solo cultivamos tierra; cultivamos el progreso de toda una región colombiana."
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-castilla-green/30"
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.section>

      {/* ================================================================
          SECCIÓN MISION & VISION (Cards con Hover 3D)
          ================================================================ */}
      <div className="grid lg:grid-cols-2 gap-12 relative z-10">
        {[
          { 
            type: "Misión", 
            icon: Target, 
            text: "Producir azúcar y sus derivados con los más altos estándares de calidad, generando valor para nuestros accionistas y comunidades.",
            bg: "bg-white",
            accent: "bg-castilla-yellow"
          },
          { 
            type: "Visión", 
            icon: Eye, 
            text: "Ser reconocidos como la empresa agroindustrial líder en Colombia, destacando por nuestra innovación y sostenibilidad.",
            bg: "bg-castilla-green-dark",
            accent: "bg-castilla-green-light",
            textColor: "text-white"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${item.bg} rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.accent} opacity-10 rounded-bl-full transition-all group-hover:scale-150`} />
            
            <div className={`w-16 h-16 ${item.accent} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
              <item.icon className={item.textColor ? "text-white" : "text-castilla-green-dark"} size={32} />
            </div>
            
            <h2 className={`text-3xl font-black mb-6 ${item.textColor || "text-castilla-green-dark"}`}>
              Nuestra {item.type}
            </h2>
            <p className={`text-lg leading-relaxed ${item.textColor ? "text-white/80" : "text-castilla-gray"}`}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================================================================
          BANNER DE TRAYECTORIA (Glassmorphism)
          ================================================================ */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="relative py-16 px-8 rounded-[3rem] overflow-hidden text-center"
      >
        <div className="absolute inset-0 bg-[url('/Imagenes/textura-campo.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-castilla-green-dark/90 backdrop-blur-md" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-castilla-yellow mb-6">70 Años de Historia Viva</h2>
          <p className="text-xl text-white/90 font-light leading-relaxed">
            Integrando prácticas innovadoras de cultivo con procesos de producción eficientes y ambientalmente responsables. 
            Nuestro compromiso va más allá de la producción: trabajamos por el desarrollo integral.
          </p>
        </div>
      </motion.section>

      {/* ================================================================
          VALORES (CORREGIDO: Layout 2 columnas x 2 filas)
          ================================================================ */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-castilla-green-dark">Nuestros Valores</h2>
          <div className="w-24 h-2 bg-castilla-yellow mx-auto mt-4 rounded-full" />
        </div>

        {/* CAMBIO CLAVE: 
           - 'grid-cols-1 md:grid-cols-2': En tablet y escritorio serán 2 columnas.
           - 'max-w-5xl mx-auto': Centra el bloque para que no se estiren demasiado.
           - 'gap-8': Buen espacio entre tarjetas.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all cursor-default flex flex-col items-start"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${valor.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                <valor.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-castilla-green-dark mb-3 group-hover:text-castilla-green transition-colors tracking-tight">
                {valor.title}
              </h3>
              
              <p className="text-sm text-castilla-gray leading-relaxed font-medium">
                {valor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CSS Personalizado para el efecto de texto delineado */}
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1px #005432;
          color: transparent;
        }
      `}</style>
    </div>
  )
}
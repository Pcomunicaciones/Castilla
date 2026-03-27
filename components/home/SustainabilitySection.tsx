"use client"

import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import { useRef, useEffect } from "react"
import { Leaf, Droplets, Sun, Users, ArrowUpRight, Sparkles } from "lucide-react"
import Image from "next/image"

const items = [
  { icon: Leaf, title: "Agricultura Responsable", desc: "Prácticas que regeneran el ecosistema mediante nutrición orgánica.", col: "#a3c74a" },
  { icon: Droplets, title: "Gestión del Agua", desc: "Riego por goteo y monitoreo en tiempo real para preservar acuíferos.", col: "#60a5fa" },
  { icon: Sun, title: "Energía Limpia", desc: "Paneles solares y biomasa para reducir nuestra huella de carbono.", col: "#fbbf24" },
  { icon: Users, title: "Impacto Social", desc: "Fortalecemos el tejido social mediante educación y empleo digno.", col: "#f87171" },
]

export function SustainabilitySection() {
  const sectionRef = useRef(null)
  // OPTIMIZACIÓN 1: 'once: true' si es posible, o ajustar margen para evitar trigger constante
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px" })
  
  // Parallax del fondo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  // OPTIMIZACIÓN 2: Usar 'useTransform' directo para GPU
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  // Seguimiento del mouse (OPTIMIZADO)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Springs más suaves y eficientes
  const spotlightX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.8 })
  const spotlightY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.8 })

  // Template literal para evitar recomposición de strings en cada frame
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 100, 55, 0.4), transparent 80%)`

  useEffect(() => {
    // OPTIMIZACIÓN 3: Throttling con requestAnimationFrame
    let frameId: number
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      })
    }
    
    // Solo escuchar si el componente está montado
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [mouseX, mouseY])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-black min-h-screen flex items-center">
      
      {/* 1. IMAGEN DE FONDO (Optimizado con will-change) */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-110 will-change-transform"
      >
        <Image 
          src="/Imagenes/Exportados 7.jpg" 
          alt="Background" 
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        
        {/* Spotlight Optimizado */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none will-change-[background]"
          style={{ background: spotlightBackground }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a0e] via-transparent to-[#001a0e] z-20" />
      </motion.div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
        
        {/* CABECERA */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={isInView ? { rotate: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-1 border border-castilla-yellow/50 bg-castilla-yellow/10 text-castilla-yellow rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-8 will-change-transform"
          >
            <Sparkles size={14} className="animate-pulse" /> Sostenibilidad
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            {"Comprometidos con el ".split("").map((char, i) => (
              <motion.span
                key={i}
                // OPTIMIZACIÓN 4: Reducir blur inicial o eliminarlo si causa lag en móviles
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: i * 0.015, duration: 0.3 }} // Tiempos más cortos para sensación snappy
                className="inline-block will-change-[opacity,transform,filter]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              className="text-castilla-yellow inline-block ml-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] will-change-transform"
            >
              futuro
            </motion.span>
          </h2>
        </div>

        {/* GRID (Optimizado con hardware acceleration) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              // OPTIMIZACIÓN 5: Usar X/Y en lugar de layout props
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} // Once: true mejora MUCHO el rendimiento al scrollear
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative h-80 bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.07] hover:border-white/30 transition-colors duration-300 shadow-2xl overflow-hidden will-change-transform"
            >
              {/* Rayo de luz (CSS puro para rendimiento) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </div>

              <div>
                <motion.div 
                  // OPTIMIZACIÓN 6: Animación continua optimizada
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-castilla-yellow group-hover:text-black shadow-lg transition-colors duration-300 will-change-transform"
                >
                  <item.icon size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-castilla-yellow transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Castilla 2026</span>
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-castilla-yellow group-hover:border-castilla-yellow/50 transition-colors"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>

              {/* Barra de acento (CSS Transitions son más ligeras que Framer para esto) */}
              <div 
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                style={{ backgroundColor: item.col }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"
import { Leaf, Droplets, Sun, Users, ArrowUpRight, Sparkles } from "lucide-react"

const items = [
  { icon: Leaf, title: "Agricultura Responsable", desc: "Prácticas que regeneran el ecosistema mediante nutrición orgánica.", col: "#a3c74a" },
  { icon: Droplets, title: "Gestión del Agua", desc: "Riego por goteo y monitoreo en tiempo real para preservar acuíferos.", col: "#60a5fa" },
  { icon: Sun, title: "Energía Limpia", desc: "Paneles solares y biomasa para reducir nuestra huella de carbono.", col: "#fbbf24" },
  { icon: Users, title: "Impacto Social", desc: "Fortalecemos el tejido social mediante educación y empleo digno.", col: "#f87171" },
]

export function SustainabilitySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  // Parallax del fondo al hacer scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  // Seguimiento del mouse para el spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-black min-h-screen flex items-center">
      
      {/* 1. IMAGEN DE FONDO CON PARALLAX Y SPOTLIGHT */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img 
          src="/Imagenes/Exportados 7.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Capa de Spotlight que sigue al mouse */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 100, 55, 0.4), transparent 80%)`
            )
          }}
        />
        {/* Overlay degradado para asegurar contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a0e] via-transparent to-[#001a0e] z-20" />
      </motion.div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
        
        {/* CABECERA ULTRA DINÁMICA */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={isInView ? { rotate: 0, opacity: 1 } : {}}
            className="flex items-center gap-2 px-4 py-1 border border-castilla-yellow/50 bg-castilla-yellow/10 text-castilla-yellow rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
            <Sparkles size={14} className="animate-pulse" /> Sostenibilidad
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            {"Comprometidos con el ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: i * 0.02, duration: 0.4 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="text-castilla-yellow inline-block ml-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            >
              futuro
            </motion.span>
          </h2>
        </div>

        {/* GRID DE TARJETAS INTERACTIVAS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -15, transition: { duration: 0.2 } }}
              className="group relative h-80 bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.07] hover:border-white/30 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              {/* Efecto de rayo de luz al pasar el mouse */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div>
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-castilla-yellow group-hover:text-black shadow-lg transition-all"
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
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-castilla-yellow group-hover:border-castilla-yellow/50 transition-all"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>

              {/* Barra de acento con color temático */}
              <div 
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                style={{ backgroundColor: item.col }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
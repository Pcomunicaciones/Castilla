"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { Building2, MapPin, Home, TrendingUp, CheckCircle, CircleDollarSign, Navigation } from "lucide-react"
import Image from "next/image"

// Datos de las ubicaciones geográficas con métricas para el tooltip
const mapLocations = [
  {
    id: "florida",
    city: "Florida, Valle",
    project: "San Antonio de los Caballeros",
    metric: "10 Lotes Comercializados",
    x: "65%", // Norte - Oriente (Cerca a la cordillera)
    y: "25%",
    delayIndex: 1
  },
  {
    id: "miranda",
    city: "Miranda, Cauca",
    project: "Hacienda Reporter",
    metric: "$9.050 Millones en Venta",
    x: "60%", // Sur - Oriente (Abajo de Florida)
    y: "60%",
    delayIndex: 2
  },
  {
    id: "pto-tejada",
    city: "Puerto Tejada, Cauca",
    project: "Hogares Felices",
    metric: "518 Familias Beneficiadas",
    x: "35%", // Occidente (Cerca al río Cauca)
    y: "50%",
    delayIndex: 3
  }
]

// Variantes de animación con el tipado correcto de TypeScript (Variants)
const pinVariants: Variants = {
  hidden: { opacity: 0, y: -60, scale: 0.5, x: "-50%" },
  visible: (index: number) => ({
    opacity: 1,
    y: "-50%", 
    x: "-50%", 
    scale: 1,
    transition: { 
      delay: 1.2 + (index * 0.3), 
      type: "spring", 
      stiffness: 250, 
      damping: 15 
    }
  })
}

export default function ProyectosInmobiliariosPage() {
  // Tipado correcto para el estado
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  return (
    <div className="space-y-16 pb-10" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
      
      {/* ================= HERO SECTION ================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[450px] rounded-[2rem] overflow-hidden flex items-center justify-center text-center shadow-2xl"
      >
        <Image 
          src="/Imagenes/Exportado 2.jpg" 
          alt="Terrenos y Proyectos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#004a29]/90" />
        
        <div className="relative z-10 text-white px-6">
          <motion.span 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#a3c74a] text-[#004a29] px-4 py-1 rounded-md text-xs font-bold mb-4 uppercase tracking-widest"
          >
            Programas Especiales
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight not-italic">
            Proyectos Inmobiliarios
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Hitos y gestión administrativa 2025: Desarrollando el territorio, generando vivienda propia y fortaleciendo el balance financiero.
          </p>
        </div>
      </motion.section>

      {/* ================= RESULTADOS FINANCIEROS (BANNER) ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#004a29] to-[#006437] p-8 md:p-12 rounded-[2.5rem] shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8 mx-2"
      >
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp size={14} /> Balance 2025
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2">Sector Constructor</h2>
          <p className="text-white/80 leading-relaxed text-sm">
            Los logros regionales contribuyeron a un balance financiero altamente positivo al finalizar el periodo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase font-black text-[#a3c74a] tracking-widest mb-1">Ingreso Bruto</p>
            <p className="text-4xl md:text-5xl font-black">$12.539 <span className="text-lg font-normal opacity-80">M</span></p>
          </div>
          <div className="hidden sm:block w-px bg-white/20" />
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase font-black text-[#a3c74a] tracking-widest mb-1">Utilidad</p>
            <p className="text-4xl md:text-5xl font-black">$10.416 <span className="text-lg font-normal opacity-80">M</span></p>
          </div>
        </div>
      </motion.div>

      {/* ================= CONTENIDO PRINCIPAL: GRID 2x2 ================= */}
      <div className="grid md:grid-cols-2 gap-8 px-2">
        
        {/* TARJETA 1: Puerto Tejada */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-[#006437]/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-[#f1f8e9] group-hover:bg-[#006437] rounded-2xl flex items-center justify-center transition-colors duration-300">
              <Home className="w-8 h-8 text-[#006437] group-hover:text-white transition-colors" />
            </div>
            <span className="bg-[#a3c74a]/20 text-[#004a29] text-xs font-black uppercase px-4 py-1.5 rounded-full border border-[#a3c74a]/30">
              Avance 24.8%
            </span>
          </div>
          <h3 className="text-3xl font-bold text-[#004a29] mb-4 tracking-tight">Puerto Tejada</h3>
          <p className="text-gray-500 text-lg leading-relaxed flex-1">
            El proyecto de vivienda <strong>"Ciudad Amiga Hogares Felices"</strong> se materializó para <strong>518 familias</strong> que lograron adquirir su vivienda propia durante el 2025.
          </p>
        </motion.div>

        {/* TARJETA 2: Miranda */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-[#006437]/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-[#f1f8e9] group-hover:bg-[#006437] rounded-2xl flex items-center justify-center transition-colors duration-300">
              <CircleDollarSign className="w-8 h-8 text-[#006437] group-hover:text-white transition-colors" />
            </div>
            <span className="bg-gray-100 text-gray-500 text-xs font-black uppercase px-4 py-1.5 rounded-full border border-gray-200">
              Venta de Tierras
            </span>
          </div>
          <h3 className="text-3xl font-bold text-[#004a29] mb-4 tracking-tight">Miranda</h3>
          <p className="text-gray-500 text-lg leading-relaxed flex-1">
            Se concretó la venta de <strong>18,27 hectáreas brutas</strong> de la hacienda Reporter al Grupo Empresarial Falcon Zomac S.A.S. Esta operación se realizó por un valor de <strong>$9.050 millones de pesos</strong>.
          </p>
        </motion.div>

        {/* TARJETA 3: Florida */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-[#006437]/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-[#f1f8e9] group-hover:bg-[#006437] rounded-2xl flex items-center justify-center transition-colors duration-300">
              <Building2 className="w-8 h-8 text-[#006437] group-hover:text-white transition-colors" />
            </div>
            <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full border border-blue-100 text-center leading-tight">
              San Antonio de <br />los Caballeros
            </span>
          </div>
          <h3 className="text-3xl font-bold text-[#004a29] mb-4 tracking-tight">Florida</h3>
          <p className="text-gray-500 text-lg leading-relaxed flex-1">
            Comercialización de 10 lotes en la urbanización <strong>La Molienda</strong>, beneficiando a nuestros trabajadores. Se logró la escrituración de 2 predios en 2025, proyectando finalizar los 8 restantes en 2026.
          </p>
        </motion.div>

        {/* TARJETA 4: IMAGEN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative group h-full min-h-[350px] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          <Image 
            src="/Imagenes/proyecto-inmobiliario.png" 
            alt="Vista de Proyectos Inmobiliarios"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 bg-gray-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004a29]/90 via-[#004a29]/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-3 text-white">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                <MapPin className="w-6 h-6 text-[#a3c74a]" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">Desarrollo Regional</p>
                <p className="text-xs text-white/70 uppercase tracking-widest font-bold mt-1">Impacto Positivo</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ================= MAPA REGIONAL ANIMADO DETALLADO ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-2 mt-8 p-1 md:p-2 bg-white rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <div className="bg-[#f8fafc] rounded-[3rem] p-8 md:p-12">
          
          {/* Header del Mapa */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#006437] mb-2">
                <Navigation size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Mapa de Operaciones</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#004a29] tracking-tight">Huella Inmobiliaria Regional</h3>
            </div>
            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 text-sm font-bold text-gray-500 flex flex-col md:items-end">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Área de Influencia</span>
              <span>📍 <span className="text-[#006437]">Valle del Cauca & Cauca</span></span>
            </div>
          </div>

          {/* Contenedor del Mapa Interactivo */}
          <div className="relative w-full h-[450px] md:h-[550px] bg-[#eef2f6] rounded-[2.5rem] overflow-hidden shadow-inner border border-gray-200/50">
            
            {/* SVG: DIBUJO ANIMADO DEL TERRENO */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              
              {/* Grilla técnica de fondo */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Río Cauca */}
              <motion.path 
                d="M 450 650 Q 380 450 300 300 T 200 -50" 
                fill="none" 
                stroke="#93c5fd" 
                strokeWidth="12" 
                strokeLinecap="round" 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Cordillera Central */}
              <motion.path 
                d="M 600 650 Q 750 350 800 -50" 
                fill="none" stroke="#006437" strokeWidth="2" strokeOpacity="0.3"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.path 
                d="M 700 650 Q 850 350 900 -50" 
                fill="none" stroke="#006437" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="8 8"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }}
              />
              <motion.path 
                d="M 800 650 Q 950 350 1000 -50" 
                fill="none" stroke="#006437" strokeWidth="1" strokeOpacity="0.1"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6 }}
              />

              {/* Cordillera Occidental */}
              <motion.path 
                d="M 200 650 Q 150 350 50 -50" 
                fill="none" stroke="#006437" strokeWidth="2" strokeOpacity="0.3"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }}
              />
              <motion.path 
                d="M 100 650 Q 50 350 -50 -50" 
                fill="none" stroke="#006437" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="6 6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>

            {/* PINES INTERACTIVOS CON ANIMACIÓN DE CAÍDA */}
            {mapLocations.map((loc) => (
              <motion.div
                key={loc.id}
                custom={loc.delayIndex}
                variants={pinVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute transform z-10"
                style={{ left: loc.x, top: loc.y }}
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {/* Ondas de radar */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 + (loc.delayIndex * 0.3) }}
                  className="absolute inset-0 -m-4 bg-[#a3c74a] rounded-full animate-ping opacity-30 pointer-events-none" 
                />
                
                {/* El Pin en sí */}
                <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl border-[3px] border-[#006437] cursor-pointer hover:bg-[#006437] group transition-all duration-300 hover:scale-110">
                  <MapPin className="w-5 h-5 text-[#006437] group-hover:text-white transition-colors" />
                </div>

                {/* Tooltip de Información (Hover) */}
                <div className={`absolute left-1/2 -translate-x-1/2 bottom-[130%] mb-2 w-56 bg-white border border-gray-100 p-4 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none z-50 ${activeLocation === loc.id ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white drop-shadow-sm" />
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">{loc.city}</p>
                  <p className="text-sm font-black text-[#004a29] leading-tight mb-2">{loc.project}</p>
                  <div className="bg-[#f1f8e9] text-[#006437] text-[10px] font-bold px-2 py-1.5 rounded-md inline-block">
                    {loc.metric}
                  </div>
                </div>
                
                {/* Etiqueta Permanente de la Ciudad */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 + (loc.delayIndex * 0.3) }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-[11px] font-black tracking-wider text-[#006437] uppercase bg-white/90 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-[#006437]/10"
                >
                  {loc.city.split(',')[0]}
                </motion.p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.div>

      {/* ================= FOOTER DE SECCIÓN ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-8 border-t border-gray-100 flex items-start md:items-center gap-4 px-4"
      >
        <CheckCircle className="text-[#006437] w-6 h-6 shrink-0 mt-1 md:mt-0" />
        <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
          Todos los proyectos son desarrollados bajo la normativa vigente de ordenamiento territorial, priorizando el bienestar de nuestros colaboradores y la comunidad.
        </p>
      </motion.div>
    </div>
  )
}
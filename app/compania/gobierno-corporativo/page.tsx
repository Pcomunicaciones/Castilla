"use client"

import { motion } from "framer-motion"
import { Users, Gavel, Building2, Shield, Eye, Scale, FileText, ArrowRight, CheckCircle2, Zap } from "lucide-react"

// --- DATOS ---
// Mantenemos los datos pero agregamos colores de acento para los efectos de brillo
const orgStructure = {
  assembly: {
    title: "Asamblea General",
    role: "Máxima Autoridad",
    icon: Users,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-200"
  },
  board: {
    title: "Junta Directiva",
    role: "Dirección Estratégica",
    icon: Gavel,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200"
  },
  president: {
    title: "Presidencia Ejecutiva",
    role: "Liderazgo Operativo",
    icon: Building2,
    color: "text-emerald-600",
    bg: "bg-white",
    border: "border-gray-100"
  },
  committees: {
    title: "Comités de Apoyo",
    role: "Vigilancia y Riesgo",
    icon: Shield,
    color: "text-blue-600",
    bg: "bg-white",
    border: "border-gray-100"
  }
}

// --- COMPONENTES ANIMADOS ---

// 1. Tarjeta con efecto "Pop" y Brillo
const OrgCard = ({ data, delay }: { data: any, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative z-20 flex flex-col items-center justify-center p-6 w-64 md:w-72 rounded-3xl shadow-xl border ${data.border} ${data.bg} backdrop-blur-sm group cursor-default`}
    >
      {/* Efecto de Brillo al Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
      
      <div className={`p-4 rounded-2xl mb-3 shadow-inner ${data.bg === 'bg-white' ? 'bg-gray-50' : 'bg-white/50'} group-hover:scale-110 transition-transform duration-300`}>
        <data.icon size={32} className={data.color} />
      </div>
      
      <h3 className="text-lg font-black text-gray-800 mb-1">{data.title}</h3>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{data.role}</span>
      
      {/* Indicador de estado activo */}
      <div className={`mt-4 w-12 h-1 rounded-full ${data.color.replace('text-', 'bg-')}/30`} />
    </motion.div>
  )
}

// 2. Línea Vertical que "crece"
const VerticalLine = ({ height = "h-16", delay }: { height?: string, delay: number }) => (
  <div className={`w-0.5 ${height} relative mx-auto overflow-hidden`}>
    <div className="absolute inset-0 bg-gray-200" />
    <motion.div 
      initial={{ height: "0%" }}
      whileInView={{ height: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full bg-gradient-to-b from-castilla-yellow to-castilla-green"
    />
  </div>
)

// 3. Conector Ramificado (T Invertida) que se "dibuja"
const BranchLine = ({ delay }: { delay: number }) => (
  <div className="relative h-12 w-full max-w-2xl mx-auto hidden md:block">
    {/* Línea Vertical Central (baja) */}
    <div className="absolute top-0 left-1/2 w-0.5 h-1/2 -translate-x-1/2 bg-gray-200 overflow-hidden">
       <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ delay, duration: 0.4 }} className="w-full bg-castilla-green" />
    </div>
    
    {/* Línea Horizontal (se abre) */}
    <div className="absolute top-1/2 left-[25%] right-[25%] h-0.5 bg-gray-200 overflow-hidden">
       <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: delay + 0.4, duration: 0.6 }} className="h-full bg-castilla-green mx-auto" />
    </div>

    {/* Líneas Verticales Finales (bajan a los hijos) */}
    <div className="absolute top-1/2 left-[25%] w-0.5 h-1/2 bg-gray-200 overflow-hidden">
       <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ delay: delay + 1, duration: 0.3 }} className="w-full bg-castilla-green" />
    </div>
    <div className="absolute top-1/2 right-[25%] w-0.5 h-1/2 bg-gray-200 overflow-hidden">
       <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ delay: delay + 1, duration: 0.3 }} className="w-full bg-castilla-green" />
    </div>
  </div>
)

export default function GobiernoCorporativoPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-castilla-yellow selection:text-black">
      
      {/* FONDO ANIMADO (Partículas sutiles) */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-20 left-10 w-64 h-64 bg-castilla-green/5 rounded-full blur-3xl" />
         <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-20 right-10 w-96 h-96 bg-castilla-yellow/5 rounded-full blur-3xl" />
      </div>

      {/* 1. HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-20 px-6 text-center max-w-4xl mx-auto mb-20"
      >
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-100 rounded-full mb-8 shadow-sm">
            <Zap size={14} className="text-castilla-yellow fill-castilla-yellow" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-castilla-green-dark uppercase">Estructura Viva</span>
         </div>
         
         <h1 className="text-5xl md:text-7xl font-black text-castilla-green-dark mb-6 leading-tight tracking-tight">
           Jerarquía de <span className="text-transparent bg-clip-text bg-gradient-to-r from-castilla-green to-emerald-400">Valor</span>
         </h1>
         <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
           Más que un organigrama, es el flujo de responsabilidad que conecta nuestra visión con la ejecución diaria.
         </p>
      </motion.section>

      {/* 2. ORGANIGRAMA VIVO */}
      <section className="relative max-w-6xl mx-auto px-4 pb-32 flex flex-col items-center">
        
        {/* NIVEL 1: ASAMBLEA */}
        <div className="relative">
          {/* Corona decorativa */}
          <motion.div 
             initial={{ scale: 0 }} 
             whileInView={{ scale: 1 }} 
             transition={{ delay: 0.5 }} 
             className="absolute -top-6 left-1/2 -translate-x-1/2 text-castilla-yellow"
          >
             <svg width="40" height="20" viewBox="0 0 40 20"><path d="M20 0 L25 10 L35 10 L27 15 L30 25 L20 18 L10 25 L13 15 L5 10 L15 10 Z" fill="currentColor" opacity="0.5"/></svg>
          </motion.div>
          <OrgCard data={orgStructure.assembly} delay={0.2} />
        </div>

        {/* LÍNEA CONECTORA 1 */}
        <VerticalLine delay={0.8} />

        {/* NIVEL 2: JUNTA */}
        <OrgCard data={orgStructure.board} delay={1.0} />

        {/* LÍNEA RAMIFICADA */}
        <BranchLine delay={1.4} />
        {/* (Versión móvil de la línea) */}
        <div className="md:hidden"><VerticalLine delay={1.4} height="h-12" /></div>

        {/* NIVEL 3: RAMAS */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-32 w-full max-w-4xl mt-2 md:mt-0">
           {/* Rama Izquierda */}
           <div className="flex flex-col items-center">
              <OrgCard data={orgStructure.president} delay={2.0} />
              {/* Detalle decorativo bajo la tarjeta */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-4 text-xs text-gray-400 font-mono">
                 Estrategia & Operación
              </motion.div>
           </div>

           {/* Rama Derecha */}
           <div className="flex flex-col items-center">
              {/* Conector extra móvil */}
              <div className="md:hidden"><VerticalLine delay={2.0} height="h-8" /></div>
              
              <OrgCard data={orgStructure.committees} delay={2.2} />
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.7 }} className="mt-4 text-xs text-gray-400 font-mono">
                 Auditoría & Control
              </motion.div>
           </div>
        </div>

      </section>

      {/* 3. PRINCIPIOS FLOTANTES */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-castilla-green-dark">Pilares de Acción</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Transparencia", color: "bg-blue-50 text-blue-600" },
              { icon: Scale, title: "Equidad", color: "bg-amber-50 text-amber-600" },
              { icon: Shield, title: "Integridad", color: "bg-emerald-50 text-emerald-600" },
              { icon: FileText, title: "Responsabilidad", color: "bg-purple-50 text-purple-600" }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-[2rem] border border-gray-100 bg-white text-center group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${p.color}`}>
                   <p.icon size={28} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-castilla-green-dark transition-colors">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CÓDIGO DE ÉTICA (PREMIUM) */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
         <motion.div 
           initial={{ scale: 0.95, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="relative overflow-hidden rounded-[3rem] bg-castilla-green-dark text-white shadow-2xl"
         >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            
            <div className="relative z-10 p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="inline-block px-4 py-1 bg-castilla-yellow/20 rounded-full text-castilla-yellow text-xs font-bold uppercase tracking-widest mb-6 border border-castilla-yellow/20">
                    Documento Oficial
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">Código de <br/>Conducta</h2>
                  <p className="text-lg text-white/70 mb-8 font-light">
                    Nuestra constitución moral. Descarga el documento que rige cada interacción en Castilla Agrícola.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-castilla-green-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:shadow-white/20 transition-all"
                  >
                    Descargar PDF <ArrowRight size={20} />
                  </motion.button>
               </div>

               {/* Ilustración abstracta de Check */}
               <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                     <div className="w-12 h-12 bg-castilla-yellow rounded-full flex items-center justify-center text-castilla-green-dark">
                        <CheckCircle2 size={24} />
                     </div>
                     <div>
                        <p className="font-bold text-lg">Cumplimiento Total</p>
                        <p className="text-xs text-white/60">Actualizado 2026</p>
                     </div>
                  </div>
                  <ul className="space-y-3">
                     {["Derechos Humanos", "Anti-Corrupción", "Sostenibilidad"].map((item, i) => (
                        <motion.li 
                           key={i}
                           initial={{ x: 20, opacity: 0 }}
                           whileInView={{ x: 0, opacity: 1 }}
                           transition={{ delay: 0.5 + (i * 0.1) }}
                           className="flex items-center gap-3 text-sm text-white/80"
                        >
                           <div className="w-1.5 h-1.5 bg-castilla-green rounded-full shadow-[0_0_8px_#4ade80]" />
                           {item}
                        </motion.li>
                     ))}
                  </ul>
               </div>
            </div>
         </motion.div>
      </section>

    </div>
  )
}
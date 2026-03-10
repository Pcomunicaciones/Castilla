"use client"

import { motion } from "framer-motion"
import { Users, Gavel, Building2, Shield, Eye, Scale, FileText, Zap, ClipboardList } from "lucide-react"

// Aquí guardamos la información de los altos mandos (las 5 tarjetas principales del organigrama)
const mainOrgData = {
  asamblea: { title: "Asamblea General", role: "Máxima Autoridad", icon: Users, theme: "gold" },
  revisoria: { title: "Revisoría Fiscal", role: "Control Independiente", icon: Shield, theme: "slate" },
  junta: { title: "Junta Directiva", role: "Dirección Estratégica", icon: Gavel, theme: "emerald" },
  auditoria: { title: "Comité de Auditoría", role: "Control y Riesgos", icon: ClipboardList, theme: "slate" },
  gerenteGral: { title: "Gerente General", role: "Gustavo A. Barona", icon: Building2, theme: "green" },
}

// Estos son los comités que apoyan a la gerencia (por ahora solo necesitamos mostrar sus nombres)
const supportCommittees = [
  "Secretaría de Juntas",
  "Auditor Interno",
  "Comité Cañicultura",
  "Comité de Sostenibilidad",
  "Comité Inmobiliario",
]

// Esta es la tarjeta principal. Le pusimos un efecto de resorte (spring) para que se sienta viva al aparecer.
const OrgCard = ({ data, delay, className = "" }: { data: any, delay: number, className?: string }) => {
  // Paleta de colores dependiendo del rol de la tarjeta
  const themes = {
    gold: "border-[3px] border-yellow-400 shadow-[0_4px_15px_rgb(250,204,21,0.15)] text-yellow-600",
    emerald: "border-[3px] border-[#048450] shadow-[0_4px_15px_rgb(4,132,80,0.15)] text-[#048450]",
    green: "border-[3px] border-green-500 shadow-[0_4px_15px_rgb(34,197,94,0.15)] text-green-600",
    slate: "border-[2px] border-slate-300 shadow-sm text-slate-600 bg-slate-50/50"
  }

  const colorTheme = themes[data.theme as keyof typeof themes];

  return (
    <motion.div
      // Hacemos que la tarjeta entre desde un poquito más abajo, creciendo y apareciendo suavemente
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      // El efecto spring le quita lo rígido y hace que el movimiento se sienta súper natural y humano
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15, 
        delay: delay 
      }}
      whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
      className={`relative z-20 flex flex-col items-center justify-start pt-5 pb-4 px-3 w-[180px] md:w-[200px] min-h-[110px] bg-white rounded-xl group cursor-default ${colorTheme} ${className}`}
    >
      {/* El ícono también reacciona cuando pasas el mouse por encima */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
        <data.icon size={20} className="currentColor" />
      </div>
      
      <h3 className="text-[13px] font-black text-[#1a2b3c] text-center leading-tight w-full px-1">
        {data.title}
      </h3>
      {data.role && (
        <span className="text-[10px] font-bold text-slate-500 text-center w-full block mt-1.5 uppercase tracking-wider">
          {data.role}
        </span>
      )}
    </motion.div>
  )
}

// Una versión más sencilla y pequeña de la tarjeta para los comités de apoyo
const MiniOrgCard = ({ title, delay }: { title: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 20, delay: delay }}
      whileHover={{ y: -3, borderColor: '#048450', color: '#048450' }}
      className="bg-white border-2 border-slate-200 rounded-lg py-3 px-4 flex items-center justify-center text-center shadow-sm cursor-default transition-colors duration-300"
    >
      <span className="text-[12px] font-bold currentColor leading-tight">{title}</span>
    </motion.div>
  )
}

// Componentes para dibujar las líneas verdes que unen todo el organigrama
const GrowLineVertical = ({ height = "h-10", delay }: { height?: string, delay: number }) => (
  <div className={`w-[2px] ${height} bg-green-100 relative mx-auto z-0`}>
    <motion.div 
      initial={{ scaleY: 0 }} 
      whileInView={{ scaleY: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} 
      className="w-full h-full bg-[#048450] origin-top" 
    />
  </div>
)

const GrowLineHorizontal = ({ width = "w-[420px]", delay }: { width?: string, delay: number }) => (
  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${width} h-[2px] bg-green-100 z-0`}>
    <motion.div 
      initial={{ scaleX: 0 }} 
      whileInView={{ scaleX: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} 
      className="w-full h-full bg-[#048450] origin-center" 
    />
  </div>
)


export default function GobiernoCorporativoPage() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden font-[Tahoma,Verdana,sans-serif] selection:bg-castilla-yellow selection:text-black">
      
      {/* Encabezado principal de la página */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-16 px-6 text-center max-w-4xl mx-auto mb-10"
      >
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-green-100 rounded-full mb-6 shadow-sm">
            <Zap size={12} className="text-castilla-yellow fill-castilla-yellow" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#048450] uppercase">Estructura Oficial</span>
         </div>
         <h1 className="text-3xl md:text-5xl font-black text-[#1a2b3c] mb-4 leading-tight tracking-tight">
            Gobierno <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Corporativo</span>
         </h1>
      </motion.section>

      {/* Aquí armamos el árbol del organigrama, cuidando los tiempos para que parezca que se dibuja solo */}
      <section className="w-full overflow-x-auto pb-10 px-4">
        <div className="min-w-[650px] max-w-4xl mx-auto flex flex-col items-center relative">

          {/* Hasta arriba: La Asamblea, que es la máxima autoridad */}
          <OrgCard data={mainOrgData.asamblea} delay={0.1} />
          
          <GrowLineVertical height="h-8" delay={0.4} />

          {/* En medio: Los que vigilan y toman las decisiones estratégicas */}
          <div className="relative w-full flex justify-center items-center py-3">
             {/* Este detalle es clave: la línea se expande desde el centro hacia los lados */}
             <GrowLineHorizontal width="w-[450px]" delay={0.6} />

             <div className="flex items-center gap-4 z-10">
                <OrgCard data={mainOrgData.revisoria} delay={1.0} />
                <OrgCard data={mainOrgData.junta} delay={0.8} />
                <OrgCard data={mainOrgData.auditoria} delay={1.0} />
             </div>
          </div>

          <GrowLineVertical height="h-10" delay={1.3} />

          {/* Abajo: El Gerente General liderando la operación */}
          <OrgCard data={mainOrgData.gerenteGral} delay={1.6} />

        </div>
      </section>

      {/* Los equipos de apoyo aparecen al final, uno por uno como una pequeña ola */}
      <section className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ delay: 1.8 }}
          className="text-center mb-8"
        >
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Órganos de Soporte y Gestión</h3>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
            {supportCommittees.map((name, i) => (
                <MiniOrgCard key={i} title={name} delay={1.9 + (i * 0.15)} />
            ))}
        </div>
      </section>

      {/* Para cerrar, los valores de la empresa flotando en la parte de abajo */}
      <section className="py-20 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-black text-[#1a2b3c]">Pilares de Acción</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: Eye, title: "Transparencia", color: "bg-blue-50 text-blue-600" },
              { icon: Scale, title: "Equidad", color: "bg-amber-50 text-amber-600" },
              { icon: Shield, title: "Integridad", color: "bg-emerald-50 text-emerald-600" },
              { icon: FileText, title: "Responsabilidad", color: "bg-purple-50 text-purple-600" }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 rounded-[1.5rem] border border-slate-100 bg-white text-center group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${p.color}`}>
                   <p.icon size={24} />
                </div>
                <h3 className="font-bold text-[#1a2b3c] text-base group-hover:text-[#048450] transition-colors">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
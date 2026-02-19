"use client"

import { motion } from "framer-motion"
import { Users, Gavel, Building2, Shield, Eye, Scale, FileText, ArrowRight, CheckCircle2, Zap, ClipboardList, UserCheck, Leaf, Home } from "lucide-react"

// --- 1. DATOS DEL EJE CENTRAL (Las 5 tarjetas principales) ---
const mainOrgData = {
  asamblea: { title: "Asamblea General", role: "Máxima Autoridad", icon: Users, theme: "gold" },
  revisoria: { title: "Revisoría Fiscal", role: "Control Independiente", icon: Shield, theme: "slate" },
  junta: { title: "Junta Directiva", role: "Dirección Estratégica", icon: Gavel, theme: "emerald" },
  auditoria: { title: "Comité de Auditoría", role: "Control y Riesgos", icon: ClipboardList, theme: "slate" },
  gerenteGral: { title: "Gerente General", role: "Gustavo A. Barona", icon: Building2, theme: "green" },
}

// --- 2. DATOS DE LOS COMITÉS ADICIONALES (Para la sección de texto) ---
const extraCommittees = [
  { title: "Secretaría de Juntas", role: "Victor Urdaneta T.", desc: "Garantiza el flujo de información, la documentación y el soporte normativo y legal para las sesiones de la Junta Directiva.", icon: FileText },
  { title: "Auditor Interno", role: "Holmes Carvajal", desc: "Evalúa y mejora de forma independiente y objetiva la eficacia de los procesos de gestión de riesgos y control interno.", icon: UserCheck },
  { title: "Comité Cañicultura", role: "Apoyo Estratégico", desc: "Supervisa y asesora en las mejores prácticas operativas y tecnológicas para el cultivo y procesamiento estratégico de la caña.", icon: Leaf },
  { title: "Comité de Sostenibilidad", role: "Gobierno Corporativo", desc: "Asegura que la empresa cumpla con las políticas ESG (Ambiental, Social y de Gobernanza) generando valor a largo plazo.", icon: Leaf },
  { title: "Comité Inmobiliario", role: "Gestión de Activos", desc: "Encargado de la planificación, evaluación y administración eficiente de los activos físicos y terrenos de la corporación.", icon: Home },
]

// --- 3. COMPONENTE DE TARJETA (Idéntico a tus capturas de pantalla) ---
const OrgCard = ({ data, delay, className = "" }: { data: any, delay: number, className?: string }) => {
  // Estilos fieles a tus imágenes: bordes de colores específicos, iconos en cajas suaves, tipografía oscura
  const themes = {
    gold: "border-[3px] border-yellow-400 shadow-[0_8px_20px_rgb(250,204,21,0.15)] text-yellow-500",
    emerald: "border-[3px] border-[#048450] shadow-[0_8px_20px_rgb(4,132,80,0.15)] text-[#048450]",
    green: "border-[3px] border-green-500 shadow-[0_8px_20px_rgb(34,197,94,0.15)] text-green-600",
    slate: "border-[2px] border-slate-200 shadow-sm hover:border-slate-300 text-slate-500"
  }

  const colorTheme = themes[data.theme as keyof typeof themes];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
      className={`relative z-20 flex flex-col items-center justify-start pt-6 pb-5 px-4 w-[240px] md:w-[260px] min-h-[140px] bg-white rounded-2xl group cursor-default ${colorTheme} ${className}`}
    >
      {/* Icono superior redondeado */}
      <div className={`w-12 h-12 flex items-center justify-center rounded-[1rem] mb-4 bg-slate-50 transition-transform duration-300 group-hover:scale-110`}>
        <data.icon size={22} className="currentColor" />
      </div>
      
      {/* Título y Subtítulo */}
      <h3 className="text-[16px] font-black text-[#1a2b3c] text-center leading-tight w-full">
        {data.title}
      </h3>
      {data.role && (
        <span className="text-[11px] font-bold text-slate-500 text-center w-full block mt-2 uppercase tracking-widest">
          {data.role}
        </span>
      )}
    </motion.div>
  )
}

// --- 4. MOTOR DE LÍNEAS ANIMADAS (Simetría Perfecta y Fluida) ---
const GrowLineVertical = ({ height = "h-16", delay }: { height?: string, delay: number }) => (
  <div className={`w-[2px] ${height} bg-green-100 relative mx-auto z-0`}>
    <motion.div 
      initial={{ scaleY: 0 }} 
      whileInView={{ scaleY: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay, ease: "easeInOut" }} 
      className="w-full h-full bg-[#048450] origin-top" 
    />
  </div>
)

// Línea horizontal que crece desde el centro hacia afuera
const GrowLineHorizontal = ({ width = "w-[500px]", delay }: { width?: string, delay: number }) => (
  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${width} h-[2px] bg-green-100 z-0`}>
    <motion.div 
      initial={{ scaleX: 0 }} 
      whileInView={{ scaleX: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.7, delay, ease: "easeInOut" }} 
      className="w-full h-full bg-[#048450] origin-center" 
    />
  </div>
)


export default function GobiernoCorporativoPage() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden font-[Tahoma,Verdana,sans-serif] selection:bg-castilla-yellow selection:text-black">
      
      {/* ================= HEADER ================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-20 px-6 text-center max-w-4xl mx-auto mb-16"
      >
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-100 rounded-full mb-8 shadow-sm">
            <Zap size={14} className="text-castilla-yellow fill-castilla-yellow" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#048450] uppercase">Estructura Oficial</span>
         </div>
         <h1 className="text-4xl md:text-6xl font-black text-[#1a2b3c] mb-4 leading-tight tracking-tight">
            Gobierno <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Corporativo</span>
         </h1>
         <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-[15px] leading-relaxed">
           El eje central de toma de decisiones, control estratégico y ejecución operativa que rige a nuestra organización.
         </p>
      </motion.section>

      {/* ================= 1. ORGANIGRAMA CENTRAL (Flexbox Seguro y Simétrico) ================= */}
      <section className="w-full overflow-x-auto pb-20 px-4">
        <div className="min-w-[850px] max-w-5xl mx-auto flex flex-col items-center relative pt-4">

          {/* NIVEL 1: ASAMBLEA */}
          <OrgCard data={mainOrgData.asamblea} delay={0.2} />
          <GrowLineVertical height="h-14" delay={0.5} />

          {/* NIVEL 2: CONTROLES Y JUNTA */}
          <div className="relative w-full flex justify-center items-center py-4">
             {/* Línea horizontal maestra (Pasa por detrás de las 3 tarjetas) */}
             {/* El ancho de la línea está calculado para llegar justo a los centros de las tarjetas laterales */}
             <GrowLineHorizontal width="w-[560px]" delay={0.8} />

             {/* Fila de 3 tarjetas usando Flex con Gap */}
             <div className="flex items-center gap-6 z-10">
                <OrgCard data={mainOrgData.revisoria} delay={1.1} />
                <OrgCard data={mainOrgData.junta} delay={0.9} />
                <OrgCard data={mainOrgData.auditoria} delay={1.1} />
             </div>
          </div>

          <GrowLineVertical height="h-16" delay={1.4} />

          {/* NIVEL 3: GERENCIA GENERAL */}
          <OrgCard data={mainOrgData.gerenteGral} delay={1.7} />

        </div>
      </section>

      {/* ================= 2. COMITÉS DE APOYO (Información Detallada) ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 pt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1a2b3c]">Órganos de Apoyo y Gestión</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm">
              Nuestra estructura se soporta en comités especializados y auditorías independientes que garantizan la transparencia, el cumplimiento normativo y el desarrollo sostenible.
            </p>
          </div>

          {/* Grid de Comités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraCommittees.map((comite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <comite.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2b3c] text-[15px]">{comite.title}</h3>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{comite.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed">
                  {comite.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= 3. PRINCIPIOS FLOTANTES ================= */}
      <section className="py-24 bg-white relative z-10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1a2b3c]">Pilares de Acción</h2>
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
                className="p-8 rounded-[2rem] border border-slate-100 bg-white text-center group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${p.color}`}>
                   <p.icon size={28} />
                </div>
                <h3 className="font-bold text-[#1a2b3c] text-lg group-hover:text-[#048450] transition-colors">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CÓDIGO DE ÉTICA ================= */}
      <section className="max-w-5xl mx-auto px-6 pb-20 z-10 relative">
         <motion.div 
           initial={{ scale: 0.95, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           className="relative overflow-hidden rounded-[3rem] bg-[#048450] text-white shadow-2xl"
         >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="relative z-10 p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="inline-block px-4 py-1 bg-castilla-yellow/20 rounded-full text-castilla-yellow text-xs font-bold uppercase tracking-widest mb-6 border border-castilla-yellow/20">
                    Documento Oficial
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">Código de <br/>Conducta</h2>
                  <p className="text-[15px] text-white/90 mb-8 font-light leading-relaxed">
                    Nuestra constitución moral. Descarga el documento que rige cada interacción en el grupo corporativo.
                  </p>
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-white text-[#048450] px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:shadow-white/20 transition-all"
                  >
                     Descargar PDF <ArrowRight size={20} />
                  </motion.button>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/20">
                     <div className="w-12 h-12 bg-castilla-yellow rounded-full flex items-center justify-center text-[#048450]">
                        <CheckCircle2 size={24} />
                     </div>
                     <div>
                        <p className="font-bold text-lg">Cumplimiento Total</p>
                        <p className="text-xs text-white/80">Gestión Transparente</p>
                     </div>
                  </div>
                  <ul className="space-y-3">
                     {["Derechos Humanos", "Anti-Corrupción", "Sostenibilidad"].map((item, i) => (
                        <motion.li 
                           key={i}
                           initial={{ x: 20, opacity: 0 }}
                           whileInView={{ x: 0, opacity: 1 }}
                           transition={{ delay: 0.5 + (i * 0.1) }}
                           className="flex items-center gap-3 text-sm text-white/90"
                        >
                           <div className="w-1.5 h-1.5 bg-castilla-yellow rounded-full shadow-[0_0_8px_#facc15]" />
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
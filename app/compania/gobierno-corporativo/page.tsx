"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Users, Gavel, Building2, Shield, Eye, Scale, FileText, Zap, ClipboardList } from "lucide-react"

// ========================
// ESTRUCTURA ORGANIZACIONAL
// ========================

// Datos de los ejecutivos principales
// Incluye la Asamblea, Revisoría, Junta Directiva, Auditoría y Gerente General
const mainOrgData = {
  asamblea: { title: "Asamblea General", role: "Máxima Autoridad", icon: Users, theme: "gold" },
  revisoria: { title: "Revisoría Fiscal", role: "Control Independiente", icon: Shield, theme: "slate" },
  junta: { title: "Junta Directiva", role: "Dirección Estratégica", icon: Gavel, theme: "emerald" },
  auditoria: { title: "Comité de Auditoría", role: "Control y Riesgos", icon: ClipboardList, theme: "slate" },
  gerenteGral: { title: "Gerente General", role: "Gustavo A. Barona", icon: Building2, theme: "green" },
}

// ========================
// COMITÉS DE SOPORTE
// ========================

// Órganos administrativos que respaldan la gestión operativa
const supportCommittees = [
  "Secretaría de Juntas",
  "Auditor Interno",
  "Comité Cañicultura",
  "Comité de Sostenibilidad",
  "Comité Inmobiliario",
]

// ========================
// COMPONENTE: TARJETA DE EJECUTIVO
// ========================

// Componente principal que renderiza cada posición ejecutiva
// Incluye animaciones de entrada tipo spring y efectos hover interactivos
const OrgCard = ({ data, delay, className = "" }: { data: any, delay: number, className?: string }) => {
  // Esquema de colores personalizado según el rol/nivel jerárquico
  // Gold: Máxima autoridad | Emerald: Decisiones estratégicas | Green: Liderazgo operativo | Slate: Control
  const themes = {
    gold: "border-[3px] border-yellow-400 shadow-[0_4px_15px_rgb(250,204,21,0.15)] text-yellow-600",
    emerald: "border-[3px] border-[#048450] shadow-[0_4px_15px_rgb(4,132,80,0.15)] text-[#048450]",
    green: "border-[3px] border-green-500 shadow-[0_4px_15px_rgb(34,197,94,0.15)] text-green-600",
    slate: "border-[2px] border-slate-300 shadow-sm text-slate-600 bg-slate-50/50"
  }

  const colorTheme = themes[data.theme as keyof typeof themes];
  const IconComponent = data.icon;

  return (
    <motion.div
      // Animación de entrada: la tarjeta crece desde una escala menor con movimiento vertical
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      // Al entrar en el viewport, la tarjeta se posiciona de forma natural
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      // Effect spring para que el movimiento se sienta natural y elegante
      transition={{ 
        type: "spring", 
        stiffness: 220, 
        damping: 18, 
        delay: delay 
      }}
      // Cuando pasas el mouse, la tarjeta se eleva y crece ligeramente
      whileHover={{ 
        y: -8, 
        scale: 1.03, 
        boxShadow: "0 20px 35px -8px rgba(0, 0, 0, 0.15)"
      }}
      // En dispositivos táctiles, permite que la tarjeta responda al toque
      whileTap={{ scale: 0.98 }}
      className={`relative z-20 flex flex-col items-center justify-start pt-6 pb-5 px-4 w-[180px] md:w-[210px] min-h-[120px] bg-white rounded-xl group cursor-default transition-all duration-300 ${colorTheme} ${className}`}
    >
      {/* Contenedor del ícono con fondo degradado */}
      <div className={`w-11 h-11 flex items-center justify-center rounded-lg mb-3 bg-gradient-to-br from-slate-50 to-white shadow-md group-hover:scale-125 group-hover:shadow-lg transition-all duration-300`}>
        <IconComponent size={22} className="currentColor" />
      </div>
      
      {/* Título del cargo/posición */}
      <h3 className="text-[13px] font-black text-[#1a2b3c] text-center leading-snug w-full px-1">
        {data.title}
      </h3>
      {/* Subtítulo con nombre o descripción del rol */}
      {data.role && (
        <p className="text-[10px] font-bold text-slate-400 text-center w-full block mt-2 uppercase tracking-wider">
          {data.role}
        </p>
      )}
    </motion.div>
  )
}

// ========================
// COMPONENTE: TARJETA PEQUEÑA DE COMITÉ
// ========================

// Versión compacta para mostrar comités y órganos de soporte
// Básico pero elegante con interacciones hover suave
const MiniOrgCard = ({ title, delay }: { title: string, delay: number }) => {
  return (
    <motion.div
      // Animación de entrada: aparece con escala pequeña
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      // Transición más rápida para un efecto ágil
      transition={{ type: "spring", stiffness: 280, damping: 22, delay: delay }}
      // Al pasar el mouse, cambia de color y se eleva ligeramente
      whileHover={{ 
        y: -4, 
        borderColor: '#048450', 
        color: '#048450',
        boxShadow: "0 10px 25px -5px rgba(4, 132, 80, 0.1)"
      }}
      whileTap={{ scale: 0.96 }}
      className="bg-white border-2 border-slate-200 rounded-lg py-3 px-4 flex items-center justify-center text-center shadow-sm cursor-default transition-all duration-300 hover:bg-slate-50/50"
    >
      <span className="text-[12px] font-bold currentColor leading-tight">{title}</span>
    </motion.div>
  )
}

// ========================
// COMPONENTES: LÍNEAS DE CONEXIÓN
// ========================

// Línea vertical con animación de crecimiento gradual
// Se expande de arriba hacia abajo con un efecto suave
const GrowLineVertical = ({ height = "h-10", delay }: { height?: string, delay: number }) => (
  <div className={`w-[2.5px] ${height} bg-gradient-to-b from-green-100 to-green-50 relative mx-auto z-0`}>
    {/* Animación: la línea crece desde el origen (arriba) */}
    {/* Crea un efecto visual de "dibujarse" en los diagramas */}
    <motion.div 
      initial={{ scaleY: 0 }} 
      whileInView={{ scaleY: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] }} 
      className="w-full h-full bg-gradient-to-b from-[#048450] to-[#036b3d] origin-top" 
    />
  </div>
)

// Línea horizontal con expansión desde el centro
// Se expande simultáneamente hacia ambos lados para un efecto equilibrado
const GrowLineHorizontal = ({ width = "w-[420px]", delay }: { width?: string, delay: number }) => (
  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${width} h-[2.5px] bg-gradient-to-r from-green-100 via-green-50 to-green-100 z-0`}>
    {/* Animación: la línea se expande desde el centro */}
    {/* Se dibuja hacia ambos lados simultáneamente para mantener balance visual */}
    <motion.div 
      initial={{ scaleX: 0 }} 
      whileInView={{ scaleX: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.9, delay, ease: [0.34, 1.56, 0.64, 1] }} 
      className="w-full h-full bg-gradient-to-r from-[#048450] via-[#06a86d] to-[#048450] origin-center" 
    />
  </div>
)


// ========================
// PÁGINA PRINCIPAL
// ========================

export default function GobiernoCorporativoPage() {
  const mainOrgDataMemo = useMemo(() => mainOrgData, []);
  const supportCommitteesMemo = useMemo(() => supportCommittees, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f5f3] overflow-hidden font-[Tahoma,Verdana,sans-serif] selection:bg-castilla-yellow selection:text-black">
      
      {/* ======================== */}
      {/* SECCIÓN: ENCABEZADO */}
      {/* ======================== */}
      <motion.section 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 pt-20 px-6 text-center max-w-4xl mx-auto mb-12"
      >
         {/* Badge con etiqueta de "Estructura Oficial" */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2, duration: 0.6 }}
           className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full mb-6 shadow-md hover:shadow-lg transition-shadow"
         >
            {/* Ícono de energía para destacar la importancia */}
            <Zap size={13} className="text-castilla-yellow fill-castilla-yellow" />
            {/* Etiqueta visual de la sección */}
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#048450] uppercase">Estructura Oficial</span>
         </motion.div>
         {/* Título principal con gradient atractivo */}
         <motion.h1 
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.7 }}
           className="text-3xl md:text-5xl font-black text-[#1a2b3c] mb-2 leading-tight tracking-tight"
         >
            Gobierno <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-red-600">Corporativo</span>
         </motion.h1>
      </motion.section>

      {/* ======================== */}
      {/* SECCIÓN: ORGANIGRAMA */}
      {/* ======================== */}
      <section className="w-full overflow-x-auto pb-12 px-4">
        <div className="min-w-[650px] max-w-4xl mx-auto flex flex-col items-center relative">

          {/* NIVEL 1: Máxima Autoridad */}
          {/* Asamblea General - punto de partida de toda la toma de decisiones */}
          <OrgCard data={mainOrgDataMemo.asamblea} delay={0.1} />
          
          {/* Línea conectora entre autoridad máxima y órganos de control */}
          <GrowLineVertical height="h-9" delay={0.5} />

          {/* NIVEL 2: Órganos de Control y Dirección Estratégica */}
          {/* Tres pilares funcionan en paralelo: vigilancia independiente, decisiones estratégicas y auditoría interna */}
          <div className="relative w-full flex justify-center items-center py-4">
             {/* Línea horizontal que conecta los tres órganos de control */}
             {/* Se dibuja desde el centro hacia ambos lados para un efecto visual equilibrado */}
             <GrowLineHorizontal width="w-[450px]" delay={0.75} />

             <div className="flex items-center gap-4 z-10">
                {/* Revisoría Fiscal - Control independiente */}
                <OrgCard data={mainOrgDataMemo.revisoria} delay={1.0} />
                {/* Junta Directiva - Define rumbo estratégico */}
                <OrgCard data={mainOrgDataMemo.junta} delay={0.85} />
                {/* Comité de Auditoría - Supervisa riesgos y controles internos */}
                <OrgCard data={mainOrgDataMemo.auditoria} delay={1.05} />
             </div>
          </div>

          {/* Línea conectora hacia la gerencia operativa */}
          <GrowLineVertical height="h-11" delay={1.4} />

          {/* NIVEL 3: Liderazgo Operativo */}
          {/* El Gerente General es responsable de ejecutar la estrategia y liderar el día a día */}
          <OrgCard data={mainOrgDataMemo.gerenteGral} delay={1.7} />

        </div>
      </section>

      {/* ======================== */}
      {/* SECCIÓN: EQUIPOS DE SOPORTE */}
      {/* ======================== */}
      <section className="max-w-4xl mx-auto px-6 pb-28 relative z-10">
        {/* Encabezado de la sección de órganos de soporte */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 1.85, duration: 0.6 }}
          className="text-center mb-8"
        >
            {/* Título descriptivo de los órganos administrativos */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 letter-spacing px-2">Órganos de Soporte y Gestión</h3>
        </motion.div>
        {/* Lista de comités de apoyo que se animan uno por uno */}
        <div className="flex flex-wrap justify-center gap-3">
            {supportCommitteesMemo.map((name, i) => (
                <MiniOrgCard key={i} title={name} delay={1.95 + (i * 0.12)} />
            ))}
        </div>
      </section>

      {/* ======================== */}
      {/* SECCIÓN: PILARES DE ACCIÓN */}
      {/* Los valores fundamentales que guían la empresa */}
      {/* ======================== */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative z-10 border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Encabezado con título y línea decorativa */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            {/* Título principal de la sección */}
            <h2 className="text-2xl md:text-3xl font-black text-[#1a2b3c]">Pilares de Acción</h2>
            {/* Línea decorativa con gradiente */}
            <div className="w-20 h-1 bg-gradient-to-r from-castilla-yellow to-orange-400 mx-auto mt-3 rounded-full" />
          </motion.div>
          {/* Grid de 4 columnas con los pilares */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Los cuatro valores principales de la empresa */}
            {[
              { icon: Eye, title: "Transparencia", color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600" },
              { icon: Scale, title: "Equidad", color: "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600" },
              { icon: Shield, title: "Integridad", color: "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600" },
              { icon: FileText, title: "Responsabilidad", color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600" }
            ].map((p, i) => {
              const PillarIcon = p.icon;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: i * 0.12 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)" }}
                whileTap={{ scale: 0.96 }}
                className="p-7 rounded-2xl border border-slate-200 bg-white text-center group cursor-pointer transition-all duration-300"
              >
                {/* Contenedor del ícono con fondo degradado personalizado */}
                {/* El ícono rota y crece al pasar el mouse */}
                <div className={`w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${p.color}`}>
                   <PillarIcon size={26} />
                </div>
                {/* Título del valor fundamental de la empresa */}
                {/* Cambia de color al interactuar con la tarjeta */}
                <h3 className="font-bold text-[#1a2b3c] text-base leading-snug group-hover:text-[#048450] transition-colors">{p.title}</h3>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
     
    </div>
  )
}
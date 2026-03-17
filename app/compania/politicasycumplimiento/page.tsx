"use client"

import { motion } from "framer-motion"
import { 
  FileText, // Icono para RIT (más general)
  ShieldCheck, // Icono para Conflictos/Ética (más directo, como tu imagen 1)
  CheckCircle2, // Icono para Certificados/Datos (más de 'check', como tu imagen 2)
  Zap,
  ExternalLink,
} from "lucide-react"

// Lista de los 6 documentos exactos que aparecen en tu VS Code, ordenados.
const politicasFiles = [
  {
    title: "Reglamento Interno de Trabajo",
    fileName: "politicas y cumplimientos/RIT-CASTILLA-AGRICOLA.pdf",
    icon: FileText, // Icono de documento, arriba a la izquierda
    theme: "emerald"
  },
  {
    title: "Política de Conflicto de Interés",
    fileName: "politicas y cumplimientos/GNE1-PO04.pdf",
    icon: ShieldCheck, // Icono de escudo, arriba a la izquierda
    theme: "emerald"
  },
  {
    title: "Prevención Lavado de Activos y Financiación del Terrorismo",
    fileName: "politicas y cumplimientos/PO-FOF-001-PREVENCION-LAVADO-DE-ACTIVOS-Y-FINANCIACION-DEL-TERRRORISMO.pdf",
    icon: ShieldCheck, // Icono de escudo, arriba a la izquierda
    theme: "emerald"
  },
  {
    title: "Certificado de Lavado de Activos y SARLAFT",
    fileName: "politicas y cumplimientos/Certificado-Nombramiento-Oficial-de-Cumplimiento-Castilla.pdf",
    icon: CheckCircle2, // Icono de check, arriba a la izquierda
    theme: "slate"
  },
  {
    title: "Política de Tratamiento de Datos Personales",
    fileName: "politicas y cumplimientos/PO-DNE-003-TRATAMIENTO-DATOS-PERSONALES-CASTILLA.pdf",
    icon: CheckCircle2, // Icono de check, arriba a la izquierda
    theme: "slate"
  },
  {
    title: "Código de Ética y Conducta Empresarial",
    fileName: "politicas y cumplimientos/PO-BEC-001-CODIGO-DE-ETICA-Y-CONDUCTA-EMPRESARIAL-CAST.pdf",
    icon: FileText, // Icono de documento, arriba a la izquierda
    theme: "emerald"
  }
]

export default function PoliticasCumplimientoPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
      
      {/* HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-20 px-6 text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-100 rounded-full mb-8 shadow-sm">
          <Zap size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#048450] uppercase">
            Documentación Oficial
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-[#1a2b3c] mb-4 tracking-tight not-italic">
          Políticas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">Cumplimiento</span>
        </h1>
        
        <p className="text-slate-500 text-lg not-italic">
          Acceda y lea los lineamientos éticos y normativos que rigen nuestra operación corporativa.
        </p>
      </motion.section>

      {/* GRID DE TODAS LAS POLÍTICAS (Incluido el RIT) */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicasFiles.map((file, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            // 🔥 El hover border verde es como el tuyo, pero se aplica a todas.
            className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-[#048450] transition-all group flex flex-col min-h-[260px]"
          >
            {/* 1. Icono arriba a la izquierda */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 mb-6 flex-shrink-0 ${file.theme === 'emerald' ? 'text-[#048450]' : 'text-slate-400'} group-hover:scale-110 transition-transform`}>
              <file.icon size={24} />
            </div>
            
            {/* 2. Título centrado (font-bold text-[#1a2b3c]) */}
            <h3 className="text-lg font-bold text-[#1a2b3c] mb-6 flex-grow leading-tight not-italic text-center">
              {file.title}
            </h3>
            
            {/* 3. Botón verde abajo a la izquierda (como el tuyo) */}
            <div className="w-full mt-auto">
              <a 
                href={`/docs/${file.fileName.replace(/ /g, "%20")}`} 
                target="_blank" 
                rel="noopener noreferrer"
                // 🔥 Fondo verde clarito, texto verde oscuro, bordes redondeados.
                className="w-fit flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f1f8e9] text-[#006437] text-[11px] font-bold hover:bg-[#048450] hover:text-white transition-colors group/btn not-italic"
              >
                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                VER DOCUMENTO
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FOOTER DE COMPROMISO */}
      <section className="max-w-5xl mx-auto px-6 mt-24 pb-20">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-[#048450] text-white shadow-2xl p-12 md:p-16"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            <div className="not-italic">
              <h2 className="text-3xl font-black mb-6">Compromiso con la Transparencia</h2>
              <p className="text-white/90 leading-relaxed mb-8 font-light">
                Mantenemos altos estándares de integridad empresarial. Nuestra gestión se basa en la honestidad y el cumplimiento riguroso de la ley colombiana.
              </p>
              
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 w-fit">
                <CheckCircle2 size={16} className="text-yellow-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Sagrilaft / PTEE Certificado
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex items-center justify-center relative min-h-[160px]">
               <FileText size={80} className="opacity-10 absolute" />
               <p className="text-center italic font-light opacity-90 relative z-10 text-sm">
                "La ética empresarial es el cimiento de nuestra sostenibilidad en el campo colombiano."
               </p>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  )
}
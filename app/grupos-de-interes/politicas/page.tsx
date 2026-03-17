"use client"

import { FileText, Download } from "lucide-react"
import { motion, Variants } from "framer-motion"

const documentos = [
  { 
    nombre: "Reglamento Interno de Trabajo", 
    file: "RIT-CASTILLA-AGRICOLA.pdf" 
  },
  { 
    nombre: "Política de Conflicto de Interés", 
    file: "GNE1-PO04.pdf" 
  },
  { 
    nombre: "Prevención Lavado de Activos y Financiación del Terrorismo", 
    file: "PO-FOF-001-PREVENCION-LAVADO-DE-ACTIVOS-Y-FINANCIACION-DEL-TERRRORISMO.pdf" 
  },
  { 
    nombre: "Certificado de Lavado de Activos y SARLAFT", 
    file: "Certificado-Nombramiento-Oficial-de-Cumplimiento-Castilla.pdf" 
  },
  { 
    nombre: "Política de Tratamiento de Datos Personales", 
    file: "PO-DNE-003-TRATAMIENTO-DATOS-PERSONALES-CASTILLA.pdf" 
  },
  { 
    nombre: "Código de Ética y Conducta Empresarial", 
    file: "PO-BEC-001-CODIGO-DE-ETICA-Y-CONDUCTA-EMPRESARIAL-CAST.pdf" 
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

export default function PoliticasPage() {
  return (
    <motion.div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Encabezado */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-extrabold text-[#006437] tracking-tight">
          Reglamento y Políticas
        </h1>
        <p className="text-gray-500 mt-2 text-lg max-w-2xl">
          Consulte los lineamientos normativos y compromisos éticos que rigen nuestra operación.
        </p>
      </motion.div>

      {/* 🔥 VISOR DESTACADO */}
      <motion.div
        variants={itemVariants}
        className="bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-8 space-y-6"
      >
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-red-50 text-red-600 rounded-2xl">
              <FileText size={26} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#006437]">
                Reglamento Interno de Trabajo
              </h2>
              <p className="text-gray-500 text-sm">
                Visualice el documento directamente desde la plataforma.
              </p>
            </div>
          </div>

          <a
            href="/docs/politicas%20y%20cumplimientos/RIT-CASTILLA-AGRICOLA.pdf"
            download="RIT-CASTILLA-AGRICOLA.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-[#a3c74a] text-[#006437] rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#8fb63d] transition-all"
          >
            <Download size={18} />
            Descargar
          </a>
        </div>

        <div className="w-full h-[500px] md:h-[650px] rounded-[2rem] overflow-hidden border border-gray-100">
          <iframe
            src="/docs/politicas%20y%20cumplimientos/RIT-CASTILLA-AGRICOLA.pdf"
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Grid de documentos */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {documentos.map((doc, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.01, x: 5 }}
            className="flex items-center justify-between p-5 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <FileText size={22} />
              </div>
              <span className="font-bold text-[#006437] text-sm md:text-base leading-tight">
                {doc.nombre}
              </span>
            </div>

            <a 
              href={`/docs/politicas%20y%20cumplimientos/${doc.file}`} 
              download={doc.file}
              className="p-3 bg-[#f1f8e9] hover:bg-[#a3c74a] text-[#006437] rounded-full transition-all duration-300"
            >
              <Download size={20} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Caja de ayuda */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 p-8 bg-[#006437] rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">¿Necesita más información?</h3>
          <p className="text-white/70 text-sm">
            Nuestro equipo de cumplimiento está disponible para resolver sus dudas.
          </p>
        </div>
        <button className="bg-[#a3c74a] text-[#006437] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
          Contactar Soporte
        </button>
      </motion.div>
    </motion.div>
  )
}
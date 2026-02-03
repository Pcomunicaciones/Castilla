"use client"

import { FileDown, Calendar } from "lucide-react"
import { motion, Variants } from "framer-motion"

const informes = [
  { 
    year: "2024", 
    title: "Informe de Sostenibilidad", 
    size: "4.2 MB", 
    fileName: "informe-sostenibilidad-2024.pdf" 
  },
  { 
    year: "2023", 
    title: "Reporte de Gestión Ambiental", 
    size: "3.8 MB", 
    fileName: "reporte-ambiental-2023.pdf" 
  },
  { 
    year: "2022", 
    title: "Balance Social Consolidado", 
    size: "5.1 MB", 
    fileName: "balance-social-2022.pdf" 
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function InformesPage() {
  return (
    <motion.div 
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Cabecera */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-extrabold text-[#006437] italic tracking-tight">
          Centro de Documentación
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Acceda a nuestros reportes anuales y estados de transparencia corporativa.
        </p>
      </motion.div>

      {/* Lista de Documentos */}
      <div className="space-y-4">
        {informes.map((doc, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ x: 8 }}
            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-100 rounded-[2rem] hover:shadow-xl hover:shadow-green-900/5 transition-all group"
          >
            <div className="flex items-center gap-5 mb-4 md:mb-0">
              <div className="bg-[#f1f8e9] p-4 rounded-2xl text-[#006437] group-hover:bg-[#006437] group-hover:text-white transition-colors duration-300">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#006437] tracking-tight">
                  {doc.title} <span className="text-[#a3c74a]">{doc.year}</span>
                </h4>
                <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest mt-0.5">
                  PDF • {doc.size}
                </p>
              </div>
            </div>

            {/* Botón de Descarga Real */}
            <a 
              href={`/documentos/informes/${doc.fileName}`} 
              download={doc.fileName}
              className="flex items-center justify-center gap-2 bg-[#006437] text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-[#a3c74a] hover:text-[#006437] transition-all duration-300 shadow-lg shadow-green-900/10"
            >
              <FileDown size={18} />
              Descargar Reporte
            </a>
          </motion.div>
        ))}
      </div>

      {/* Nota de pie */}
      <motion.div 
        variants={itemVariants}
        className="p-8 bg-[#f8f9fa] rounded-[2.5rem] border border-dashed border-gray-200 text-center"
      >
        <p className="text-gray-500 text-sm italic">
          ¿Necesita un informe de años anteriores? Por favor contáctenos a través de nuestro canal de atención.
        </p>
      </motion.div>
    </motion.div>
  )
}
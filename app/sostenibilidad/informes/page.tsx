"use client"

import { ExternalLink, Calendar } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --- 1. DATOS DE LOS INFORMES --- */
// Aquí es donde guardamos todos los PDFs. 
// Cada vez que salga un informe nuevo (como el de 2026), simplemente lo añadimos al principio de este array.

const informes = [
  { 
    year: "2025", 
    title: "Informe de gestión y sostenibilidad", 
    fileName: "Castilla-ENTREGADOCUMENTOCOMPLETA-21032026N-1.pdf" 
  },
  { 
    year: "2024", 
    title: "Informe de gestión y sostenibilidad", 
    fileName: "1-Castilla-Informe-de-gestion-y-sostenibilidad-2024-DEFINITIVO.pdf" 
  },
  { 
    year: "2023", 
    title: "Informe de gestión y sostenibilidad", 
    fileName: "Castilla-Informe-de-Gestion-y-Sostenibilidad-2023-3-1.pdf" 
  },
  { 
    year: "2022", 
    title: "Informe de gestión", 
    fileName: "CASTILLA-informe-de-gestion-2022_compressed.pdf" 
  },
  { 
    year: "2021", 
    title: "Informe de gestión", 
    fileName: "INFORME-GESTION-CASTILLA-2021-ASAMBLEA-1_compressed.pdf" 
  },
  { 
    year: "2020", 
    title: "Informe de gestión", 
    fileName: "INFORME-DE-GESTION-CASTILLA-BAJA.pdf" 
  },
]

/* --- 2. CONFIGURACIÓN DE ANIMACIONES --- */
// Definimos cómo queremos que aparezcan los elementos (staggerChildren hace que salgan uno tras otro)

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // Crea un efecto de cascada muy elegante
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

/* --- 3. COMPONENTE DE LA PÁGINA --- */

export default function InformesPage() {
  return (
    <motion.div 
      // 👇 Forzamos Tahoma/Verdana para mantener la identidad visual del sitio
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Cabecera de la sección */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-extrabold text-[#006437] not-italic tracking-tight">
          Centro de Documentación
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Acceda a nuestros reportes anuales y estados de transparencia corporativa.
        </p>
      </motion.div>

      {/* Listado de Informes: Mapeamos los datos definidos arriba */}
      <div className="space-y-4">
        {informes.map((doc, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ x: 8 }} // Pequeño efecto visual al pasar el mouse
            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-100 rounded-[2rem] hover:shadow-xl hover:shadow-green-900/5 transition-all group"
          >
            <div className="flex items-center gap-5 mb-4 md:mb-0">
              {/* Icono de calendario con cambio de color en hover */}
              <div className="bg-[#f1f8e9] p-4 rounded-2xl text-[#006437] group-hover:bg-[#006437] group-hover:text-white transition-colors duration-300">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#006437] tracking-tight">
                  {doc.title} <span className="text-[#a3c74a]">{doc.year}</span>
                </h4>
                <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest mt-0.5">
                  Documento PDF
                </p>
              </div>
            </div>

            {/* El botón de descarga ahora es "VER DOCUMENTO" (Verde Premium) */}
            <a 
              href={`/docs/informes de gestion/${doc.fileName}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#006437] text-white px-7 py-3.5 rounded-2xl text-xs font-bold hover:bg-[#1a4a35] transition-all duration-300 shadow-lg shadow-green-900/10 active:scale-95"
            >
              <ExternalLink size={18} strokeWidth={2.5} />
              VER DOCUMENTO
            </a>
          </motion.div>
        ))}
      </div>

      {/* Mensaje de pie con aviso de transparencia */}
      <motion.div 
        variants={itemVariants}
        className="p-8 bg-[#f8f9fa] rounded-[2.5rem] border border-dashed border-gray-200 text-center"
      >
        <p className="text-gray-500 text-sm italic">
          Los documentos aquí publicados son de carácter oficial y están sujetos a nuestras políticas de transparencia.
        </p>
      </motion.div>
    </motion.div>
  )
}
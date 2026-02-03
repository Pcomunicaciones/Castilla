"use client"

import { motion } from "framer-motion"
import { Building2, Map, Trees, Landmark, ArrowRight, CheckCircle } from "lucide-react"

export default function ProyectosInmobiliariosPage() {
  // Aplicamos Tahoma a nivel de contenedor principal
  return (
    <div className="space-y-16 pb-10" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
      
      {/* HERO SECTION - Refinado */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[450px] rounded-[2rem] overflow-hidden flex items-center justify-center text-center shadow-2xl"
      >
        <img 
          src="/Imagenes/Exportado 2.jpg" 
          alt="Terrenos y Proyectos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-castilla-green-dark/80" />
        
        <div className="relative z-10 text-white px-6">
          <motion.span 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-castilla-yellow text-castilla-green-dark px-4 py-1 rounded-md text-xs font-bold mb-4 uppercase tracking-widest"
          >
            Unidad de Negocio
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Visión de Territorio</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Desarrollamos proyectos inmobiliarios que armonizan el crecimiento urbano con el respeto ambiental y la valorización del suelo.
          </p>
        </div>
      </motion.section>

      {/* CONTENIDO PRINCIPAL - Mejora de Grilla */}
      <div className="grid lg:grid-cols-2 gap-16 items-center px-2">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-castilla-green-dark italic">Compromiso con el Desarrollo</h2>
            <div className="h-1 w-20 bg-castilla-yellow" />
          </div>

          <div className="space-y-8">
            {/* Ítem 1 */}
            <div className="group flex gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center border border-gray-100">
                <Landmark className="w-6 h-6 text-castilla-yellow" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-castilla-green-dark mb-1">Valorización Estratégica</h3>
                <p className="text-castilla-gray text-sm leading-relaxed">
                  Identificamos zonas con alto potencial de desarrollo para proyectos residenciales e industriales, asegurando rentabilidad a largo plazo.
                </p>
              </div>
            </div>

            {/* Ítem 2 */}
            <div className="group flex gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center border border-gray-100">
                <Trees className="w-6 h-6 text-castilla-green" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-castilla-green-dark mb-1">Diseño Sostenible</h3>
                <p className="text-castilla-gray text-sm leading-relaxed">
                  Cada proyecto integra corredores biológicos y áreas de preservación activa, respetando la topografía y el ecosistema local.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ÁREA DE VISUALIZACIÓN - Estilo Plano Técnico */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-castilla-green/5 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
          <div className="relative bg-white aspect-video rounded-[2rem] shadow-xl border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Master Plan / Visualizador</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <div className="w-2 h-2 rounded-full bg-yellow-300" />
                <div className="w-2 h-2 rounded-full bg-green-300" />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
               <div className="text-center space-y-4">
                 <div className="p-5 bg-gray-50 rounded-full inline-block border border-gray-100 shadow-inner">
                   <Map className="w-12 h-12 text-gray-300" />
                 </div>
                 <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Proyecciones Geográficas en Proceso</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER DE SECCIÓN - Sutil */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-8 border-t border-gray-100 flex items-center gap-3"
      >
        <CheckCircle className="text-castilla-green w-5 h-5" />
        <p className="text-sm text-castilla-gray italic">
          Proyectos desarrollados bajo la normativa vigente de ordenamiento territorial.
        </p>
      </motion.div>
    </div>
  )
}
  
"use client"

import { Users, Heart, ArrowRight, Sparkles, Landmark } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { filter: "grayscale(100%)", scale: 1.1 },
  visible: { 
    filter: "grayscale(0%)", 
    scale: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  }
}

export default function GestionSocial() {
  const pilares = [
    { 
      title: "Educación Financiera", 
      icon: Landmark, 
      text: "Acompañamiento en la gestión de libranzas y préstamos para vivienda o educación, fomentando la cultura del ahorro en las familias.",
      stats: "$612 MM Gestionados",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Bienestar y Subsidios", 
      icon: Heart, 
      text: "En alianza estratégica con COMFANDI, gestionamos servicios y beneficios integrales que contribuyen a la calidad de vida de nuestros colaboradores.",
      stats: "Alianzas Activas",
      color: "from-rose-500 to-orange-500"
    },
    { 
      title: "Valor Compartido", 
      icon: Users, 
      text: "Fortalecemos las relaciones con nuestros grupos de interés, minimizando el impacto ambiental y alineados con los ODS de la ONU.",
      stats: "Sostenibilidad",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <motion.div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-16 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* SECCIÓN: TÍTULO CON DECORACIÓN */}
      <motion.div variants={itemVariants} className="relative">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-[#a3c74a] w-5 h-5 animate-pulse" />
          <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.4em]">Bienestar Laboral</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-[#006437] tracking-tighter italic">
          Gestión Social
        </h1>
        <p className="text-gray-600 mt-6 text-xl leading-relaxed max-w-3xl font-normal">
          Nuestra Estrategia de Sostenibilidad crea <span className="text-[#006437] font-bold">valor compartido</span> como una oportunidad de desarrollo, generando confianza y rentabilidad.
        </p>
        <div className="h-1.5 w-32 bg-[#a3c74a] mt-6 rounded-full" />
      </motion.div>
      
      {/* SECCIÓN: BANNER INMERSIVO */}
      <motion.div 
        variants={itemVariants}
        className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,100,55,0.2)] group"
      >
        <motion.img 
          variants={imageVariants}
          src="/Imagenes/Exportado 1.jpg" 
          alt="Comunidad" 
          className="w-full h-full object-cover" 
        />
        
        {/* Overlay Inteligente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#006437] via-transparent to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight mb-4">
              Contribuyendo e impactando positivamente a las <br /> 
              <span className="text-[#a3c74a]">familias del sector.</span>
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* SECCIÓN: INTERACTIVE STACKED CARDS */}
      <div className="grid gap-8 relative">
        {/* Línea vertical de fondo decorativa */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-[#f1f8e9] via-[#a3c74a]/30 to-transparent hidden md:block" />

        {pilares.map((pilar, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative flex flex-col md:flex-row items-center gap-8 p-10 bg-white border border-gray-50 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
          >
            {/* Gradiente de fondo en hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-gradient-to-br ${pilar.color} transition-opacity duration-500`} />

            {/* Indicador Numérico Flotante */}
            <div className="relative">
                <div className="text-7xl font-black text-[#006437]/5 group-hover:text-[#a3c74a]/20 transition-colors duration-500 select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-[#f1f8e9] group-hover:bg-[#006437] rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner group-hover:rotate-12">
                      <pilar.icon size={30} className="text-[#006437] group-hover:text-white transition-colors" />
                   </div>
                </div>
            </div>
            
            <div className="flex-1 text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-center md:justify-start">
                <h3 className="font-bold text-2xl text-[#006437]">{pilar.title}</h3>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-gray-100 text-gray-500 group-hover:bg-[#a3c74a] group-hover:text-white transition-colors`}>
                   {pilar.stats}
                </span>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed font-normal">
                {pilar.text}
              </p>
            </div>

            <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-10 transition-all duration-500 hidden md:block">
               <div className="w-12 h-12 rounded-full border border-[#a3c74a] flex items-center justify-center text-[#a3c74a]">
                  <ArrowRight size={20} />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER: DATA SUMMARY - BLOQUES DE A DOS */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 gap-4 md:gap-6"
      >
        {[
          { lab: "Trabajadores Beneficiados", val: "76" },
          { lab: "Libranzas Gestionadas", val: "$612M" },
          { lab: "Alianza Estratégica", val: "COMFANDI" },
          { lab: "Compromiso Global", val: "ODS ONU" },
        ].map((d, i) => (
          <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 text-center shadow-sm hover:border-[#a3c74a] transition-colors flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#006437]">{d.val}</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 md:mt-3 leading-tight">{d.lab}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
"use client"

import { Users, ShieldCheck, ArrowRight, Sparkles, GraduationCap, Building2, TrendingDown } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

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
      title: "Desarrollo del Talento", 
      icon: GraduationCap, 
      text: "Promovemos el bienestar integral, la seguridad y la salud en el trabajo, reconociendo que las personas son el pilar clave para el logro de nuestros objetivos estratégicos.",
      stats: "Formación",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Inclusión y Cultura", 
      icon: Users, 
      text: "Fomentamos una cultura organizacional basada en el respeto, la diversidad y la inclusión, garantizando un entorno de trabajo seguro para todos nuestros colaboradores.",
      stats: "Equidad",
      color: "from-rose-500 to-orange-500"
    },
    { 
      title: "Programa Alianza E", 
      icon: Building2, 
      text: "Graduación de 22 famiempresas (68% familiares de trabajadores) con capital semilla, y capacitación de 21 contratistas en sostenibilidad mediante Design Thinking.",
      stats: "$4M Inversión Semilla",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <motion.div 
      // 👇 Se fuerza el uso estricto de Tahoma
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
          <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.4em]">Valor Compartido</span>
        </div>
        
        {/* 👇 Título sin inclinación (not-italic) 👇 */}
        <h1 className="text-5xl md:text-6xl font-black text-[#006437] tracking-tight not-italic">
          Gestión Social
        </h1>
        
        <p className="text-gray-600 mt-6 text-xl leading-relaxed max-w-3xl font-normal">
          Promovemos entornos de trabajo seguros y relaciones sólidas con nuestras comunidades, generando <span className="text-[#006437] font-bold">inversión social y económica</span> en nuestro territorio de influencia.
        </p>
        <div className="h-1.5 w-32 bg-[#a3c74a] mt-6 rounded-full" />
      </motion.div>
      
      {/* SECCIÓN: BANNER INMERSIVO (Inversión Social) */}
      <motion.div 
        variants={itemVariants}
        className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,100,55,0.2)] group"
      >
        <motion.div 
          variants={imageVariants}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/Imagenes/comunidades.jpeg" 
            alt="Comunidad y Educación" 
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </motion.div>
        
        {/* Overlay Inteligente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#006437] via-[#006437]/60 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold mb-4 border border-white/30">
              <ShieldCheck size={16} /> Inversión en el Territorio
            </div>
            <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-4">
              Mejorando la calidad educativa con dotación a la <span className="text-[#a3c74a]">Institución La Heroica (Corinto)</span> y apoyando infraestructura vial, cultura y deporte.
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

      {/* SECCIÓN DE IMPACTO: CASO "CARRETILLEROS" */}
      <motion.div 
        variants={itemVariants}
        className="bg-[#006437] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12"
      >
        {/* Decoración de fondo */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#a3c74a]/10 rounded-full blur-3xl" />

        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#a3c74a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
            <TrendingDown size={14} /> Impacto Comunitario Directo
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Inclusión de <span className="text-[#a3c74a]">Líderes</span> Comunitarios
          </h3>
          <p className="text-white/80 text-lg leading-relaxed font-light">
            A través del proyecto social, logramos la vinculación directa de <strong>8 líderes comunitarios</strong>. Esta estrategia de inclusión y valor compartido nos permitió generar un impacto altamente positivo en la seguridad de la región.
          </p>
        </div>

        {/* Tarjeta de Métricas de Reducción de Hurto */}
        <div className="bg-white p-8 rounded-[2rem] w-full md:w-[350px] shrink-0 relative z-10 shadow-xl">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Reducción de Hurto de Caña</p>
          
          <div className="flex items-end justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="h-24 w-12 bg-gray-200 rounded-t-xl relative group">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">809t</div>
              </div>
              <p className="text-xs font-bold text-gray-500 mt-2">2024</p>
            </div>

            <div className="flex flex-col items-center">
              {/* Representación visual de la reducción drástica */}
              <motion.div 
                initial={{ height: 96 }} // 24 * 4 (altura inicial visual)
                whileInView={{ height: 24 }} // Altura final reducida
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-12 bg-[#a3c74a] rounded-t-xl relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-[#006437] text-sm opacity-0 group-hover:opacity-100 transition-opacity">186t</div>
              </motion.div>
              <p className="text-xs font-bold text-[#006437] mt-2">2025</p>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-gray-100">
            <p className="text-5xl font-black text-[#006437] leading-none mb-1">-77%</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Disminución lograda</p>
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}
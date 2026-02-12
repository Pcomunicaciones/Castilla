"use client"

import { motion, Variants } from "framer-motion"
import { Factory, Truck, CheckCircle2, Sprout, Gauge, Leaf, Recycle, BarChart3 } from "lucide-react"

/* --------------------------------------------------------------------------
   CONFIGURACIÓN DE ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

const procesos = [
  {
    id: "01",
    icon: Sprout,
    title: "Siembra y Cosecha",
    description: "Agricultura de precisión. Utilizamos sensores de suelo y drones para garantizar la materia prima más dulce y sostenible.",
    tag: "Origen",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 text-emerald-600"
  },
  {
    id: "02",
    icon: Factory,
    title: "Procesamiento",
    description: "Transformación industrial en nuestro ingenio con tecnología de punta, maximizando la extracción de sacarosa.",
    tag: "Industria",
    color: "bg-castilla-green", 
    lightColor: "bg-green-50 text-green-700"
  },
  {
    id: "03",
    icon: Gauge,
    title: "Control de Calidad",
    description: "Laboratorios certificados monitorean cada lote en tiempo real para cumplir estándares internacionales.",
    tag: "Excelencia",
    color: "bg-castilla-green-dark", 
    lightColor: "bg-teal-50 text-teal-800"
  },
  {
    id: "04",
    icon: Truck,
    title: "Distribución",
    description: "Logística inteligente y flota monitoreada para asegurar la entrega oportuna y trazabilidad total.",
    tag: "Entrega",
    color: "bg-yellow-500",
    lightColor: "bg-yellow-50 text-yellow-700"
  },
]

export default function CadenaValorPage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. SECCIÓN: HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-10 max-w-6xl mx-auto px-4"
      >
        <div className="absolute -left-6 top-10 w-2 h-24 bg-yellow-400 rounded-r-full hidden md:block" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full mb-6 border border-green-100">
           <Leaf size={14} className="text-green-600" />
           <span className="text-green-800 font-bold text-[10px] uppercase tracking-widest">Modelo Sostenible</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#006437] mb-6 tracking-tight leading-none">
          Cadena de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006437] to-emerald-500">Valor</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-3xl font-light">
          Integramos ciencia, tecnología y respeto por la tierra para crear un ciclo 
          de producción <span className="font-bold text-[#006437] bg-green-50 px-2 rounded-lg">100% circular</span> y eficiente.
        </p>
      </motion.div>

      {/* 2. SECCIÓN: BANNER DE IMPACTO (CORREGIDO) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#006437] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl max-w-7xl mx-auto"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl" />
        
        {/* Ajuste de gap y alineación para evitar solapamiento */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              <Recycle size={18} className="text-yellow-400" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Eficiencia Integrada</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Optimizamos cada gramo de <span className="text-yellow-400 italic">materia prima.</span>
            </h2>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Nuestra integración vertical permite minimizar el desperdicio. 
              Transformamos subproductos como el bagazo en energía limpia.
            </p>
          </div>

          {/* Tarjetas de estadísticas corregidas */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-auto min-w-[300px]">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center group flex flex-col items-center justify-center">
              <div className="mb-3 flex justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              {/* Ajuste de tamaño de fuente para evitar corte */}
              <span className="block text-3xl md:text-4xl font-black text-white mb-2 leading-none">100%</span>
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest opacity-70">Trazabilidad</span>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center group flex flex-col items-center justify-center">
              <div className="mb-3 flex justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <Recycle size={28} />
              </div>
              <span className="block text-4xl md:text-5xl font-black text-white mb-2 leading-none">∞</span>
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest opacity-70">Circularidad</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. SECCIÓN: FLUJO DE PROCESOS (GRID 2x2) */}
      <section className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-16 border-b border-gray-100 pb-6">
          <h2 className="text-3xl font-black text-[#006437] uppercase tracking-tighter">
            Ciclo Productivo
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 relative"
        >
          {procesos.map((proceso, index) => (
            <motion.div
              key={proceso.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-white rounded-[3rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,100,55,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[320px]"
            >
              {/* Cabecera segura */}
              <div className="flex justify-between items-start mb-8 relative z-20 w-full">
                <div className={`w-20 h-20 ${proceso.lightColor} rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <proceso.icon size={36} />
                </div>
                <span className="inline-block py-2 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-gray-50 text-gray-400 border border-gray-100 group-hover:bg-[#006437] group-hover:text-white transition-all">
                  {proceso.tag}
                </span>
              </div>

              {/* Contenido */}
              <div className="relative z-20">
                <h3 className="text-3xl font-bold text-[#006437] mb-4 tracking-tight">
                  {proceso.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium max-w-sm">
                  {proceso.description}
                </p>
              </div>

              {/* Número de fondo */}
              <span className="absolute -right-6 -bottom-10 text-[10rem] font-black text-gray-50 opacity-60 select-none group-hover:text-gray-100 transition-colors pointer-events-none z-0">
                {proceso.id}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. SECCIÓN: CERTIFICACIÓN */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-white border-2 border-gray-50 flex items-center justify-center shadow-sm">
              <CheckCircle2 size={20} className="text-[#006437]" />
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
            <h4 className="text-base font-bold text-[#006437] uppercase tracking-wide">Calidad Certificada</h4>
            <p className="text-sm text-gray-500">
          
            </p>
        </div>
      </motion.div>

    </div>
  )
}
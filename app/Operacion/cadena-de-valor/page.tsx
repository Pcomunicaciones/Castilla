"use client"

import { motion, Variants } from "framer-motion"
import { Factory, Truck, Leaf, Settings, ArrowRight, CheckCircle2, Sprout, Gauge } from "lucide-react"

/* --------------------------------------------------------------------------
   CONFIGURACIÓN DE ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
}

const procesos = [
  {
    icon: Sprout,
    title: "Siembra y Cosecha",
    description: "Gestión agrícola de precisión basada en datos para obtener materia prima premium.",
    tag: "Origen",
    color: "bg-emerald-500"
  },
  {
    icon: Factory,
    title: "Procesamiento",
    description: "Transformación industrial con tecnología de punta y huella de carbono neutral.",
    tag: "Industria",
    color: "bg-castilla-green"
  },
  {
    icon: Gauge,
    title: "Control de Calidad",
    description: "Monitoreo en tiempo real con sensores IoT para garantizar estándares globales.",
    tag: "Excelencia",
    color: "bg-castilla-green-dark"
  },
  {
    icon: Truck,
    title: "Distribución",
    description: "Logística inteligente y trazabilidad total hasta el destino final.",
    tag: "Entrega",
    color: "bg-castilla-yellow text-castilla-green-dark"
  },
]

export default function CadenaValorPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* SECCIÓN: ENCABEZADO TIPO HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -left-4 top-0 w-1 h-20 bg-castilla-yellow rounded-full hidden md:block" />
        <span className="text-castilla-green font-black text-xs uppercase tracking-[0.3em] mb-4 block">
          Ecosistema Operativo
        </span>
        <h1 className="text-5xl md:text-6xl font-black text-castilla-green-dark mb-6 tracking-tight">
          Cadena de <span className="text-castilla-green">Valor</span>
        </h1>
        <p className="text-xl text-castilla-gray leading-relaxed max-w-2xl font-light">
          Integramos ciencia, tecnología y respeto por la tierra para crear un ciclo 
          de producción <span className="font-semibold text-castilla-green-dark">100% circular</span>.
        </p>
      </motion.div>

      {/* SECCIÓN: BANNER DE IMPACTO (Diseño de Tarjeta de Datos) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-castilla-green-dark text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
      >
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <CheckCircle2 size={18} className="text-castilla-yellow" />
              <span className="text-sm font-bold uppercase tracking-wider">Eficiencia Integrada</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Optimizamos cada gramo de materia prima.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Nuestra integración vertical permite minimizar el desperdicio. 
              Transformamos subproductos como el bagazo en energía limpia, cerrando el círculo de sostenibilidad.
            </p>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center">
              <span className="block text-4xl font-black text-castilla-yellow mb-1">100%</span>
              <span className="text-xs uppercase font-bold tracking-tighter opacity-60">Trazabilidad Total</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center">
              <span className="block text-4xl font-black text-white mb-1">∞</span>
              <span className="text-xs uppercase font-bold tracking-tighter opacity-60">Economía Circular</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECCIÓN: FLUJO DE PROCESOS (Diseño dinámico) */}
      <section className="relative">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black text-castilla-green-dark uppercase tracking-tighter">
            Etapas del Ciclo Productivo
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative"
        >
          {procesos.map((proceso, index) => (
            <motion.div
              key={proceso.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Badge de Categoría */}
              <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-castilla-yellow transition-colors">
                {proceso.tag}
              </span>

              {/* Icono Animado */}
              <div className={`w-14 h-14 ${proceso.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                <proceso.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-castilla-green-dark mb-3 group-hover:text-castilla-green transition-colors">
                {proceso.title}
              </h3>
              
              <p className="text-sm text-castilla-gray leading-relaxed font-light">
                {proceso.description}
              </p>

              {/* Flecha de conexión (Solo visible en desktop y no en el último) */}
              {index < procesos.length - 1 && (
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-gray-200"
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECCIÓN: CIERRE / CERTIFICACIÓN */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-center gap-4 p-6 border-t border-gray-100 opacity-60 hover:opacity-100 transition-opacity"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
              <CheckCircle2 size={14} className="text-castilla-green" />
            </div>
          ))}
        </div>
        <p className="text-xs font-medium text-castilla-gray">
          Procesos auditados bajo estándares internacionales de calidad y sostenibilidad ISO 14001.
        </p>
      </motion.div>

    </div>
  )
}
"use client"

import { motion, Variants } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import {  
  TrendingUp,
  FileText,
  Mail,
  Download,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
  PieChart,
  Globe,
  BarChart3,
  ArrowUpRight,
  Leaf,
  LucideIcon
} from "lucide-react"

/* --- SISTEMA DE ANIMACIONES UNIFICADO --- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

/* --- DATA --- */
const metrics = [
  { label: "Ingresos Operacionales", value: "$XXX.XXX M", trend: "+5.2%", icon: TrendingUp },
  { label: "EBITDA", value: "$XX.XXX M", trend: "+3.8%", icon: PieChart },
  { label: "Utilidad Neta", value: "$XX.XXX M", trend: "+4.1%", icon: BarChart3 },
  { label: "Activos Totales", value: "$XXX.XXX M", trend: "+2.9%", icon: Globe },
]

export default function InversionistasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-[Tahoma,Geneva,sans-serif]">
      <Header />

      <main className="flex-1">
        
        {/* HERO: ESTILO FIRMA */}
        <section className="relative h-[70vh] flex items-center bg-[#006437] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 bg-[#a3c74a] mb-10"
              />
              <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter leading-[0.85] mb-8 uppercase">
                Relación con <br />
                <span className="text-[#a3c74a]">Inversionistas</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                Transparencia radical, eficiencia operativa y creación de valor a largo plazo.
              </p>
            </motion.div>
          </div>
          
          {/* Elemento decorativo inferior */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* METRICS GRID: GLASSMORPHISM & HOVER */}
        <section className="relative z-20 -mt-24 px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="group bg-white/95 backdrop-blur-md p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-[#f1f8e9] rounded-[1.5rem] flex items-center justify-center text-[#006437] mb-8 group-hover:bg-[#006437] group-hover:text-white transition-all duration-500 shadow-inner">
                      <Icon size={28} />
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">{item.label}</p>
                    <p className="text-3xl font-bold text-[#006437] mb-4 italic tracking-tighter">{item.value}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-black">
                      <ArrowUpRight size={14} /> {item.trend}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ESTRATEGIA: BENTO GRID DINÁMICO */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-[#006437] rounded-[4rem] p-16 text-white relative overflow-hidden group min-h-[500px] flex flex-col justify-end"
            >
              <Leaf className="absolute top-16 right-16 text-[#a3c74a] w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 leading-none uppercase">Visión <br />Estratégica</h2>
                <p className="text-white/60 text-lg max-w-md font-light mb-10">Optimizamos la rentabilidad del agro colombiano mediante la integración de biotecnología y finanzas responsables.</p>
                <button className="flex items-center gap-4 text-[#a3c74a] font-black text-xs uppercase tracking-[0.3em] hover:gap-6 transition-all">
                  Explorar Hoja de Ruta <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-5 grid gap-8">
              <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 flex flex-col justify-between group hover:border-[#a3c74a] transition-all duration-500">
                <ShieldCheck className="text-[#006437] mb-8" size={48} />
                <div>
                  <h3 className="text-2xl font-black text-[#006437] italic uppercase tracking-tighter mb-4">Gobierno Corporativo</h3>
                  <p className="text-gray-500 font-light text-sm">Transparencia y ética en cada nivel de nuestra operación.</p>
                </div>
              </div>
              <div className="bg-[#f1f8e9] p-12 rounded-[3.5rem] border border-[#a3c74a]/20 flex flex-col justify-between group">
                <AlertTriangle className="text-[#006437] mb-8" size={48} />
                <div>
                  <h3 className="text-2xl font-black text-[#006437] italic uppercase tracking-tighter mb-4">Riesgos</h3>
                  <p className="text-gray-500 font-light text-sm">Monitoreo activo para garantizar la estabilidad operativa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTOS: INTERFAZ DE LISTA PREMIUM */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.5em] text-center mb-16">Documentos Oficiales</h2>
            <div className="space-y-4">
              {[
                { title: "Informe Anual de Gestión 2024", date: "Marzo 2025" },
                { title: "Estados Financieros Consolidados", date: "Enero 2025" },
                { title: "Estatutos Sociales", date: "Actualizado" }
              ].map((doc, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 20 }}
                  className="flex items-center justify-between p-10 bg-white rounded-[2.5rem] border border-gray-50 hover:bg-[#006437] hover:text-white transition-all duration-500 shadow-sm group cursor-pointer"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#006437] group-hover:bg-[#a3c74a] group-hover:text-[#006437] transition-all shadow-inner">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg italic">{doc.title}</h4>
                      <p className="text-[10px] font-black text-gray-400 group-hover:text-white/50 uppercase tracking-[0.2em]">{doc.date}</p>
                    </div>
                  </div>
                  <Download className="text-gray-300 group-hover:text-[#a3c74a] transition-colors" size={24} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: FOOTER DE SECCIÓN */}
        <section className="py-40 px-6 bg-white text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto p-20 bg-[#f1f8e9] rounded-[5rem] border border-[#a3c74a]/30 relative z-10"
          >
            <Mail className="mx-auto text-[#006437] mb-8" size={48} />
            <h2 className="text-4xl md:text-6xl font-black text-[#006437] italic tracking-tighter mb-10 leading-none uppercase">Atención al <br />Inversionista</h2>
            <a 
              href="mailto:inversionistas@castillaagricola.com"
              className="inline-block bg-[#006437] text-white px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-[#a3c74a] hover:text-[#006437] transition-all shadow-2xl shadow-green-900/20"
            >
              Contactar Oficina
            </a>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
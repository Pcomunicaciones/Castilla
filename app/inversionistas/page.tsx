"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText,
  Download,
  ChevronDown,
  Menu,
  X,
  PieChart,
  Users,
  Building2,
  Scale,
  Phone,
} from "lucide-react"

/* --- 1. ESTRUCTURA EXACTA DEL MENÚ --- */
const MENU_STRUCTURE = [
  {
    id: 'gobierno',
    label: 'GOBIERNO CORPORATIVO',
    icon: Building2,
    description: "Transparencia, ética y buenas prácticas empresariales.",
    subItems: [
      { id: 'codigos', label: 'Códigos y Estatutos' },
      { id: 'junta', label: 'Junta Directiva' }
    ]
  },
  {
    id: 'asamblea',
    label: 'ASAMBLEA DE ACCIONISTAS',
    icon: Users,
    description: "Información clave para el máximo órgano social.",
    subItems: [
      { id: 'convocatoria', label: 'CONVOCATORIA' },
      { id: 'info_general', label: 'INFORMACIÓN GENERAL' },
      { id: 'proyecto_dividendos', label: 'PROYECTO DISTRIBUCIÓN DE DIVIDENDOS' }
    ]
  },
  {
    id: 'control',
    label: 'ARQUITECTURA DE CONTROL',
    icon: Scale,
    description: "Mecanismos de supervisión y auditoría interna.",
    subItems: [
      { id: 'revisoria', label: 'Revisoría Fiscal' },
      { id: 'control_interno', label: 'Control Interno' }
    ]
  },
  {
    id: 'financiera',
    label: 'INFORMACIÓN FINANCIERA',
    icon: PieChart,
    description: "Resultados económicos y estados financieros consolidados.",
    subItems: [
      { id: 'estados_financieros', label: 'ESTADOS FINANCIEROS' },
      { id: 'informe_gestion', label: 'INFORME DE GESTIÓN' },
      { id: 'trimestrales', label: 'INFORMES FINANCIEROS TRIMESTRALES' }
    ]
  },
  {
    id: 'inversionista',
    label: 'RELACIÓN AL INVERSIONISTA',
    icon: Phone,
    description: "Canales de atención directa para accionistas.",
    subItems: [
      { id: 'atencion', label: 'ATENCIÓN AL INVERSIONISTA' }
    ]
  }
]

/* --- 2. COMPONENTES UI --- */

const BannerHero = ({ activeMenuId }: { activeMenuId: string | null }) => {
  const activeMenu = MENU_STRUCTURE.find(m => m.id === activeMenuId) || MENU_STRUCTURE[3];

  return (
    <motion.div 
      key={activeMenu.id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[300px] md:h-[340px] bg-[#006437] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-[#006437]/20 flex items-center px-8 md:px-16"
    >
      {/* Fondo y Decoración */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/grid.svg')] bg-center pointer-events-none" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#a3c74a]/20 to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-10 -bottom-20 text-white pointer-events-none"
      >
        <activeMenu.icon size={340} strokeWidth={0.5} />
      </motion.div>

      <div className="relative z-10 max-w-3xl pt-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
           <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#a3c74a] text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
             Portal Inversionistas
           </span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 leading-[0.85]">
          {activeMenu.label}
        </h1>
        <p className="text-white/70 text-sm md:text-lg font-light max-w-lg leading-relaxed border-l-4 border-[#a3c74a] pl-6">
          {activeMenu.description}
        </p>
      </div>
    </motion.div>
  )
}

const DocumentCell = ({ title, subtitle, date }: { title: string, subtitle: string, date?: string }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#a3c74a]/30 transition-all cursor-pointer group flex items-center justify-between min-h-[110px] relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#a3c74a] opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="flex items-center gap-6 relative z-10 pl-2">
      <div className="w-14 h-14 bg-[#f8fcf4] rounded-2xl flex items-center justify-center text-[#006437] group-hover:bg-[#006437] group-hover:text-white transition-all duration-300 shadow-inner">
        <FileText size={26} />
      </div>
      <div>
        <h4 className="font-bold text-[#006437] text-base md:text-lg leading-tight max-w-[380px] group-hover:text-black transition-colors">{title}</h4>
        <div className="flex flex-wrap gap-3 mt-2.5">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md border border-gray-100">{subtitle}</span>
          {date && <span className="text-[10px] bg-[#a3c74a]/10 text-[#006437] px-2 py-1 rounded-md font-bold flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#a3c74a]"></div> {date}
          </span>}
        </div>
      </div>
    </div>
    
    <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[#a3c74a] group-hover:text-white group-hover:border-[#a3c74a] transition-all relative z-10 shadow-sm">
      <Download size={20} />
    </div>
  </motion.div>
)

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="mb-10 pl-2"
  >
    <h2 className="text-3xl font-black text-[#006437] italic uppercase tracking-tighter mb-2 flex items-center gap-4">
      {title}
      <div className="h-[3px] w-16 bg-[#a3c74a] mt-1 rounded-full" />
    </h2>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">{subtitle}</p>
  </motion.div>
)

/* --- 3. VISTAS DE CONTENIDO --- */

const GobiernoView = ({ subId }: { subId: string }) => (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
    <div className="grid gap-5">
      {subId === 'codigos' && (
        <>
          <SectionTitle title="Códigos y Estatutos" subtitle="Marco Normativo" />
          <DocumentCell title="Código de Buen Gobierno" subtitle="Manual Corporativo" />
          <DocumentCell title="Estatutos Sociales" subtitle="Actualizados 2024" />
          <DocumentCell title="Código de Ética y Conducta" subtitle="Normativa" />
        </>
      )}
      {subId === 'junta' && (
        <>
          <SectionTitle title="Junta Directiva" subtitle="Órgano de Administración" />
          <DocumentCell title="Composición Junta Directiva" subtitle="Periodo 2024-2026" />
          <DocumentCell title="Reglamento de Junta Directiva" subtitle="Normativa Interna" />
          <DocumentCell title="Perfiles Miembros de Junta" subtitle="Hoja de Vida" />
        </>
      )}
    </div>
  </div>
)

const AsambleaView = ({ subId }: { subId: string }) => (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
    {subId === 'convocatoria' && (
      <>
        <SectionTitle title="Convocatoria" subtitle="Asamblea General Ordinaria" />
        <div className="bg-[#f1f8e9] p-10 rounded-[2.5rem] border border-[#a3c74a]/20 mb-8 relative overflow-hidden shadow-sm">
           <div className="relative z-10">
             <p className="text-[#006437] text-base font-medium leading-relaxed mb-6 max-w-2xl">
               Documento oficial de citación a la reunión ordinaria del máximo órgano social de Castilla Agrícola S.A.
             </p>
             <DocumentCell title="Aviso de Convocatoria 2026" subtitle="Publicación en Prensa" />
           </div>
           <Users className="absolute -top-6 -right-6 text-[#a3c74a] opacity-10 w-48 h-48 rotate-12" />
        </div>
      </>
    )}
    {subId === 'info_general' && (
      <>
        <SectionTitle title="Información General" subtitle="Documentación de Apoyo" />
        <div className="grid gap-5">
          <DocumentCell title="Orden del Día Propuesto" subtitle="Agenda" />
          <DocumentCell title="Reglamento de la Asamblea" subtitle="Normativa" />
          <DocumentCell title="Instructivo Representación (Poderes)" subtitle="Guía Accionista" />
        </div>
      </>
    )}
    {subId === 'proyecto_dividendos' && (
      <>
        <SectionTitle title="Distribución de Dividendos" subtitle="Proyecto de Utilidades" />
        <div className="grid gap-5">
          <DocumentCell title="Proyecto de Distribución de Utilidades 2025" subtitle="Para Aprobación" date="Marzo 2026" />
          <DocumentCell title="Histórico de Dividendos" subtitle="2020 - 2024" />
        </div>
      </>
    )}
  </div>
)

const ControlView = ({ subId }: { subId: string }) => (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
    <SectionTitle title="Arquitectura de Control" subtitle="Supervisión y Auditoría" />
    <div className="grid gap-5">
      <DocumentCell title="Informe Revisoría Fiscal" subtitle="Dictamen Anual" />
      <DocumentCell title="Estatuto de Auditoría Interna" subtitle="Política de Control" />
      <DocumentCell title="Informe Comité de Auditoría" subtitle="Gestión 2025" />
    </div>
  </div>
)

const FinancieraView = ({ subId }: { subId: string }) => (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
    {subId === 'estados_financieros' && (
      <>
        <SectionTitle title="Estados Financieros" subtitle="Cierre a 31 de Diciembre" />
        <div className="grid gap-10">
          <div>
            <h3 className="text-sm font-black text-[#006437] uppercase mb-5 pl-4 border-l-4 border-[#a3c74a] flex items-center gap-3">
              Separados <span className="bg-gray-100 text-gray-500 px-3 py-0.5 rounded-full text-[10px] tracking-wide">Local</span>
            </h3>
            <div className="grid gap-4 pl-2">
              <DocumentCell title="Estado de Situación Financiera Separado" subtitle="2025" />
              <DocumentCell title="Estado de Resultados Separado" subtitle="2025" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-[#006437] uppercase mb-5 pl-4 border-l-4 border-[#a3c74a] flex items-center gap-3">
              Consolidados <span className="bg-[#a3c74a]/20 text-[#006437] px-3 py-0.5 rounded-full text-[10px] tracking-wide">Grupo</span>
            </h3>
            <div className="grid gap-4 pl-2">
              <DocumentCell title="Estados Financieros Consolidados" subtitle="Grupo Empresarial" />
              <DocumentCell title="Notas a los Estados Financieros" subtitle="Revelaciones" />
            </div>
          </div>
        </div>
      </>
    )}
    {subId === 'informe_gestion' && (
      <>
        <SectionTitle title="Informe de Gestión" subtitle="Resultados Anuales" />
        <div className="grid gap-5">
          <DocumentCell title="Informe de Gestión 2025" subtitle="Junta Directiva y Gerencia" />
          <DocumentCell title="Informe de Sostenibilidad" subtitle="Reporte ASG" />
        </div>
      </>
    )}
    {subId === 'trimestrales' && (
      <>
        <SectionTitle title="Informes Trimestrales" subtitle="Seguimiento Periódico" />
        <div className="grid gap-5">
          <DocumentCell title="Resultados 3T 2025" subtitle="Corte Septiembre" />
          <DocumentCell title="Resultados 2T 2025" subtitle="Corte Junio" />
          <DocumentCell title="Resultados 1T 2025" subtitle="Corte Marzo" />
        </div>
      </>
    )}
  </div>
)

const InversionistaView = ({ subId }: { subId: string }) => (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
    <SectionTitle title="Atención al Inversionista" subtitle="Contacto Directo" />
    <div className="bg-gradient-to-br from-[#f8fcf4] to-white p-12 rounded-[3rem] border border-gray-100 shadow-xl text-center relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006437] to-[#a3c74a]" />
      
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#006437] mx-auto mb-8 shadow-xl border border-gray-50 group-hover:scale-110 transition-transform duration-500">
        <Phone size={40} />
      </div>
      
      <h3 className="text-3xl font-black text-[#006437] mb-3 italic tracking-tight">¿Necesita Asistencia?</h3>
      <p className="text-gray-500 text-base mb-12 max-w-md mx-auto leading-relaxed font-light">
        Nuestro equipo de relación con inversionistas está disponible para resolver sus dudas sobre títulos, acciones y dividendos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
        <div className="p-6 bg-white rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-[#a3c74a] transition-all group/card">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 group-hover/card:text-[#a3c74a] transition-colors">Correo Electrónico</p>
          <p className="text-[#006437] font-bold text-lg">inversionistas@castillaagricola.com</p>
        </div>
        <div className="p-6 bg-white rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-[#a3c74a] transition-all group/card">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 group-hover/card:text-[#a3c74a] transition-colors">Línea Telefónica</p>
          <p className="text-[#006437] font-bold text-lg">(602) 555-0000 Ext. 123</p>
        </div>
      </div>
    </div>
  </div>
)

/* --- 4. LAYOUT PRINCIPAL --- */

export default function InversionistasPage() {
  const [openMenuId, setOpenMenuId] = useState<string | null>('financiera') 
  const [activeSubItem, setActiveSubItem] = useState<string>('estados_financieros')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id)
  }

  const handleSubItemClick = (subId: string) => {
    setActiveSubItem(subId)
    setIsSidebarOpen(false) 
  }

  return (
    <div style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }} className="flex bg-[#fcfdfc] min-h-screen selection:bg-[#a3c74a] selection:text-[#006437]">
      
      {/* SIDEBAR */}
      <>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#006437] text-white p-4 rounded-full shadow-2xl border-2 border-[#a3c74a] hover:scale-110 transition-transform"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside className={`
          fixed lg:sticky top-0 lg:top-24 left-0 h-[calc(100vh-6rem)] w-[360px] bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 z-40 overflow-y-auto custom-scrollbar shadow-2xl lg:shadow-none rounded-tr-[2rem]
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Header Sidebar */}
          <div className="p-12 pb-8 border-b border-gray-50">
            <span className="text-[10px] font-black text-[#a3c74a] tracking-[0.3em] uppercase block mb-3">PORTAL WEB</span>
            {/* CORRECCIÓN: Se eliminó el salto de línea <br/> para que Inversionistas se lea completo */}
            <h2 className="text-3xl font-black text-[#006437] italic uppercase tracking-tighter leading-none">
              Inversionistas
            </h2>
          </div>

          {/* Menú Acordeón */}
          <nav className="flex-1 p-6 space-y-4">
            {MENU_STRUCTURE.map((menu) => (
              <div key={menu.id} className="overflow-hidden rounded-2xl transition-all duration-300">
                <button
                  onClick={() => toggleMenu(menu.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 transition-all duration-300 group border relative overflow-hidden ${
                    openMenuId === menu.id 
                      ? 'bg-[#006437] text-white shadow-xl shadow-[#006437]/20 border-transparent rounded-2xl z-10' 
                      : 'bg-white text-gray-600 hover:text-[#006437] hover:bg-gray-50 border-gray-100 rounded-xl'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <menu.icon size={20} className={`transition-colors duration-300 ${openMenuId === menu.id ? 'text-[#a3c74a]' : 'text-gray-300 group-hover:text-[#006437]'}`} />
                    <span className="text-[11px] font-black uppercase tracking-widest text-left">{menu.label}</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 relative z-10 ${openMenuId === menu.id ? 'rotate-180 text-[#a3c74a]' : 'text-gray-300'}`} 
                  />
                </button>

                <AnimatePresence>
                  {openMenuId === menu.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pl-6 pr-2 py-4 space-y-2 relative">
                        <div className="absolute left-8 top-2 bottom-2 w-[1px] bg-gray-100" />
                        
                        {menu.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleSubItemClick(sub.id)}
                            className={`relative w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 text-[10px] font-bold uppercase tracking-wider group ${
                              activeSubItem === sub.id
                                ? 'bg-[#f1f8e9] text-[#006437]'
                                : 'text-gray-400 hover:text-[#006437] hover:bg-gray-50'
                            }`}
                          >
                            <span className="relative z-10">{sub.label}</span>
                            {activeSubItem === sub.id && (
                              <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-[#a3c74a]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          
          <div className="p-8 text-center">
             <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">© 2026 Castilla Agrícola</p>
          </div>
        </aside>
      </>

      {/* 2. ÁREA DE CONTENIDO */}
      <main className="flex-1 px-6 md:px-12 lg:px-20 pt-32 lg:pt-40 overflow-x-hidden min-h-screen flex flex-col">
        
        {/* Banner Hero */}
        <BannerHero activeMenuId={openMenuId} />

        {/* Contenido Animado */}
        <div className="max-w-6xl w-full mx-auto flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubItem}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
               {['codigos', 'junta'].includes(activeSubItem) && <GobiernoView subId={activeSubItem} />}
               {['convocatoria', 'info_general', 'proyecto_dividendos'].includes(activeSubItem) && <AsambleaView subId={activeSubItem} />}
               {['revisoria', 'control_interno'].includes(activeSubItem) && <ControlView subId={activeSubItem} />}
               {['estados_financieros', 'informe_gestion', 'trimestrales'].includes(activeSubItem) && <FinancieraView subId={activeSubItem} />}
               {['atencion'].includes(activeSubItem) && <InversionistaView subId={activeSubItem} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

    </div>
  )
}
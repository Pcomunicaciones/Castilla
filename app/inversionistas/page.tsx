"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronDown, Menu, X, PieChart, 
  Users, Building2, Scale, Info, Phone
} from "lucide-react"

// --- 1. CONFIGURACIÓN DE ESTRUCTURAS ---

const MENU_STRUCTURE = [
  {
    id: 'gobierno',
    label: 'GOBIERNO CORPORATIVO',
    icon: Building2,
    description: "Estructura de mando, junta directiva y representantes legales.",
    subItems: [
      { id: 'estructura', label: 'ESTRUCTURA CORPORATIVA' },
      { id: 'buenas_practicas', label: 'BUENAS PRÁCTICAS' },
      { id: 'conglomerados', label: 'CONGLOMERADOS' },
      { id: 'info_relevante', label: 'INFORMACIÓN RELEVANTE' }
    ]
  },
  {
    id: 'asamblea',
    label: 'ASAMBLEA DE ACCIONISTAS',
    icon: Users,
    description: "Información oficial para el máximo órgano social.",
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
    subItems: []
  },
  {
    id: 'financiera',
    label: 'INFORMACIÓN FINANCIERA',
    icon: PieChart,
    description: "Resultados económicos y estados financieros consolidados.",
    subItems: [
      { id: 'estados_financieros', label: 'ESTADOS FINANCIEROS' },
      { id: 'informe_gestion', label: 'INFORME DE GESTIÓN' },
      { id: 'informes_trimestrales', label: 'INFORMES TRIMESTRALES' }
    ]
  },
  {
    id: 'atencion',
    label: 'ATENCIÓN AL INVERSIONISTA',
    icon: Phone, 
    description: "Canales de comunicación directa y soporte para nuestros accionistas.",
    subItems: []
  }
]

// --- 2. IMPORTACIONES DINÁMICAS ---

const LoadingView = () => (
    <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#006437]"></div>
    </div>
)

const dynamicOptions = { loading: () => <LoadingView /> }

const EstructuraView = dynamic(() => import("@/components/inversionistas/EstructuraView"), dynamicOptions)
const BuenasPracticasView = dynamic(() => import("@/components/inversionistas/BuenasPracticasView"), dynamicOptions)
const ConglomeradosView = dynamic(() => import("@/components/inversionistas/ConglomeradosView"), dynamicOptions)
const InfoRelevanteView = dynamic(() => import("@/components/inversionistas/InfoRelevanteView"), dynamicOptions)
const ConvocatoriaView = dynamic(() => import("@/components/inversionistas/ConvocatoriaView"), dynamicOptions)
const InfoGeneralView = dynamic(() => import("@/components/inversionistas/InfoGeneralView"), dynamicOptions)
const ProyectoDividendosView = dynamic(() => import("@/components/inversionistas/ProyectoDividendosView"), dynamicOptions)
const ArquitecturaControlView = dynamic(() => import("@/components/inversionistas/ArquitecturaControlView"), dynamicOptions)
const InformeGestionView = dynamic(() => import("@/components/inversionistas/InformeGestionView"), dynamicOptions)
const EstadosFinancierosView = dynamic(() => import("@/components/inversionistas/EstadosFinancierosView"), dynamicOptions)
const InformesTrimestralesView = dynamic(() => import("@/components/inversionistas/InformesTrimestralesView"), dynamicOptions)
const AtencionInversionistaView = dynamic(() => import("@/components/inversionistas/AtencionInversionistaView"), dynamicOptions)

// --- 3. LAYOUT PRINCIPAL ---

export default function InversionistasPage() {
  const [openMenuId, setOpenMenuId] = useState<string | null>('gobierno')
  const [activeSubItem, setActiveSubItem] = useState<string>('estructura')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex bg-[#fcfdfc] min-h-screen" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      
      {/* SIDEBAR INVERSIONISTAS */}
      <aside className={`fixed lg:sticky top-0 lg:top-28 left-0 h-[calc(100vh-8rem)] w-[360px] bg-white border border-gray-100 flex flex-col transition-transform z-40 rounded-r-[2.5rem] shadow-2xl lg:shadow-sm self-start ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        <div className="p-12 pb-8 border-b border-gray-50 shrink-0">
          <span className="text-[10px] font-bold text-[#a3c74a] tracking-[0.3em] uppercase block mb-3">Castilla Agrícola</span>
          <h2 className="text-3xl font-bold text-[#006437] not-italic uppercase tracking-tight leading-none">Inversionistas</h2>
        </div>
        
        <nav className="p-6 space-y-4 flex-1 overflow-y-auto">
          {MENU_STRUCTURE.map((menu) => (
            <div key={menu.id}>
              <button 
                onClick={() => {
                  if (menu.subItems && menu.subItems.length > 0) {
                    setOpenMenuId(openMenuId === menu.id ? null : menu.id);
                  } else {
                    setOpenMenuId(menu.id);
                    setActiveSubItem(menu.id);
                    setIsSidebarOpen(false);
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl transition-all ${openMenuId === menu.id ? 'bg-[#006437] text-white shadow-xl shadow-green-900/10' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-4">
                  <menu.icon size={20} className={openMenuId === menu.id ? "text-[#a3c74a]" : "text-gray-300"} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">{menu.label}</span>
                </div>
                {menu.subItems && menu.subItems.length > 0 && (
                  <ChevronDown size={16} className={openMenuId === menu.id ? "rotate-180" : ""} />
                )}
              </button>
              
              <AnimatePresence>
                {openMenuId === menu.id && menu.subItems && menu.subItems.length > 0 && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="py-4 px-8 space-y-2">
                      {menu.subItems.map((sub) => (
                        <button 
                          key={sub.id} 
                          onClick={() => { setActiveSubItem(sub.id); setIsSidebarOpen(false); }}
                          className={`w-full text-left py-2.5 px-4 text-[10px] font-bold uppercase rounded-xl transition-all ${activeSubItem === sub.id ? 'bg-[#a3c74a]/20 text-[#006437]' : 'text-gray-400 hover:text-[#006437]'}`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 px-8 lg:px-20 pt-32 lg:pt-40 pb-20 overflow-x-hidden">
        <div className="relative w-full min-h-[160px] py-10 bg-[#006437] rounded-3xl overflow-hidden mb-10 flex items-center px-10 shadow-xl shadow-green-900/10">
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase not-italic tracking-tight leading-none">
              {MENU_STRUCTURE.find(m => m.id === openMenuId)?.label || "INVERSIONISTAS"}
            </h1>
            
            {MENU_STRUCTURE.find(m => m.id === openMenuId)?.description && (
              <p className="text-white/80 text-base md:text-lg border-l-4 border-[#a3c74a] pl-5 max-w-2xl mt-4">
                {MENU_STRUCTURE.find(m => m.id === openMenuId)?.description}
              </p>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeSubItem === 'estructura' && <EstructuraView key="estructura" />}
          {activeSubItem === 'buenas_practicas' && <BuenasPracticasView key="buenas_practicas" />}
          {activeSubItem === 'conglomerados' && <ConglomeradosView key="conglomerados" />}
          {activeSubItem === 'info_relevante' && <InfoRelevanteView key="info_relevante" />}
          {activeSubItem === 'convocatoria' && <ConvocatoriaView key="convocatoria" />}
          {activeSubItem === 'info_general' && <InfoGeneralView key="info_general" />}
          {activeSubItem === 'proyecto_dividendos' && <ProyectoDividendosView key="proyecto_dividendos" />}
          {activeSubItem === 'control' && <ArquitecturaControlView key="control" />}
          {activeSubItem === 'informe_gestion' && <InformeGestionView key="informe_gestion" />}
          {activeSubItem === 'estados_financieros' && <EstadosFinancierosView key="estados_financieros" />}
          {activeSubItem === 'informes_trimestrales' && <InformesTrimestralesView key="informes_trimestrales" />}
          {activeSubItem === 'atencion' && <AtencionInversionistaView key="atencion" />}
          
          {!['estructura', 'buenas_practicas', 'conglomerados', 'info_relevante', 'convocatoria', 'info_general', 'proyecto_dividendos', 'control', 'informe_gestion', 'estados_financieros', 'informes_trimestrales', 'atencion'].includes(activeSubItem) && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-20">
               <Info className="mx-auto text-gray-100 mb-6" size={64} />
               <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Información en actualización</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden fixed bottom-8 right-8 z-50 bg-[#006437] text-white p-5 rounded-full shadow-2xl border-2 border-[#a3c74a]">
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

    </div>
  )
}
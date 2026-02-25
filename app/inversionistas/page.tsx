"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, Download, ChevronDown, Menu, X, PieChart, 
  Users, Building2, Scale, Info, Globe, ShieldCheck, Calendar, Tag, Phone
} from "lucide-react"

/* --- 1. CONFIGURACIÓN DE ESTRUCTURAS --- */

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
    subItems: [] // 👈 Dejado vacío para que funcione como botón directo
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
  }
]

/* --- 2. COMPONENTES DE DISEÑO (TAHOMA) --- */

const DataCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-8" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <div className="bg-[#f8fcf4] px-8 py-5 border-b border-gray-100">
      <h3 className="text-[#006437] font-bold text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <div className="p-8">{children}</div>
  </div>
)

const DocumentCell = ({ title, fileName }: { title: string, fileName: string }) => (
  <motion.a 
    href={`/docs/${fileName}`} download
    whileHover={{ y: -4 }}
    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-[#a3c74a] transition-all flex items-center justify-between group mb-3"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#006437] group-hover:bg-[#006437] group-hover:text-white transition-colors">
        <FileText size={20} />
      </div>
      <span className="font-bold text-[#006437] text-sm group-hover:text-black">{title}</span>
    </div>
    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#a3c74a] group-hover:text-white transition-all shadow-inner">
      <Download size={16} />
    </div>
  </motion.a>
)

/* --- 3. VISTAS DE CONTENIDO --- */

// --- VISTA: ESTRUCTURA CORPORATIVA (COMPLETA) ---
const EstructuraView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Representantes Legales">
      <div className="grid gap-2 mb-6">
        {[
          { cargo: "PRINCIPAL", nombre: "GUSTAVO ADOLFO BARONA TORRES", id: "C.C. 6.404.843" },
          { cargo: "SUPLENTE", nombre: "JUAN CARLOS BEDOYA GARCIA", id: "C.C. 16.757.005" },
          { cargo: "SUPLENTE", nombre: "MARIA LEANI CARREÑO ALVARAN", id: "C.C. 67.007.484" }
        ].map((rep, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-xl transition-colors">
            <div>
              <p className="text-[10px] font-bold text-[#a3c74a] uppercase tracking-widest">{rep.cargo}</p>
              <p className="font-bold text-[#006437] text-base">{rep.nombre}</p>
            </div>
            <p className="text-gray-400 font-bold text-xs mt-1 md:mt-0">{rep.id}</p>
          </div>
        ))}
      </div>
      <DocumentCell title="Nombramiento Representante Legal" fileName="estructura corporativa/PDF.pdf" />
    </DataCard>

    <DataCard title="Junta Directiva 2025 - 2026">
      <p className="text-[11px] text-gray-500 mb-8 italic border-l-4 border-[#a3c74a] pl-4">
        La Junta Directiva mencionada está conformada en su totalidad por miembros independientes (Ley 964 de 2005). Elegida el 26 de marzo de 2025.
      </p>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {[
          { p: "RAFAEL GONZÁLEZ ULLOA", s: "BELISARIO CAICEDO CAPURRO" },
          { p: "JUAN GUILLERMO SALAZAR VALLECILLA", s: "SEBASTIAN ESTEBAN ALVAREZ CAICEDO" },
          { p: "MARIANA CAICEDO PÉREZ", s: "RODRIGO CAICEDO LOURIDO" },
          { p: "ANICETO GUZMÁN SÁNCHEZ", s: "MARIANA BOTERO PIEDRAHITA" },
          { p: "FELIPE VICTORIA GONZÁLEZ", s: "MARIA ALEJANDRA CABAL GONZÁLEZ" }
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between border-l-4 border-[#a3c74a] pl-3 py-1 bg-gray-50/30">
              <span className="font-bold text-[#006437] text-sm">{item.p}</span>
              <span className="text-[9px] font-black text-[#a3c74a]">PRINCIPAL</span>
            </div>
            <div className="flex justify-between border-l-4 border-gray-200 pl-3 py-1">
              <span className="text-gray-500 text-sm">{item.s}</span>
              <span className="text-[9px] font-black text-gray-300">SUPLENTE</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-50 pt-6">
        <DocumentCell title="Reglamento Funcionamiento Junta Directiva" fileName="estructura corporativa/415.pdf" />
      </div>
    </DataCard>

    <DataCard title="Principales Accionistas">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] border-b border-gray-100">
              <th className="pb-4 px-2">Accionista</th>
              <th className="pb-4 text-right">Acciones Ordinarias</th>
              <th className="pb-4 text-right">%</th>
            </tr>
          </thead>
          <tbody className="text-[#006437]">
            {[
              { n: "Cumbres SAS", a: "1.364.166", p: "6,97%" },
              { n: "Delta Caicedo S.A.S", a: "1.236.391", p: "6,32%" },
              { n: "Desarrollos Pacifico S.A.S.", a: "1.236.390", p: "6,32%" },
              { n: "Titan Gea S.A.S.", a: "1.234.923", p: "6,31%" },
              { n: "Inversiones Bellavista y Cia S. en C.", a: "1.021.575", p: "5,22%" },
              { n: "San Martin Botero S.A.S.", a: "1.020.336", p: "5,21%" },
              { n: "San Mateo y Cia S.A.S.", a: "1.019.800", p: "5,21%" },
              { n: "Otros accionistas", a: "962.649", p: "4,92%" }
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-2 font-bold">{row.n}</td>
                <td className="py-3 text-right tabular-nums">{row.a}</td>
                <td className="py-3 text-right font-black text-[#a3c74a]">{row.p}</td>
              </tr>
            ))}
            <tr className="bg-[#f8fcf4] font-black border-t-2 border-[#a3c74a]">
              <td className="py-4 px-4 text-[#006437]">ACCIONES EN CIRCULACIÓN</td>
              <td className="py-4 text-right tabular-nums pr-2">19.578.078</td>
              <td className="py-4 text-right pr-2 text-[#006437]">100,00%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DataCard>

    <div className="grid md:grid-cols-2 gap-8">
      <DataCard title="Comités de Junta">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-black text-[#a3c74a] uppercase mb-2">Comité Auditoría y Riesgos</p>
            <div className="text-sm font-bold text-[#006437] space-y-1 mb-3">
              <p>Maria Alejandra Cabal González</p><p>Juan Guillermo Salazar Vallecilla</p><p>Rodrigo Caicedo Lourido</p>
            </div>
            <DocumentCell title="Reglamento Comité Auditoría y Riesgos" fileName="estructura corporativa/425.pdf" />
          </div>
          <div>
            <p className="text-[10px] font-black text-[#a3c74a] uppercase mb-2">Sostenibilidad y Gobierno</p>
            <div className="text-sm font-bold text-[#006437] space-y-1 mb-3">
              <p>Felipe Victoria González</p><p>Juan Guillermo Salazar Vallecilla</p><p>Rodrigo Caicedo Lourido</p>
            </div>
            <DocumentCell title="Reglamento Comité Sostenibilidad" fileName="estructura corporativa/426.pdf" />
          </div>
        </div>
      </DataCard>
      <DataCard title="Arquitectura de Control">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest">REVISORÍA FISCAL (PWC)</p>
            <p className="font-bold text-[#006437] text-sm">NIT. 900.943.048-4</p>
            <p className="text-xs text-gray-600">Principal: Jhon Alexander Pineda Mejía</p>
            <p className="text-xs text-gray-500">Suplente: Fabian Alexis Pardo Higuera</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest">AUDITORÍA INTERNA</p>
            <p className="font-bold text-[#006437] text-sm">Holmes Carvajal Botero</p>
            <DocumentCell title="Estatuto Auditoría Interna" fileName="estructura corporativa/393.pdf" />
          </div>
        </div>
      </DataCard>
    </div>
  </div>
)

// --- VISTA: BUENAS PRÁCTICAS ---
const BuenasPracticasView = () => (
  <div className="animate-in fade-in duration-700 pb-20">
    <DataCard title="Buenas Prácticas Corporativas">
      <div className="grid gap-2">
        <DocumentCell title="Encuesta Código País año 2025" fileName="buenas practicas/codigo_pais_2025.pdf" />
        <DocumentCell title="Encuesta Código País año 2024" fileName="buenas practicas/CAST_Encuesta-Codigo-Pais-2024.pdf" />
        <DocumentCell title="Encuesta Código País año 2023" fileName="buenas practicas/CAS2023CodigoPais.pdf" />
        <DocumentCell title="Encuesta Código País año 2022" fileName="buenas practicas/CAS2022CodigoPais.pdf" />
        <DocumentCell title="Reforma de Estatutos" fileName="buenas practicas/ESCRITURA-PUBLICA-2630.pdf" />
        <DocumentCell title="Encuesta Código País año 2021" fileName="buenas practicas/CAST_Encuesta-Codigo-Pais-2021.pdf" />
        <DocumentCell title="Estatutos Sociales" fileName="buenas practicas/" />
        <DocumentCell title="Código de Mejores Prácticas Corporativas" fileName="buenas practicas/ESTATUTOS-CASTILLA-0244-4-79.pdf" />
        <DocumentCell title="Documentos Anteriores" fileName="buenas practicas/PO-BAC-002-CODIGO-DE-MEJORES-PRACTICAS-CORPORATIVAS-CAST.pdf" />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: CONGLOMERADOS (RECONSTRUIDA CON TODA LA DATA) ---
const ConglomeradosView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Situación de Control">
      <div className="space-y-6">
        {[
          { fecha: "21 de Octubre de 2011", desc: "Se configura situación de control con las empresas: Agro Avelina S.A.S.; Agro La Balsa S.A.S.; Agro El Venado S.A.S.; Agro La Pampa S.A.S." },
          { fecha: "28 de Diciembre de 2012", desc: "Se configura situación de control con la empresa Bengala Agrícola S.A.S., inscrita ante cámara de comercio de Cali el 5 de marzo de 2013 bajo el No. 2472 de Libro IX." },
          { fecha: "27 de Septiembre de 2016", desc: "Se configura situación de control con la empresa Belmonte Agrícola S.A.S., inscrita ante la cámara de comercio de Cali el 9 de septiembre de 2016 bajo el No. 14665 del libro IX." },
          { fecha: "28 de Diciembre de 2012", desc: "Se configura situación de control con la empresa Bengala Agrícola S.A.S., inscrita ante cámara de comercio de Cali el 5 de marzo de 2013 bajo el No. 2473 de Libro IX." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 border-l-4 border-[#a3c74a] pl-6 py-2">
            <div>
              <p className="text-[10px] font-black text-[#a3c74a] uppercase tracking-widest">{item.fecha}</p>
              <p className="text-sm text-[#006437] leading-relaxed mt-1 font-bold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DataCard>

    <DataCard title="Grupo Empresarial">
      <div className="space-y-6">
        {[
          { fecha: "03 de Julio del 2012", desc: "La compañía configuró Grupo Empresarial con las sociedades: Agro Avelina S.A.S.; Agro El Venado S.A.S; Agro La Pampa S.A.S.; Agro La Balsa S.A.S.; Cauca Grande S.A. Inscripción 19 de julio 2012 bajo el número 8772 del libro IX." },
          { fecha: "28 de Diciembre de 2012", desc: "Se configura Grupo Empresarial con la empresa Bengala Agrícola S.A.S., inscrita ante cámara de comercio de Cali el 5 de marzo de 2013 bajo el No. 2472 de Libro IX." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 border-l-4 border-[#006437] pl-6 py-2">
            <div>
              <p className="text-[10px] font-black text-[#006437] uppercase tracking-widest">{item.fecha}</p>
              <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DataCard>
  </div>
)

// --- VISTA: INFORMACIÓN RELEVANTE ---
const InfoRelevanteView = () => {
  const hechos = [
    { 
      f: "14/11/2025", 
      t: "Informes de fin de Ejercicio", 
      r: "Se presenta el informe correspondiente al Tercer Trimestre de 2025, en cumplimiento de lo establecido en la Circular Externa 012 de 2022 de la Superintendencia Financiera de Colombia.", 
      doc: "informacion relevante/CAST_INFO-PERIODICO-III-TRIM-2025-EEFF-1.pdf" 
    },
    { 
      f: "15/08/2025", 
      t: "Informes de fin de Ejercicio", 
      r: "Se presenta el informe correspondiente al Segundo trimestre de 2025, en cumplimiento de lo establecido en la Circular Externa 012 de 2022 de la Superintendencia Financiera de Colombia.", 
      doc: "informacion relevante/CASTILLA-INFO-PERIODICO-II-TRIM-2025-Def.pdf" 
    },
    { 
      f: "16/05/2025", 
      t: "Informes de fin de Ejercicio", 
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se publica el Informe Periódico del primer trimestre del año 2025.", 
      doc: "informacion relevante/INFORME-PERIODICO-IER-TRIMESTRE-2025-CASTILLA.pdf" 
    },
    { 
      f: "09/05/2025", 
      t: "Informes de fin de Ejercicio", 
      r: "En cumplimiento a la CE 012 y CE 031 emitida por la Superintendencia Financiera de Colombia, se pública el informe periódico de fin de ejercicio al corte de diciembre 31 de 2024, aprobado en Asamblea General de Accionistas el 26 de marzo de 2025, el cual contiene la revelación de información sobre asuntos sociales y ambientales, incluidos los climáticos.", 
      doc: "informacion relevante/Informe-Gestion-y-Sostenibilidad-Fin-Ejercicio-2024_Castilla-Agricola.pdf" 
    },
    { 
      f: "26/03/2025", 
      t: "Decisiones Asamblea", 
      r: "Castilla Agrícola informa al mercado de valores sobre las decisiones aprobadas en la reunión ordinaria de la Asamblea General de Accionistas, celebrada de manera mixta el 26 de marzo de 2025.", 
      doc: "informacion relevante/Alcance_Desiciones-Asamblea-General_mzo-26-de-2025_CASTILLA-AGRICOLA.pdf" 
    },
    { 
      f: "26/03/2025", 
      t: "Otros Eventos", 
      r: "Se adjunta Proyecto de Distribución de Utilidades del año 2024, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 26 de marzo de 2025.", 
      doc: "informacion relevante/CAST_PDU_Util-2024_AGA_Mzo-26_2025.pdf" 
    },
    { 
      f: "26/03/2025", 
      t: "Novedades Directores", 
      r: "Se adjunta composición de la nueva Junta Directiva de la sociedad Castilla Agrícola S.A., para el periodo comprendido entre marzo de 2025 a marzo de 2026, elegida por la Asamblea de Accionistas en la reunión ordinaria celebrada hoy 26 de marzo de 2025.", 
      doc: "informacion relevante/CAST_JUNTA-DIRECTIVA-_AGA_mzo-26_2025.pdf" 
    },
    { 
      f: "04/03/2025", 
      t: "Otros Eventos", 
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión ordinaria de Asamblea General el 26 de marzo de 2025, en Cali, domicilio de la Sociedad.", 
      doc: "informacion relevante/Castilla-Carta.pdf" 
    },
    { 
      f: "03/03/2025", 
      t: "Convocatoria Asamblea", 
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Castilla Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 26 de marzo de 2025, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.", 
      doc: "informacion relevante/CAST.-AGRI-CITACION-REUNION-ORDINARIA-MARZO-2025-1.pdf" 
    },
    { 
      f: "03/03/2025", 
      t: "Informe de fin de Ejercicio", 
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta información del proyecto dedicado a las prácticas, políticas, procesos e indicadores en relación con los asuntos sociales y ambientales, incluidos los climáticos, que será presentado con el informe de fin de ejercicio 2024 en la asamblea general de accionistas.", 
      doc: "informacion relevante/CASTILLA-INFORME-AMBIENTAL-ANO-2024-comprimido.pdf" 
    },
    { 
      f: "03/03/2025", 
      t: "Otros Eventos", 
      r: "Se adjunta el Proyecto de Distribución de Utilidades del año 2024, que se presentará a consideración de la Asamblea General de Accionistas, en reunión ordinaria el 26 de marzo de 2025 en Cali, domicilio de la Sociedad.", 
      doc: "informacion relevante/PDU_Castilla_AGA_mzo-26_2025.pdf" 
    },
    { 
      f: "31/01/2025", 
      t: "Otros Eventos", 
      r: "En cumplimiento a la circular externa 028 de 2014 de la SFC, se informa que Castilla Agrícola S.A. diligenció y trasmitió el día 31 de enero de 2025, la encuesta Código País correspondiente al año 2024", 
      doc: "informacion relevante/CAST_Encuesta-Codigo-Pais-2024.pdf" 
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <DataCard title="Hechos Relevantes">
        <div className="space-y-4">
          {hechos.map((h, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#a3c74a] transition-all">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#006437]">{h.f}</span>
                  <span className="text-[10px] font-black text-[#a3c74a] uppercase bg-[#f1f8e9] px-2 py-1 rounded-md">{h.t}</span>
                </div>
                <a href={`/docs/${h.doc}`} download className="text-[10px] font-black text-gray-400 hover:text-[#006437] uppercase flex items-center gap-2 min-w-max">
                  <Download size={14} /> Descargar PDF
                </a>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{h.r}</p>
            </div>
          ))}
        </div>
      </DataCard>
    </div>
  )
}
// --- VISTA: CONVOCATORIA (ASAMBLEA DE ACCIONISTAS) ---
const ConvocatoriaView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Convocatoria">
      <div className="grid gap-2">
        <DocumentCell 
          title="Citación Asamblea General de Accionistas en reunión ordinaria marzo 26 de 2025" 
          fileName="convocatoria/CAST.-AGRI-CITACION-REUNION-ORDINARIA-MARZO-2025.pdf" 
        />
        <DocumentCell 
          title="Poder Persona Jurídica" 
          fileName="convocatoria/CAST.-AGRI-MODELO-PODER-PERSONA-JURIDICA-AGA-ORDINARIA-2025.pdf" 
        />
        <DocumentCell 
          title="Poder Persona Natural" 
          fileName="convocatoria/CAST-AGRI-MODELO-PODER-AGA-ORDINARIA-MAR.-2025-PERSONA-NATURAL-.pdf" 
        />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: INFORMACIÓN GENERAL (ASAMBLEA DE ACCIONISTAS) ---
const InfoGeneralView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Información General">
      <div className="grid gap-2">
        <DocumentCell 
          title="Informe de Gestión" 
          fileName="informacion general/1-Castilla-Informe-de-gestion-y-sostenibilidad-2024-DEFINITIVO.pdf" 
        />
        <DocumentCell 
          title="Estados Financieros Separados al 31 de diciembre de 2024, con notas" 
          fileName="informacion general/2-Castilla-Estados-financieros-separados.pdf" 
        />
        <DocumentCell 
          title="Estados Financieros Consolidados al 31 de diciembre de 2024, con notas" 
          fileName="informacion general/3-Castilla-Estados-financieros-consolidados.pdf" 
        />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: PROYECTO DISTRIBUCIÓN DE DIVIDENDOS (ASAMBLEA DE ACCIONISTAS) ---
const ProyectoDividendosView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Proyecto Distribución de Utilidades">
      <div className="grid gap-2">
        <DocumentCell 
          title="Proyecto de Distribución de Utilidades 2024, aprobado por la Asamblea General de Accionistas en reunión ordinaria el 26 de marzo de 2025" 
          fileName="proyecto distribucion dividendos/PDU_Castilla_AGA_mzo-26_2025.pdf" 
        />
        <DocumentCell 
          title="Fecha de Ex – Dividendos" 
          fileName="proyecto distribucion dividendos/CASTILLA_Fecha-Exdividendo_PDU-Utilidades-2024.pdf" 
        />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: ARQUITECTURA DE CONTROL (SIN SUBMENÚ) ---
const ArquitecturaControlView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Arquitectura de Control">
      <div className="grid gap-2">
        <DocumentCell 
          title="Estatutos de Auditoria Interna" 
          fileName="arquitectura control/Estatuto-Auditoria-Interna.pdf" 
        />
        <DocumentCell 
          title="Reglamento Comité Auditoria y Riesgos" 
          fileName="arquitectura control/R-BAC-001-Comite-de-Auditoria-y-Riesgo-Castilla.pdf" 
        />
        <DocumentCell 
          title="Reglamento Comité de Sostenibilidad y Gobierno Corporativo" 
          fileName="arquitectura control/R-BAC-002-Comite-Sostenibilidad-y-Gobierno-Corporativo-Castilla.pdf" 
        />
        <DocumentCell 
          title="Política General de Control y Gestión de Riesgos" 
          fileName="arquitectura control/PO-BGR-001-General-de-Control-y-de-Riesgos-Cast.pdf" 
        />
      </div>
    </DataCard>
  </div>
)
// VISTA: INFORME DE GESTIÓN 
const InformeGestionView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Informes de Gestión Anual">
      <div className="grid gap-2">
        <DocumentCell 
          title="Informe de Gestión 2024" 
          fileName="informes de gestion/1-Castilla-Informe-de-gestion-y-sostenibilidad-2024-DEFINITIVO.pdf" 
        />
        <DocumentCell 
          title="Informe de Gestión y Sostenibilidad 2023" 
          fileName="informes de gestion/Castilla-Informe-de-Gestion-y-Sostenibilidad-2023-3-1.pdf" 
        />
        <DocumentCell 
          title="Informe de Gestión 2022" 
          fileName="informes de gestion/CASTILLA-informe-de-gestion-2022_compressed.pdf" 
        />
        <DocumentCell 
          title="Informe de Gestión 2021" 
          fileName="informes de gestion/INFORME-GESTION-CASTILLA-2021-ASAMBLEA-1_compressed.pdf" 
        />
        <DocumentCell 
          title="Informe de Gestión 2020" 
          fileName="informes de gestion/INFORME-DE-GESTION-CASTILLA-BAJA.pdf" 
        />
      </div>
    </DataCard>
  </div>
)
//VISTA: ESTADOS FINANCIEROS
const EstadosFinancierosView = () => {
  const archivos = [
    { year: "2024", file: "CAST-EEFF-Fin-de-Ejercicio-Diciembre-2024.pdf" },
    { year: "2023", file: "Castilla-Estados-Financieros-Ano-2023.pdf" },
    { year: "2022", file: "CASTILLA-EEFF-Separados-y-Consolidados-1.pdf" },
    { year: "2021", file: "EEFFF2021AsambleaCastilla.pdf" },
    { year: "2020", file: "ESTADOS-FINANCIEROS-CASTILLA-2020.pdf" }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <DataCard title="Estados Financieros con Notas y Dictamen del Revisor Fiscal">
        <div className="grid gap-2">
          {archivos.map((item) => (
            <DocumentCell 
              key={item.year}
              title={`Año ${item.year}`} 
              fileName={`estados financieros/${item.file}`} 
            />
          ))}
          {}
          <DocumentCell 
            title="Históricos" 
            fileName="estados financieros/historico_estados_financieros.pdf" 
          />
        </div>
      </DataCard>
    </div>
  )
}
 //INFORMES FINANCIEROS TRIMESTRALE
const InformesTrimestralesView = () => {
  
  const informesList = [
    // 2025
    { title: "EEFF Consolidados - Junio 2025", doc: "AS-6868-25-E.F.-Castilla-Agricola-S.A.-y-sus-Subsidiarias-Consolidados-30-jun-2025.pdf" },
    { title: "EEFF Separados - Junio 2025", doc: "AS-6867-25-Castilla-Agricola-S.A.-EEFF-Separados-Junio-2025.pdf" },
    { title: "EEFF Consolidados - Marzo 2025", doc: "AS-4969-25-Castilla-Agricola-EEFF-Completos-Consolidados-al-31-Marzo-2025.pdf" },
    { title: "EEFF Separados - Marzo 2025", doc: "AS-4855-25-Castilla-Agricola-EEFF-completos-Separados-Marzo-2025.pdf" },
    
    // 2024
    { title: "EEFF Consolidados - Septiembre 2024", doc: "CAST-EEFF-Consolidados-Septiembre-2024-PROJD.pdf" },
    { title: "EEFF Separados - Septiembre 2024", doc: "CAST-EEFF-Separados-Septiembre-2024-PROJD.pdf" },
    { title: "EEFF Consolidados - Junio 2024", doc: "CAST-EEFF-Consolidados-Junio-2024-PROJD.pdf" },
    { title: "EEFF Separados - Junio 2024", doc: "CAST-EEFF-Separados-Junio-2024.pdf" },
    { title: "EEFF Consolidados - Marzo 2024", doc: "CAST-EEFF-Consolidados-Firmado.pdf" },
    { title: "EEFF Separados - Marzo 2024", doc: "CAST-EEFF-Separados-Firmado.pdf" },

    // 2023
    { title: "EEFF Consolidados - Septiembre 2023", doc: "CAST-EEFF-Consolidados-Septiembre-2023.pdf" },
    { title: "EEFF Separados - Septiembre 2023", doc: "CAST-EEFF-Separados-Septiembre-2023.pdf" },
    { title: "EEFF Consolidados - Junio 2023", doc: "CAST-EEFF-Consolidados-Junio-2023.pdf" },
    { title: "EEFF Separados - Junio 2023", doc: "CAST-EEFF-Separados-Junio-2023.pdf" },
    { title: "EEFF Consolidados - Marzo 2023", doc: "EEFF-CAST-Consolidados-Marzo-2023.pdf" },
    { title: "EEFF Separados - Marzo 2023", doc: "CAST-EEFF-Separados-Marzo-2023.pdf" },

    // 2022
    { title: "EEFF Consolidados - Septiembre 2022", doc: "CAST-EEFF-Consolidados-Septiembre-2022.pdf" },
    { title: "EEFF Separados - Septiembre 2022", doc: "EEFF-Castilla-Separado-Septiembre-2022.pdf" },
    { title: "EEFF Consolidados - Junio 2022", doc: "Castilla-Estados-Financieros-Consolidados-Junio-2022-Revision-LR-10-08-2022.pdf" },
    { title: "EEFF Separados - Junio 2022", doc: "EEFF-Castilla-Separado-Junio-2022-Rev.-LR-10-08-2022.pdf" },
    { title: "EEFF Consolidados - Marzo 2022", doc: "Castilla-Estados-Financieros-Consolidados-Marzo-2022.pdf" },
    { title: "EEFF Separados - Marzo 2022", doc: "EEFF-Castilla-Separado-Marzo-2022.pdf" },

    // 2021
    { title: "EEFF Consolidados - Septiembre 2021", doc: "Castilla-EEFF-Consolidados-Septiembre-2021.pdf" },
    { title: "EEFF Separados - Septiembre 2021", doc: "castilla-EEFF-Separado-Septiembre-2021.pdf" },
    { title: "EEFF Consolidados - Junio 2021", doc: "Castilla-EEFF-Consolidados-a-junio-2021-V-05-08-2021.pdf" },
    { title: "EEFF Consolidados - Marzo 2021", doc: "vf13-05-2021Cast-Estados-Financieros-Consolidados-a-marzo-2021.pdf" },
    { title: "EEFF Separados - Marzo 2021", doc: "vf-13-05-2021-EEFF-Castilla-separado-a-marzo-2021.pdf" },

    // 2020 
    { title: "EEFF Separados - Tercer Trimestre 2020", doc: "EE.FF-CAST-SEPARADOS-TERCER-TRIMESTRE-2020-1.pdf" },
    { title: "EEFF Consolidados - Junio 2020", doc: "562.pdf" },
    { title: "EEFF Consolidados - Marzo 2020", doc: "559.pdf" },
    { title: "EEFF Separados - Marzo 2020", doc: "558.pdf" }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <DataCard title="Informes Financieros Trimestrales e Históricos">
        {/* Usamos 'grid gap-2' para forzar una sola columna vertical */}
        <div className="grid gap-2">
          {informesList.map((item, i) => (
            <DocumentCell 
              key={i} 
              title={item.title} 
              fileName={`informes trimestrales/${item.doc}`} 
            />
          ))}
        </div>
      </DataCard>
    </div>
  )
}

/* --- 4. LAYOUT PRINCIPAL (TAHOMA FULL) --- */

export default function InversionistasPage() {
  const [openMenuId, setOpenMenuId] = useState<string | null>('gobierno')
  const [activeSubItem, setActiveSubItem] = useState<string>('estructura')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex bg-[#fcfdfc] min-h-screen" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      
      {/* SIDEBAR INVERSIONISTAS */}
    {/* SIDEBAR INVERSIONISTAS */}
      <aside className={`fixed lg:sticky top-0 lg:top-28 left-0 h-[calc(100vh-8rem)] w-[360px] bg-white border border-gray-100 flex flex-col transition-transform z-40 rounded-r-[2.5rem] shadow-2xl lg:shadow-sm self-start ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* ENCABEZADO FIJO */}
        <div className="p-12 pb-8 border-b border-gray-50 shrink-0">
          <span className="text-[10px] font-bold text-[#a3c74a] tracking-[0.3em] uppercase block mb-3">Castilla Agrícola</span>
          <h2 className="text-3xl font-bold text-[#006437] italic uppercase tracking-tighter leading-none">Inversionistas</h2>
        </div>
        
        {/* ÁREA DE BOTONES CON SCROLL INTERNO */}
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

      {/* ÁREA DE CONTENIDO */}
      <main className="flex-1 px-8 lg:px-20 pt-32 lg:pt-40 pb-20 overflow-x-hidden">
        <div className="relative w-full h-[280px] bg-[#006437] rounded-[3rem] overflow-hidden mb-12 flex items-center px-12 shadow-2xl shadow-green-900/20">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white uppercase italic tracking-tighter leading-none mb-4">
              {MENU_STRUCTURE.find(m => m.id === openMenuId)?.label || "INVERSIONISTAS"}
            </h1>
            <p className="text-white/70 text-lg border-l-4 border-[#a3c74a] pl-6 max-w-xl">
              {MENU_STRUCTURE.find(m => m.id === openMenuId)?.description}
            </p>
          </div>
        </div>
{/* ESTE ES EL ANIMATE PRESENCE DEL CONTENIDO (AQUÍ VAN LAS VISTAS) */}
        {/* ESTE ES EL ANIMATE PRESENCE DEL CONTENIDO (AQUÍ VAN LAS VISTAS) */}
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
          
          {/* 👇 NUEVA LÍNEA AÑADIDA 👇 */}
          {activeSubItem === 'informes_trimestrales' && <InformesTrimestralesView key="informes_trimestrales" />}
          
          {/* 👇 ARRAY ACTUALIZADO 👇 */}
          {!['estructura', 'buenas_practicas', 'conglomerados', 'info_relevante', 'convocatoria', 'info_general', 'proyecto_dividendos', 'control', 'informe_gestion', 'estados_financieros', 'informes_trimestrales'].includes(activeSubItem) && (
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
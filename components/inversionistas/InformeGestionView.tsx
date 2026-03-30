import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const InformeGestionView = () => (
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
        <DocumentCell 
          title="Informe de Gestión 2025" 
          fileName="informes de gestion/Castilla-ENTREGADOCUMENTOCOMPLETA-21032026N-1.pdf" 
        />
      </div>
    </DataCard>
  </div>
)

export default InformeGestionView

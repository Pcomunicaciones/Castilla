import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const ConvocatoriaView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Asamblea General Ordinaria de Accionistas 2026">
      <div className="grid gap-2">
        <DocumentCell title="Convocatoria Asamblea Ordinaria 2026" fileName="convocatorias/Citacion-Reunion-Ordinaria-Asamblea-de-Accionistas-Castilla-Agricola_mzo-25_2026.pdf" />
        <DocumentCell title="Poder Persona Natural" fileName="convocatorias/Poder_Persona-Natural-AGA-Ordinaria-2026.pdf" />
        <DocumentCell title="Poder Persona Jurídica" fileName="convocatorias/Poder_Persona-Juridica-AGA-Ordinaria-2026.pdf" />
        <DocumentCell title="Instrucciones para Votación" fileName="convocatorias/Instructivo-de-Votacion-AGA-2026.pdf" />
      </div>
    </DataCard>
    <DataCard title="Asamblea General Extraordinaria - Marzo 5 de 2026">
       <div className="grid gap-2">
          <DocumentCell title="Convocatoria Asamblea Extraordinaria" fileName="convocatorias/Castilla-Convocatoria-RE-AGA_marzo-5_2026.pdf" />
          <DocumentCell title="Poder Persona Natural" fileName="convocatorias/Poder_Persona-Natural-RE-AGA-Mzo-5_2026.pdf" />
          <DocumentCell title="Poder Persona Jurídica" fileName="convocatorias/Poder_Persona-Juridica-RE-AGA-Mzo-5_2026.pdf" />
       </div>
    </DataCard>
  </div>
)

export default ConvocatoriaView

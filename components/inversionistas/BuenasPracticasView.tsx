import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const BuenasPracticasView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Implementación Código País">
      <div className="grid gap-2">
        <DocumentCell title="Encuesta Código País 2024" fileName="codigo pais/CAST_Encuesta-Codigo-Pais-2024.pdf" />
        <DocumentCell title="Encuesta Código País 2023" fileName="codigo pais/CAS2023CodigoPais-1.pdf" />
        <DocumentCell title="Encuesta Código País 2022" fileName="codigo pais/PDU-Dic-31_2022_CASTILLA-AGRICOLA (3).pdf" />
        <DocumentCell title="Encuesta Código País 2021" fileName="codigo pais/encuesta_codigo_pais_2021.pdf" />
      </div>
    </DataCard>
  </div>
)

export default BuenasPracticasView

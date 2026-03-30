import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const ProyectoDividendosView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Proyecto de Distribución de Utilidades">
      <div className="grid gap-2">
        <DocumentCell title="Proyecto Distribución de Utilidades 2025" fileName="proyectos de distribucion de utilidades/Proyecto-Distribucion-Utilidades-2025_-Castilla-Agricola-Fecha-de-Exdividendos.pdf" />
        <DocumentCell title="Proyecto Distribución de Utilidades 2024" fileName="proyectos de distribucion de utilidades/CAST_PDU_Util-2024_AGA_Mzo-26_2025.pdf" />
        <DocumentCell title="Proyecto Distribución de Utilidades 2023" fileName="proyectos de distribucion de utilidades/PDU_Castilla_AGA_mzo-26_2025.pdf" />
        <DocumentCell title="Proyecto Distribución de Utilidades 2022" fileName="proyectos de distribucion de utilidades/PDU_Castilla-Agricola_aprob-AGA-marzo-21_2024.pdf" />
      </div>
    </DataCard>
  </div>
)

export default ProyectoDividendosView

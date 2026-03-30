import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const InfoGeneralView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Información General">
      <div className="grid gap-2">
        <DocumentCell title="Estatutos Sociales" fileName="informacion general/ESTATUTOS-SOCI-CASTILLA-AGRICOLA-OCT-2024.pdf" />
        <DocumentCell title="Reglamento de suscripción de acciones" fileName="informacion general/399.pdf" />
      </div>
    </DataCard>
  </div>
)

export default InfoGeneralView

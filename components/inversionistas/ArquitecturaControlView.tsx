import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const ArquitecturaControlView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Arquitectura de Control">
      <div className="grid gap-2">
        <DocumentCell title="Estatuto de Auditoría Interna" fileName="arquitectura de control/393.pdf" />
      </div>
    </DataCard>
  </div>
)

export default ArquitecturaControlView

import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const ConglomeradosView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Conglomerados Financieros">
      <div className="grid gap-2">
        <DocumentCell title="Política de Gestión de Conflictos de Interés" fileName="conglomerado financiero/Politica-de-Gestion-de-Conflictos-de-Interes-y-Operaciones-con-Vinculados-Conglomerado-Financiero.pdf" />
      </div>
    </DataCard>
  </div>
)

export default ConglomeradosView

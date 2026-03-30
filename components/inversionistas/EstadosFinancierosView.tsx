import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const EstadosFinancierosView = () => {
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
          <DocumentCell 
            title="Históricos" 
            fileName="estados financieros/historico_estados_financieros.pdf" 
          />
        </div>
      </DataCard>
    </div>
  )
}

export default EstadosFinancierosView

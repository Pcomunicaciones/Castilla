import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const InformesTrimestralesView = () => {
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

export default InformesTrimestralesView

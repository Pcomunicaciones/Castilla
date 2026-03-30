import React from "react"
import { DataCard, DocumentCell } from "./shared"

export const EstructuraView = () => (
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
              { n: "Santa Carolina Botero S.A.S.", a: "2.032.144", p: "10,38%" },
{ n: "Alianza Fiduciaria S.A. -Fideicomiso ORUS", a: "1.364.166", p: "6,97%" },
{ n: "Delta Caicedo S.A.S", a: "1.236.391", p: "6,32%" },
{ n: "Desarrollos Pacífico S.A.S.", a: "1.236.390", p: "6,32%" },
{ n: "Titán Gea S.A.S.", a: "1.234.923", p: "6,31%" },
{ n: "Inversiones Bellavista y Cía. S. en C.", a: "1.021.575", p: "5,22%" },
{ n: "San Mateo y Cía. S.A.S.", a: "1.019.800", p: "5,21%" },
{ n: "Aratamma S.A.S.", a: "1.019.800", p: "5,21%" },
{ n: "San Antonio Botero S.A.S.", a: "1.010.637", p: "5,16%" },
{ n: "Colombina S. A.", a: "950.904", p: "4,86%" },
{ n: "González Holmann S.A.S", a: "637.518", p: "3,26%" },
{ n: "Proyectos González y Cía S.C.A.", a: "637.499", p: "3,26%" },
{ n: "B.G. Ulloa y Cía S.C.A.", a: "637.492", p: "3,26%" },
{ n: "F.G. Victoria y Cía. S.C.A.", a: "637.474", p: "3,26%" },
{ n: "B.G. Garrido S.A.S", a: "637.471", p: "3,26%" },
{ n: "J.M. C. y Cía. S.A.", a: "602.533", p: "3,08%" },
{ n: "La Campiña Caicedo & Cía. S. en C.", a: "412.917", p: "2,11%" },
{ n: "Babilonia Caicedo & Cía. S. en C.", a: "412.881", p: "2,11%" },
{ n: "Alianza Fiduciaria S.A.-Fideicomiso 3535-1493 Acciones Cali", a: "407.512", p: "2,08%" },
{ n: "Hacienda La Independencia", a: "392.724", p: "2,01%" },
{ n: "Inversiones González Garcés y Cía. S.C.A.", a: "318.406", p: "1,63%" },
{ n: "Inversiones González Cabal y Cía. S.C.A.", a: "318.405", p: "1,63%" },
{ n: "Inversiones B J González SAS", a: "214.034", p: "1,09%" },
{ n: "Valores González Peñaranda SAS", a: "201.644", p: "1,03%" },
{ n: "Valores González Tobón SAS", a: "186.874", p: "0,95%" },
{ n: "Otros accionistas con menor participación", a: "795.964", p: "4,07%" }
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-2 font-bold">{row.n}</td>
                <td className="py-3 text-right tabular-nums">{row.a}</td>
                <td className="py-3 text-right font-black text-[#a3c74a]">{row.p}</td>
              </tr>
            ))}
            <tr className="bg-[#f8fcf4] font-black border-t-2 border-[#a3c74a]">
              <td className="py-4 px-4 text-[#006437]">ACCIONES SUSCRITAS, PAGADAS Y EN CIRCULACIÓN</td>
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
            <p className="text-[10px] font-black text-[#a3c74a] uppercase mb-3 tracking-widest">Comité Auditoría y Riesgos</p>
            <div className="text-sm font-bold text-[#006437] space-y-2 mb-4">
              <p>Maria Alejandra Cabal González</p>
              <p>Juan Guillermo Salazar Vallecilla</p>
              <p>Rodrigo Caicedo Lourido</p>
            </div>
            <DocumentCell title="Reglamento Comité Auditoría y Riesgos" fileName="estructura corporativa/425.pdf" />
          </div>

          <div className="border-t border-gray-50 pt-4"></div>
          <div>
            <p className="text-[10px] font-black text-[#a3c74a] uppercase mb-3 tracking-widest">Sostenibilidad y Gobierno</p>
            <div className="space-y-3 mb-4">
              <div className="border-l-2 border-gray-100 pl-3">
                <p className="text-sm font-bold text-[#006437]">Felipe Victoria González</p>
                <p className="text-[11px] text-gray-500 font-medium">Principal <span className="mx-1">|</span> C.C. 16.828.594</p>
              </div>
              <div className="border-l-2 border-gray-100 pl-3">
                <p className="text-sm font-bold text-[#006437]">Juan Guillermo Salazar Vallecilla</p>
                <p className="text-[11px] text-gray-500 font-medium">Principal <span className="mx-1">|</span> C.C. 94.400.436</p>
              </div>
              <div className="border-l-2 border-gray-100 pl-3">
                <p className="text-sm font-bold text-[#006437]">Rodrigo Caicedo Lourido</p>
                <p className="text-[11px] text-gray-500 font-medium">Principal <span className="mx-1">|</span> C.C. 14.960.455</p>
              </div>
            </div>
            <DocumentCell title="Reglamento Comité Sostenibilidad" fileName="estructura corporativa/426.pdf" />
          </div>
        </div>
      </DataCard>
      <DataCard title="Arquitectura de Control">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest uppercase">Revisor Fiscal</p>
            <p className="font-bold text-[#006437] text-sm">PWC Contadores y Auditores S.A.S.</p>
            <p className="text-xs text-gray-500 mb-3">NIT. 900.943.048-4</p>
            
            <div className="space-y-2 border-l-2 border-gray-100 pl-3">
              <div>
                <p className="text-xs font-bold text-gray-700">Principal: Jhon Alexander Pineda Mejía</p>
                <p className="text-[11px] text-gray-500">C.C. 94.415.859 <span className="mx-1">|</span> T.P. 79093-T</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700">Suplente: Fabian Alexis Pardo Higuera</p>
                <p className="text-[11px] text-gray-500">C.C. 1.018.432.341 <span className="mx-1">|</span> T.P. 258597-T</p>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-50">
            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest uppercase">Auditoría Interna</p>
            <p className="font-bold text-[#006437] text-sm mb-3">Holmes Carvajal Botero</p>
            <DocumentCell title="Estatuto Auditoría Interna" fileName="estructura corporativa/393.pdf" />
          </div>
        </div>
      </DataCard>
    </div>
  </div>
)

export default EstructuraView

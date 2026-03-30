import React from "react"
import { FileText, ExternalLink } from "lucide-react"

export const DataCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-8" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <div className="bg-[#f8fcf4] px-8 py-5 border-b border-gray-100">
      <h3 className="text-[#006437] font-bold text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <div className="p-8">{children}</div>
  </div>
)

export const DocumentCell = ({ title, fileName }: { title: string, fileName: string }) => (
  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 p-3 mt-2 border border-gray-100 bg-white rounded-xl hover:border-[#a3c74a] transition-all group shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[#006437] group-hover:bg-[#006437] group-hover:text-white transition-colors shrink-0">
        <FileText size={16} />
      </div>
      <span className="text-xs font-bold text-gray-600 group-hover:text-[#006437] transition-colors leading-tight">
        {title}
      </span>
    </div>
    
    <div className="flex w-full sm:w-auto shrink-0">
      <a
        href={`/docs/${fileName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-[#f1f8e9] text-[#006437] hover:bg-[#006437] hover:text-white rounded-lg text-[10px] font-bold transition-colors uppercase"
        title="Abrir documento en pestaña nueva"
      >
        <ExternalLink size={14} /> VER DOCUMENTO
      </a>
    </div>
  </div>
)

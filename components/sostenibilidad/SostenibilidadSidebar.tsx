"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Leaf, Users, LineChart, FileText, ExternalLink, ChevronRight } from "lucide-react"

const menuSostenibilidad = [
  { name: "Gestión Ambiental", href: "/sostenibilidad/gestion-ambiental", icon: Leaf, desc: "Cuidado del entorno" },
  { name: "Gestión Social", href: "/sostenibilidad/gestion-social", icon: Users, desc: "Compromiso humano" },
  { name: "Gestión Económica", href: "/sostenibilidad/gestion-economica", icon: LineChart, desc: "Valor compartido" },
  { name: "Informes", href: "/sostenibilidad/informes", icon: FileText, desc: "Transparencia" },
]

export function SostenibilidadSidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-castilla-green-dark rounded-3xl p-6 text-white shadow-xl sticky top-32">
      <div className="mb-8">
        <h2 className="text-2xl font-bold italic">Sostenibilidad</h2>
        <p className="text-castilla-green-light text-xs uppercase tracking-widest font-semibold opacity-80">Nuestro Legado</p>
      </div>
      
      <nav className="space-y-3">
        {menuSostenibilidad.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group",
                isActive ? "bg-white text-castilla-green-dark shadow-lg" : "hover:bg-white/10 text-white/80 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-xl", isActive ? "bg-castilla-green-dark/10" : "bg-white/10")}>
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">{item.name}</p>
                  <p className={cn("text-[10px] mt-1", isActive ? "text-castilla-green" : "text-white/40")}>{item.desc}</p>
                </div>
              </div>
              <ChevronRight className={cn("w-4 h-4 transition-transform", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100")} />
            </Link>
          )
        })}

        {/* Link Externo: Hipervínculo página de gobierno */}
        <a 
          href="https://www.minambiente.gov.co" 
          target="_blank" 
          className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/10 text-white/80 transition-all border-t border-white/10 mt-4"
        >
          <div className="p-2 bg-white/10 rounded-xl"><ExternalLink size={18} /></div>
          <p className="font-bold text-sm leading-none">Página de Gobierno</p>
        </a>
      </nav>
    </div>
  )
}
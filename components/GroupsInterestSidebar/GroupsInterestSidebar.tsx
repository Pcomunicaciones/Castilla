"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Users, FileCheck, HardHat, ExternalLink, ChevronRight } from "lucide-react"

const menuItems = [
  {
    name: "Gestión Ambiental", // Cambiar nombres según corresponda a la sección
    subtext: "Cuidado del entorno",
    href: "/grupos-de-interes/proveedores-clientes",
    icon: HardHat,
  },
  {
    name: "Talento Humano",
    subtext: "Compromiso humano",
    href: "/grupos-de-interes/talento",
    icon: Users,
  },
  {
    name: "Reglamento y Políticas",
    subtext: "Transparencia",
    href: "/grupos-de-interes/politicas",
    icon: FileCheck,
  },
]

export function GroupsInterestSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-80 flex-shrink-0">
      <div className="sticky top-32 bg-[#006437] rounded-[40px] p-8 shadow-2xl">
        {/* Encabezado del Sidebar */}
        <div className="mb-8 pl-2">
          <h2 className="text-3xl font-black italic text-white leading-none tracking-tight">
            Grupos de Interés
          </h2>
          <p className="text-[#a3c74a] text-xs font-bold uppercase tracking-widest mt-1">
            NUESTRA RED
          </p>
        </div>

        {/* Menú de Navegación */}
        <nav className="space-y-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center p-4 rounded-3xl transition-all duration-300",
                  isActive
                    ? "bg-white shadow-lg"
                    : "hover:bg-white/10"
                )}
              >
                {/* Icono con fondo circular suave */}
                <div className={cn(
                  "p-3 rounded-full mr-4 transition-colors",
                  isActive ? "bg-[#e8f5e9] text-[#006437]" : "bg-white/10 text-white"
                )}>
                  <item.icon size={20} />
                </div>

                {/* Texto y Subtexto */}
                <div className="flex-1">
                  <p className={cn(
                    "text-sm font-bold leading-tight",
                    isActive ? "text-[#006437]" : "text-white"
                  )}>
                    {item.name}
                  </p>
                  <p className={cn(
                    "text-[10px] mt-0.5",
                    isActive ? "text-[#006437]/60" : "text-white/60"
                  )}>
                    {item.subtext}
                  </p>
                </div>

                {isActive && <ChevronRight size={16} className="text-[#006437] ml-2" />}
              </Link>
            )
          })}
        </nav>

        {/* Botón de Buk (Estilo Footer del Sidebar) */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <a
            href="https://castillaagricola.buk.co"
            target="_blank"
            className="flex items-center text-white hover:text-[#a3c74a] transition-colors group"
          >
            <div className="p-3 bg-white/10 rounded-full mr-4 group-hover:bg-[#a3c74a] group-hover:text-[#006437] transition-all">
              <ExternalLink size={20} />
            </div>
            <span className="text-sm font-bold tracking-tight">Página de Buk</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
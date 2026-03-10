"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Building2, History, Users2, ChevronRight, ShieldCheck, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    name: "Quiénes Somos",
    href: "/compania/quienes-somos",
    icon: Building2,
    subtext: "Misión, visión y valores",
  },
  {
    name: "Historia y Evolución",
    href: "/compania/historia",
    icon: History,
    subtext: "Nuestra trayectoria",
  },
  {
    name: "Gobierno Corporativo",
    href: "/compania/gobierno-corporativo",
    icon: Users2,
    subtext: "Estructura organizacional",
  },
  {
    name: "Políticas y Cumplimiento",
    href: "/compania/politicasycumplimiento", 
    icon: ShieldCheck,
    subtext: "Transparencia y ética",
  },
  {
    name: "Línea Transparente",
    href: "/compania/linea-transparente",
    icon: ShieldAlert,
    subtext: "Canal de denuncias éticas",
  },
]

export function CompanySidebar() {
  const pathname = usePathname()

  return (
    <aside 
      // Forzamos la tipografía Tahoma para todo el Sidebar
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="hidden lg:block w-80 flex-shrink-0"
    >
      <div className="sticky top-32 bg-[#006437] rounded-[40px] p-8 shadow-2xl">
        
        {/* Encabezado del Sidebar */}
        <div className="mb-8 pl-2">
          <h2 className="text-3xl font-black not-italic text-white leading-none tracking-tight">
            Compañía
          </h2>
          <p className="text-[#a3c74a] text-xs font-bold uppercase tracking-widest mt-2">
            NAVEGACIÓN
          </p>
        </div>

        {/* Menú de Navegación */}
        <nav className="space-y-4">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href
            
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
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
                    "p-3 rounded-full mr-4 transition-colors shrink-0",
                    isActive ? "bg-[#e8f5e9] text-[#006437]" : "bg-white/10 text-white"
                  )}>
                    <item.icon size={20} />
                  </div>

                  {/* Texto y Subtexto */}
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "text-sm font-bold leading-tight truncate",
                      isActive ? "text-[#006437]" : "text-white"
                    )}>
                      {item.name}
                    </p>
                    <p className={cn(
                      "text-[10px] mt-0.5 truncate",
                      isActive ? "text-[#006437]/60" : "text-white/60"
                    )}>
                      {item.subtext}
                    </p>
                  </div>

                  {isActive && (
                    <ChevronRight size={16} className="text-[#006437] ml-2 shrink-0" />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>


      </div>
    </aside>
  )
}
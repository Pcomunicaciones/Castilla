"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

/* --- 1. CONFIGURACIÓN DE MENÚS (SUBMENÚS) --- */
// Aquí organizamos todos los enlaces que aparecen cuando pasas el mouse por las categorías.

const companySubmenu = [
  { name: "Quienes Somos", href: "/compania/quienes-somos" },
  { name: "Historia y Evolución", href: "/compania/historia" },
  { name: "Gobierno Corporativo", href: "/compania/gobierno-corporativo" },
  { name: "Políticas y Cumplimiento", href: "/compania/politicasycumplimiento" },
  { name: "Línea Transparente", href: "/compania/linea-transparente" },
]

const operationSubmenu = [
  { name: "Cadena de Valor", href: "/Operacion/cadena-de-valor" },
  { name: "Belagro", href: "/Operacion/belagro" },
  { name: "Proyectos Inmobiliarios", href: "/Operacion/proyectos-inmobiliarios" },
  { name: "Otras Líneas", href: "/Operacion/otras-lineas" },
]

const sustainabilitySubmenu = [
  { name: "Gestión Ambiental", href: "/sostenibilidad/gestion-ambiental" },
  { name: "Gestión Social", href: "/sostenibilidad/gestion-social" },
  { name: "Gestión Económica", href: "/sostenibilidad/gestion-economica" },
  { name: "Informes", href: "/sostenibilidad/informes" },
]

const groupsSubmenu = [
  { name: "Proveedores / Clientes", href: "/grupos-de-interes/proveedores-clientes" },
  { name: "Talento (Trabaje con nosotros)", href: "/grupos-de-interes/talento" },
  { name: "Portal de Autogestión Buk", href: "https://castillaagricola.buk.co", isExternal: true },
]


const contactSubmenu = [
  { name: "Protección Datos Personales", href: "/contacto/proteccion-datos" },
]

export function Header() {
  // Estados para manejar si bajamos scroll, si el móvil está abierto o qué pestaña desplegamos
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isHome = pathname === "/"

  // Este efecto detecta cuando el usuario baja la página para poner el fondo sólido al header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isSolid = !isHome || isScrolled

  // Función ayudante para decidir si renderizamos un link interno o uno externo (que abre en otra pestaña)
  const renderLink = (item: any) => {
    if (item.isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-castilla-green-light/10 hover:text-castilla-green-dark transition-colors"
        >
          {item.name} <ExternalLink size={14} className="ml-2 opacity-50" />
        </a>
      )
    }
    return (
      <Link
        href={item.href}
        onClick={() => setMobileMenuOpen(false)} // Cerramos el menú móvil al navegar
        className={cn(
          "flex items-center gap-2 px-4 py-3 text-sm transition-colors rounded-lg",
          pathname === item.href
            ? "bg-castilla-green-dark text-white font-bold"
            : "text-gray-600 hover:bg-castilla-green-light/10 hover:text-castilla-green-dark"
        )}
      >
        <span className="w-1 h-1 rounded-full bg-castilla-yellow opacity-40 shrink-0" />
        {item.name}
      </Link>
    )
  }

  return (
    <>
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      // Si estamos en scroll o fuera del home, el header se vuelve verde sólido con un degradado premium
      isSolid
        ? "bg-gradient-to-r from-[#04683A]/95 to-[#048450]/90 backdrop-blur-md shadow-lg py-2 border-b border-white/10"
        : "bg-transparent py-5 border-b border-transparent"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* SECCIÓN LOGO: Siempre a la izquierda */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/Imagenes/Logo retina.png"
              alt="Logo Castilla Agrícola"
              width={160}
              height={40}
              className="h-10 w-auto object-contain transition-all duration-300"
            />
            <div className="hidden sm:block transition-colors text-white">
              <p className="font-bold text-lg leading-tight tracking-tight">Castilla Agrícola</p>
              <p className="text-[10px] font-black opacity-80 uppercase tracking-widest">S.A.</p>
            </div>
          </Link>

          {/* --- MENÚ PARA COMPUTADORAS (DESKTOP) --- */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-semibold transition-colors text-white/80 hover:text-white"
            >
              Inicio
            </Link>

            {/* Generamos las pestañas desplegables dinámicamente */}
            {[
              { label: "Compañía", menu: companySubmenu, id: "compania" },
              { label: "Operación", menu: operationSubmenu, id: "Operacion" },
              { label: "Sostenibilidad", menu: sustainabilitySubmenu, id: "sostenibilidad" },
              { label: "Grupos de Interés", menu: groupsSubmenu, id: "grupos-de-interes" },
              { label: "Contacto", menu: contactSubmenu, id: "contacto" },
            ].map((d) => {
              const isActive = pathname.startsWith(`/${d.id}`);

              return (
                <div
                  key={d.id}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(d.id)} // Abrir al pasar el mouse
                  onMouseLeave={() => setOpenDropdown(null)} // Cerrar al quitarlo
                >
                  <button className={cn(
                    "flex items-center space-x-1 text-sm font-semibold py-2 transition-colors outline-none",
                    isActive ? "text-[#a3c74a] font-bold" : "text-white/80 hover:text-white"
                  )}>
                    <span>{d.label}</span>
                    <ChevronDown size={14} className={cn("transition-transform duration-300", openDropdown === d.id && "rotate-180")} />
                  </button>

                  {/* El submenú flotante con animación suave */}
                  <AnimatePresence>
                    {openDropdown === d.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {d.menu.map((item, i) => (
                            <div key={i}>{renderLink(item)}</div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* BOTÓN INVERSIONISTAS: Destacado con un borde verde claro */}
            <Link
              href="/inversionistas"
              className="text-sm font-bold py-2 px-6 rounded-full border-2 transition-all border-[#88c336] text-[#88c336] hover:bg-[#88c336] hover:text-white"
            >
              Inversionistas
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo se ve en celulares) */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              if (!mobileMenuOpen) setMobileActiveSection(null) // Reset al abrir
            }}
            className="lg:hidden p-2 transition-colors text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </header>

      {/* --- MENÚ DESPLEGABLE PARA MÓVILES --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] lg:hidden bg-white z-40 overflow-y-auto pb-20"
          >
            <div className="px-6 py-10 flex flex-col gap-4">

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-castilla-green-dark border-b border-gray-100 pb-4 mb-2"
              >
                Inicio
              </Link>

              {[
                { label: "Compañía", menu: companySubmenu, id: "compania" },
                { label: "Operación", menu: operationSubmenu, id: "Operacion" },
                { label: "Sostenibilidad", menu: sustainabilitySubmenu, id: "sostenibilidad" },
                { label: "Grupos de Interés", menu: groupsSubmenu, id: "grupos-de-interes" },
                { label: "Contacto", menu: contactSubmenu, id: "contacto" },
              ].map((section, idx) => {
                const isOpen = mobileActiveSection === section.id;

                return (
                  <div key={idx} className={cn(
                    "rounded-2xl transition-colors overflow-hidden",
                    isOpen ? "bg-gray-50 border border-gray-100" : ""
                  )}>
                    <button
                      onClick={() => setMobileActiveSection(isOpen ? null : section.id)}
                      className={cn(
                        "w-full flex items-center justify-between text-xl font-black px-4 py-4 transition-colors",
                        isOpen ? "text-castilla-green-dark" : "text-slate-800"
                      )}
                    >
                      {section.label}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={cn("p-1 rounded-full", isOpen ? "bg-castilla-green/10" : "")}
                      >
                        <ChevronDown size={20} className="opacity-50" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-1 pl-6 pr-4 pb-6 mt-1 border-l-4 border-castilla-yellow mx-4 my-2">
                            {section.menu.map((item, i) => (
                              <div key={i}>{renderLink(item)}</div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-8">
                <Link
                  href="/inversionistas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-5 bg-castilla-green-dark text-white rounded-2xl font-bold shadow-xl shadow-green-900/10 active:scale-95 transition-all"
                >
                  Área de Inversionistas
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
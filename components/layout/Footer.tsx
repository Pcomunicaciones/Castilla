"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"
import Image from "next/image"

/* --- COMPONENTE FOOTER --- */
// Este es el pie de página que aparece en todas las pantallas. 
// Tiene tres secciones: Branding (Logo), Links rápidos y el Mapa de ubicación.

export function Footer() {
  const currentYear = new Date().getFullYear()

  // URL embebida de Google Maps apuntando a la sede en Cali
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.656208035345!2d-76.52455038865666!3d3.4598737965099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ebad0068ec4a81%3A0x9c1cc2b4e3289ba2!2sCra.%201%20%2324-56%2C%20San%20Nicolas%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1707486000000!5m2!1ses!2sco"

  // Configuración de redes sociales: Fáciles de actualizar si la empresa abre Tiktok o Twitter
  const socialLinks = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/agricolacastillasa/?originalSubdomain=co",
      label: "LinkedIn"
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/people/Castilla-Agr%C3%ADcola-Riopaila-Agr%C3%ADcola/100083044706351/?locale=es_ES#",
      label: "Facebook"
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/riocasben/",
      label: "Instagram"
    }
  ]

  return (
    <footer className="relative bg-[#04683A] text-white pt-12 pb-8 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* --- COLUMNA 1: IDENTIDAD DE MARCA --- */}
          <div className="lg:col-span-4 space-y-6">

            <div className="flex items-center gap-4">
              {/* Logo con un ligero hover de opacidad */}
              <Link href="/">
                <Image
                  src="/Imagenes/intento 4.png"
                  alt="Logo Icono"
                  width={60}
                  height={56}
                  className="h-14 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>

              {/* Nombre de la empresa en Tahoma para consistencia visual */}
              <div className="flex flex-col justify-center font-[Tahoma,sans-serif] select-none">
                <span className="text-2xl font-bold leading-none tracking-wide text-white cursor-default">
                  CASTILLA
                </span>
                <span className="text-2xl font-bold leading-none tracking-wide text-white cursor-default">
                  AGRÍCOLA S.A.
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-xs font-[Tahoma,sans-serif]">
              Sostenibilidad y tradición transformando el campo colombiano.
            </p>

            {/* Botones de Redes Sociales con efecto de hover amarillo */}
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -2, backgroundColor: "#fbbf24", color: "#000" }}
                  className="p-2 bg-white/10 rounded-lg border border-white/20 transition-all shadow-sm cursor-pointer hover:bg-white/20"
                >
                  <item.Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* --- COLUMNA 2: ENLACES RÁPIDOS Y CONTACTO --- */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-6 pt-2 font-[Tahoma,sans-serif]">
            <div className="space-y-3">
              <h4 className="text-[#FEB811] font-bold text-[10px] uppercase tracking-[0.2em]">Compañía</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/compania/quienes-somos" className="text-white/80 hover:text-white hover:underline transition-colors">Nosotros</Link></li>
                <li><Link href="/compania/historia" className="text-white/80 hover:text-white hover:underline transition-colors">Historia</Link></li>
                <li><Link href="/compania/gobierno-corporativo" className="text-white/80 hover:text-white hover:underline transition-colors">Gobierno</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#FEB811] font-bold text-[10px] uppercase tracking-[0.2em]">Contacto</h4>
              <div className="text-xs text-white/80 space-y-2">
                <p className="flex items-center gap-2"><Phone size={12} className="text-[#FEB811]" /> (57)(602)4855974</p>
                <p className="flex items-center gap-2 truncate"><Mail size={12} className="text-[#FEB811]" /> administracion.corp@agroriocas.com</p>
              </div>
            </div>
          </div>

          {/* --- COLUMNA 3: GOOGLE MAPS (Interactivo) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative group h-48 font-[Tahoma,sans-serif]"
          >
            <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.5) brightness(0.9) contrast(1.1)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Castilla Agrícola"
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />

              {/* Botón flotante para saltar directamente a Google Maps */}
              <Link
                href={mapUrl}
                target="_blank"
                className="absolute top-3 right-3 z-20 bg-[#FEB811] text-black px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 hover:scale-105 transition-transform shadow-lg"
              >
                Abrir en Maps <ArrowUpRight size={12} />
              </Link>

              {/* Etiqueta de dirección física */}
              <div className="absolute bottom-3 left-3 z-20 bg-[#04683A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <p className="text-[10px] font-bold text-white flex items-center gap-2">
                  <MapPin size={12} className="text-[#FEB811]" /> Cra 1 #24-56, Cali, CO
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- LÍNEA DE COPYRIGHT --- */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-[Tahoma,sans-serif]">
          <p className="text-[10px] text-white/60 tracking-wide">
            © {currentYear} <span className="text-white">Castilla Agrícola S.A.</span> - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
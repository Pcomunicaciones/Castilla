"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Reemplacé cuales no se reemplazo nadala URL por una de Google Maps real (Cali, Valle del Cauca)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6744390066115!2d-76.5317769!3d3.45041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a66426747b01%3A0x6336f32e2c56434b!2sCra.%201%20%2324-56%2C%20San%20Vicente%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"

  return (
    <footer className="relative bg-[#001a0e] text-white pt-12 pb-8 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* COL 1: BRANDING (Compacto) */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} className="h-10">
              <img 
                src="/Imagenes/Logos en blanco.png" 
                alt="Logo Castilla" 
                className="h-full w-auto object-contain" 
              />
            </motion.div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Sostenibilidad y tradición transformando el campo colombiano.
            </p>
            <div className="flex gap-2">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2, backgroundColor: "#fbbf24", color: "#000" }}
                  className="p-2 bg-white/5 rounded-lg border border-white/10 transition-all shadow-sm"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* COL 2: NAVEGACIÓN Y CONTACTO */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-castilla-yellow font-bold text-[10px] uppercase tracking-[0.2em]">Compañía</h4>
              <ul className="space-y-1.5 text-xs">
                <li><Link href="/compania/quienes-somos" className="text-gray-400 hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link href="/compania/historia" className="text-gray-400 hover:text-white transition-colors">Historia</Link></li>
                <li><Link href="/compania/gobierno" className="text-gray-400 hover:text-white transition-colors">Gobierno</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-castilla-yellow font-bold text-[10px] uppercase tracking-[0.2em]">Contacto</h4>
              <div className="text-[11px] text-gray-400 space-y-2">
                <p className="flex items-center gap-2"><Phone size={10} className="text-castilla-yellow"/> +57 (2) 660 6666</p>
                <p className="flex items-center gap-2 truncate"><Mail size={10} className="text-castilla-yellow"/> Administracion.Corp@Agroriocas.Com</p>
              </div>
            </div>
          </div>

          {/* COL 3: MAPA PREVIEW (Mediano y Estático) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative group h-40"
          >
            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-inner">
              
              {/* Bloqueo de interacción directa para que no se mueva al hacer scroll o pasar el mouse */}
              <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto" />

              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1) brightness(0.9)" }} 
                loading="lazy"
                title="Ubicación Castilla Agrícola"
                className="opacity-70"
              />
              
              {/* Botón flotante para abrir el mapa real */}
              <Link 
                href="https://maps.app.goo.gl/yFwW5Xf6gY7R6yG9" // URL real de Google Maps
                target="_blank"
                className="absolute top-3 right-3 z-20 bg-castilla-yellow text-black px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 hover:scale-105 transition-transform shadow-lg"
              >
                Abrir en Maps <ArrowUpRight size={12} />
              </Link>

              <div className="absolute bottom-3 left-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <p className="text-[9px] font-bold text-white flex items-center gap-2">
                  <MapPin size={10} className="text-castilla-yellow" /> Cra 1 #24-56, Cali, CO
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* LÍNEA FINAL */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 tracking-wide">
            © {currentYear} <span className="text-white/80">Castilla Agrícola S.A.</span>
          </p>
          <div className="flex gap-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Sostenibilidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

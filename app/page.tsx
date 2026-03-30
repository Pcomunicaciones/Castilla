/* ============================================================================
   PÁGINA PRINCIPAL (HOME) - Castilla Agrícola S.A.
   ============================================================================ 
   Aquí es donde se arma la cara del sitio. Usamos 'dynamic' de Next.js para 
   cargar los componentes solo cuando se necesitan, lo que hace que la carga 
   inicial sea mucho más rápida y ligera para el usuario.
   ============================================================================ */
import dynamic from "next/dynamic"

/* --- 1. IMPORTACIÓN DINÁMICA DE SECCIONES --- */
// Cargamos cada bloque de la página por separado. Esto es clave para el rendimiento.

const HeroSection = dynamic(() => import("@/components/home/HeroSection").then(mod => mod.HeroSection))
const KPISection = dynamic(() => import("@/components/home/KPISection").then(mod => mod.KPISection))
const SustainabilitySection = dynamic(() => import("@/components/home/SustainabilitySection").then(mod => mod.SustainabilitySection))
const QuickLinksSection = dynamic(() => import("@/components/home/QuickLinksSection").then(mod => mod.QuickLinksSection))
const ImageCarousel = dynamic(() => import("@/components/home/ImageCarousel").then(mod => mod.ImageCarousel))

/* --- 2. COMPONENTE PRINCIPAL --- */

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 
          Orden de la página:
          1. Hero: Gran bienvenida visual.
          2. KPI: Cifras clave (Hectáreas, Empleos, etc).
          3. Carousel: Fotos de nuestras operaciones.
          4. Sostenibilidad: Nuestro compromiso con el medio ambiente.
          5. QuickLinks: Accesos rápidos a lo más buscado.
      */}
      
      <HeroSection />
      
      <KPISection />
      
      <ImageCarousel />
      
      <SustainabilitySection />
      
      <QuickLinksSection />
      
    </main>
  )
}

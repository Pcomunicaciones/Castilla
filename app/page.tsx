/* ============================================================================
   PÁGINA PRINCIPAL (HOME) - Castilla Agrícola S.A.
   ============================================================================ */
import { HeroSection } from "@/components/home/HeroSection"
import { KPISection } from "@/components/home/KPISection"
import { SustainabilitySection } from "@/components/home/SustainabilitySection"
import { QuickLinksSection } from "@/components/home/QuickLinksSection"
import { ImageCarousel } from "@/components/home/ImageCarousel"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* No necesitas el <Header /> aquí, 
          el Root Layout lo pone automáticamente arriba. 
      */}
      
      <HeroSection />
      
      <KPISection />
      
      <ImageCarousel />
      
      <SustainabilitySection />
      
      <QuickLinksSection />
      
      {/* No necesitas el <Footer /> aquí, 
          el Root Layout lo pone automáticamente abajo. 
      */}
    </main>
  )
}

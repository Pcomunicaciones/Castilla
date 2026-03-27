/* ============================================================================
   PÁGINA PRINCIPAL (HOME) - Castilla Agrícola S.A.
   ============================================================================ */
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@/components/home/HeroSection").then(mod => mod.HeroSection))
const KPISection = dynamic(() => import("@/components/home/KPISection").then(mod => mod.KPISection))
const SustainabilitySection = dynamic(() => import("@/components/home/SustainabilitySection").then(mod => mod.SustainabilitySection))
const QuickLinksSection = dynamic(() => import("@/components/home/QuickLinksSection").then(mod => mod.QuickLinksSection))
const ImageCarousel = dynamic(() => import("@/components/home/ImageCarousel").then(mod => mod.ImageCarousel))

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {}
      
      <HeroSection />
      
      <KPISection />
      
      <ImageCarousel />
      
      <SustainabilitySection />
      
      <QuickLinksSection />
      
      {}
    </main>
  )
}

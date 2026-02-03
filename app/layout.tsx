import React from "react"
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from "@/components/layout/Header" 
import { Footer } from "@/components/layout/Footer"
import { PromoModal } from "@/components/PromoModal" // 1. Importar el Popup

export const metadata: Metadata = {
  title: 'Castilla Agrícola S.A. | Agroindustria Sostenible',
  description: 'Castilla Agrícola S.A. - Empresa líder en agroindustria sostenible...',
  keywords: ['agroindustria', 'agricultura', 'sostenibilidad', 'Colombia', 'Castilla Agrícola'],
  authors: [{ name: 'Castilla Agrícola S.A.' }],
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#04683A', 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        {/* Renderizamos el Popup aquí para que sea global */}
        <PromoModal /> 

        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
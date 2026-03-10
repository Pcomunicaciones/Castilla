import React from "react"
// Aquí importamos nuestro menú lateral. 
// Nota: Ya no necesitamos importar el Header ni el Footer aquí, porque Next.js es muy inteligente 
// y los inyecta automáticamente en toda la app desde el archivo principal (Root Layout).
import { CompanySidebar } from "@/components/company/CompanySidebar"

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Este es el gran contenedor de la sección "Compañía".
    // Le pusimos un padding-top (pt-28) para que el contenido no quede pegado al menú de navegación superior.
    // Además, usamos un fondo gris muy suavecito (bg-gray-50/50) para darle ese toque elegante y limpio.
    <div className="bg-gray-50/50 pt-28 pb-12 font-[Tahoma,Verdana,sans-serif]"> 
      
      {/* Centramos todo el contenido en la pantalla y le damos un ancho máximo para que no se estire de más en pantallas gigantes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Usamos un sistema de cuadrícula (Grid) dividido en 4 columnas. 
            Esto es clave para el diseño en PC: el sidebar usa 1 columna y el contenido las otras 3. */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* LADO IZQUIERDO: El Menú de Navegación (Toma 1 de las 4 columnas) */}
          <aside className="lg:col-span-1">
            <CompanySidebar />
          </aside>

          {/* LADO DERECHO: El Contenido Principal (Toma las 3 columnas restantes) */}
          {/* Envolvemos el {children} en una tarjeta blanca gigante con bordes muy redondeados. 
              Aquí es donde se inyecta mágicamente la información de "Quiénes Somos", "Historia", etc., 
              dependiendo de dónde haga clic el usuario en el sidebar. */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}
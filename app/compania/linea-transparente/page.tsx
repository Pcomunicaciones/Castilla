"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ExternalLink 
} from "lucide-react"

// Creamos esta tarjeta base reutilizable. 
// Así nos ahorramos escribir los mismos bordes, colores y sombras en cada sección de la página. 
// Solo le pasamos un título y el contenido que queremos que lleve adentro.
const DataCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-8">
    <div className="bg-[#f8fcf4] px-8 py-5 border-b border-gray-100">
      <h3 className="text-[#006437] font-bold text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <div className="p-8">{children}</div>
  </div>
)

export default function LineaTransparentePage() {
  // Aquí guardamos la lista de todo lo que un usuario puede denunciar. 
  // Es más fácil tenerlo en un arreglo aquí arriba por si a futuro recursos humanos pide agregar o quitar algo.
  const reportables = [
    "Robo de bienes de la compañía, de los colaboradores, de contratistas o cualquier otro bien que esté en el entorno laboral.",
    "Inadecuado uso de los recursos de la compañía.",
    "Conflictos de interés o situaciones de privilegio a contratistas, proveedores o empleados.",
    "Acoso laboral.",
    "Acoso sexual.",
    "Fraudes.",
    "Sobornos recibidos por colaboradores de la compañía o entregado por estos a otros.",
    "Afectaciones al medio ambiente.",
    "Vinculación de la compañía agrícola con personas asociadas a actividades ilícitas.",
    "Reporte de información fraudulenta o irreal por parte de colaboradores de la compañía a la administración, los accionistas o entes externos.",
    "Cualquier otra situación que vaya en contra de los Principios Éticos y Valores Corporativos."
  ];

  // Lo mismo para los tips o consejos a la hora de hacer el reporte.
  const recomendaciones = [
    "El reporte puedes hacerlo de manera anónima.",
    "Asegúrate de proporcionar información suficiente con nombres, cargos, ubicaciones geográficas, fechas y describir detalladamente la situación.",
    "Si deseas puedes poner información para contactarte y ampliar la información, se garantiza absoluta reserva."
  ];

  return (
    // Forzamos Tahoma para que no desentone con la marca corporativa
    <div style={{ fontFamily: 'Tahoma, sans-serif' }}>
      
      {/* El Banner Principal. Entra con una animación suave desde abajo para dar la bienvenida */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full min-h-[160px] py-10 bg-[#006437] rounded-3xl overflow-hidden mb-10 flex items-center px-10 shadow-xl shadow-green-900/10"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          {/* El ícono de escudo con un efecto borroso de cristal (glassmorphism) de fondo */}
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-[#a3c74a] border border-white/20 shrink-0">
            <ShieldAlert size={48} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase italic tracking-tighter leading-none">
              Línea Transparente
            </h1>
            <p className="text-white/80 text-base md:text-lg border-l-4 border-[#a3c74a] pl-5 max-w-2xl mt-4">
              Canal de denuncias éticas y reporte de irregularidades.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Todo el contenido de abajo entra un poco después del banner (delay de 0.2s) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Usamos nuestro componente DataCard para la introducción */}
        <DataCard title="Nuestro Compromiso">
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            En <strong className="text-[#006437]">Castilla Agrícola S.A.</strong> regimos nuestras actuaciones con principios éticos y valores, comprendemos que este es el único camino hacia la confianza, la consolidación de una reputación intachable y de gran aporte a la sostenibilidad.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            En consecuencia, ponemos a disposición de los accionistas, administradores, colaboradores, contratistas, clientes y a la comunidad en general canales para reportar cualquier situación que vaya en contra del Código de Ética y Conducta Empresarial, el Código de Mejores Prácticas Corporativas, incumplimiento de normas internas y externas.
          </p>
        </DataCard>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Aquí mapeamos (dibujamos) dinámicamente la lista de situaciones reportables */}
          <DataCard title="¿Qué situaciones se deben reportar?">
            <p className="text-sm text-gray-500 mb-6 italic">Cualquier situación que tenga que ver con:</p>
            {/* Las ponemos en dos columnas en PC para aprovechar mejor el espacio */}
            <div className="grid md:grid-cols-2 gap-3">
              {reportables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-xl hover:bg-[#f1f8e9] transition-colors group">
                  {/* Ícono de alerta que se vuelve verde al pasar el mouse (hover) */}
                  <AlertTriangle size={18} className="text-orange-500 mt-0.5 shrink-0 group-hover:text-[#006437] transition-colors" />
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </DataCard>

          {/* Bloque final dividido en dos partes: Consejos a la izquierda y Descarga a la derecha */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Columna Izquierda: Los tips para denunciar */}
            <DataCard title="Recomendaciones para el reporte">
              <div className="space-y-4">
                {recomendaciones.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#a3c74a] mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div> 
            </DataCard>

            {/* Columna Derecha: Tarjeta especial llamativa para descargar el PDF del Código de Ética */}
            <div className="bg-gradient-to-br from-[#006437] to-[#048450] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group h-fit">
              {/* Ese div es el brillo circular verde claro que se asoma por la esquina superior derecha */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-[#a3c74a]/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <FileText size={24} className="text-[#a3c74a]" />
                </div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight">Código de Ética</h4>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  Conoce a detalle nuestros lineamientos corporativos, principios éticos y conducta empresarial.
                </p>
                
                {/* Botón de descarga que abre el PDF en una pestaña nueva */}
                <a
                  href="/docs/PO-BEC-001-CODIGO-DE-ETICA-Y-CONDUCTA-EMPRESARIAL-CAST-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-[#006437] font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-[#a3c74a] hover:text-[#006437] transition-all shadow-md"
                >
                  <ExternalLink size={16} /> Ver Documento
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  )
}
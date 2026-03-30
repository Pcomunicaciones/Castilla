import React from "react"
import { User, Phone, Mail, MessageSquare, AlertCircle, Lightbulb, CheckCircle2, MapPin, Building2 } from "lucide-react"
import { DataCard } from "./shared"

export const AtencionInversionistaView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Secretaría General">
      <div className="flex items-start gap-4 mb-6 p-6 bg-slate-50 rounded-2xl border border-gray-100">
        <div className="w-12 h-12 bg-[#f1f8e9] rounded-xl flex items-center justify-center text-[#006437] shrink-0">
          <User size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-[#006437]">VICTOR HUGO URDANETA TOLOSA</h4>
          <p className="text-[11px] font-black text-[#a3c74a] uppercase tracking-widest mb-4">Secretario General</p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Building2 size={16} className="text-gray-400" />
              <span>Carrera 1 N° 24-56 Edificio Colombina. Cali - Colombia</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone size={16} className="text-gray-400" />
              <span>(602) 8836020</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Mail size={16} className="text-gray-400" />
              <a href="mailto:secretario@riopaila-castilla.com" className="hover:text-[#006437] hover:underline font-bold transition-colors">
                secretario@riopaila-castilla.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </DataCard>

    <DataCard title="Acceso al Inversionista (PQRS)">
      <p className="text-sm text-gray-600 leading-relaxed mb-8">
        Le damos la bienvenida al servicio de <strong>PQRS (Peticiones, Quejas, Reclamos y Sugerencias)</strong>, canal de atención al titular de datos para ejercer sus derechos de acceso, corrección, supresión o revocación del tratamiento de datos personales.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { icon: MessageSquare, t: "Petición", d: "Solicitud expresa para obtener información o respuesta.", c: "text-[#006437]", b: "border-gray-100" },
          { icon: AlertCircle, t: "Queja", d: "Protesta por conducta irregular en el uso de datos.", c: "text-orange-500", b: "border-gray-100" },
          { icon: AlertCircle, t: "Reclamo", d: "Insatisfacción con el uso de datos personales.", c: "text-red-500", b: "border-gray-100" },
          { icon: Lightbulb, t: "Sugerencias", d: "Expresión para mejorar el servicio o gestión.", c: "text-yellow-500", b: "border-gray-100" }
        ].map((item, i) => (
          <div key={i} className={`p-5 border ${item.b} rounded-xl bg-white hover:border-[#a3c74a] transition-colors shadow-sm`}>
            <div className="flex items-center gap-2 mb-2">
              <item.icon size={16} className={item.c} />
              <h5 className="font-bold text-[#006437] text-sm uppercase">{item.t}</h5>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f8fcf4] p-6 rounded-2xl border border-green-50">
        <h5 className="text-[11px] font-black text-[#006437] uppercase tracking-widest mb-4">Requisitos Mínimos:</h5>
        <ul className="space-y-3">
          {[
            "Nombre y domicilio del Titular.",
            "Documentos que acrediten identidad.",
            "Descripción clara de los hechos.",
            "Documentos de soporte (Opcional)."
          ].map((req, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-[#a3c74a] mt-0.5 shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </DataCard>

    <DataCard title="Canales de Comunicación">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
          <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#006437] shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h5 className="font-bold text-sm text-[#006437] mb-1">Comunicación Escrita</h5>
            <p className="text-xs text-gray-500">Carrera 1 N° 24-56 Edificio Colombina, Cali.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#a3c74a] transition-colors">
          <div className="w-10 h-10 bg-[#f1f8e9] rounded-lg flex items-center justify-center text-[#006437] shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <h5 className="font-bold text-sm text-[#006437] mb-1">Correo Electrónico</h5>
            <a href="mailto:administracion.corp@agroriocas.com" className="text-xs font-bold text-gray-500 hover:text-[#006437] transition-colors">
              administracion.corp@agroriocas.com
            </a>
          </div>
        </div>
      </div>
    </DataCard>
  </div>
)

export default AtencionInversionistaView

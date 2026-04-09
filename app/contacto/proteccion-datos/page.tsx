"use client"

import { motion } from "framer-motion"
import { ShieldCheck, MessageCircle, AlertTriangle, AlertCircle, Sparkles, MapPin, Phone, Mail, Globe, CheckCircle2, Briefcase } from "lucide-react"

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function ProteccionDatosPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f5f3] font-[Tahoma,Verdana,sans-serif] selection:bg-castilla-yellow selection:text-black pb-28">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Elemento decorativo de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-castilla-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-castilla-yellow/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 bg-gradient-to-br from-[#048450] to-[#03522E] rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl"
          >
            <ShieldCheck size={32} className="text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-[#1a2b3c] mb-6 tracking-tight uppercase"
          >
            Protección Tratamiento <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#048450] to-[#03522E]">de Datos Personales</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Le damos la bienvenida al servicio de <span className="font-bold text-castilla-green-dark">PQRS (Peticiones, Quejas, Reclamos y Sugerencias)</span>, canal de atención al titular de datos para ejercer sus derechos de acceso, corrección, supresión o revocación del tratamiento de datos personales.
          </motion.p>
        </div>
      </section>

      {/* --- SECCIÓN PQRS --- */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-slate-500 font-medium text-lg">A través de este servicio, usted puede enviar lo siguiente:</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[
            { title: "PETICIÓN", icon: MessageCircle, desc: "Solicitud expresa que presenta el titular de los datos a fin de obtener información o respuesta conforme a los derechos y deberes del titular de la información.", color: "text-blue-600 bg-blue-50" },
            { title: "QUEJA", icon: AlertTriangle, desc: "Es la manifestación de protesta, censura, descontento o inconformidad que formula el titular de los datos en relación con una conducta que considera irregular en el uso de sus datos personales.", color: "text-orange-600 bg-orange-50" },
            { title: "RECLAMO", icon: AlertCircle, desc: "Expresión de insatisfacción del titular de datos con respecto al uso de sus datos personales.", color: "text-red-600 bg-red-50" },
            { title: "SUGERENCIAS", icon: Sparkles, desc: "Cualquier expresión que tiene por objeto mejorar el servicio o gestión de la compañía, cuyo objeto se encuentra relacionado con el uso de sus datos personales. Asimismo, el titular de los datos podrá expresar su agrado o satisfacción.", color: "text-purple-600 bg-purple-50" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- REQUISITOS Y CANALES --- */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-12">
        
        {/* Columna Izquierda: Requisitos */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="bg-[#04683A] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-castilla-yellow rounded-full"></span>
            Requisitos de la Solicitud
          </h2>
          <p className="mb-8 text-white/90 font-medium">La solicitud deberá contener como mínimo la siguiente información:</p>
          
          <ul className="space-y-5">
            {[
              "El nombre y domicilio del Titular o representante o cualquier otro medio para recibir la respuesta a su solicitud.",
              "Los documentos que acrediten la identidad o la representación del Titular de los datos personales.",
              "Descripción clara y precisa de los datos personales y de los hechos que dan lugar al reclamo.",
              "Los documentos que se desean hacer valer en la reclamación. (opcional)"
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-castilla-yellow/20 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-castilla-yellow" />
                </div>
                <span className="text-white/95 leading-relaxed font-medium">{req}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Columna Derecha: Canales */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-[#1a2b3c] mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-[#048450] rounded-full"></span>
            Canales de Comunicación
          </h2>
          <p className="text-slate-600 mb-8 font-medium leading-relaxed block">
            Los titulares de los Datos personales podrán en cualquier momento solicitar la actualización, ratificación o supresión de dicha información e incluso revocar la autorización otorgada mediante los siguientes canales:
          </p>

          <div className="space-y-4">
            {[
              { icon: MapPin, text: "Comunicación escrita radicada en la carrera 1 N° 24-56 Edificio Colombina piso 7 oficina 722 de Santiago de Cali." },
              { icon: Mail, text: "A través del Correo electrónico: administracion.corp@agroriocas.com" },
              { icon: Globe, text: "En la Página Web de la Empresa (https://agroriocas.com)" }
            ].map((canal, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-[#048450]/30 transition-colors">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#048450]">
                  <canal.icon size={22} />
                </div>
                <p className="text-sm font-semibold text-slate-700 leading-snug">{canal.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      {/* --- OFICIAL PROTECCIÓN DE DATOS --- */}
      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-slate-100"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-castilla-green/10 rounded-full mb-4">
              <Briefcase size={36} className="text-[#048450]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a2b3c] uppercase tracking-wide">
              Oficial Protección de Datos
            </h2>
            <div className="w-20 h-1.5 bg-castilla-yellow mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: "Dirección", value: "Carrera 1 No. 24-56 oficina 722 Edificio Colombina - Cali, Colombia" },
              { icon: Phone, label: "Teléfono", value: "(602) 4855974" },
              { icon: Mail, label: "Email", value: "administracion.corp@agroriocas.com" }
            ].map((contact, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 transition-all hover:bg-white hover:shadow-lg"
              >
                <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-castilla-yellow">
                  <contact.icon size={24} />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{contact.label}</h4>
                <p className="font-bold text-[#1a2b3c] text-sm lg:text-base break-words break-all">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
    </div>
  )
}

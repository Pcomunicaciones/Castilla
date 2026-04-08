"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Shield, Handshake, ChevronDown, Leaf, Users, Scale, Zap } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

// --- LOS ÍCONOS ANIMADOS HECHOS A MANO ---
// En lugar de usar imágenes o GIFs, dibujamos estos íconos con código SVG.
// Esto hace que pesen 0 kilobytes y se vean perfectos en cualquier pantalla.

// Esta es la diana con la flecha para la "Misión"
const AnimatedMission = ({ className, size = 28 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    {/* La flecha viaja hacia el centro repetidamente */}
    <motion.path
      d="M22 2L12 12"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
    />
    <motion.path
      d="M16 2h6v6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
    />
  </svg>
)

// Y este es el ojo que escanea de un lado a otro para la "Visión"
const AnimatedEye = ({ className, size = 28 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      animate={{
        cx: [12, 15, 12, 9, 12],
        cy: [12, 11, 12, 13, 12]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </svg>
)

// Nuestra lista de valores corporativos. 
// A cada uno le asignamos un gradiente de color único para que la sección de abajo se vea súper viva.
const valores = [
  {
    icon: Handshake, 
    title: "Responsabilidad",
    description: "Asumimos responsablemente todas nuestras acciones y decisiones, tanto individuales como colectivas.",
    color: "from-green-500 to-emerald-700"
  },
  {
    icon: Users, 
    title: "Respeto",
    description: "Respetamos y valoramos las diferencias individuales y con nuestro entorno natural, promoviendo un ambiente inclusivo y sostenible.",
    color: "from-blue-400 to-indigo-600"
  },
  {
    icon: Shield, 
    title: "Lealtad",
    description: "Cultivamos la lealtad mutua, la confianza y el respeto en todas nuestras interacciones.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Scale, 
    title: "Honestidad",
    description: "Somos honestos en nuestras comunicaciones y acciones.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Heart, 
    title: "Empatía",
    description: "Construimos relaciones significativas y un entorno laboral positivo.",
    color: "from-red-400 to-pink-600"
  }
]

export default function QuienesSomosPage() {
  // Usamos estos "espías" de Framer Motion para saber cuánto ha bajado el usuario por la página (el scroll).
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Dependiendo de cuánto baje el usuario, movemos la hoja verde de fondo hacia abajo y la rotamos un poquito.
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    // Le decimos a toda la página que debe usar Tahoma, como manda el manual de marca.
    <div ref={containerRef} className="relative space-y-24 pb-20 overflow-hidden font-[Tahoma,Verdana,sans-serif]">
      
      {/* Esta es la hoja gigante y transparente que flota sutilmente en el fondo de la derecha */}
      <motion.div style={{ y: y1, rotate }} className="absolute -top-10 -right-10 opacity-10 pointer-events-none hidden lg:block">
        <Leaf size={300} className="text-castilla-green" />
      </motion.div>

      {/* --- LA BIENVENIDA (HERO SECTION) --- */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-12 pt-16"
      >
        {/* Hacemos que todo el bloque de texto entre deslizándose desde la izquierda */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center md:text-left"
        >
          <span className="text-castilla-green font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
            Nuestro Propósito
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-castilla-green-dark mb-8 leading-tight">
            Cultivamos la tierra, <br /> 
            {/* Aquí usamos CSS puro (abajo del todo) para darle ese borde verde a las letras amarillas */}
            <span className="text-castilla-yellow text-stroke">por un mundo mejor.</span>
          </h1>
          
          {/* Un bloque de texto limpio con una línea amarilla gruesa a la izquierda para darle un toque editorial */}
          <div className="text-base md:text-lg text-castilla-gray leading-relaxed border-l-4 border-castilla-yellow pl-6 text-justify md:text-left max-w-4xl">
            <p className="mb-4">
              Somos un conjunto de empresas dedicadas a la explotación agrícola y pecuaria en tierras propias y de terceros en los departamentos del Valle del Cauca, Cauca y Vichada.
            </p>
            <p className="font-bold text-castilla-green-dark">
              Gestionamos con excelencia el patrimonio inmobiliario de nuestros accionistas.
            </p>
          </div>
        </motion.div>

        {/* Esta flechita le avisa al usuario que hay más cosas interesantes si baja. Siempre está rebotando. */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-castilla-green/30 pt-10 hidden md:block"
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.section>

      {/* --- NUESTRO NORTE: MISIÓN Y VISIÓN --- */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Mapeamos los datos para crear las dos súper tarjetas. Una es clara (Misión) y la otra oscura (Visión). */}
        {[
          { 
            type: "Misión", 
            icon: AnimatedMission, 
            text: "Hacemos del campo una fuente altamente productiva, generadora de productos agrícolas, frutícolas y pecuarios, que satisfacen el mercado nacional; con innovación, competitividad, calidad y sostenibilidad.",
            subtext: "Adicionalmente generamos valor con la ejecución de proyectos especiales, para promover el desarrollo sostenible y mejorar la calidad de vida de las comunidades en las zonas de influencia.",
            bg: "bg-white",
            accent: "bg-castilla-yellow",
            textColor: "text-castilla-green-dark",
            bodyColor: "text-gray-700"
          },
          { 
            type: "Visión 2030", 
            icon: AnimatedEye, 
            text: "En el año 2030 ser una empresa líder a nivel nacional en la producción agrícola, especializada en caña de azúcar, que aporta a la seguridad alimentaria.",
            subtext: "Reconocida por sus altos niveles de productividad, innovación y valor compartido.",
            bg: "bg-castilla-green-dark",
            accent: "bg-castilla-green-light",
            textColor: "text-white",
            bodyColor: "text-white/90"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }} // Al pasar el mouse, la tarjeta "flota" hacia arriba un poquito
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${item.bg} rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden group flex flex-col`}
          >
            {/* Ese pequeño detalle circular que se asoma por la esquina superior derecha */}
            <div className={`absolute top-0 right-0 w-40 h-40 ${item.accent} opacity-10 rounded-bl-full transition-all group-hover:scale-150`} />
            
            {/* Aquí llamamos a nuestros íconos animados (la flecha y el ojo) */}
            <div className={`w-14 h-14 ${item.accent} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
              <item.icon className={item.textColor === "text-white" ? "text-white" : "text-castilla-green-dark"} size={28} />
            </div>
            
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${item.textColor}`}>
              Nuestra {item.type}
            </h2>
            <p className={`text-base md:text-lg leading-relaxed font-bold mb-4 ${item.bodyColor}`}>
              {item.text}
            </p>
            {item.subtext && (
              <p className={`text-sm md:text-base leading-relaxed ${item.textColor === "text-white" ? "text-white/70" : "text-gray-500"}`}>
                {item.subtext}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* --- EL BANNER ESTRATÉGICO --- */}
      {/* Una franja muy visual con un verde fuerte y firme, independiente de las clases dinámicas de Tailwind */}
      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        style={{ backgroundColor: '#04683A' }} // FORZAMOS EL BACKGROUND VERDE CORPORATIVO
        className="relative py-16 px-6 md:px-8 rounded-[2.5rem] overflow-hidden text-center mx-4 md:mx-12 shadow-xl"
      >
        <Image 
          src="/Imagenes/textura-campo.jpg" 
          alt="Textura campo"
          fill
          className="object-cover opacity-20" // La imagen se hace semi-transparente sobre el verde forzado
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Zap size={40} className="text-castilla-yellow mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Direccionamiento Estratégico
          </h2>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
            Trabajamos con excelencia para garantizar la sanidad del cultivo, optimizar el recurso hídrico y afianzar relaciones con nuestras comunidades vecinas, guiados siempre por la <span className="text-castilla-yellow font-extrabold text-2xl md:text-3xl block mt-3 drop-shadow-lg">transparencia y la conducta ética</span>.
          </p>
        </div>
      </motion.section>

      {/* --- LOS VALORES DE LA FAMILIA CASTILLA --- */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-castilla-yellow font-bold tracking-widest uppercase text-xs">Nuestra esencia</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-castilla-green-dark mt-2">Valores Corporativos</h2>
          {/* El separador amarillo debajo del título */}
          <div className="w-20 h-1.5 bg-castilla-yellow mx-auto mt-4 rounded-full" />
        </div>

        {/* Las tarjetas de los valores. Usamos Flexbox con flex-wrap para que se acomoden solas en PC, Tablet y Celular */}
        <div className="flex flex-wrap justify-center gap-6">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-6 bg-white rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all cursor-default flex flex-col items-start"
            >
              {/* Cuando pasas el mouse (group-hover), el cuadrito del ícono rota unos grados */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${valor.color} flex items-center justify-center mb-4 text-white shadow-md group-hover:rotate-6 transition-transform`}>
                <valor.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-castilla-green-dark mb-2 group-hover:text-castilla-green transition-colors tracking-tight">
                {valor.title}
              </h3>
              
              <p className="text-sm text-castilla-gray leading-relaxed font-medium">
                {valor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Este bloque de estilos nos permite hacer el efecto visual del texto en el título principal (amarillo con borde verde) */}
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1px #04683A;
          color: transparent;
        }
      `}</style>
    </div>
  )
}
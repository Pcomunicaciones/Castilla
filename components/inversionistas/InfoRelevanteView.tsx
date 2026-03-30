import React from "react"
import { ExternalLink } from "lucide-react"
import { DataCard } from "./shared"

export const InfoRelevanteView = () => {
  const hechos = [
    {
      f: "05/03/2026",
      t: "Otros Eventos",
      r: "Con el fin de garantizar la claridad sobre el periodo ex-dividendo de conformidad con lo establecido en el Reglamento General de la BVC, la Sociedad presenta la actualización del Proyecto de Distribución de Utilidades 2025, el cual será sometido a consideración de la Asamblea General de Accionistas en reunión ordinaria programada para el 25 de marzo de 2026, en la ciudad de Cali, domicilio social de la Sociedad.",
      doc: "informacion relevante 2/Proyecto-Distribucion-Utilidades-2025_-Castilla-Agricola-Fecha-de-Exdividendos.pdf"
    },
    {
      f: "05/03/2026",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Castilla Agrícola, informa al mercado de valores las decisiones aprobadas en la reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta (presencial y virtual) el día de hoy 5 de marzo de 2026.",
      doc: "informacion relevante 2/REPORTE-DECISIONES-RELEVANTES-_CASTILLA-AGRICOLA-SA.pdf"
    },
    {
      f: "02/03/2026",
      t: "Convocatoria Asamblea de Inversionistas",
      r: "Se adjunta la convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Castilla Agrícola S.A., que se celebrará el día 25 de marzo de 2026, en el domicilio social en Cali, bajo modalidad mixta (presencial y virtual).",
      doc: "informacion relevante 2/Citacion-Reunion-Ordinaria-Asamblea-de-Accionistas-Castilla-Agricola_mzo-25_2026.pdf"
    },
    {
      f: "02/03/2026",
      t: "Otros Eventos",
      r: "Se adjunta el Proyecto de Distribución de Utilidades correspondiente al ejercicio 2025, el cual será sometido a consideración de la Asamblea General de Accionistas en su reunión ordinaria programada para el 25 de marzo de 2026, en la ciudad de Cali, domicilio social de la Sociedad.",
      doc: "informacion relevante 2/Proyecto-Distribucion-Utilidades-2025_-Castilla-Agricola.pdf"
    },
    {
      f: "02/03/2026",
      t: "Otros Eventos",
      r: "Se adjunta comunicado mediante el cual se adoptan medidas y mecanismos orientados a prevenir prácticas ilegales, no autorizadas o inseguras en la representación de los Accionistas, con ocasión de la reunión ordinaria de la Asamblea General que se celebrará el 25 de marzo de 2026, en la ciudad de Cali, domicilio principal de la Sociedad.",
      doc: "informacion relevante 2/Dcto-CE-003_RNVE_CASTILLA-AGRICOLA_AGA-Mzo-25_2026.pdf"
    },
    {
      f: "02/03/2026",
      t: "Informe de fin de Ejercicio",
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta la información correspondiente al proyecto sobre prácticas, políticas, procesos e indicadores en materia social y ambiental, incluidos los aspectos climáticos, el cual será presentado junto con el Informe de Gestión y Sostenibilidad 2025 en la Asamblea General de Accionistas prevista para el 25 de marzo de 2026.",
      doc: "informacion relevante 2/Proyecto-Asuntos-Sociales-y-Ambientales-incluidos-climaticos-2025_Castilla-Agricola.pdf"
    },
    {
      f: "28/02/2026",
      t: "Otros Eventos",
      r: "Se adjunta comunicado en relación con la convocatoria a la reunión extraordinaria de la Asamblea de Accionistas de Castilla Agrícola S.A., que se celebrará en forma mixta (virtual y presencial), el día 5 de marzo de 2026, en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante 2/Comunicado-Castilla-Agricola_feb-28_2026.pdf"
    },
    {
      f: "25/02/2026",
      t: "Convocatorias de Asambleas",
      r: "Convocatoria a reunión extraordinaria de la Asamblea General de Accionistas de Castilla Agrícola S.A., que se celebrará el día 5 de marzo de 2026, bajo modalidad mixta (presencial y virtual), en la ciudad de Cali, domicilio principal de la Sociedad.",
      doc: "informacion relevante 2/Castilla-Convocatoria-RE-AGA_marzo-5_2026.pdf"
    },
    {
      f: "25/02/2026",
      t: "Otros Eventos",
      r: "Se adjunta comunicado mediante el cual se adoptan medidas y mecanismos orientados a prevenir prácticas ilegales, no autorizadas o inseguras en la representación de los Accionistas, con ocasión de la reunión extraordinaria de la Asamblea General que se celebrará el 5 de marzo de 2026, en la ciudad de Cali, domicilio principal de la Sociedad.",
      doc: "informacion relevante 2/CE-003_RNVE_CASTILLA-AGRICOLA_AGA-Mzo-5_2026.pdf"
    },
    {
      f: "14/11/2025",
      t: "Informes de fin de Ejercicio",
      r: "Se presenta el informe correspondiente al Tercer Trimestre de 2025, en cumplimiento de lo establecido en la Circular Externa 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "informacion relevante/CAST_INFO-PERIODICO-III-TRIM-2025-EEFF-1.pdf"
    },
    {
      f: "15/08/2025",
      t: "Informes de fin de Ejercicio",
      r: "Se presenta el informe correspondiente al Segundo trimestre de 2025, en cumplimiento de lo establecido en la Circular Externa 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "informacion relevante/CASTILLA-INFO-PERIODICO-II-TRIM-2025-Def.pdf"
    },
    {
      f: "16/05/2025",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se publica el Informe Periódico del primer trimestre del año 2025.",
      doc: "informacion relevante/INFORME-PERIODICO-IER-TRIMESTRE-2025-CASTILLA.pdf"
    },
    {
      f: "09/05/2025",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 y CE 031 emitida por la Superintendencia Financiera de Colombia, se pública el informe periódico de fin de ejercicio al corte de diciembre 31 de 2024, aprobado en Asamblea General de Accionistas el 26 de marzo de 2025, el cual contiene la revelación de información sobre asuntos sociales y ambientales, incluidos los climáticos.",
      doc: "informacion relevante/Informe-Gestion-y-Sostenibilidad-Fin-Ejercicio-2024_Castilla-Agricola.pdf"
    },
    {
      f: "26/03/2025",
      t: "Decisiones Asamblea",
      r: "Castilla Agrícola informa al mercado de valores sobre las decisiones aprobadas en la reunión ordinaria de la Asamblea General de Accionistas, celebrada de manera mixta el 26 de marzo de 2025.",
      doc: "informacion relevante/Alcance_Desiciones-Asamblea-General_mzo-26-de-2025_CASTILLA-AGRICOLA.pdf"
    },
    {
      f: "26/03/2025",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades del año 2024, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 26 de marzo de 2025.",
      doc: "informacion relevante/CAST_PDU_Util-2024_AGA_Mzo-26_2025.pdf"
    },
    {
      f: "26/03/2025",
      t: "Novedades Directores",
      r: "Se adjunta composición de la nueva Junta Directiva de la sociedad Castilla Agrícola S.A., para el periodo comprendido entre marzo de 2025 a marzo de 2026, elegida por la Asamblea de Accionistas en la reunión ordinaria celebrada hoy 26 de marzo de 2025.",
      doc: "informacion relevante/CAST_JUNTA-DIRECTIVA-_AGA_mzo-26_2025.pdf"
    },
    {
      f: "04/03/2025",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión ordinaria de Asamblea General el 26 de marzo de 2025, en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante/Castilla-Carta.pdf"
    },
    {
      f: "03/03/2025",
      t: "Convocatoria Asamblea",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Castilla Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 26 de marzo de 2025, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.",
      doc: "informacion relevante/CAST.-AGRI-CITACION-REUNION-ORDINARIA-MARZO-2025-1.pdf"
    },
    {
      f: "03/03/2025",
      t: "Informe de fin de Ejercicio",
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta información del proyecto dedicado a las prácticas, políticas, procesos e indicadores en relación con los asuntos sociales y ambientales, incluidos los climáticos, que será presentado con el informe de fin de ejercicio 2024 en la asamblea general de accionistas.",
      doc: "informacion relevante/CASTILLA-INFORME-AMBIENTAL-ANO-2024-comprimido.pdf"
    },
    {
      f: "03/03/2025",
      t: "Otros Eventos",
      r: "Se adjunta el Proyecto de Distribución de Utilidades del año 2024, que se presentará a consideración de la Asamblea General de Accionistas, en reunión ordinaria el 26 de marzo de 2025 en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante/PDU_Castilla_AGA_mzo-26_2025.pdf"
    },
    {
      f: "31/01/2025",
      t: "Otros Eventos",
      r: "En cumplimiento a la circular externa 028 de 2014 de la SFC, se informa que Castilla Agrícola S.A. diligenció y trasmitió el día 31 de enero de 2025, la encuesta Código País correspondiente al año 2024",
      doc: "informacion relevante/CAST_Encuesta-Codigo-Pais-2024.pdf"
    },
    {
      f: "15/11/2024",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se publica el Informe Periódico del tercer Trimestre del año 2024.",
      doc: "informacion relevante 2/CASTILLA-INFORME-PERIODICO-III-TRIM.2024-DEFINITIVO.pdf"
    },
    {
      f: "15/08/2024",
      t: "Informe Periódico II Trim",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se da cumplimiento al Informe Periódico del segundo Trimestre del año 2024.",
      doc: "informacion relevante 2/INFORME-PERIODICO-II-TRIM.2024-CASTILLA-DEFINITIVO_compressed.pdf"
    },
    {
      f: "14/06/2024",
      t: "Decisiones Asamblea",
      r: "En alcance a la publicación de la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 14 de junio de 2024, se informa, que realizado el reconteo de votos se ajustó la votación correspondiente.",
      doc: "informacion relevante 2/Alcance_Desiciones-AGA_Extraor_junio14-de-2024_CASTILLA_AGRICOLA_reconteo-1.pdf"
    },
    {
      f: "14/06/2024",
      t: "Decisiones Asamblea",
      r: "Castilla Agrícola, informa al mercado de valores, la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 14 de junio de 2024.",
      doc: "informacion relevante 2/Alcance_Desiciones-AGA_Extraor_junio14-de-2024_CASTILLA_AGRICOLA.pdf"
    },
    {
      f: "14/06/2024",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades retenidas de año 2016 y anteriores, aprobado por la Asamblea General de Accionistas en reunión extraordinaria, celebrada de manera mixta el día de hoy 14 de junio de 2024.",
      doc: "informacion relevante 2/PDU_Aprobado-AGA_extraor_Jun-14_2024.pdf"
    },
    {
      f: "05/06/2024",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión extraordinaria de Asamblea General el 14 de junio de 2024, en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante 2/Cumplimiento-CE-003_RNVE_CASTILLA_AGRICOLA_Firmado.pdf"
    },
    {
      f: "04/06/2024",
      t: "Citación a Asamblea",
      r: "Convocatoria Asamblea General de Accionistas de Castilla Agrícola S.A en reunión extraordinaria, que se celebrará en forma Mixta (virtual y presencial), el 14 de junio de 2024 en Cali, domicilio de la Sociedad. Se someterá a consideración el proyecto de distribution de utilidades por liberation de reservas de utilidades de años anteriores.",
      doc: "informacion relevante 2/CASTILLA-AGRICOLA-CITACION-14-JUN.-2024.pdf"
    },
    {
      f: "04/06/2024",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades por liberación de reservas de utilidades de años anteriores., que se presentará a consideración de la Asamblea General de Accionistas, en la reunión extraordinaria que se celebrará el día 14 de junio de 2024 en el domicilio de la sociedad.",
      doc: "informacion relevante 2/CASTILLA-AGRICOLA-PDU-JUNIO-2024.pdf"
    },
    {
      f: "15/05/2024",
      t: "Informe Periódico I Trim",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se da cumplimiento al Informe Periódico del primer Trimestre del año 2024.",
      doc: "informacion relevante 2/CASTILLA-INFORME-PERIODICO-Ier.TRIMESTRE-2024-3-comprimido-1.pdf"
    },
    {
      f: "16/04/2024",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 y CE 031 emitida por la Superintendencia Financiera de Colombia, se pública el informe periódico de fin de ejercicio al corte de diciembre 31 de 2023, aprobado en Asamblea General de Accionistas el 21 de marzo de 2024. el cual contiene la revelación de información sobre asuntos sociales y ambientales, incluidos los climáticos.",
      doc: "informacion relevante 2/Informe-Castilla-2023.pdf"
    },
    {
      f: "21/03/2024",
      t: "Decisiones Asamblea",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 21 de marzo de 2024, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.",
      doc: "informacion relevante 2/Alcance_Desiciones-Asamblea-General_mzo-21-de-2024_CASTILLA_AGRICOLA.pdf"
    },
    {
      f: "21/03/2024",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades del año 2023, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 21 de marzo de 2024.",
      doc: "informacion relevante 2/PDU_Castilla-Agricola_aprob-AGA-marzo-21_2024.pdf"
    },
    {
      f: "21/03/2024",
      t: "Novedades Directores",
      r: "Se adjunta composición de la nueva Junta Directiva de la sociedad Riopaila Agrícola S.A., para el periodo comprendido entre marzo de 2024 a marzo de 2025, elegida por la Asamblea de Accionistas en la reunión ordinaria celebrada hoy 21 de marzo de 2024.",
      doc: "informacion relevante 2/Junta-Directiva-2024-2025_Castilla-Agricola.pdf"
    },
    {
      f: "28/01/2024",
      t: "Convocatoria Asamblea",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 21 de marzo de 2024, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.",
      doc: "informacion relevante 2/Convocatoria-Asamblea_Castilla-Agricola.pdf"
    },
    {
      f: "28/01/2024",
      t: "Otros Eventos",
      r: "Se adjunta el Proyecto de Distribución de Utilidades del año 2023, que se presentará a consideración de la Asamblea General de Accionistas, en reunión ordinaria el 21 de marzo de 2024 en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante 2/CAST_PDU_Util-2023_IR.pdf"
    },
    {
      f: "28/01/2024",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión de Asamblea General el 21 de marzo de 2024, en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante 2/Cumplimiento-CE-003_RNVE_CASTILLA_AGRICOLA_Firmado.pdf"
    },
    {
      f: "27/01/2024",
      t: "Informe de fin de Ejercicio",
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta información del proyecto dedicado a las prácticas, políticas, procesos e indicadores en relación con los asuntos sociales y ambientales, incluidos los climáticos, que será presentado con el informe de fin de ejercicio 2023 en la asamblea general de accionistas.",
      doc: "informacion relevante 2/Proyecto-Informe-asuntos-sociales_ambientales-y-climatico_CASTILLA-2023.pdf"
    },
    {
      f: "31/01/2024",
      t: "Códigos Buen Gobierno",
      r: "En cumplimiento a la circular externa 028 de 2014 de la SFC, se informa que Riopaila Agrícola S.A. diligenció y trasmitió el día 31 de enero de 2024, la encuesta Código País correspondiente al año 2023.",
      doc: "informacion relevante 2/CAS2023CodigoPais-1.pdf"
    },
    {
      f: "14/11/2023",
      t: "Informes de fin de Ejercicio",
      r: "Se da cumplimiento al tercer Trimestre del año 2023, del Informe Periódico Trimestral de conformidad con la CE 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "informacion relevante 2/CASTILLA-INFORME-PERIODICO-III-TRIM.-2023.pdf"
    },
    {
      f: "14/08/2023",
      t: "Informes de fin de Ejercicio",
      r: "Se da cumplimiento al segundo Trimestre del año 2023, del Informe Periódico Trimestral de conformidad con la CE 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "informacion relevante 2/CASTILLA-INFORME-PERIODICO-II-TRIM.-AGO.14-2023.pdf"
    },
    {
      f: "15/05/2023",
      t: "Informes de fin de ejercicio",
      r: "Se da cumplimiento al primer Trimestre del año 2023, del Informe Periódico Trimestral de conformidad con la CE 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "informacion relevante 2/CASTILLA-INFORME-PERIODICO-PRIMER-TRIMESTRE-2023-1.pdf"
    },
    {
      f: "28/04/2023",
      t: "Decisiones Asamblea",
      r: "Se da alcance a la información publicada el 29 de marzo de 2023, en atención a lo establecido en el numeral 5.5.del artículo 5.2.4.3.1.del Decreto 2555 de 2010.",
      doc: "informacion relevante 2/Alcance_Desiciones-Asamblea-General_mzo-29-de-2023_CASTILLA-AGRICOLA.pdf"
    },
    {
      f: "21/04/2023",
      t: "Informes de fin de ejercicio",
      r: "Se adjunta informe periódico de fin de ejercicio 2022, en cumplimiento a la CE 012 de 2022 emitida por la Superintendencia Financiera de Colombia, el cual fue presentado en Asamblea General de Accionistas el 29 de marzo de 2023.",
      doc: "informacion relevante 2/CASTILLA_Informe-fin-de-ejercicio-2022.pdf"
    },
    {
      f: "29/03/2023",
      t: "Decisiones Asamblea",
      r: "Riopaila Agrícola, informa al mercado de valores, la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 29 de marzo de 2023.",
      doc: "informacion relevante 2/Desiciones-reunion-Ord-Asamblea-General-Accionistas_mzo-29-de-2023_CASTILLA-AGRICOLA.pdf"
    },
    {
      f: "29/03/2023",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades Acumuladas de noviembre a diciembre del año 2022, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 29 de marzo de 2023.",
      doc: "informacion relevante 2/CAST_PDU_Util-acum-nov-dic-2022_Asamblea-mzo-2023.pdf"
    },
    {
      f: "03/03/2023",
      t: "Citación a Asamblea",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 29 de marzo de 2023, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día",
      doc: "informacion relevante 2/CASTILLA-AGRICOLA-CITACION-REUNION-ORDINARIA-MARZO-2023-1.pdf"
    },
    {
      f: "03/03/2023",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades -PDU- del periodo acumulado noviembre y diciembre de 2022, que se presentará a consideración de la Asamblea General de Accionistas, en la reunión ordinaria que se celebrará el día 29 de marzo de 2023.",
      doc: "informacion relevante 2/PDU-Dic-31_2022_CASTILLA-AGRICOLA.pdf"
    },
    {
      f: "06/03/2023",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión de Asamblea General el 29 de marzo de 2023, en Cali, domicilio de la Sociedad.",
      doc: "informacion relevante 2/CITACION-REUNION-ORDINARIA-MARZO-2022.pdf"
    },
    {
      f: "02/02/2023",
      t: "Códigos Buen Gobierno",
      r: "En cumplimiento a la circular externa 028 de 2014 de la SFC, se informa que Castilla Agrícola S.A. diligenció y trasmitió el día 31 de enero de 2023, la encuesta Código País correspondiente al año 2022.",
      doc: "informacion relevante 2/PDU-Dic-31_2022_CASTILLA-AGRICOLA (3).pdf"
    },
    {
      f: "17/01/2023",
      t: "Informes de fin de Ejercicio",
      r: "Para conocimiento del Mercado Público de Valores, se adjunta Informe de Gestión al 31 octubre de 2022, incluye, además, Estados Financieros individuales y consolidados, Dictamen de Revisor Fiscal, y Certificaciones de Representante Legal y Contador.",
      doc: "informacion relevante 2/Cumplimiento-CE-003_RNVE_CASTILLA-AGRICOLA_Firmado.pdf"
    },
    {
      f: "22/12/2022",
      t: "Asamblea Extraordinaria",
      r: "Riopaila Agrícola, informa al mercado de valores, la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 22 de diciembre de 2022.",
      doc: "informacion relevante 2/Decisiones-reunion-extraor-Asamblea-General-Accionistas_dic-22-de-2022_CASTILLA.pdf"
    },
    {
      f: "22/12/2022",
      t: "Proyecto Utilidad",
      r: "Se adjunta Proyecto de Distribución de Utilidades Acumuladas de enero a octubre del año 2022, aprobado por la Asamblea General de Accionistas en reunión extraordinaria, celebrada de manera mixta el día de hoy 22 de diciembre de 2022.",
      doc: "informacion relevante 2/PDU-_-Castilla-Agricola_Util-ene-a-oct-2022.pdf"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <DataCard title="Hechos Relevantes">
        <div className="space-y-4">
          {hechos.map((h, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#006437]/30 transition-all shadow-sm hover:shadow-md">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#004a29]">{h.f}</span>
                  <span className="text-[10px] font-black text-[#006437] uppercase bg-[#a3c74a]/10 border border-[#a3c74a]/20 px-2 py-1 rounded-md">{h.t}</span>
                </div>
                
                <div className="flex w-full md:w-auto shrink-0">
                  <a
                    href={`/docs/${h.doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-[#f1f8e9] text-[#006437] hover:bg-[#006437] hover:text-white rounded-lg text-[10px] font-bold transition-colors uppercase"
                    title="Abrir documento en pestaña nueva"
                  >
                    <ExternalLink size={14} /> VER DOCUMENTO
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{h.r}</p>
            </div>
          ))}
        </div>
      </DataCard>
    </div>
  )
}

export default InfoRelevanteView

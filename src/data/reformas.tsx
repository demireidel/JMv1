import type { ReactNode } from "react";

// ── Interfaces ──────────────────────────────────────────────

export interface ImpactStat {
  val: string;
  label: string;
}

export interface ReformaQuote {
  text: string;
  cite: string;
}

export interface Reforma {
  num: string;
  title: string;
  subtitle: string;
  desc: ReactNode;
  antes: ReactNode;
  ahora: ReactNode;
  impactStats: ImpactStat[];
  impactText: ReactNode;
  quote?: ReformaQuote;
}

export interface ReformBlock {
  title: string;
  subtitle: string;
  range: [number, number]; // start inclusive, end exclusive – use with .slice()
}

export interface HeroCounter {
  num: string;
  label: string;
}

// ── Hero ────────────────────────────────────────────────────

export const reformasHero = {
  eyebrow: "La revolución institucional",
  title: "LAS 12 REFORMAS",
  desc: "Prometí transformar la Argentina. No con discursos, sino con hechos. En dos años aprobamos los tres exámenes — fiscal, monetario y cambiario — e hicimos más reformas estructurales que en las últimas cuatro décadas juntas.",
} as const;

export const heroCounters: HeroCounter[] = [
  { num: "14.500+", label: "Desregulaciones" },
  { num: "12", label: "Reformas estructurales" },
  { num: "2.5", label: "Puntos PIB devueltos" },
  { num: "90", label: "Paquetes reforma 2026" },
];

// ── Reform blocks ───────────────────────────────────────────

export const reformBlocks: ReformBlock[] = [
  {
    title: "BLOQUE I — ESTABILIZACIÓN MACROECONÓMICA",
    subtitle:
      "Los tres exámenes aprobados: fiscal, monetario y cambiario",
    range: [0, 3],
  },
  {
    title: "BLOQUE II — DESREGULACIÓN Y REFORMA DEL ESTADO",
    subtitle:
      "DNU 70/23, Ley Bases, y 14.500 desregulaciones: de la economía más regulada a la más libre",
    range: [3, 7],
  },
  {
    title: "BLOQUE III — REFORMAS LEGISLATIVAS",
    subtitle:
      "Con el Congreso más reformista de la historia: laboral, comercial, fiscal y penal",
    range: [7, 10],
  },
  {
    title: "BLOQUE IV — SEGURIDAD Y JUSTICIA",
    subtitle:
      "Sin orden y sin justicia no hay futuro posible. Nadie puede edificar su futuro si no se respeta la ley.",
    range: [10, 12],
  },
];

// ── Reformas data ───────────────────────────────────────────

export const reformas: Reforma[] = [
  // ── 01 EQUILIBRIO FISCAL ──────────────────────────────────
  {
    num: "01",
    title: "EQUILIBRIO FISCAL",
    subtitle:
      "De décadas de déficit crónico al primer superávit financiero en 16 años",
    desc: (
      <>
        Argentina había logrado solo{" "}
        <strong>8 superávits fiscales en 100 años</strong>. Cuando asumí, el
        déficit consolidado era de <strong>15 puntos del PIB</strong> y la
        maquinita de imprimir billetes funcionaba las 24 horas para financiar la
        fiesta de la casta. Lo primero que hice fue dar vuelta la ecuación:
        recorté el <strong>30% del gasto público real en un solo año</strong>,
        eliminé las transferencias discrecionales a provincias, reduje subsidios
        y terminé con la obra pública como herramienta de corrupción. En 2024
        logramos el <strong>primer superávit financiero en 16 años</strong>. En
        2025 lo repetimos. Y aprobamos el{" "}
        <strong>
          primer presupuesto sin déficit ni default en más de 100 años
        </strong>
        . Hoy somos uno de los <strong>cinco países del mundo</strong> que solo
        gastan lo que recaudan y ni un peso más.
      </>
    ),
    antes: (
      <>
        Déficit consolidado de <strong>15 puntos del PIB</strong>. Solo{" "}
        <strong>8 superávits fiscales en un siglo</strong> de historia.{" "}
        <strong>Emisión monetaria descontrolada</strong> para financiar gasto
        corriente. Transferencias discrecionales a gobernadores amigos. Obra
        pública como herramienta de saqueo sistemático. La cuenta se la pasaban
        a las generaciones futuras a través de deuda e inflación.
      </>
    ),
    ahora: (
      <>
        Superávit primario de <strong>1,8% del PIB en 2024</strong> y{" "}
        <strong>1,4% en 2025</strong>.{" "}
        <strong>Dos años consecutivos de superávit financiero</strong> — el
        primero desde 2008. <strong>Cero emisión</strong> para financiar déficit.
        Presupuesto 2026 equilibrado. Baja impositiva de{" "}
        <strong>2,5 puntos del PIB devueltos</strong> a los argentinos de bien. A
        diferencia de otros gobiernos que lograron superávit subiendo impuestos,
        nosotros lo hicimos <strong>bajándolos</strong>.
      </>
    ),
    impactStats: [
      { val: "15 pts", label: "de ajuste fiscal" },
      { val: "30%", label: "menos gasto real" },
      { val: "100+", label: "años sin presup. equilib." },
    ],
    impactText: (
      <>
        El{" "}
        <strong>ajuste fiscal más grande de la historia argentina</strong> —
        bajando impuestos, no subiéndolos.
      </>
    ),
  },

  // ── 02 DERROTA DE LA INFLACIÓN ────────────────────────────
  {
    num: "02",
    title: "DERROTA DE LA INFLACIÓN",
    subtitle:
      "De 211% anual — la más alta del mundo tras Venezuela — al nivel más bajo en ocho años",
    desc: (
      <>
        Heredé una inflación del <strong>211,4% anual</strong> que anualizada
        viajaba a la velocidad de <strong>17.000%</strong>. En diciembre de 2023,
        el mes que asumí, la inflación mensual tocó el <strong>25,5%</strong>{" "}
        tras la devaluación necesaria para sincerar los precios que el gobierno
        anterior había reprimido. Los economistas del establishment decían que
        era imposible bajarla sin hiperinflación previa. Eliminé la causa: dejé
        de imprimir para financiar al Estado. El ancla fue fiscal, no cambiaria.
        No hubo magia ni trucos: simplemente dejamos de robarle a los argentinos
        a través de la inflación. En 2025 cerramos con{" "}
        <strong>~30% anual</strong>, la cifra{" "}
        <strong>más baja desde 2017</strong>. Los precios mayoristas ya están
        casi en un dígito. La inflación tiene fecha de defunción.
      </>
    ),
    antes: (
      <>
        Inflación del <strong>211,4% anual en 2023</strong> — anualizada al{" "}
        <strong>17.000%</strong>. Pico mensual del <strong>25,5%</strong> en
        diciembre 2023. Destruimos <strong>cinco signos monetarios</strong> en
        nuestra historia. Los salarios se licuaban en días. Argentina era el{" "}
        <strong>segundo país más inflacionario del mundo</strong>, solo detrás de
        Venezuela. Precios reprimidos artificialmente que generaban
        desabastecimiento.
      </>
    ),
    ahora: (
      <>
        <strong>~30% anual en 2025</strong> — la más baja en{" "}
        <strong>ocho años</strong>. Inflación mensual estabilizada entre{" "}
        <strong>1,5% y 2,2%</strong>. Tendencia descendente sostenida durante{" "}
        <strong>24 meses consecutivos</strong>. Precios mayoristas casi en un
        dígito. El peso se apreció sin precedentes. Proyección 2026: por debajo
        del <strong>20%</strong>. Meta de <strong>un dígito para 2027</strong>.
      </>
    ),
    impactStats: [
      { val: "–85%", label: "reducción inflación" },
      { val: "211→30", label: "% anual" },
      { val: "8", label: "años de mínimo" },
    ],
    impactText: (
      <>
        Poder adquisitivo del salario real en recuperación sostenida. Pobreza del{" "}
        <strong>57% al ~30%</strong>.{" "}
        <strong>Boom de créditos hipotecarios</strong>.
      </>
    ),
  },

  // ── 03 LIBERACIÓN DEL CEPO CAMBIARIO ──────────────────────
  {
    num: "03",
    title: "LIBERACIÓN DEL CEPO CAMBIARIO",
    subtitle:
      "Después de más de 6 años de restricciones, los argentinos vuelven a ser libres de comprar y vender dólares",
    desc: (
      <>
        El cepo cambiario fue la herramienta más perversa del kirchnerismo: un
        control de capitales que duró <strong>más de 6 años</strong>. En abril de
        2025, <strong>liberé completamente el mercado cambiario</strong> para las
        personas físicas. La brecha desapareció.
      </>
    ),
    antes: (
      <>
        Restricciones cambiarias ininterrumpidas <strong>desde 2019</strong>.
        Brecha cambiaria superior al <strong>100%</strong>.{" "}
        <strong>Múltiples tipos de cambio</strong>. Riesgo país en{" "}
        <strong>2.400 puntos</strong>.
      </>
    ),
    ahora: (
      <>
        <strong>Mercado cambiario libre</strong> con banda de flotación
        administrada. <strong>Brecha eliminada</strong>. Acuerdo con el FMI por{" "}
        <strong>USD 20.000M</strong> a 48 meses.
      </>
    ),
    impactStats: [
      { val: "0%", label: "brecha cambiaria" },
      { val: "$20.000M", label: "acuerdo FMI" },
      { val: "~560", label: "riesgo país" },
    ],
    impactText: (
      <>
        Riesgo país de <strong>2.400 a ~560 puntos</strong>.{" "}
        <strong>Argentina vuelve a los mercados internacionales</strong>.
      </>
    ),
    quote: {
      text: "Hoy aprobamos el tercer examen. Nos deshicimos del cepo cambiario, que era una aberración que nunca debería haber existido. Los argentinos vuelven a ser libres de hacer con su dinero lo que quieran.",
      cite: "— Cadena Nacional, fin del cepo, abril 2025",
    },
  },

  // ── 04 DNU 70/23 ─────────────────────────────────────────
  {
    num: "04",
    title: "DNU 70/23 — LA PRIMERA OLA",
    subtitle:
      "A diez días de asumir: 366 artículos que desmantelaron décadas de regulaciones asfixiantes",
    desc: (
      <>
        A diez días de asumir firmé el <strong>DNU 70/23</strong>:{" "}
        <strong>366 artículos</strong>. Derogué la Ley de Alquileres, la Ley de
        Abastecimiento, la Ley de Góndolas. En un solo decreto, desregulamos más
        que cualquier gobierno en <strong>toda la historia argentina</strong>.
      </>
    ),
    antes: (
      <>
        Más de <strong>300 leyes y regulaciones</strong> que impedían el
        comercio, el trabajo y la producción. Ley de Alquileres que destruyó la
        oferta. Mercados cautivos.
      </>
    ),
    ahora: (
      <>
        <strong>366 artículos de desregulación</strong> en un solo decreto.
        Mercados de alquileres, aviación, salud y telecomunicaciones
        completamente liberados. <strong>Starlink</strong> conectando zonas
        rurales.
      </>
    ),
    impactStats: [
      { val: "366", label: "artículos" },
      { val: "+170%", label: "oferta alquileres" },
      { val: "1.700+", label: "reformas año 1" },
    ],
    impactText: (
      <>
        Precios de alquiler <strong>–30% en términos reales</strong>. Récord de{" "}
        <strong>50,6 millones de pasajeros aéreos</strong>.{" "}
        <strong>700.000 argentinos rurales</strong> conectados vía Starlink.
      </>
    ),
  },

  // ── 05 LEY BASES Y EL RIGI ───────────────────────────────
  {
    num: "05",
    title: "LEY BASES Y EL RIGI",
    subtitle:
      "Con solo 7 senadores de 72, aprobamos la ley más importante en décadas — y creamos el RIGI",
    desc: (
      <>
        Con solo <strong>7 senadores propios de 72</strong>, logramos aprobar la{" "}
        <strong>Ley Bases</strong> y el <strong>RIGI</strong> (Régimen de
        Incentivo para Grandes Inversiones), que garantiza estabilidad fiscal,
        aduanera y cambiaria por <strong>30 años</strong> para inversiones de más
        de <strong>USD 200 millones</strong>.
      </>
    ),
    antes: (
      <>
        Sin marco legal para grandes inversiones.{" "}
        <strong>Inestabilidad regulatoria crónica</strong>. Sin privatizaciones
        posibles. Inversores huyendo.
      </>
    ),
    ahora: (
      <>
        <strong>RIGI aprobado</strong>: estabilidad por{" "}
        <strong>30 años</strong>. Más de{" "}
        <strong>USD 25.000M en proyectos aprobados</strong>. Privatizaciones
        habilitadas.
      </>
    ),
    impactStats: [
      { val: "238", label: "artículos" },
      { val: "$25.000M", label: "inversiones RIGI" },
      { val: "30", label: "años estabilidad" },
    ],
    impactText: (
      <>
        La primera ley del gobierno — aprobada contra todo pronóstico con{" "}
        <strong>7 senadores propios</strong>. El{" "}
        <strong>RIGI como imán de inversiones</strong>.
      </>
    ),
  },

  // ── 06 DESREGULACIÓN MASIVA ───────────────────────────────
  {
    num: "06",
    title: "DESREGULACIÓN MASIVA",
    subtitle:
      "14.500 desregulaciones: detrás de cada regulación había un privilegio — o mejor dicho, un curro",
    desc: (
      <>
        Sturzenegger, desde el Ministerio de Desregulación y Transformación del
        Estado, llevó adelante una tarea titánica y admirable: más de{" "}
        <strong>14.500 desregulaciones</strong> en un sinfín de áreas que dan
        cuenta del grado de cooptación corporativa que tenía el Estado. Porque
        detrás de cada regulación había un privilegio — o mejor dicho, un curro,
        un tongo. Estas desregulaciones nos permitieron marcar{" "}
        <strong>récords en el mercado aerocomercial</strong> de pasajeros, le
        permitieron a los productores argentinos acceder a mejor maquinaria
        productiva que la disponible localmente y normalizaron y potenciaron el
        mercado de los alquileres. La zona más regulada del mundo, Europa, está
        estancada, no crece. Un eje central de nuestra política es la
        desregulación, porque en la medida que desregulamos{" "}
        <strong>liberamos rendimientos crecientes</strong>.
      </>
    ),
    antes: (
      <>
        Miles de normas acumuladas durante décadas por capas geológicas de
        burocracia. Cada regulación protegía un privilegio de algún sector
        concentrado. Licencias, permisos, habilitaciones discrecionales en cada
        actividad económica. Argentina era{" "}
        <strong>la economía más regulada de toda la región</strong>. Costos
        inflados artificialmente. Competencia bloqueada en sector tras sector.
      </>
    ),
    ahora: (
      <>
        <strong>14.500+ desregulaciones</strong> ejecutadas.{" "}
        <strong>494 normas</strong> específicas que eliminaron{" "}
        <strong>14.392 artículos regulatorios</strong>. Mercados completamente
        abiertos. <strong>Competencia real por primera vez en décadas</strong>.
        Trámites simplificados radicalmente. La política de exterminar
        regulaciones libera <strong>rendimientos crecientes</strong>, que son las
        bases del crecimiento económico sostenido.
      </>
    ),
    impactStats: [
      { val: "14.500+", label: "desregulaciones" },
      { val: "50,6M", label: "pasajeros aéreos" },
      { val: "57", label: "nuevas rutas" },
    ],
    impactText: (
      <>
        <strong>Récord de pasajeros aéreos</strong>. Alquileres{" "}
        <strong>–30% real</strong> con <strong>+170% oferta</strong>. Una política
        admirada en el mundo.
      </>
    ),
  },

  // ── 07 REFORMA DEL ESTADO ────────────────────────────────
  {
    num: "07",
    title: "REFORMA DEL ESTADO",
    subtitle:
      "De 18 ministerios a 8. De 340.000 empleados a 277.000. De déficit a superávit en empresas públicas.",
    desc: (
      <>
        El Estado argentino era un monstruo que se devoraba a sí mismo.{" "}
        <strong>18 ministerios</strong>, <strong>84 secretarías</strong> y más de{" "}
        <strong>340.000 empleados públicos nacionales</strong>. Reduje los
        ministerios a <strong>8</strong>, las secretarías a <strong>51</strong>,
        eliminé <strong>63.234 cargos</strong> innecesarios.
      </>
    ),
    antes: (
      <>
        <strong>18 ministerios</strong> y <strong>84 secretarías</strong>.{" "}
        <strong>~340.000 empleados públicos nacionales</strong>, muchos sin
        función alguna. <strong>32 empresas públicas</strong> con déficit
        conjunto masivo. TELAM, INADI y decenas de organismos inútiles.
      </>
    ),
    ahora: (
      <>
        <strong>8 ministerios</strong>, <strong>51 secretarías</strong>.{" "}
        <strong>277.000 empleados</strong> —{" "}
        <strong>63.234 cargos eliminados</strong>. TELAM, INADI y decenas de
        organismos disueltos. Empresas públicas con{" "}
        <strong>superávit de $109.200M</strong>.
      </>
    ),
    impactStats: [
      { val: "–56%", label: "menos ministerios" },
      { val: "63.234", label: "cargos eliminados" },
      { val: "–18%", label: "planta estatal" },
    ],
    impactText: (
      <>
        Empresas públicas de déficit masivo a{" "}
        <strong>superávit histórico en un semestre</strong>. Aerolíneas
        autofinanciada <strong>por primera vez en 20 años</strong>. Estado más
        chico, más eficiente y más barato.
      </>
    ),
  },

  // ── 08 REFORMA LABORAL ───────────────────────────────────
  {
    num: "08",
    title: "REFORMA LABORAL",
    subtitle:
      "La primera reforma laboral en más de 50 años. 218 artículos que modifican 28 leyes y derogan 11.",
    desc: (
      <>
        Los campeones de los derechos de los trabajadores dejaron sin ningún
        tipo de derechos a <strong>la mitad de los trabajadores</strong>. Una ley
        de <strong>más de 50 años</strong> había dejado a la mitad de los
        trabajadores argentinos en la informalidad.
      </>
    ),
    antes: (
      <>
        Ley laboral de <strong>más de 50 años sin actualizar</strong>. La{" "}
        <strong>mitad de los trabajadores argentinos</strong> en la informalidad
        total. Indemnizaciones calculadas sobre todos los conceptos salariales.
      </>
    ),
    ahora: (
      <>
        <strong>Fondo de Asistencia Laboral (FAL)</strong> como alternativa
        moderna a las indemnizaciones. Período de prueba de{" "}
        <strong>6 meses</strong> (hasta <strong>1 año para PyMEs</strong>).
        Servicios esenciales con <strong>75% de funcionamiento</strong>.
      </>
    ),
    impactStats: [
      { val: "218", label: "artículos" },
      { val: "28", label: "leyes modificadas" },
      { val: "11", label: "leyes derogadas" },
    ],
    impactText: (
      <>
        <strong>La primera reforma laboral en medio siglo</strong>. Señal fuerte
        a los mercados internacionales. El fin de la{" "}
        <strong>industria del juicio laboral</strong> y de la ultraactividad
        sindical.
      </>
    ),
    quote: {
      text: "No hay nada mejor para un trabajador que una empresa, y no hay nada mejor para una empresa que un trabajador. Los que se oponen a esta reforma defienden sus privilegios, no los derechos de los trabajadores.",
      cite: "— Sobre la reforma laboral, febrero 2026",
    },
  },

  // ── 09 APERTURA COMERCIAL ────────────────────────────────
  {
    num: "09",
    title: "APERTURA COMERCIAL",
    subtitle:
      "138 medidas de apertura. Mercosur-UE tras 26 años. Primer acuerdo bilateral con EE.UU. en la historia.",
    desc: (
      <>
        Argentina era una de las economías más cerradas de la región. El{" "}
        <strong>sistema SIRA</strong> de permisos previos obligatorios era un
        mecanismo de extorsión burocrática. El <strong>impuesto PAIS</strong>{" "}
        encarecía toda importación.{" "}
        <strong>138 medidas de apertura</strong> cambiaron todo.
      </>
    ),
    antes: (
      <>
        <strong>Sistema SIRA</strong> de permisos previos obligatorios para
        importar — mecanismo de extorsión burocrática.{" "}
        <strong>Impuesto PAIS</strong> sobre importaciones y operaciones en
        dólares. Aranceles del <strong>35%</strong> en múltiples productos.
      </>
    ),
    ahora: (
      <>
        <strong>SIRA eliminado</strong>.{" "}
        <strong>Impuesto PAIS eliminado</strong>.{" "}
        <strong>138 medidas de apertura</strong> implementadas. Acuerdo{" "}
        <strong>Mercosur-UE</strong> ratificado por el Senado. TLC con{" "}
        <strong>EE.UU.</strong> y <strong>EFTA</strong> firmados.
      </>
    ),
    impactStats: [
      { val: "$19.000M", label: "superávit comercial" },
      { val: "1.675", label: "productos sin arancel" },
      { val: "26", label: "años de negociación UE" },
    ],
    impactText: (
      <>
        <strong>Récord de superávit comercial</strong>. Exportaciones a la UE
        proyectadas a crecer <strong>76% en 5 años</strong>. Argentina volvió al
        mundo después de <strong>dos décadas de aislamiento</strong>.
      </>
    ),
    quote: {
      text: "Hace 21 años Chávez gritó «ALCA, al carajo» y el kirchnerismo festejó. Nosotros firmamos con Estados Unidos, con la Unión Europea, y vamos a seguir firmando con el mundo entero.",
      cite: "— Tras la ratificación del acuerdo Mercosur-UE, febrero 2026",
    },
  },

  // ── 10 LEY DE INOCENCIA FISCAL ───────────────────────────
  {
    num: "10",
    title: "LEY DE INOCENCIA FISCAL",
    subtitle:
      "Restaurar la presunción de inocencia en materia tributaria — un principio constitucional básico que la política había vulnerado.",
    desc: (
      <>
        En materia tributaria éramos <strong>todos culpables</strong>. La
        política había vulnerado una cuestión constitucional básica:{" "}
        <strong>la presunción de inocencia</strong>. El Estado podía perseguir,
        embargar y destruir a cualquier contribuyente{" "}
        <strong>sin necesidad de probar nada</strong>.
      </>
    ),
    antes: (
      <>
        <strong>Presunción de culpabilidad tributaria</strong> de facto. El
        Estado podía embargar{" "}
        <strong>sin necesidad de probar la existencia de una deuda</strong>. AFIP
        con <strong>poderes discrecionales</strong> para perseguir
        contribuyentes.
      </>
    ),
    ahora: (
      <>
        <strong>Presunción de inocencia restaurada</strong> en materia
        tributaria. El Estado debe probar antes de perseguir, no al revés.{" "}
        <strong>Protección contra embargos arbitrarios</strong>.
      </>
    ),
    impactStats: [
      { val: "43", label: "votos a favor" },
      { val: "100+", label: "años de deuda const." },
      { val: "∞", label: "seguridad jurídica" },
    ],
    impactText: (
      <>
        Clave para la{" "}
        <strong>formalización del empleo y la economía</strong>. Sin inocencia
        fiscal no hay incentivo para salir de la informalidad. El ahorro y la
        inversión necesitan un{" "}
        <strong>Estado que respete al contribuyente</strong>.
      </>
    ),
  },

  // ── 11 SEGURIDAD Y JUSTICIA ──────────────────────────────
  {
    num: "11",
    title: "SEGURIDAD Y JUSTICIA",
    subtitle:
      "De calles tomadas y Rosario narco al país más seguro de Sudamérica por segundo año consecutivo",
    desc: (
      <>
        Cuando asumí, las calles eran tierra de nadie. Más de{" "}
        <strong>9.000 piquetes al año</strong>. Rosario era la capital narco del
        país con <strong>261 homicidios</strong>. El{" "}
        <strong>protocolo antipiquetes de Patricia Bullrich</strong> terminó de
        raíz con los cortes.
      </>
    ),
    antes: (
      <>
        <strong>9.000+ piquetes al año</strong> con impunidad total. Rosario:{" "}
        <strong>261 homicidios</strong>, capital narco del país.{" "}
        <strong>Puerta giratoria judicial</strong> que devolvía delincuentes a la
        calle en horas.
      </>
    ),
    ahora: (
      <>
        <strong>Cero piquetes</strong>. Homicidios{" "}
        <strong>–17% a nivel nacional</strong> y{" "}
        <strong>–65% en Rosario</strong> (de 261 a 91). Robos{" "}
        <strong>–20%</strong> — <strong>mínimo histórico</strong>. Ley Antimafia
        aprobada <strong>38 a 0</strong>. Más de{" "}
        <strong>600 detenidos narco</strong>.
      </>
    ),
    impactStats: [
      { val: "–65%", label: "homicidios Rosario" },
      { val: "–20%", label: "robos nacional" },
      { val: "0", label: "piquetes" },
    ],
    impactText: (
      <>
        De <strong>261 a 91 homicidios en Rosario</strong>.{" "}
        <strong>+500% en incautación de cocaína</strong>. De{" "}
        <strong>9.000 piquetes al año a cero</strong>. El{" "}
        <strong>país más seguro de toda Sudamérica</strong> por segundo año
        consecutivo.
      </>
    ),
  },

  // ── 12 REFORMA PENAL JUVENIL ─────────────────────────────
  {
    num: "12",
    title: "REFORMA PENAL JUVENIL",
    subtitle:
      "Un régimen obsoleto de 45 años de antigüedad, reformado: el que las hace, las paga",
    desc: (
      <>
        El Régimen Penal Juvenil vigente tenía{" "}
        <strong>45 años de antigüedad</strong> — una norma obsoleta de la
        dictadura militar de 1980. Menores de edad eran utilizados por
        organizaciones narco como <strong>soldados descartables</strong>, porque
        sabían que no iban a tener consecuencias penales.
      </>
    ),
    antes: (
      <>
        Régimen penal juvenil de <strong>1980 — dictadura militar</strong>.{" "}
        <strong>45 años sin una sola reforma</strong>. Menores de{" "}
        <strong>16 años absolutamente inimputables</strong> sin importar el
        delito cometido. Organizaciones narco usando menores como soldados.
      </>
    ),
    ahora: (
      <>
        Imputabilidad desde los <strong>14 años para delitos graves</strong>.{" "}
        <strong>Nuevo régimen penal juvenil completo</strong> con medidas
        socioeducativas graduales. Proporcionalidad de penas adaptada a la edad.
      </>
    ),
    impactStats: [
      { val: "45", label: "años sin reforma" },
      { val: "14", label: "edad imputabilidad" },
      { val: "Feb 26", label: "sesión histórica" },
    ],
    impactText: (
      <>
        <strong>Tres reformas históricas en una sola sesión</strong> del
        Congreso: laboral, comercial y penal juvenil. El{" "}
        <strong>Congreso más reformista en décadas</strong>.
      </>
    ),
    quote: {
      text: "Reformamos la Ley Penal Juvenil, modificando un régimen penal obsoleto que tenía ya 45 años de antigüedad. Porque, como lo dijimos antes de ser gobierno, el que las hace, las paga.",
      cite: "— Apertura de sesiones ordinarias, 1 de marzo de 2026",
    },
  },
];

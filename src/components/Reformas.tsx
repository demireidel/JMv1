import FadeIn from "./FadeIn";

interface ReformaProps {
  num: string;
  title: string;
  subtitle: string;
  desc: React.ReactNode;
  antes: React.ReactNode;
  ahora: React.ReactNode;
  impactStats: { val: string; label: string }[];
  impactText: string;
  quote?: { text: string; cite: string };
}

function ReformaSection({
  num,
  title,
  subtitle,
  desc,
  antes,
  ahora,
  impactStats,
  impactText,
  quote,
}: ReformaProps) {
  return (
    <FadeIn>
      <div className="reform-section">
        <div className="reform-header">
          <div className="reform-number">REFORMA {num}</div>
          <h2 className="reform-title">{title}</h2>
          <p className="reform-subtitle">{subtitle}</p>
        </div>
        <div className="reform-desc">
          <p>{desc}</p>
        </div>
        <div className="reform-trio">
          <div className="reform-box antes">
            <div className="box-label">
              <span className="dot" /> ANTES
            </div>
            <div className="box-text">{antes}</div>
          </div>
          <div className="reform-box ahora">
            <div className="box-label">
              <span className="dot" /> AHORA
            </div>
            <div className="box-text">{ahora}</div>
          </div>
          <div className="reform-box impacto">
            <div className="box-label">
              <span className="dot" /> IMPACTO
            </div>
            <div className="impact-stats">
              {impactStats.map((s) => (
                <div className="impact-stat" key={s.label}>
                  <div className="iv">{s.val}</div>
                  <div className="il">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="box-text">{impactText}</div>
          </div>
        </div>
        {quote && (
          <div className="ref-quote">
            <span className="qmark">«</span>
            <blockquote>{quote.text}</blockquote>
            <cite>{quote.cite}</cite>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

const reformas: ReformaProps[] = [
  {
    num: "01",
    title: "EQUILIBRIO FISCAL",
    subtitle:
      "De décadas de déficit crónico al primer superávit financiero en 16 años",
    desc: <>Argentina había logrado solo <strong>8 superávits fiscales en 100 años</strong>. Cuando asumí, el déficit consolidado era de 15 puntos del PIB y la maquinita de imprimir billetes funcionaba las 24 horas para financiar la fiesta de la casta. Lo primero que hice fue dar vuelta la ecuación: <em className="hl">recorté el 30% del gasto público real en un solo año</em>, eliminé las transferencias discrecionales a provincias, reduje subsidios y terminé con la obra pública como herramienta de corrupción. En 2024 logramos el <strong>primer superávit financiero en 16 años</strong>. En 2025 lo repetimos. Y aprobamos el <strong>primer presupuesto sin déficit ni default en más de 100 años</strong>. Hoy somos uno de los cinco países del mundo que solo gastan lo que recaudan y ni un peso más.</>,
    antes:
      <>Déficit consolidado de <strong>15 puntos del PIB</strong>. Solo 8 superávits fiscales en un siglo de historia. Emisión monetaria descontrolada para financiar gasto corriente. Transferencias discrecionales a gobernadores amigos. Obra pública como herramienta de saqueo sistemático. La cuenta se la pasaban a las generaciones futuras a través de deuda e inflación.</>,
    ahora:
      <><strong>Superávit primario de 1,8% del PIB</strong> en 2024 y 1,4% en 2025. Dos años consecutivos de superávit financiero — el primero desde 2008. Cero emisión para financiar déficit. Presupuesto 2026 equilibrado. Baja impositiva de <strong>2,5 puntos del PIB</strong> devueltos a los argentinos de bien. A diferencia de otros gobiernos que lograron superávit subiendo impuestos, nosotros lo hicimos bajándolos.</>,
    impactStats: [
      { val: "15 pts", label: "de ajuste fiscal" },
      { val: "30%", label: "menos gasto real" },
      { val: "100+", label: "años sin presup. equilib." },
    ],
    impactText:
      "El ajuste fiscal más grande de la historia argentina — bajando impuestos, no subiéndolos.",
  },
  {
    num: "02",
    title: "DERROTA DE LA INFLACIÓN",
    subtitle: "De 211% anual — la más alta del mundo tras Venezuela — al nivel más bajo en ocho años",
    desc: <>Heredé una inflación del <strong>211,4% anual</strong> que anualizada viajaba a la velocidad de 17.000%. En diciembre de 2023, el mes que asumí, la inflación mensual tocó el <strong>25,5%</strong> tras la devaluación necesaria para sincerar los precios que el gobierno anterior había reprimido. Los economistas del establishment decían que era imposible bajarla sin hiperinflación previa. <em className="hl">Eliminé la causa: dejé de imprimir para financiar al Estado.</em> El ancla fue fiscal, no cambiaria. No hubo magia ni trucos: simplemente dejamos de robarle a los argentinos a través de la inflación. En 2025 cerramos con <strong>~30% anual</strong>, la cifra más baja desde 2017. Los precios mayoristas ya están casi en un dígito. La inflación tiene fecha de defunción.</>,
    antes:
      <>Inflación del <strong>211,4% anual</strong> en 2023 — anualizada al 17.000%. Pico mensual del 25,5% en diciembre 2023. Destruimos cinco signos monetarios en nuestra historia. Los salarios se licuaban en días. Argentina era el segundo país más inflacionario del mundo, solo detrás de Venezuela. Precios reprimidos artificialmente que generaban desabastecimiento.</>,
    ahora:
      <><strong>~30% anual en 2025</strong> — la más baja en ocho años. Inflación mensual estabilizada entre 1,5% y 2,2%. Tendencia descendente sostenida durante 24 meses consecutivos. Precios mayoristas casi en un dígito. El peso se apreció sin precedentes. Proyección 2026: por debajo del 20%. Meta de un dígito para 2027.</>,
    impactStats: [
      { val: "–85%", label: "reducción inflación" },
      { val: "211→30", label: "% anual" },
      { val: "8", label: "años de mínimo" },
    ],
    impactText:
      "Poder adquisitivo del salario real en recuperación sostenida. Pobreza del 57% al ~30%. Boom de créditos hipotecarios.",
  },
  {
    num: "03",
    title: "LIBERACIÓN DEL CEPO CAMBIARIO",
    subtitle:
      "Después de más de 6 años de restricciones, los argentinos vuelven a ser libres de comprar y vender dólares",
    desc: <>El cepo cambiario fue la herramienta más perversa del kirchnerismo: <strong>un control de capitales que duró más de 6 años</strong>. En abril de 2025, <em className="hl">liberé completamente el mercado cambiario para las personas físicas</em>. La brecha desapareció.</>,
    antes:
      <>Restricciones cambiarias ininterrumpidas desde 2019. <strong>Brecha cambiaria superior al 100%</strong>. Múltiples tipos de cambio. Riesgo país en 2.400 puntos.</>,
    ahora:
      <><strong>Mercado cambiario libre</strong> con banda de flotación administrada. Brecha eliminada. Acuerdo con el FMI por <strong>USD 20.000M</strong> a 48 meses.</>,
    impactStats: [
      { val: "0%", label: "brecha cambiaria" },
      { val: "$20.000M", label: "acuerdo FMI" },
      { val: "~560", label: "riesgo país" },
    ],
    impactText:
      "Riesgo país de 2.400 a ~560 puntos. Argentina vuelve a los mercados internacionales.",
    quote: {
      text: "Hoy aprobamos el tercer examen. Nos deshicimos del cepo cambiario, que era una aberración que nunca debería haber existido. Los argentinos vuelven a ser libres de hacer con su dinero lo que quieran.",
      cite: "— Cadena Nacional, fin del cepo, abril 2025",
    },
  },
  {
    num: "04",
    title: "DNU 70/23 — LA PRIMERA OLA",
    subtitle:
      "A diez días de asumir: 366 artículos que desmantelaron décadas de regulaciones asfixiantes",
    desc: <>A diez días de asumir firmé el <strong>DNU 70/23</strong>: 366 artículos. Derogué la Ley de Alquileres, la Ley de Abastecimiento, la Ley de Góndolas. <em className="hl">En un solo decreto, desregulamos más que cualquier gobierno en toda la historia argentina.</em></>,
    antes:
      <>Más de <strong>300 leyes y regulaciones</strong> que impedían el comercio, el trabajo y la producción. Ley de Alquileres que destruyó la oferta. Mercados cautivos.</>,
    ahora:
      <><strong>366 artículos</strong> de desregulación en un solo decreto. Mercados de alquileres, aviación, salud y telecomunicaciones completamente liberados. Starlink conectando zonas rurales.</>,
    impactStats: [
      { val: "366", label: "artículos" },
      { val: "+170%", label: "oferta alquileres" },
      { val: "1.700+", label: "reformas año 1" },
    ],
    impactText:
      "Precios de alquiler –30% en términos reales. Récord de 50,6 millones de pasajeros aéreos. 700.000 argentinos rurales conectados vía Starlink.",
  },
  {
    num: "05",
    title: "LEY BASES Y EL RIGI",
    subtitle:
      "Con solo 7 senadores de 72, aprobamos la ley más importante en décadas — y creamos el RIGI",
    desc: <>Con solo <strong>7 senadores propios de 72</strong>, logramos aprobar la <strong>Ley Bases</strong> y el <em className="hl">RIGI</em> (Régimen de Incentivo para Grandes Inversiones), que garantiza estabilidad fiscal, aduanera y cambiaria por 30 años para inversiones de más de USD 200 millones.</>,
    antes:
      <>Sin marco legal para grandes inversiones. Inestabilidad regulatoria crónica. <strong>Sin privatizaciones posibles</strong>. Inversores huyendo.</>,
    ahora:
      <><strong>RIGI aprobado</strong>: estabilidad por 30 años. Más de <strong>USD 25.000M</strong> en proyectos aprobados. Privatizaciones habilitadas.</>,
    impactStats: [
      { val: "238", label: "artículos" },
      { val: "$25.000M", label: "inversiones RIGI" },
      { val: "30", label: "años estabilidad" },
    ],
    impactText:
      "La primera ley del gobierno — aprobada contra todo pronóstico con 7 senadores propios. El RIGI como imán de inversiones.",
  },
  {
    num: "06",
    title: "DESREGULACIÓN MASIVA",
    subtitle:
      "14.500 desregulaciones: detrás de cada regulación había un privilegio — o mejor dicho, un curro",
    desc: <>Sturzenegger, desde el Ministerio de Desregulación y Transformación del Estado, llevó adelante una tarea titánica y admirable: <strong>más de 14.500 desregulaciones</strong> en un sinfín de áreas que dan cuenta del grado de cooptación corporativa que tenía el Estado. Porque <em className="hl">detrás de cada regulación había un privilegio — o mejor dicho, un curro, un tongo</em>. Estas desregulaciones nos permitieron marcar récords en el mercado aerocomercial de pasajeros, le permitieron a los productores argentinos acceder a mejor maquinaria productiva que la disponible localmente y normalizaron y potenciaron el mercado de los alquileres. La zona más regulada del mundo, Europa, está estancada, no crece. Un eje central de nuestra política es la desregulación, porque en la medida que desregulamos liberamos rendimientos crecientes.</>,
    antes:
      <>Miles de normas acumuladas durante décadas por capas geológicas de burocracia. <strong>Cada regulación protegía un privilegio</strong> de algún sector concentrado. Licencias, permisos, habilitaciones discrecionales en cada actividad económica. Argentina era la economía más regulada de toda la región. Costos inflados artificialmente. Competencia bloqueada en sector tras sector.</>,
    ahora:
      <><strong>14.500+ desregulaciones</strong> ejecutadas. 494 normas específicas que eliminaron <strong>14.392 artículos</strong> regulatorios. Mercados completamente abiertos. Competencia real por primera vez en décadas. Trámites simplificados radicalmente. La política de exterminar regulaciones libera rendimientos crecientes, que son las bases del crecimiento económico sostenido.</>,
    impactStats: [
      { val: "14.500+", label: "desregulaciones" },
      { val: "50,6M", label: "pasajeros aéreos" },
      { val: "57", label: "nuevas rutas" },
    ],
    impactText:
      "Récord de pasajeros aéreos. Alquileres –30% real con +170% oferta. Una política admirada en el mundo.",
  },
  {
    num: "07",
    title: "REFORMA DEL ESTADO",
    subtitle: "De 18 ministerios a 8. De 340.000 empleados a 277.000. De déficit a superávit en empresas públicas.",
    desc: <>El Estado argentino era un monstruo que se devoraba a sí mismo. <strong>18 ministerios</strong>, 84 secretarías y más de 340.000 empleados públicos nacionales. Reduje los ministerios a <strong>8</strong>, las secretarías a 51, eliminé <strong>63.234 cargos</strong> innecesarios.</>,
    antes: <><strong>18 ministerios</strong> y 84 secretarías. ~340.000 empleados públicos nacionales, muchos sin función alguna. 32 empresas públicas con déficit conjunto masivo. TELAM, INADI y decenas de organismos inútiles.</>,
    ahora: <><strong>8 ministerios</strong>, 51 secretarías. 277.000 empleados — 63.234 cargos eliminados. TELAM, INADI y decenas de organismos disueltos. Empresas públicas con <strong>superávit de $109.200M</strong>.</>,
    impactStats: [
      { val: "–56%", label: "menos ministerios" },
      { val: "63.234", label: "cargos eliminados" },
      { val: "–18%", label: "planta estatal" },
    ],
    impactText: "Empresas públicas de déficit masivo a superávit histórico en un semestre. Aerolíneas autofinanciada por primera vez en 20 años. Estado más chico, más eficiente y más barato.",
  },
  {
    num: "08",
    title: "REFORMA LABORAL",
    subtitle: "La primera reforma laboral en más de 50 años. 218 artículos que modifican 28 leyes y derogan 11.",
    desc: <>Los campeones de los derechos de los trabajadores dejaron sin ningún tipo de derechos a la mitad de los trabajadores. Una ley de <strong>más de 50 años</strong> había dejado a <em className="hl">la mitad de los trabajadores argentinos en la informalidad</em>.</>,
    antes: <>Ley laboral de <strong>más de 50 años</strong> sin actualizar. La mitad de los trabajadores argentinos en la informalidad total. Indemnizaciones calculadas sobre todos los conceptos salariales.</>,
    ahora: <><strong>Fondo de Asistencia Laboral (FAL)</strong> como alternativa moderna a las indemnizaciones. Período de prueba de 6 meses (hasta 1 año para PyMEs). Servicios esenciales con 75% de funcionamiento.</>,
    impactStats: [
      { val: "218", label: "artículos" },
      { val: "28", label: "leyes modificadas" },
      { val: "11", label: "leyes derogadas" },
    ],
    impactText: "La primera reforma laboral en medio siglo. Señal fuerte a los mercados internacionales. El fin de la industria del juicio laboral y de la ultraactividad sindical.",
    quote: {
      text: "No hay nada mejor para un trabajador que una empresa, y no hay nada mejor para una empresa que un trabajador. Los que se oponen a esta reforma defienden sus privilegios, no los derechos de los trabajadores.",
      cite: "— Sobre la reforma laboral, febrero 2026",
    },
  },
  {
    num: "09",
    title: "APERTURA COMERCIAL",
    subtitle: "138 medidas de apertura. Mercosur-UE tras 26 años. Primer acuerdo bilateral con EE.UU. en la historia.",
    desc: <>Argentina era una de las economías más cerradas de la región. El sistema SIRA de permisos previos obligatorios era un mecanismo de extorsión burocrática. El <strong>impuesto PAIS</strong> encarecía toda importación. <em className="hl">138 medidas de apertura</em> cambiaron todo.</>,
    antes: <>Sistema SIRA de <strong>permisos previos obligatorios</strong> para importar — mecanismo de extorsión burocrática. Impuesto PAIS sobre importaciones y operaciones en dólares. Aranceles del 35% en múltiples productos.</>,
    ahora: <>SIRA eliminado. Impuesto PAIS eliminado. <strong>138 medidas de apertura</strong> implementadas. Acuerdo <strong>Mercosur-UE ratificado</strong> por el Senado. TLC con EE.UU. y EFTA firmados.</>,
    impactStats: [
      { val: "$19.000M", label: "superávit comercial" },
      { val: "1.675", label: "productos sin arancel" },
      { val: "26", label: "años de negociación UE" },
    ],
    impactText: "Récord de superávit comercial. Exportaciones a la UE proyectadas a crecer 76% en 5 años. Argentina volvió al mundo después de dos décadas de aislamiento.",
    quote: {
      text: "Hace 21 años Chávez gritó «ALCA, al carajo» y el kirchnerismo festejó. Nosotros firmamos con Estados Unidos, con la Unión Europea, y vamos a seguir firmando con el mundo entero.",
      cite: "— Tras la ratificación del acuerdo Mercosur-UE, febrero 2026",
    },
  },
  {
    num: "10",
    title: "LEY DE INOCENCIA FISCAL",
    subtitle: "Restaurar la presunción de inocencia en materia tributaria — un principio constitucional básico que la política había vulnerado.",
    desc: <>En materia tributaria éramos todos culpables. La política había vulnerado una cuestión constitucional básica: <strong>la presunción de inocencia</strong>. El Estado podía perseguir, embargar y destruir a cualquier contribuyente sin necesidad de probar nada.</>,
    antes: <>Presunción de <strong>culpabilidad tributaria</strong> de facto. El Estado podía embargar sin necesidad de probar la existencia de una deuda. AFIP con poderes discrecionales para perseguir contribuyentes.</>,
    ahora: <><strong>Presunción de inocencia restaurada</strong> en materia tributaria. El Estado debe probar antes de perseguir, no al revés. Protección contra embargos arbitrarios.</>,
    impactStats: [
      { val: "43", label: "votos a favor" },
      { val: "100+", label: "años de deuda const." },
      { val: "∞", label: "seguridad jurídica" },
    ],
    impactText: "Clave para la formalización del empleo y la economía. Sin inocencia fiscal no hay incentivo para salir de la informalidad. El ahorro y la inversión necesitan un Estado que respete al contribuyente.",
  },
  {
    num: "11",
    title: "SEGURIDAD Y JUSTICIA",
    subtitle: "De calles tomadas y Rosario narco al país más seguro de Sudamérica por segundo año consecutivo",
    desc: <>Cuando asumí, las calles eran tierra de nadie. <strong>Más de 9.000 piquetes al año</strong>. Rosario era la capital narco del país con <strong>261 homicidios</strong>. El protocolo antipiquetes de Patricia Bullrich terminó de raíz con los cortes.</>,
    antes: <><strong>9.000+ piquetes al año</strong> con impunidad total. Rosario: 261 homicidios, capital narco del país. Puerta giratoria judicial que devolvía delincuentes a la calle en horas.</>,
    ahora: <><strong>Cero piquetes</strong>. Homicidios –17% a nivel nacional y –65% en Rosario (de 261 a 91). Robos –20% — mínimo histórico. Ley Antimafia aprobada 38 a 0. Más de 600 detenidos narco.</>,
    impactStats: [
      { val: "–65%", label: "homicidios Rosario" },
      { val: "–20%", label: "robos nacional" },
      { val: "0", label: "piquetes" },
    ],
    impactText: "De 261 a 91 homicidios en Rosario. +500% en incautación de cocaína. De 9.000 piquetes al año a cero. El país más seguro de toda Sudamérica por segundo año consecutivo.",
  },
  {
    num: "12",
    title: "REFORMA PENAL JUVENIL",
    subtitle: "Un régimen obsoleto de 45 años de antigüedad, reformado: el que las hace, las paga",
    desc: <>El Régimen Penal Juvenil vigente tenía <strong>45 años de antigüedad</strong> — una norma obsoleta de la dictadura militar de 1980. Menores de edad eran utilizados por organizaciones narco como soldados descartables, porque sabían que <em className="hl">no iban a tener consecuencias penales</em>.</>,
    antes: <>Régimen penal juvenil de <strong>1980 — dictadura militar</strong>. 45 años sin una sola reforma. Menores de 16 años absolutamente inimputables sin importar el delito cometido. Organizaciones narco usando menores como soldados.</>,
    ahora: <><strong>Imputabilidad desde los 14 años</strong> para delitos graves. Nuevo régimen penal juvenil completo con medidas socioeducativas graduales. Proporcionalidad de penas adaptada a la edad.</>,
    impactStats: [
      { val: "45", label: "años sin reforma" },
      { val: "14", label: "edad imputabilidad" },
      { val: "Feb 26", label: "sesión histórica" },
    ],
    impactText: "Tres reformas históricas en una sola sesión del Congreso: laboral, comercial y penal juvenil. El Congreso más reformista en décadas.",
    quote: {
      text: "Reformamos la Ley Penal Juvenil, modificando un régimen penal obsoleto que tenía ya 45 años de antigüedad. Porque, como lo dijimos antes de ser gobierno, el que las hace, las paga.",
      cite: "— Apertura de sesiones ordinarias, 1 de marzo de 2026",
    },
  },
];

export default function Reformas() {
  return (
    <section className="section-darker" id="reformas">
      {/* Hero */}
      <div className="ref-hero">
        <div className="ref-hero-accent" />
        <div className="ref-hero-content">
          <div className="ref-hero-eyebrow">La revolución institucional</div>
          <h2 className="ref-hero-title">
            LAS <span>12 REFORMAS</span>
          </h2>
          <div className="ref-hero-line" />
          <p className="ref-hero-desc">
            Prometí transformar la Argentina. No con discursos, sino con hechos.
            En dos años aprobamos los tres exámenes — fiscal, monetario y
            cambiario — e hicimos más reformas estructurales que en las últimas
            cuatro décadas juntas.
          </p>
          <div className="ref-counter-strip">
            {[
              { num: "14.500+", label: "Desregulaciones" },
              { num: "12", label: "Reformas estructurales" },
              { num: "2.5", label: "Puntos PIB devueltos" },
              { num: "90", label: "Paquetes reforma 2026" },
            ].map((c) => (
              <div className="ref-counter" key={c.label}>
                <div className="num">{c.num}</div>
                <div className="label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reforms-container">
        <FadeIn>
          <div className="reform-divider">
            <h3>BLOQUE I — ESTABILIZACIÓN MACROECONÓMICA</h3>
            <p>
              Los tres exámenes aprobados: fiscal, monetario y cambiario
            </p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(0, 3).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}

        <FadeIn>
          <div className="reform-divider">
            <h3>BLOQUE II — DESREGULACIÓN Y REFORMA DEL ESTADO</h3>
            <p>DNU 70/23, Ley Bases, y 14.500 desregulaciones: de la economía más regulada a la más libre</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(3, 7).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}

        <FadeIn>
          <div className="reform-divider">
            <h3>BLOQUE III — REFORMAS LEGISLATIVAS</h3>
            <p>Con el Congreso más reformista de la historia: laboral, comercial, fiscal y penal</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(7, 10).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}

        <FadeIn>
          <div className="reform-divider">
            <h3>BLOQUE IV — SEGURIDAD Y JUSTICIA</h3>
            <p>Sin orden y sin justicia no hay futuro posible. Nadie puede edificar su futuro si no se respeta la ley.</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(10).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}
      </div>
    </section>
  );
}

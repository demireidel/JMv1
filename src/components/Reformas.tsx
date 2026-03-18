import FadeIn from "./FadeIn";

interface ReformaProps {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  antes: string;
  ahora: string;
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
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className="reform-trio">
          <div className="reform-box antes">
            <div className="box-label">
              <span className="dot" /> ANTES
            </div>
            <div
              className="box-text"
              dangerouslySetInnerHTML={{ __html: antes }}
            />
          </div>
          <div className="reform-box ahora">
            <div className="box-label">
              <span className="dot" /> AHORA
            </div>
            <div
              className="box-text"
              dangerouslySetInnerHTML={{ __html: ahora }}
            />
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
    desc: "Argentina había logrado solo <strong>8 superávits fiscales en 100 años</strong>. Cuando asumí, el déficit consolidado era de 15 puntos del PIB. <em class='hl'>Recorté el 30% del gasto público real en un solo año</em>, eliminé las transferencias discrecionales y terminé con la obra pública como herramienta de corrupción.",
    antes:
      "Déficit consolidado de <strong>15 puntos del PIB</strong>. Solo 8 superávits fiscales en un siglo. Emisión descontrolada. Transferencias discrecionales a gobernadores amigos.",
    ahora:
      "<strong>Superávit primario de 1,8% del PIB</strong> en 2024 y 1,4% en 2025. Dos años consecutivos de superávit financiero. Cero emisión para financiar déficit. Baja impositiva de <strong>2,5 puntos del PIB</strong>.",
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
    desc: "Heredé una inflación del <strong>211,4% anual</strong> que anualizada viajaba a 17.000%. <em class='hl'>Eliminé la causa: dejé de imprimir para financiar al Estado.</em> El ancla fue fiscal, no cambiaria.",
    antes:
      "Inflación del <strong>211,4% anual</strong> en 2023 — anualizada al 17.000%. Pico mensual del 25,5%. Argentina era el segundo país más inflacionario del mundo.",
    ahora:
      "<strong>~30% anual en 2025</strong> — la más baja en ocho años. Inflación mensual entre 1,5% y 2,2%. Tendencia descendente sostenida durante 24 meses.",
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
    desc: "El cepo cambiario fue la herramienta más perversa del kirchnerismo: <strong>un control de capitales que duró más de 6 años</strong>. En abril de 2025, <em class='hl'>liberé completamente el mercado cambiario para las personas físicas</em>. La brecha desapareció.",
    antes:
      "Restricciones cambiarias ininterrumpidas desde 2019. <strong>Brecha cambiaria superior al 100%</strong>. Múltiples tipos de cambio. Riesgo país en 2.400 puntos.",
    ahora:
      "<strong>Mercado cambiario libre</strong> con banda de flotación administrada. Brecha eliminada. Acuerdo con el FMI por <strong>USD 20.000M</strong> a 48 meses.",
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
    desc: "A diez días de asumir firmé el <strong>DNU 70/23</strong>: 366 artículos. Derogué la Ley de Alquileres, la Ley de Abastecimiento, la Ley de Góndolas. <em class='hl'>En un solo decreto, desregulamos más que cualquier gobierno en toda la historia argentina.</em>",
    antes:
      "Más de <strong>300 leyes y regulaciones</strong> que impedían el comercio, el trabajo y la producción. Ley de Alquileres que destruyó la oferta. Mercados cautivos.",
    ahora:
      "<strong>366 artículos</strong> de desregulación en un solo decreto. Mercados de alquileres, aviación, salud y telecomunicaciones completamente liberados. Starlink conectando zonas rurales.",
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
    desc: "Con solo <strong>7 senadores propios de 72</strong>, logramos aprobar la <strong>Ley Bases</strong> y el <em class='hl'>RIGI</em> (Régimen de Incentivo para Grandes Inversiones), que garantiza estabilidad fiscal, aduanera y cambiaria por 30 años para inversiones de más de USD 200 millones.",
    antes:
      "Sin marco legal para grandes inversiones. Inestabilidad regulatoria crónica. <strong>Sin privatizaciones posibles</strong>. Inversores huyendo.",
    ahora:
      "<strong>RIGI aprobado</strong>: estabilidad por 30 años. Más de <strong>USD 25.000M</strong> en proyectos aprobados. Privatizaciones habilitadas.",
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
    desc: "Sturzenegger llevó adelante una tarea titánica: <strong>más de 14.500 desregulaciones</strong>. <em class='hl'>Detrás de cada regulación había un privilegio — o mejor dicho, un curro, un tongo</em>.",
    antes:
      "Miles de normas acumuladas. <strong>Cada regulación protegía un privilegio</strong>. Argentina era la economía más regulada de toda la región.",
    ahora:
      "<strong>14.500+ desregulaciones</strong> ejecutadas. 494 normas eliminaron <strong>14.392 artículos</strong>. Mercados abiertos. Competencia real.",
    impactStats: [
      { val: "14.500+", label: "desregulaciones" },
      { val: "50,6M", label: "pasajeros aéreos" },
      { val: "57", label: "nuevas rutas" },
    ],
    impactText:
      "Récord de pasajeros aéreos. Alquileres –30% real con +170% oferta. Una política admirada en el mundo.",
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
          <h1 className="ref-hero-title">
            LAS <span>12 REFORMAS</span>
          </h1>
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
            <p>
              DNU 70/23, Ley Bases, y 14.500 desregulaciones
            </p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(3).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}
      </div>
    </section>
  );
}

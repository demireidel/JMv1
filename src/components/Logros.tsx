"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("0" + suffix);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = target * eased;
            setValue(
              (decimals > 0
                ? current.toFixed(decimals)
                : Math.round(current).toString()) + suffix
            );
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, decimals]);

  return (
    <div ref={ref} className="pc-val">
      {value}
    </div>
  );
}

interface LogroCardProps {
  num: string;
  badge: string;
  title: string;
  paragraphs: string[];
  before: { label: string; val: string; desc: string };
  after: { label: string; val: string; desc: string };
  callout: string;
  gradient: string;
  imgBefore: string;
  imgAfter: string;
  altBefore: string;
  altAfter: string;
  reverse?: boolean;
}

function LogroCard({
  num,
  badge,
  title,
  paragraphs,
  before,
  after,
  callout,
  gradient,
  imgBefore,
  imgAfter,
  altBefore,
  altAfter,
  reverse = false,
}: LogroCardProps) {
  const imgBlock = (
    <div
      className="lh-img"
      style={{ background: gradient }}
      onClick={(e) => {
        const el = e.currentTarget;
        el.classList.toggle("flipped");
      }}
    >
      <div className="lh-badge">{badge}</div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="img-swap img-before" src={imgBefore} alt={altBefore} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="img-swap img-after" src={imgAfter} alt={altAfter} />
      <span className="img-label label-antes">ANTES</span>
      <span className="img-label label-despues">DESPUÉS</span>
      <span className="hover-hint">HOVER ⟷</span>
    </div>
  );

  return (
    <FadeIn>
      <div className={`logro-hero ${reverse ? "reverse" : ""}`}>
        <div className="lh-inner">
          {!reverse && imgBlock}
          <div className="lh-body">
            <div className="lh-num">{num}</div>
            <h3>{title}</h3>
            {paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className="ba-compare">
              <div className="ba-box before">
                <div className="ba-label">{before.label}</div>
                <div className="ba-val">{before.val}</div>
                <div className="ba-desc">{before.desc}</div>
              </div>
              <div className="ba-box after">
                <div className="ba-label">{after.label}</div>
                <div className="ba-val">{after.val}</div>
                <div className="ba-desc">{after.desc}</div>
              </div>
            </div>
            <div className="lh-callout">
              <p>{callout}</p>
            </div>
          </div>
          {reverse && imgBlock}
        </div>
      </div>
    </FadeIn>
  );
}

const logros: LogroCardProps[] = [
  {
    num: "02",
    badge: "02 — ESTABILIZACIÓN",
    title: "Se evitó la hiperinflación: se desactivó la bomba del Plan Platita",
    paragraphs: [
      "Sergio Massa lanzó el «Plan Platita» tras quedar tercero en las PASO de agosto 2023: inyectó 1,3 % del PBI en bonos, devolución de IVA y beneficios impositivos — todo financiado con emisión pura. En un año emitió trece bases monetarias. La inflación mayorista viajaba al 17.000 % anualizado. El déficit consolidado llegaba al 15 % del PBI. Las reservas netas eran negativas en USD 13.000 M.",
      "La herencia combinaba las tres peores crisis de la historia argentina: el desequilibrio monetario duplicaba al del Rodrigazo de 1975, el Banco Central estaba peor que antes de la hiper del '89, y los indicadores sociales superaban en gravedad a los de 2001. Un combo que hubiera convertido a la Argentina en Venezuela.",
      "Se resolvió de forma opuesta a cualquier antecedente: sin expropiaciones, sin Plan Bonex, sin controles de precios — todo a libre mercado. La hiper se evitó.",
    ],
    before: { label: "Herencia del Plan Platita", val: "17.000%", desc: "Inflación mayorista anualizada. 13 bases monetarias emitidas. Déficit consolidado 15 % PBI." },
    after: { label: "Resultado", val: "HIPER EVITADA", desc: "Cuasifiscal eliminado en 6 meses. Sin Bonex, sin controles — a puro mercado libre." },
    callout: "«Con un plan platita te la ponés de sombrero con la inflación.» — Milei",
    gradient: "linear-gradient(135deg, #b71c1c, #d32f2f)",
    imgBefore: "/images/logros/02-antes.png",
    imgAfter: "/images/logros/02-despues.png",
    altBefore: "Pesos argentinos quemándose, hiperinflación",
    altAfter: "Bosques de Palermo, familias disfrutando",
  },
  {
    num: "03",
    badge: "03 — ORDEN",
    title: "No más piquetes: la calle es de todos",
    paragraphs: [
      "Había 9.000 piquetes por año. Organizaciones sociales con financiamiento estatal cortaban rutas con total impunidad. Millones de argentinos no podían ir a trabajar ni llevar a sus hijos al colegio. Los piquetes se financiaban con plata de la ayuda social — dinero que debía llegar a los más necesitados terminaba pagando el aparato de presión callejera.",
      "Ahora: cero. Se implementó el protocolo antipiquetes y se eliminaron las transferencias discrecionales a intermediarios. La plata va directo a quien la necesita. Las calles se liberaron.",
    ],
    before: { label: "Antes", val: "9.000", desc: "Piquetes por año. Financiados con plata de la ayuda social." },
    after: { label: "Ahora", val: "0", desc: "Cero cortes. Protocolo antipiquetes. Transferencias directas." },
    callout: "«Robar está mal, pero robarle el pan de la boca a los más vulnerables excede a cualquier adjetivo.» — Milei, Congreso 2026",
    gradient: "linear-gradient(135deg, #4a148c, #7b1fa2)",
    imgBefore: "/images/logros/03-antes.png",
    imgAfter: "/images/logros/03-despues.png",
    altBefore: "Piqueteros cortando la 9 de Julio",
    altAfter: "Obelisco y 9 de Julio fluyendo de noche",
    reverse: true,
  },
  {
    num: "04",
    badge: "04 — DESINFLACIÓN",
    title: "La inflación se pulverizó: del 17.000 % anualizado al 30 %",
    paragraphs: [
      "En la primera semana de diciembre 2023, la inflación corría al 1 % diario. La mayorista estaba en 54 % mensual — 17.000 % anualizado.",
      "Hoy: 2,9 % mensual. Interanual ~30 %. Sin fijar tipo de cambio, sin controlar precios.",
    ],
    before: { label: "Dic 2023 — Herencia", val: "17.000%", desc: "Inflación mayorista anualizada. 25,5 % mensual minorista." },
    after: { label: "2026 — Hoy", val: "~30%", desc: "Interanual. 2,9 % mensual (feb 2026). Sin controles — a puro mercado." },
    callout: "«Mi ministro de Economía, Toto Caputo, va a ser recordado como el mejor ministro de Economía de la historia.» — Milei",
    gradient: "linear-gradient(135deg, #e65100, #ff8f00)",
    imgBefore: "/images/logros/04-antes.png",
    imgAfter: "/images/logros/04-despues.png",
    altBefore: "Supermercado con límites de compra, escasez",
    altAfter: "Familia comprando con normalidad, góndolas llenas",
  },
  {
    num: "05",
    badge: "05 — FISCAL",
    title: "Déficit cero: primer presupuesto equilibrado en 100 años",
    paragraphs: [
      "Había 15 puntos de déficit fiscal consolidado: cinco del Tesoro y diez escondidos debajo de la alfombra del Banco Central.",
      "Ahora: superávit. Se aprobó el primer presupuesto equilibrado, libre de default, en 100 años. Se bajó de 22 a 7 ministerios y se bajaron impuestos por 2,5 puntos del PBI.",
    ],
    before: { label: "Herencia", val: "–15% PBI", desc: "Déficit consolidado. 22 ministerios. Emisión descontrolada. Brecha 300 %." },
    after: { label: "Ahora", val: "SUPERÁVIT", desc: "1.er presupuesto equilibrado en 100 años. 7 ministerios. Gasto –30 %." },
    callout: "«Hemos logrado un superávit fiscal sostenido, libre de default, por primera vez en los últimos 123 años.» — Milei",
    gradient: "linear-gradient(135deg, #1a237e, #283593)",
    imgBefore: "/images/logros/05-antes.png",
    imgAfter: "/images/logros/05-despues.png",
    altBefore: "Máquina imprimiendo billetes, emisión descontrolada",
    altAfter: "Plaza de Mayo y Casa Rosada, orden fiscal",
    reverse: true,
  },
  {
    num: "06",
    badge: "06 — CREDIBILIDAD",
    title: "El riesgo país se desplomó: Argentina volvió al mundo",
    paragraphs: [
      "El riesgo país superaba los 2.000 puntos. Nadie quería prestarle un dólar a la Argentina.",
      "Tras las legislativas de octubre 2025, se desplomó a 652 puntos. Una baja de 2.500 puntos básicos. Se cerró un acuerdo con el FMI por USD 20.000 M.",
    ],
    before: { label: "Herencia", val: "2.000+ pts", desc: "Sin acceso a mercados. Sin crédito. Argentina aislada." },
    after: { label: "Post legislativas 2025", val: "652 pts", desc: "–2.500 pb. FMI USD 20.000 M. Inversiones USD 55.000 M." },
    callout: "«Encontré compañeros en todos los rincones del mundo para conformar una alianza internacional de naciones libres.» — Milei, Davos 2025",
    gradient: "linear-gradient(135deg, #0d47a1, #1565c0)",
    imgBefore: "/images/logros/06-antes.png",
    imgAfter: "/images/logros/06-despues.png",
    altBefore: "Crisis 2001, auto quemándose frente al Obelisco",
    altAfter: "Grúas de Puerto Madero, Argentina abierta al mundo",
  },
  {
    num: "07",
    badge: "07 — SEGURIDAD",
    title: "Tasa de homicidios más baja en 25 años — y la más baja de Sudamérica",
    paragraphs: [
      "Las calles eran un baño de sangre. El narcotráfico había tomado Rosario.",
      "Los homicidios bajaron 17 % a nivel nacional. En Rosario cayeron 65 %. Argentina registró 3,8 homicidios por 100.000 habitantes: la tasa más baja de toda Sudamérica.",
    ],
    before: { label: "Herencia", val: "4,4", desc: "Homicidios/100K. Rosario: 261 asesinatos. Fronteras: colador." },
    after: { label: "2024", val: "3,8", desc: "Tasa más baja de Sudamérica y en 25 años. Rosario –65 %." },
    callout: "«Tuvimos el índice de homicidios más bajo de Sudamérica.» — Milei, Congreso 2025",
    gradient: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    imgBefore: "/images/logros/07-antes.png",
    imgAfter: "/images/logros/07-despues.png",
    altBefore: "Operativo policial nocturno, inseguridad en Rosario",
    altAfter: "Monumento a la Bandera, Rosario en paz",
    reverse: true,
  },
  {
    num: "08",
    badge: "08 — DESREGULACIÓN",
    title: "14.500 desregulaciones: la motosierra de Sturzenegger",
    paragraphs: [
      "Detrás de cada regulación había un privilegio. El Estado estaba cooptado por las corporaciones. Aerolíneas Argentinas costaba USD 8.000 M desde 2008.",
      "Se eliminaron más de 14.500 regulaciones. Aerolíneas pasó a generar ganancias por USD 100 M. Alquileres –30 % real. Récord de pasajeros aéreos.",
    ],
    before: { label: "Argentina regulada", val: "ASFIXIA", desc: "Cada regulación, un curro. Aerolíneas: –USD 8.000 M. Sin oferta de alquileres." },
    after: { label: "Argentina desregulada", val: "14.500+", desc: "Regulaciones eliminadas. Aerolíneas: +USD 100 M. Alquileres –30 % real." },
    callout: "«Tomo el emblemático caso de Aerolíneas Argentinas, que desde 2008 le costó 8.000 millones de dólares a todos los argentinos, y este año generó ganancias por 100 millones de dólares.» — Milei, Congreso 2026",
    gradient: "linear-gradient(135deg, #bf360c, #e65100)",
    imgBefore: "/images/logros/08-antes.png",
    imgAfter: "/images/logros/08-despues.png",
    altBefore: "Cola interminable de trámites, burocracia asfixiante",
    altAfter: "Aerolíneas Argentinas despegando, cielos abiertos",
  },
];

export default function Logros() {
  return (
    <section className="section-light" id="logros">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <div className="section-number">02</div>
            <h2 className="section-title">LOGROS DE GESTIÓN</h2>
            <p className="section-intro">
              Hace dos años, Argentina estaba en crisis terminal. La inflación
              corría al 1 % diario, el Banco Central estaba quebrado, y los
              indicadores sociales eran peores que en 2001. La continuidad misma del país estaba en juego. Este es el antes y
              el después.
            </p>
          </div>
        </FadeIn>

        {/* Pobreza Hero */}
        <FadeIn>
          <div className="pobreza-hero">
            <div className="pobreza-topbar">
              <span className="ptb-badge">01 — POBREZA</span>
              <span className="ptb-line" />
              <span className="ptb-num">EL LOGRO MÁS IMPORTANTE</span>
            </div>
            <div className="pobreza-headline">
              <div className="ph-kicker">
                De la emergencia social al mayor descenso de pobreza en la
                historia
              </div>
              <h3>
                Más de <em>10 millones</em> de argentinos salieron de la pobreza
              </h3>
            </div>
            <div className="pobreza-counters">
              <div className="pc-item">
                <AnimatedCounter target={57} suffix="%" />
                <div className="pc-label">Pobreza heredada</div>
                <div className="pc-sub">Q1 2024 — INDEC</div>
              </div>
              <div className="pc-item">
                <AnimatedCounter target={27} suffix="%" />
                <div className="pc-label">Pobreza actual</div>
                <div className="pc-sub">Q3 2025 — mínima desde 2018</div>
              </div>
              <div className="pc-item">
                <AnimatedCounter target={10} suffix="M+" />
                <div className="pc-label">Salieron de la pobreza</div>
                <div className="pc-sub">En menos de dos años</div>
              </div>
              <div className="pc-item">
                <AnimatedCounter target={5.3} suffix="M" decimals={1} />
                <div className="pc-label">Salieron de la indigencia</div>
                <div className="pc-sub">Del 20,3 % al 4,6 %</div>
              </div>
            </div>
            <div className="pobreza-body">
              <div className="pb-narrative">
                <p>
                  La pobreza estaba en <strong>57 %</strong>, camuflada con
                  controles de precios y maquillaje estadístico. Siete de cada
                  diez chicos eran pobres. Casi 20 millones de personas vivían
                  bajo la línea de pobreza, con una indigencia del 20,3 % — la peor crisis social desde 2001.
                </p>
                <p>
                  La plata de la ayuda social no llegaba a quienes la necesitaban. Las organizaciones sociales operaban como intermediarias: se quedaban con parte de los recursos, administraban la miseria y usaban a los más vulnerables como rehenes para presionar al Estado.
                </p>
                <p>
                  Se eliminaron las transferencias discrecionales. La plata dejó
                  de pasar por la política y empezó a llegar{" "}
                  <strong>directo</strong>. La AUH aumentó un{" "}
                  <strong>492,9 %</strong>. Se incorporaron{" "}
                  <strong>600.000 chicos</strong>. La prestación Alimentar creció 137,5 %. Las becas Primera Infancia más de 500 % y Primeros Mil Días más de 1.100 %. Para el tercer trimestre de
                  2025, la pobreza cayó al <strong>26,9 %</strong> — el valor más bajo desde 2018.
                </p>
              </div>
              <div className="pb-flow">
                <div className="pb-flow-card card-antes">
                  <div className="fc-tag">HERENCIA</div>
                  <div className="fc-big">57 %</div>
                  <div className="fc-desc">
                    Casi 20 M de personas bajo la línea de pobreza. Indigencia:
                    20,3 %. 7 de cada 10 chicos eran pobres.
                  </div>
                </div>
                <div className="pb-flow-arrow">▼</div>
                <div className="pb-flow-card card-despues">
                  <div className="fc-tag">Q3 2025</div>
                  <div className="fc-big">26,9 %</div>
                  <div className="fc-desc">
                    Mínimo desde 2018. 10 M+ salieron de la pobreza, 5,3 M de
                    la indigencia. AUH +493 %.
                  </div>
                </div>
              </div>
            </div>
            <div className="pobreza-pills">
              {[
                { val: "+493%", lbl: "AUH" },
                { val: "600K", lbl: "Chicos incorporados" },
                { val: "+137%", lbl: "Alimentar" },
                { val: "+500%", lbl: "Becas Primera Infancia" },
                { val: "+1.100%", lbl: "Primeros Mil Días" },
              ].map((p) => (
                <div className="pp-pill" key={p.lbl}>
                  <span className="pill-val">{p.val}</span>
                  <span className="pill-lbl">{p.lbl}</span>
                </div>
              ))}
            </div>
            <div className="pobreza-quote">
              <p>
                «Robar está mal, pero robarle el pan de la boca a los más
                vulnerables, haciéndolos esclavos para amasar poder, excede a
                cualquier adjetivo que se pueda encontrar en el diccionario.»
              </p>
              <span className="pq-attr">— Milei, Congreso 2026</span>
            </div>
            <div style={{ height: "2.5rem" }} />
          </div>
        </FadeIn>

        {logros.map((l) => (
          <LogroCard key={l.num} {...l} />
        ))}
      </div>
    </section>
  );
}

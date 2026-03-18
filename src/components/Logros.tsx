import FadeIn from "./FadeIn";

interface LogroCardProps {
  num: string;
  badge: string;
  title: string;
  paragraphs: string[];
  before: { label: string; val: string; desc: string };
  after: { label: string; val: string; desc: string };
  callout: string;
  gradient: string;
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
  reverse = false,
}: LogroCardProps) {
  return (
    <FadeIn>
      <div className={`logro-hero ${reverse ? "reverse" : ""}`}>
        <div className="lh-inner">
          {!reverse && (
            <div className="lh-img" style={{ background: gradient }}>
              <div className="lh-badge">{badge}</div>
            </div>
          )}
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
          {reverse && (
            <div className="lh-img" style={{ background: gradient }}>
              <div className="lh-badge">{badge}</div>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

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
              indicadores sociales eran peores que en 2001. Este es el antes y
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
                <div className="pc-val">57%</div>
                <div className="pc-label">Pobreza heredada</div>
                <div className="pc-sub">Q1 2024 — INDEC</div>
              </div>
              <div className="pc-item">
                <div className="pc-val">27%</div>
                <div className="pc-label">Pobreza actual</div>
                <div className="pc-sub">Q3 2025 — mínima desde 2018</div>
              </div>
              <div className="pc-item">
                <div className="pc-val">10M+</div>
                <div className="pc-label">Salieron de la pobreza</div>
                <div className="pc-sub">En menos de dos años</div>
              </div>
              <div className="pc-item">
                <div className="pc-val">5.3M</div>
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
                  bajo la línea de pobreza.
                </p>
                <p>
                  Se eliminaron las transferencias discrecionales. La plata dejó
                  de pasar por la política y empezó a llegar{" "}
                  <strong>directo</strong>. La AUH aumentó un{" "}
                  <strong>492,9 %</strong>. Se incorporaron{" "}
                  <strong>600.000 chicos</strong>. Para el tercer trimestre de
                  2025, la pobreza cayó al <strong>26,9 %</strong>.
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

        {/* Other Logros */}
        <LogroCard
          num="02"
          badge="02 — ESTABILIZACIÓN"
          title="Se evitó la hiperinflación: se desactivó la bomba del Plan Platita"
          paragraphs={[
            "Sergio Massa lanzó el «Plan Platita» tras quedar tercero en las PASO de agosto 2023: inyectó 1,3 % del PBI en bonos. En un año emitió trece bases monetarias. La inflación mayorista viajaba al 17.000 % anualizado.",
            "Se resolvió de forma opuesta a cualquier antecedente: sin expropiaciones, sin Plan Bonex, sin controles de precios — todo a libre mercado. La hiper se evitó.",
          ]}
          before={{
            label: "Herencia del Plan Platita",
            val: "17.000%",
            desc: "Inflación mayorista anualizada. 13 bases monetarias emitidas. Déficit consolidado 15 % PBI.",
          }}
          after={{
            label: "Resultado",
            val: "HIPER EVITADA",
            desc: "Cuasifiscal eliminado en 6 meses. Sin Bonex, sin controles — a puro mercado libre.",
          }}
          callout="«Con un plan platita te la ponés de sombrero con la inflación.» — Milei"
          gradient="linear-gradient(135deg, #b71c1c, #d32f2f)"
        />

        <LogroCard
          num="03"
          badge="03 — ORDEN"
          title="No más piquetes: la calle es de todos"
          paragraphs={[
            "Había 9.000 piquetes por año. Organizaciones sociales con financiamiento estatal cortaban rutas con total impunidad.",
            "Ahora: cero. Se implementó el protocolo antipiquetes y se eliminaron las transferencias discrecionales a intermediarios.",
          ]}
          before={{
            label: "Antes",
            val: "9.000",
            desc: "Piquetes por año. Financiados con plata de la ayuda social.",
          }}
          after={{
            label: "Ahora",
            val: "0",
            desc: "Cero cortes. Protocolo antipiquetes. Transferencias directas.",
          }}
          callout="«Robar está mal, pero robarle el pan de la boca a los más vulnerables excede a cualquier adjetivo.» — Milei, Congreso 2026"
          gradient="linear-gradient(135deg, #4a148c, #7b1fa2)"
          reverse
        />

        <LogroCard
          num="04"
          badge="04 — DESINFLACIÓN"
          title="La inflación se pulverizó: del 17.000 % anualizado al 30 %"
          paragraphs={[
            "En la primera semana de diciembre 2023, la inflación corría al 1 % diario. La mayorista estaba en 54 % mensual — 17.000 % anualizado.",
            "Hoy: 2,9 % mensual. Interanual ~30 %. Sin fijar tipo de cambio, sin controlar precios.",
          ]}
          before={{
            label: "Dic 2023 — Herencia",
            val: "17.000%",
            desc: "Inflación mayorista anualizada. 25,5 % mensual minorista.",
          }}
          after={{
            label: "2026 — Hoy",
            val: "~30%",
            desc: "Interanual. 2,9 % mensual (feb 2026). Sin controles — a puro mercado.",
          }}
          callout="«Mi ministro de Economía, Toto Caputo, va a ser recordado como el mejor ministro de Economía de la historia.» — Milei"
          gradient="linear-gradient(135deg, #e65100, #ff8f00)"
        />

        <LogroCard
          num="05"
          badge="05 — FISCAL"
          title="Déficit cero: primer presupuesto equilibrado en 100 años"
          paragraphs={[
            "Había 15 puntos de déficit fiscal consolidado: cinco del Tesoro y diez escondidos debajo de la alfombra del Banco Central.",
            "Ahora: superávit. Se aprobó el primer presupuesto equilibrado, libre de default, en 100 años. Se bajó de 22 a 7 ministerios y se bajaron impuestos por 2,5 puntos del PBI.",
          ]}
          before={{
            label: "Herencia",
            val: "–15% PBI",
            desc: "Déficit consolidado. 22 ministerios. Emisión descontrolada. Brecha 300 %.",
          }}
          after={{
            label: "Ahora",
            val: "SUPERÁVIT",
            desc: "1.er presupuesto equilibrado en 100 años. 7 ministerios. Gasto –30 %.",
          }}
          callout="«Hemos logrado un superávit fiscal sostenido, libre de default, por primera vez en los últimos 123 años.» — Milei"
          gradient="linear-gradient(135deg, #1a237e, #283593)"
          reverse
        />

        <LogroCard
          num="06"
          badge="06 — CREDIBILIDAD"
          title="El riesgo país se desplomó: Argentina volvió al mundo"
          paragraphs={[
            "El riesgo país superaba los 2.000 puntos. Nadie quería prestarle un dólar a la Argentina.",
            "Tras las legislativas de octubre 2025, se desplomó a 652 puntos. Una baja de 2.500 puntos básicos. Se cerró un acuerdo con el FMI por USD 20.000 M.",
          ]}
          before={{
            label: "Herencia",
            val: "2.000+ pts",
            desc: "Sin acceso a mercados. Sin crédito. Argentina aislada.",
          }}
          after={{
            label: "Post legislativas 2025",
            val: "652 pts",
            desc: "–2.500 pb. FMI USD 20.000 M. Inversiones USD 55.000 M.",
          }}
          callout="«Encontré compañeros en todos los rincones del mundo para conformar una alianza internacional de naciones libres.» — Milei, Davos 2025"
          gradient="linear-gradient(135deg, #0d47a1, #1565c0)"
        />

        <LogroCard
          num="07"
          badge="07 — SEGURIDAD"
          title="Tasa de homicidios más baja en 25 años — y la más baja de Sudamérica"
          paragraphs={[
            "Las calles eran un baño de sangre. El narcotráfico había tomado Rosario.",
            "Los homicidios bajaron 17 % a nivel nacional. En Rosario cayeron 65 %. Argentina registró 3,8 homicidios por 100.000 habitantes: la tasa más baja de toda Sudamérica.",
          ]}
          before={{
            label: "Herencia",
            val: "4,4",
            desc: "Homicidios/100K. Rosario: 261 asesinatos. Fronteras: colador.",
          }}
          after={{
            label: "2024",
            val: "3,8",
            desc: "Tasa más baja de Sudamérica y en 25 años. Rosario –65 %.",
          }}
          callout="«Tuvimos el índice de homicidios más bajo de Sudamérica.» — Milei, Congreso 2025"
          gradient="linear-gradient(135deg, #1b5e20, #2e7d32)"
          reverse
        />

        <LogroCard
          num="08"
          badge="08 — DESREGULACIÓN"
          title="14.500 desregulaciones: la motosierra de Sturzenegger"
          paragraphs={[
            "Detrás de cada regulación había un privilegio. El Estado estaba cooptado por las corporaciones. Aerolíneas Argentinas costaba USD 8.000 M desde 2008.",
            "Se eliminaron más de 14.500 regulaciones. Aerolíneas pasó a generar ganancias por USD 100 M. Alquileres –30 % real. Récord de pasajeros aéreos.",
          ]}
          before={{
            label: "Argentina regulada",
            val: "ASFIXIA",
            desc: "Cada regulación, un curro. Aerolíneas: –USD 8.000 M. Sin oferta de alquileres.",
          }}
          after={{
            label: "Argentina desregulada",
            val: "14.500+",
            desc: "Regulaciones eliminadas. Aerolíneas: +USD 100 M. Alquileres –30 % real.",
          }}
          callout="«Tomo el emblemático caso de Aerolíneas Argentinas, que desde 2008 le costó 8.000 millones de dólares a todos los argentinos, y este año generó ganancias por 100 millones de dólares.» — Milei, Congreso 2026"
          gradient="linear-gradient(135deg, #bf360c, #e65100)"
        />
      </div>
    </section>
  );
}

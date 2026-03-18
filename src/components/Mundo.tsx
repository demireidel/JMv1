"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const leaders = [
  { flag: "🇺🇸", name: "Donald Trump", role: "Presidente de EE.UU." },
  { flag: "🇮🇹", name: "Giorgia Meloni", role: "Primera Ministra de Italia" },
  { flag: "🇫🇷", name: "Emmanuel Macron", role: "Presidente de Francia" },
  { flag: "🇮🇱", name: "Benjamin Netanyahu", role: "PM de Israel" },
  { flag: "🇺🇸", name: "Elon Musk", role: "Tesla, X, SpaceX" },
  { flag: "🇺🇸", name: "Sam Altman", role: "CEO de OpenAI" },
  { flag: "🇺🇸", name: "Tim Cook", role: "CEO de Apple" },
  { flag: "🇺🇸", name: "Mark Zuckerberg", role: "CEO de Meta" },
  { flag: "🇸🇻", name: "Nayib Bukele", role: "Presidente de El Salvador" },
  { flag: "🌐", name: "K. Georgieva", role: "Directora del FMI" },
  { flag: "🇺🇸", name: "Jamie Dimon", role: "CEO de JP Morgan" },
  { flag: "🇺🇸", name: "Sundar Pichai", role: "CEO de Google" },
  { flag: "🇺🇸", name: "Scott Bessent", role: "Secretario del Tesoro" },
  { flag: "🇨🇱", name: "José A. Kast", role: "Presidente de Chile" },
  { flag: "🇭🇺", name: "Viktor Orbán", role: "PM de Hungría" },
];

const timeline = [
  { date: "ENE 2024", title: "Davos I", desc: "Primer discurso ante el WEF. Argentina vuelve a la mesa global." },
  { date: "ABR 2025", title: "Acuerdo FMI — USD 20.000M", desc: "Programa de 48 meses. Primer desembolso de USD 12.000M. Nuevo régimen cambiario." },
  { date: "JUL 2025", title: "1ª Revisión FMI aprobada", desc: "Desembolso adicional de USD 2.000M. Retorno a mercados de capital." },
  { date: "SEP 2025", title: "TLC Mercosur — EFTA firmado", desc: "Zona de 300M de personas. 100% arancel cero industrial." },
  { date: "OCT 2025", title: "Swap USD 20.000M con EE.UU.", desc: "Bessent activa Fondo de Estabilización. Compra de bonos soberanos argentinos." },
  { date: "OCT 2025", title: "Casa Blanca — Bilateral formal", desc: "Primer líder sudamericano recibido por Trump. Almuerzo con delegaciones. Salón Oval." },
  { date: "NOV 2025", title: "Marco del Acuerdo Comercial con EE.UU.", desc: "Casa Blanca anuncia el framework bilateral. Inicio de negociación de detalles." },
  { date: "ENE 2026", title: "Firma Mercosur — UE en Asunción", desc: "Acuerdo de Asociación + Acuerdo Comercial Interino. 700M de personas. 30% PBI global." },
  { date: "ENE 2026", title: "Davos III + Board of Peace", desc: "Tercer Special Address consecutivo. Firma del Board of Peace junto a Trump." },
  { date: "FEB 2026", title: "Firma TLC Argentina — EE.UU.", desc: "Primer TLC entre EE.UU. y país sudamericano. 1.675 productos sin arancel. Acuerdo de minerales críticos." },
  { date: "MAR 2026", title: "Shield of the Americas", desc: "Coalición de 12 naciones en Miami. Seguridad hemisférica contra el narcoterrorismo." },
  { date: "MAR 2026", title: "Argentina Week NYC", desc: "300+ empresarios. Inauguración con Jamie Dimon (JP Morgan). Gobernadores promocionando inversión." },
];

function AnimatedNumber({ target, prefix = "", suffix = "", formatDot = false }: { target: number; prefix?: string; suffix?: string; formatDot?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const animated = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 2000;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * progress);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  const display = formatDot ? value.toLocaleString("es-AR") : value.toLocaleString();
  return <div ref={ref} className="ms-v">{prefix}{display}{suffix}</div>;
}

export default function Mundo() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="mundo" style={{ minHeight: 600, alignItems: "flex-end" }}>
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.argentina.gob.ar/sites/default/files/mtso1410.jpg"
            alt="Argentina en el mundo"
            style={{ objectPosition: "center 30%", filter: "brightness(0.28) contrast(1.15) saturate(0.85)" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-accent" />
        <div style={{ position: "relative", zIndex: 10, padding: "0 5vw 7vh", maxWidth: 900 }}>
          <p className="hero-subtitle" style={{ textAlign: "left", letterSpacing: 5, fontSize: "0.7rem" }}>
            Sección 05 — Inserción Internacional
          </p>
          <h2 className="hero-name" style={{ textAlign: "left" }}>
            ARGENTINA
            <br />
            EN EL MUNDO
          </h2>
        </div>
      </section>

      {/* Mega Stats */}
      <div className="mega-stats">
        <div className="mega-inner">
          <div className="ms-item">
            <div className="ms-v">1er</div>
            <div className="ms-l">País sudamericano</div>
            <div className="ms-d">en firmar TLC con EE.UU.</div>
          </div>
          <div className="ms-item">
            <AnimatedNumber target={1675} formatDot />
            <div className="ms-l">Productos argentinos</div>
            <div className="ms-d">con aranceles eliminados</div>
          </div>
          <div className="ms-item">
            <AnimatedNumber target={1013} prefix="$" suffix="M" />
            <div className="ms-l">Exportaciones recuperadas</div>
            <div className="ms-d">acceso directo a EE.UU.</div>
          </div>
          <div className="ms-item">
            <AnimatedNumber target={100} suffix="K tn" />
            <div className="ms-l">Carne bovina</div>
            <div className="ms-d">cuota sin arancel a EE.UU.</div>
          </div>
          <div className="ms-item">
            <AnimatedNumber target={92} suffix="%" />
            <div className="ms-l">Aranceles eliminados</div>
            <div className="ms-d">por la UE para Mercosur</div>
          </div>
        </div>
      </div>

      {/* Acuerdos */}
      <section className="section-light" id="acuerdos">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="section-number">05</div>
              <h2 className="section-title">ACUERDOS COMERCIALES</h2>
              <p className="section-intro">
                En dos años, Argentina firmó tres acuerdos de libre comercio
                históricos que abren mercados para más de mil millones de
                consumidores.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* EE.UU. */}
            <FadeIn>
              <div className="agr-card">
                <div className="agr-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.argentina.gob.ar/sites/default/files/mtb1410.jpg" alt="Acuerdo Argentina-EE.UU." />
                  <div className="agr-badge">🇺🇸🇦🇷 Firmado Feb 2026</div>
                </div>
                <div className="agr-body">
                  <div className="agr-tag">Acuerdo Bilateral Histórico</div>
                  <h3>Acuerdo de Comercio e Inversión Recíproco con Estados Unidos</h3>
                  <p>
                    Primer acuerdo de libre comercio entre EE.UU. y un país
                    sudamericano. Eliminación de aranceles recíprocos para 1.675
                    productos argentinos y 221 posiciones norteamericanas. Cuota
                    de 100.000 toneladas de carne bovina sin arancel. Compromiso
                    de revisión de aranceles al acero y aluminio. Financiamiento
                    vía EXIM Bank y DFC para inversiones en sectores críticos.
                  </p>
                  <div className="key-facts">
                    <span className="kf kf-gold">USD 1.013M en exportaciones</span>
                    <span className="kf kf-blue">1.675 productos sin arancel</span>
                    <span className="kf kf-green">Minerales críticos</span>
                    <span className="kf kf-gold">Propiedad intelectual</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Mercosur-UE */}
            <FadeIn>
              <div className="agr-card reverse">
                <div className="agr-body">
                  <div className="agr-tag">Acuerdo de Asociación</div>
                  <h3>Mercosur — Unión Europea: mercado de 700 millones de personas</h3>
                  <p>
                    Tras 25 años de negociación, se firmó en enero 2026 en
                    Asunción. La UE eliminará aranceles para el 92% de las
                    exportaciones del Mercosur. Las exportaciones argentinas a la
                    UE podrían crecer 76% en 5 años y 122% en 10, pasando de USD
                    8.641M a USD 19.165M. Incluye pilares comercial, político y
                    de cooperación en ciencia, tecnología y medio ambiente.
                  </p>
                  <div className="key-facts">
                    <span className="kf kf-gold">700 millones de consumidores</span>
                    <span className="kf kf-blue">30% del PBI mundial</span>
                    <span className="kf kf-green">+122% exportaciones en 10 años</span>
                  </div>
                </div>
                <div className="agr-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.argentina.gob.ar/sites/default/files/g20fotofamilia.jpg" alt="Mercosur-UE" />
                  <div className="agr-badge">🇪🇺 Firmado Ene 2026</div>
                </div>
              </div>
            </FadeIn>

            {/* Mercosur-EFTA */}
            <FadeIn>
              <div className="agr-card">
                <div className="agr-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.argentina.gob.ar/sites/default/files/milei_3-_europa_viva_24.jpeg" alt="Mercosur-EFTA" />
                  <div className="agr-badge">🇨🇭🇳🇴 Firmado Sep 2025</div>
                </div>
                <div className="agr-body">
                  <div className="agr-tag">Tratado de Libre Comercio</div>
                  <h3>Mercosur — EFTA: Suiza, Noruega, Islandia y Liechtenstein</h3>
                  <p>
                    Firmado en Río de Janeiro tras 8 años de negociación. EFTA
                    eliminará 100% de aranceles industriales y pesqueros.
                    Preferencias inmediatas para carne, café, etanol y vino. Zona
                    de 300 millones de personas con PBI combinado de USD 4,3
                    billones. Argentina fue sede de las tres últimas rondas de
                    negociación en Buenos Aires.
                  </p>
                  <div className="key-facts">
                    <span className="kf kf-gold">300M de consumidores</span>
                    <span className="kf kf-blue">100% arancel cero industrial</span>
                    <span className="kf kf-green">USD 4,3B PBI combinado</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cooperación */}
      <section style={{ background: "var(--dark)", color: "white" }}>
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="section-number" style={{ color: "var(--sol)" }}>05</div>
              <h2 className="section-title" style={{ color: "white" }}>COOPERACIÓN Y FINANCIAMIENTO</h2>
              <p className="section-intro" style={{ color: "rgba(255,255,255,0.5)" }}>
                Argentina aseguró respaldo financiero histórico, cooperación en
                seguridad hemisférica, y posicionamiento como destino de inversión
                en energía e inteligencia artificial.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="agr-card-dark" style={{ marginBottom: "2rem" }}>
              <div className="agr-body" style={{ padding: "2.5rem" }}>
                <div className="agr-tag">Respaldo Financiero</div>
                <h3>Acuerdo FMI por USD 20.000M + Swap del Tesoro de EE.UU. por USD 20.000M</h3>
                <p>
                  En abril 2025, el FMI aprobó un programa de 48 meses por USD
                  20.000M bajo el Servicio Ampliado, con un primer desembolso de
                  USD 12.000M. En paralelo, el Tesoro de EE.UU. activó un swap
                  de divisas por USD 20.000M, compra de bonos soberanos y crédito
                  stand-by. Primera revisión aprobada en julio 2025 con
                  desembolso adicional de USD 2.000M. Argentina volvió a los
                  mercados internacionales de capital antes de lo previsto.
                </p>
                <div className="key-facts">
                  <span className="kf kf-gold">USD 40.000M en respaldo total</span>
                  <span className="kf kf-blue">Banda cambiaria flexible</span>
                  <span className="kf kf-green">Retorno a mercados de capital</span>
                </div>
              </div>
              <div className="agr-img" style={{ minHeight: 280, background: "var(--navy)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.argentina.gob.ar/sites/default/files/banga01.jpg" alt="Acuerdo financiero" />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="coop-grid">
              {[
                { icon: "🛡️", title: "Escudo de las Américas", desc: "Coalición hemisférica de 12 naciones contra el narcoterrorismo e interferencia extranjera. Co-liderada con EE.UU. Firmada en Miami, marzo 2026." },
                { icon: "⚡", title: "RIGI — Grandes Inversiones", desc: "Régimen de incentivos para inversiones estratégicas en energía, minería, tecnología e infraestructura. Vaca Muerta, GNL, litio y data centers de IA." },
                { icon: "🤖", title: "Hub de Inteligencia Artificial", desc: "Primera Semana de IA en Argentina. Reuniones con CEOs de Apple, Meta, Tesla, OpenAI y Google. Posicionamiento como polo de IA en América Latina." },
                { icon: "⚛️", title: "Plan Nuclear + SMR", desc: "Reactivación de Nucleoeléctrica Argentina. Plan de reactores modulares pequeños (SMR) para data centers y energía limpia. Cooperación con EE.UU." },
                { icon: "🔗", title: "Minerales Críticos", desc: "Acuerdo bilateral con EE.UU. sobre litio, tierras raras y cadenas de suministro. Reciclaje de baterías y seguridad de inversiones conjuntas." },
                { icon: "🌍", title: "Seguridad Económica", desc: "Alineamiento con EE.UU. en controles de exportación, seguridad de inversiones y protección frente a prácticas no mercantiles de terceros estados." },
              ].map((c) => (
                <div className="coop-item" key={c.title}>
                  <div className="ci-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leaders */}
      <section className="section-light">
        <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <FadeIn>
            <div className="leaders-wrap">
              <h3>SOCIOS ESTRATÉGICOS Y LÍDERES</h3>
              <div className="leaders-g">
                {leaders.map((l) => (
                  <div className="lb" key={l.name}>
                    <span className="fl">{l.flag}</span>
                    <div>
                      <h5>{l.name}</h5>
                      <span className="r">{l.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="tl-section">
        <div className="tl-inner">
          <FadeIn>
            <div className="tl-hdr">
              <h3>CRONOLOGÍA DE RESULTADOS</h3>
              <p>Cada acuerdo, cada firma, cada logro concreto</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="tl">
              {timeline.map((t, i) => (
                <div className="tl-i" key={i}>
                  {i % 2 === 0 ? (
                    <>
                      <div className="tl-c">
                        <div className="tl-d">{t.date}</div>
                        <h4>{t.title}</h4>
                        <p>{t.desc}</p>
                      </div>
                      <div className="tl-dot" />
                      <div style={{ width: "calc(50% - 36px)" }} />
                    </>
                  ) : (
                    <>
                      <div style={{ width: "calc(50% - 36px)" }} />
                      <div className="tl-dot" />
                      <div className="tl-c">
                        <div className="tl-d">{t.date}</div>
                        <h4>{t.title}</h4>
                        <p>{t.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

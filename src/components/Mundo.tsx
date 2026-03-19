"use client";

import FadeIn from "./FadeIn";
import { useAnimatedNumber } from "@/hooks";
import {
  megaStats,
  tradeAgreements,
  financialSupport,
} from "@/data/mundo";

function AnimatedStat({
  target,
  prefix = "",
  suffix = "",
  formatDot = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  formatDot?: boolean;
}) {
  const { ref, display } = useAnimatedNumber({
    target,
    formatLocale: formatDot,
  });
  return (
    <div ref={ref} className="ms-v">
      {prefix}
      {display}
      {suffix}
    </div>
  );
}

export default function Mundo() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="mundo" style={{ minHeight: 600, alignItems: "flex-end" }}>
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/strip/bilateral-casablanca.jpg"
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
          <h2 className="hero-name" style={{ textAlign: "left", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            ARGENTINA
            <br />
            EN EL MUNDO
          </h2>
        </div>
      </section>

      {/* Mega Stats */}
      <div className="mega-stats">
        <div className="mega-inner">
          {megaStats.map((stat) => (
            <div className="ms-item" key={stat.label}>
              {stat.animated ? (
                <AnimatedStat
                  target={stat.animated.target}
                  prefix={stat.animated.prefix}
                  suffix={stat.animated.suffix}
                  formatDot={stat.animated.formatDot}
                />
              ) : (
                <div className="ms-v">{stat.value}</div>
              )}
              <div className="ms-l">{stat.label}</div>
              <div className="ms-d">{stat.detail}</div>
            </div>
          ))}
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
            {tradeAgreements.map((agreement) => (
              <FadeIn key={agreement.title}>
                <div className={`agr-card${agreement.reverse ? " reverse" : ""}`}>
                  {agreement.reverse ? (
                    <>
                      <div className="agr-body">
                        <div className="agr-tag">{agreement.tag}</div>
                        <h3>{agreement.title}</h3>
                        <p>{agreement.description}</p>
                        <div className="key-facts">
                          {agreement.keyFacts.map((kf) => (
                            <span className={`kf kf-${kf.color}`} key={kf.text}>{kf.text}</span>
                          ))}
                        </div>
                      </div>
                      <div className="agr-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={agreement.image} alt={agreement.imageAlt} />
                        <div className="agr-badge">{agreement.badge}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="agr-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={agreement.image} alt={agreement.imageAlt} />
                        <div className="agr-badge">{agreement.badge}</div>
                      </div>
                      <div className="agr-body">
                        <div className="agr-tag">{agreement.tag}</div>
                        <h3>{agreement.title}</h3>
                        <p>{agreement.description}</p>
                        <div className="key-facts">
                          {agreement.keyFacts.map((kf) => (
                            <span className={`kf kf-${kf.color}`} key={kf.text}>{kf.text}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </FadeIn>
            ))}
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
                <div className="agr-tag">{financialSupport.tag}</div>
                <h3>{financialSupport.title}</h3>
                <p>{financialSupport.description}</p>
                <div className="key-facts">
                  {financialSupport.keyFacts.map((kf) => (
                    <span className={`kf kf-${kf.color}`} key={kf.text}>{kf.text}</span>
                  ))}
                </div>
              </div>
              <div className="agr-img" style={{ minHeight: 280, background: "var(--navy)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={financialSupport.image} alt={financialSupport.imageAlt} />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mundo-closing" style={{ textAlign: "center", padding: "4rem 2rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
              <p style={{ fontFamily: "var(--font-playfair-display), serif", fontSize: "1.3rem", fontStyle: "italic", color: "var(--sol)", lineHeight: "1.6", opacity: 0.85 }}>
                &ldquo;Argentina dejó de ser un país cerrado y aislado. Hoy somos socios estratégicos de las dos economías más grandes del mundo y firmamos más acuerdos comerciales en dos años que en las últimas cuatro décadas.&rdquo;
              </p>
              <p style={{ fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "1rem", fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                Milei, Congreso 2026
              </p>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}

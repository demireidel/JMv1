"use client";

import FadeIn from "../ui/FadeIn";
import { useAnimatedNumber } from "@/hooks";
import {
  megaStats,
  tradeAgreements,
  financialSupport,
  cooperationGrid,
  cooperacionHeader,
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
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero" id="mundo" style={{ minHeight: 680, alignItems: "flex-end" }}>
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/banco/miami-cumbre-trump-lideres.jpg"
            alt="Argentina en el mundo"
            style={{ objectPosition: "center 30%", filter: "brightness(0.22) contrast(1.2) saturate(0.8)" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-accent" />
        <div style={{ position: "relative", zIndex: 10, padding: "0 5vw 9vh", maxWidth: 960 }}>
          <FadeIn>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", letterSpacing: 6, fontSize: "0.65rem", marginBottom: "1.2rem" }}
            >
              Inserción Internacional
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2
              className="hero-name"
              style={{
                textAlign: "left",
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
              }}
            >
              ARGENTINA
              <br />
              EN EL MUNDO
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ── Mega Stats ──────────────────────────────────────── */}
      <div className="mega-stats">
        <div className="mega-inner" style={{ gap: "2.5rem 3rem" }}>
          {megaStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="ms-item">
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
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Trade Agreements ────────────────────────────────── */}
      <section style={{ background: "var(--dark)", color: "white", padding: "6rem 0 4rem" }} id="acuerdos">
        <div className="container">
          <FadeIn>
            <div className="mundo-section-divider" style={{ marginBottom: "2rem" }}>
              <span className="line" />
              <span className="label">ACUERDOS COMERCIALES</span>
              <span className="line" />
            </div>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", maxWidth: 650, margin: "0 auto 3.5rem", lineHeight: 1.6 }}>
              En dos años, Argentina firmó tres acuerdos de libre comercio históricos que abren mercados para más de mil millones de consumidores.
            </p>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {tradeAgreements.map((agreement, i) => (
              <FadeIn key={agreement.title} delay={i * 0.12}>
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

      {/* ── Financial Support ───────────────────────────────── */}
      <section style={{ background: "var(--dark)", color: "white", padding: "4rem 0" }}>
        <div className="container">
          <FadeIn>
            <div className="mundo-section-divider" style={{ marginBottom: "2rem" }}>
              <span className="line" />
              <span className="label">{cooperacionHeader.sectionTitle}</span>
              <span className="line" />
            </div>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", maxWidth: 650, margin: "0 auto 3.5rem", lineHeight: 1.6 }}>
              {cooperacionHeader.sectionIntro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="agr-card-dark" style={{ marginBottom: "3rem" }}>
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
        </div>
      </section>

      {/* ── Cooperation Grid ────────────────────────────────── */}
      <section style={{ background: "var(--dark)", color: "white", padding: "2rem 0 6rem" }}>
        <div className="container">
          <div className="mundo-coop-grid">
            {cooperationGrid.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="mundo-coop-item">
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <h4 style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    fontSize: "1.15rem",
                    letterSpacing: "0.06em",
                    color: "var(--sol)",
                    marginBottom: "0.5rem",
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing Quote ───────────────────────────────────── */}
      <section style={{ background: "var(--dark)", color: "white", padding: "2rem 0 6rem" }}>
        <div className="container">
          <FadeIn delay={0.2}>
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              maxWidth: 820,
              margin: "0 auto",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{
                width: 40,
                height: 2,
                background: "var(--sol)",
                margin: "0 auto 2.5rem",
                opacity: 0.6,
              }} />
              <p style={{
                fontFamily: "var(--font-playfair-display), serif",
                fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                fontStyle: "italic",
                color: "var(--sol)",
                lineHeight: 1.7,
                opacity: 0.9,
                maxWidth: 700,
                margin: "0 auto",
              }}>
                &ldquo;Argentina dejó de ser un país cerrado y aislado. Hoy somos socios estratégicos de las dos economías más grandes del mundo y firmamos más acuerdos comerciales en dos años que en las últimas cuatro décadas.&rdquo;
              </p>
              <p style={{
                fontSize: "0.72rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginTop: "1.5rem",
                fontFamily: "var(--font-bebas-neue), sans-serif",
              }}>
                Milei, Congreso 2026
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

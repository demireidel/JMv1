"use client";

import FadeIn from "./FadeIn";
import {
  collabProject,
  conversionQuote,
  influencias,
  reconocimientos,
} from "@/data/archivo";

export default function Economia() {
  return (
    <section id="economia" className="section-dark" style={{ paddingTop: 0, paddingBottom: "6rem" }}>

      {/* ─── HERO ─── */}
      <div className="arc-hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/paper/milei-reidel.jpg" alt="Milei y Reidel — Reescribiendo la teoría económica" style={{ objectPosition: "center 30%" }} />
        <div className="arc-hero-overlay" />
      </div>

      <div className="arc-hero-text">
        <FadeIn>
          <p className="arc-hero-eyebrow">SECCIÓN 06</p>
          <h2 className="arc-hero-title">ECONOMÍA</h2>
          <p className="arc-hero-subtitle">
            Milei-Reidel Paper — Reescribiendo la teoría económica
          </p>
        </FadeIn>
      </div>

      {/* ─── CONTENT ─── */}
      <div className="arc-content">
        <div className="arc-panel">
          <div className="arc-panel-header">
            <h3 className="arc-panel-title">Milei-Reidel Paper</h3>
            <p className="arc-panel-desc">
              El paper que demuestra que los rendimientos crecientes a escala no justifican la intervención estatal — presentado en Davos, enero 2026.
            </p>
          </div>

          <FadeIn>
            <div className="arc-collab-card">
              <div className="arc-collab-badge">{collabProject.badge}</div>
              <h3 className="arc-collab-title">&ldquo;{collabProject.title}&rdquo;</h3>
              <p className="arc-collab-subtitle" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.3rem" }}>
                {collabProject.subtitle}
              </p>
              <p className="arc-collab-authors" style={{ fontSize: "0.8rem", color: "var(--sol)", letterSpacing: "1px", marginBottom: "1.5rem", fontFamily: "var(--font-bebas-neue), sans-serif", textTransform: "uppercase" }}>
                {collabProject.authors}
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--celeste)", marginBottom: "0.8rem", fontFamily: "var(--font-bebas-neue), sans-serif" }}>ABSTRACT</h4>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.78)", lineHeight: "1.7", fontStyle: "italic" }}>{collabProject.abstract}</p>
              </div>

              <p className="arc-collab-desc">{collabProject.desc}</p>

              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--celeste)", marginBottom: "0.8rem", fontFamily: "var(--font-bebas-neue), sans-serif" }}>RESULTADOS CLAVE</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {collabProject.keyResults.map((r, i) => (
                    <li key={i} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.82)", lineHeight: "1.6", paddingLeft: "1.2rem", borderLeft: "2px solid rgba(246,180,14,0.25)", }}>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "1.2rem", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>
                <strong style={{ color: "rgba(255,255,255,0.6)" }}>Keywords:</strong> {collabProject.keywords}
              </div>

              <a
                href="/milei-reidel-paper.pdf"
                download
                className="arc-download-btn"
              >
                Descargar Paper (PDF)
              </a>

              <div className="arc-collab-quote-block">
                <span className="arc-collab-qmark">&ldquo;</span>
                <blockquote>{collabProject.quote}</blockquote>
                <cite>{collabProject.quoteCite}</cite>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="arc-conversion">
              <span className="arc-conversion-qmark">&ldquo;</span>
              <blockquote>
                {conversionQuote.text.split("La Acción Humana").map((part, i) =>
                  i === 0 ? part : <span key={i}><em>La Acción Humana</em>{part}</span>
                )}
              </blockquote>
              <cite>{conversionQuote.cite}</cite>
            </div>
          </FadeIn>

          {/* Influencias + Reconocimientos */}
          <FadeIn>
            <div className="arc-divider" style={{ marginTop: "3rem" }}>
              <span className="arc-divider-line" />
              <span className="arc-divider-label">INFLUENCIAS INTELECTUALES</span>
              <span className="arc-divider-line" />
            </div>
            <div className="arc-influences-grid">
              {influencias.map((inf, i) => (
                <div key={i} className="arc-influence-card">
                  <h5 className="arc-influence-card-school">{inf.school}</h5>
                  <p className="arc-influence-card-names">{inf.names}</p>
                  {inf.keyWork && <p className="arc-influence-card-works">{inf.keyWork}</p>}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <div className="arc-divider" style={{ marginTop: "3rem" }}>
              <span className="arc-divider-line" />
              <span className="arc-divider-label">RECONOCIMIENTOS</span>
              <span className="arc-divider-line" />
            </div>
            <div className="arc-awards-strip">
              {reconocimientos.map((r, i) => (
                <div key={i} className="arc-award-badge">
                  <span className="arc-award-badge-icon">&#9670;</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

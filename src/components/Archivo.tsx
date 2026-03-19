"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import FadeIn from "./FadeIn";
import {
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
  collabProject,
  conversionQuote,
  edicionesNote,
} from "@/data/archivo";

const tabs = [
  { id: "libros", label: "Libros", icon: "📚", count: "14" },
  { id: "articulos", label: "Artículos", icon: "📄", count: "50+" },
  { id: "discursos", label: "Discursos", icon: "🎤", count: "9" },
  { id: "entrevistas", label: "Entrevistas", icon: "🎙️", count: "6" },
  { id: "paper-demian", label: "Paper", icon: "🧠", count: "1" },
] as const;

export default function Archivo() {
  const [activeTab, setActiveTab] = useState("libros");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tabBarRef = useRef<HTMLDivElement>(null);
  const isScrollingFromClick = useRef(false);

  const setRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  // Scroll spy: update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingFromClick.current) return;
      const offset = 220;
      for (const tab of [...tabs].reverse()) {
        const el = sectionRefs.current[tab.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveTab(tab.id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    isScrollingFromClick.current = true;
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => { isScrollingFromClick.current = false; }, 800);
    }
  };

  return (
    <section id="archivo" className="section-dark" style={{ paddingTop: 0, paddingBottom: "6rem" }}>

      {/* ─── HERO ─── */}
      <div className="arc-hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/strip/milei-onu.jpg" alt="Milei en la ONU" style={{ objectPosition: "center 30%" }} />
        <div className="arc-hero-overlay" />
      </div>

      <div className="arc-hero-text">
        <FadeIn>
          <p className="arc-hero-eyebrow">SECCIÓN 06</p>
          <h2 className="arc-hero-title">ARCHIVO INTELECTUAL</h2>
          <p className="arc-hero-subtitle">
            Producción intelectual completa — Libros, Artículos, Discursos y Entrevistas
          </p>
          <div className="arc-hero-stats-bar">
            <span className="arc-hero-stat">14 libros</span>
            <span className="arc-hero-stat-dot">&middot;</span>
            <span className="arc-hero-stat">50+ papers</span>
            <span className="arc-hero-stat-dot">&middot;</span>
            <span className="arc-hero-stat">9 discursos</span>
            <span className="arc-hero-stat-dot">&middot;</span>
            <span className="arc-hero-stat">6 entrevistas</span>
          </div>
        </FadeIn>
      </div>

      {/* ─── TAB NAVIGATION ─── */}
      <div className="arc-tab-bar-wrapper" ref={tabBarRef}>
        <nav className="arc-tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`arc-tab${activeTab === tab.id ? " arc-tab--active" : ""}`}
              onClick={() => scrollToSection(tab.id)}
              aria-label={tab.label}
            >
              <span className="arc-tab-icon">{tab.icon}</span>
              <span className="arc-tab-label">{tab.label}</span>
              <span className="arc-tab-count">{tab.count}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="arc-content" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>

        {/* ═══════════════════════════════════════════════════════
            LIBROS
           ═══════════════════════════════════════════════════════ */}
        <div ref={setRef("libros")} className="arc-section">
          <FadeIn>
            <div className="arc-section-header">
              <span className="arc-section-icon">📚</span>
              <div>
                <h3 className="arc-section-title">Libros</h3>
                <p className="arc-section-desc">
                  14 libros entre obras individuales y coautorías — desde la econometría aplicada
                  hasta la filosofía política de la libertad.
                </p>
              </div>
            </div>
          </FadeIn>

          {etapas.map((etapa, ei) => (
            <FadeIn key={ei} delay={ei * 0.1}>
              <div className="arc-era">
                <div className="arc-era-header">
                  <h4 className="arc-era-name">{etapa.label}</h4>
                  <span className="arc-era-years">{etapa.desc}</span>
                </div>
                <div className="arc-books-grid">
                  {etapa.books.map((b, bi) => (
                    <div key={bi} className={`arc-book-card${b.highlight ? " arc-book-card--hl" : ""}`}>
                      <div className="arc-book-spine" />
                      <div className="arc-book-body">
                        <span className="arc-book-year">{b.year}</span>
                        <h5 className="arc-book-title">{b.title}</h5>
                        {b.publisher && <span className="arc-book-pub">{b.publisher}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn>
            <div className="arc-note">{edicionesNote}</div>
          </FadeIn>
        </div>

        {/* ═══════════════════════════════════════════════════════
            ARTÍCULOS ACADÉMICOS
           ═══════════════════════════════════════════════════════ */}
        <div ref={setRef("articulos")} className="arc-section">
          <FadeIn>
            <div className="arc-section-header">
              <span className="arc-section-icon">📄</span>
              <div>
                <h3 className="arc-section-title">Artículos Académicos</h3>
                <p className="arc-section-desc">
                  Más de 50 artículos académicos publicados. Especialidad declarada: crecimiento con y sin dinero.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="arc-papers-grid">
            {papers.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="arc-paper-card">
                  <div className="arc-paper-topic-badge">{p.topic}</div>
                  <h5 className="arc-paper-title">{p.title}</h5>
                  <div className="arc-paper-meta">
                    {p.coauthors && <span>con {p.coauthors}</span>}
                    {p.venue && <span className="arc-paper-venue">{p.venue}</span>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Photo break */}
        <div className="arc-photo-break">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/strip/milei-asuncion.jpg" alt="Asunción presidencial" />
        </div>

        {/* ═══════════════════════════════════════════════════════
            DISCURSOS
           ═══════════════════════════════════════════════════════ */}
        <div ref={setRef("discursos")} className="arc-section">
          <FadeIn>
            <div className="arc-section-header">
              <span className="arc-section-icon">🎤</span>
              <div>
                <h3 className="arc-section-title">Discursos</h3>
                <p className="arc-section-desc">
                  De Davos a las Naciones Unidas, de la CPAC al premio Milton Friedman — los discursos que redefinieron el debate global.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="arc-speeches-timeline">
            {discursos.map((d, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={`arc-speech-card${d.keynote ? " arc-speech-card--keynote" : ""}`}>
                  <div className="arc-speech-date-col">
                    <span className="arc-speech-date">{d.date}</span>
                    {d.keynote && <span className="arc-speech-keynote-badge">KEYNOTE</span>}
                  </div>
                  <div className="arc-speech-body">
                    <h4 className="arc-speech-title">{d.title}</h4>
                    <span className="arc-speech-location">{d.location}</span>
                    <p className="arc-speech-desc">{d.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Photo break */}
        <div className="arc-photo-break">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/strip/milei-g7.jpg" alt="Milei en cumbre del G7" />
        </div>

        {/* ═══════════════════════════════════════════════════════
            ENTREVISTAS
           ═══════════════════════════════════════════════════════ */}
        <div ref={setRef("entrevistas")} className="arc-section">
          <FadeIn>
            <div className="arc-section-header">
              <span className="arc-section-icon">🎙️</span>
              <div>
                <h3 className="arc-section-title">Entrevistas</h3>
                <p className="arc-section-desc">
                  De Tucker Carlson a Lex Fridman, de TIME a la BBC — audiencias globales de cientos de millones.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="arc-interviews-grid">
            {entrevistas.map((e, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`arc-interview-card${e.highlight ? " arc-interview-card--featured" : ""}`}>
                  <div className="arc-interview-outlet">{e.outlet}</div>
                  {e.journalist && <span className="arc-interview-journalist">por {e.journalist}</span>}
                  <p className="arc-interview-desc">{e.desc}</p>
                  <span className="arc-interview-date">{e.date}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            PAPER CON DEMIAN
           ═══════════════════════════════════════════════════════ */}
        <div ref={setRef("paper-demian")} className="arc-section">
          <FadeIn>
            <div className="arc-section-header">
              <span className="arc-section-icon">🧠</span>
              <div>
                <h3 className="arc-section-title">Paper con Demian Reidel</h3>
                <p className="arc-section-desc">
                  Un trabajo teórico en curso que podría redefinir la economía matemática.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="arc-collab-card">
              <div className="arc-collab-badge">{collabProject.badge}</div>
              <h3 className="arc-collab-title">{collabProject.title}</h3>
              <p className="arc-collab-desc">{collabProject.desc}</p>
              <div className="arc-collab-quote-block">
                <span className="arc-collab-qmark">&ldquo;</span>
                <blockquote>{collabProject.quote}</blockquote>
                <cite>{collabProject.quoteCite}</cite>
              </div>
            </div>
          </FadeIn>

          {/* Conversion Quote */}
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
        </div>

        {/* ═══════════════════════════════════════════════════════
            INFLUENCIAS + RECONOCIMIENTOS (footer-like)
           ═══════════════════════════════════════════════════════ */}
        <FadeIn>
          <div className="arc-footer-section">
            <div className="arc-divider" style={{ marginTop: "4rem" }}>
              <span className="arc-divider-line" />
              <span className="arc-divider-label">INFLUENCIAS INTELECTUALES</span>
              <span className="arc-divider-line" />
            </div>

            <div className="arc-influences-grid">
              {influencias.map((inf, i) => (
                <div key={i} className="arc-influence-card">
                  <h5 className="arc-influence-card-school">{inf.school}</h5>
                  <p className="arc-influence-card-names">{inf.names}</p>
                </div>
              ))}
            </div>

            <div className="arc-divider" style={{ marginTop: "4rem" }}>
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
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

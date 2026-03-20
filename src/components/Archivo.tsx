"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import {
  etapas,
  papers,
  discursos,
  entrevistas,
  edicionesNote,
} from "@/data/archivo";

const tabs = [
  { id: "libros", label: "Libros", icon: "📚" },
  { id: "articulos", label: "Artículos", icon: "📄" },
  { id: "discursos", label: "Discursos", icon: "🎤" },
  { id: "entrevistas", label: "Entrevistas", icon: "🎙️" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Archivo() {
  const [activeTab, setActiveTab] = useState<TabId>("libros");

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    // Scroll the archivo section into view if needed
    const el = document.getElementById("archivo");
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < -100) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="archivo" className="section-dark" style={{ paddingTop: 0, paddingBottom: "6rem" }}>

      {/* ─── HERO ─── */}
      <div className="arc-hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/futuro/stargate-casarosada.jpg" alt="Milei en Casa Rosada — Stargate" style={{ objectPosition: "center 30%" }} />
        <div className="arc-hero-overlay" />
      </div>

      <div className="arc-hero-text">
        <FadeIn>
          <p className="arc-hero-eyebrow">Archivo</p>
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

      {/* ─── TAB NAVIGATION (FIXED WITHIN SECTION) ─── */}
      <div className="arc-tab-bar-wrapper">
        <nav className="arc-tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`arc-tab${activeTab === tab.id ? " arc-tab--active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
              aria-label={tab.label}
            >
              <span className="arc-tab-icon">{tab.icon}</span>
              <span className="arc-tab-label">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* ─── TAB CONTENT (only active tab shown) ─── */}
      <div className="arc-content">

        {/* ════════ LIBROS ════════ */}
        {activeTab === "libros" && (
          <div className="arc-panel" key="libros">
            <div className="arc-panel-header">
              <h3 className="arc-panel-title">Libros</h3>
              <p className="arc-panel-desc">
                14 libros entre obras individuales y coautorías — desde la econometría aplicada
                hasta la filosofía política de la libertad.
              </p>
            </div>

            {etapas.map((etapa, ei) => (
              <FadeIn key={ei} delay={ei * 0.1}>
                <div className="arc-era">
                  <div className="arc-era-header">
                    <h4 className="arc-era-name">{etapa.label}</h4>
                    <span className="arc-era-years">{etapa.desc}</span>
                  </div>
                  <div className="arc-books-grid">
                    {etapa.books.map((b, bi) => (
                      b.cover ? (
                        <div key={bi} className="arc-book-cover">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={b.cover} alt={b.title} />
                          <div className="arc-book-cover-info">
                            <span className="arc-book-cover-year">{b.year}</span>
                            <h5 className="arc-book-cover-title">{b.title}</h5>
                          </div>
                        </div>
                      ) : (
                        <div key={bi} className={`arc-book-card${b.highlight ? " arc-book-card--hl" : ""}`}>
                          <div className="arc-book-spine" />
                          <div className="arc-book-body">
                            <span className="arc-book-year">{b.year}</span>
                            <h5 className="arc-book-title">{b.title}</h5>
                            {b.desc && <p className="arc-book-desc">{b.desc}</p>}
                            {b.publisher && <span className="arc-book-pub">{b.publisher}</span>}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn>
              <div className="arc-note">{edicionesNote}</div>
            </FadeIn>
          </div>
        )}

        {/* ════════ ARTÍCULOS ════════ */}
        {activeTab === "articulos" && (
          <div className="arc-panel" key="articulos">
            <div className="arc-panel-header">
              <h3 className="arc-panel-title">Artículos Académicos</h3>
              <p className="arc-panel-desc">
                Más de 50 artículos académicos publicados. Especialidad declarada: crecimiento con y sin dinero.
              </p>
            </div>

            <div className="arc-papers-grid">
              {papers.map((p, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="arc-paper-card">
                    <div className="arc-paper-topic-badge">{p.topic}</div>
                    <h5 className="arc-paper-title">{p.title}</h5>
                    {p.desc && <p className="arc-paper-desc">{p.desc}</p>}
                    <div className="arc-paper-meta">
                      {p.coauthors && <span>con {p.coauthors}</span>}
                      {p.venue && <span className="arc-paper-venue">{p.venue}</span>}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* ════════ DISCURSOS ════════ */}
        {activeTab === "discursos" && (
          <div className="arc-panel" key="discursos">
            <div className="arc-panel-header">
              <h3 className="arc-panel-title">Discursos</h3>
              <p className="arc-panel-desc">
                De Davos a las Naciones Unidas, de la CPAC al premio Milton Friedman — los discursos que redefinieron el debate global.
              </p>
            </div>

            <div className="arc-speeches-timeline">
              {discursos.map((d, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className={`arc-speech-card${d.keynote ? " arc-speech-card--keynote" : ""}`}>
                    <div className="arc-speech-date-col">
                      <span className="arc-speech-date">{d.date}</span>
                      {d.keynote && <span className="arc-speech-keynote-badge">KEYNOTE</span>}
                      {d.duration && <span className="arc-speech-duration">{d.duration}</span>}
                    </div>
                    <div className="arc-speech-body">
                      <h4 className="arc-speech-title">{d.title}</h4>
                      <span className="arc-speech-location">{d.location}</span>
                      <p className="arc-speech-desc">{d.desc}</p>
                      {d.themes && (
                        <div className="arc-speech-themes">
                          {d.themes.map((t, ti) => <span key={ti} className="arc-speech-theme">{t}</span>)}
                        </div>
                      )}
                      {d.frase && <p className="arc-speech-frase">&ldquo;{d.frase}&rdquo;</p>}
                      {d.videoId && (
                        <div className="arc-video-embed">
                          <iframe
                            src={`https://www.youtube.com/embed/${d.videoId}`}
                            title={d.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* ════════ ENTREVISTAS ════════ */}
        {activeTab === "entrevistas" && (
          <div className="arc-panel" key="entrevistas">
            <div className="arc-panel-header">
              <h3 className="arc-panel-title">Entrevistas</h3>
              <p className="arc-panel-desc">
                De Tucker Carlson a Lex Fridman, de TIME a la BBC — audiencias globales de cientos de millones.
              </p>
            </div>

            <div className="arc-interviews-grid">
              {entrevistas.map((e, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className={`arc-interview-card${e.highlight ? " arc-interview-card--featured" : ""}`}>
                    <div className="arc-interview-outlet">{e.outlet}</div>
                    {e.journalist && <span className="arc-interview-journalist">por {e.journalist}</span>}
                    {e.duration && <span className="arc-interview-duration">{e.duration}</span>}
                    <p className="arc-interview-desc">{e.desc}</p>
                    {e.impact && <p className="arc-interview-impact">{e.impact}</p>}
                    {e.videoId && (
                      <div className="arc-video-embed">
                        <iframe
                          src={`https://www.youtube.com/embed/${e.videoId}`}
                          title={e.outlet}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                    <span className="arc-interview-date">{e.date}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}


      </div>
    </section>
  );
}

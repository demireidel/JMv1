"use client";

import { useAnimatedNumber } from "@/hooks";
import FadeIn from "./FadeIn";
import {
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
} from "@/data/archivo";

function AnimatedStat({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, value } = useAnimatedNumber({ target, duration: 2000 });
  return <div ref={ref} style={{ display: "inline" }}>{value}{suffix}</div>;
}

export default function Archivo() {
  return (
    <section id="archivo" className="section-darker" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <FadeIn>
          <div className="sec-head">
            <div className="sec-num">06</div>
            <h2 className="sec-title-f">ARCHIVO INTELECTUAL</h2>
            <div className="sec-accent" />
            <p className="sec-intro-f">
              Más de <em>50 artículos académicos</em>, 14 libros, discursos que redefinieron el debate global
              y entrevistas con audiencias de cientos de millones. La producción intelectual completa
              de un presidente-economista sin precedentes.
            </p>
          </div>
        </FadeIn>

        {/* ─── HERO STATS BAR ─── */}
        <div className="arc-stats">
          <div className="arc-stat">
            <div className="arc-stat-val"><AnimatedStat target={14} /></div>
            <div className="arc-stat-label">Libros publicados</div>
          </div>
          <div className="arc-stat">
            <div className="arc-stat-val"><AnimatedStat target={50} suffix="+" /></div>
            <div className="arc-stat-label">Artículos académicos</div>
          </div>
          <div className="arc-stat">
            <div className="arc-stat-val"><AnimatedStat target={9} /></div>
            <div className="arc-stat-label">Discursos internacionales</div>
          </div>
          <div className="arc-stat">
            <div className="arc-stat-val"><AnimatedStat target={6} /></div>
            <div className="arc-stat-label">Entrevistas globales</div>
          </div>
        </div>

        {/* ─── LIBROS — VISUAL TIMELINE ─── */}
        <FadeIn>
          <div className="arc-divider">
            <span className="arc-divider-line" />
            <span className="arc-divider-label">LIBROS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            14 libros entre obras individuales y coautorías — desde la econometría aplicada
            hasta la filosofía política de la libertad.
          </p>
        </FadeIn>

        <div className="arc-timeline">
          {etapas.map((etapa, ei) => (
            <FadeIn key={ei}>
              <div className="arc-tl-era">
                <div className="arc-tl-era-label">{etapa.label}</div>
                <div className="arc-tl-era-period">{etapa.desc}</div>
              </div>
              {etapa.books.map((b, bi) => (
                <div key={bi} className={`arc-tl-item ${b.highlight ? "arc-tl-item--hl" : ""}`}>
                  <div className="arc-tl-dot" />
                  <div className="arc-tl-year">{b.year}</div>
                  <div className="arc-tl-content">
                    <h5 className="arc-tl-title">{b.title}</h5>
                    {b.coauthors && <span className="arc-tl-meta">con {b.coauthors}</span>}
                    {b.publisher && <span className="arc-tl-pub">{b.publisher}</span>}
                  </div>
                </div>
              ))}
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="arc-note">
            Ediciones internacionales en portugués (<em>Viva a Liberdade, Carajo!</em>), inglés (<em>The End of Inflation</em>)
            y español peninsular (<em>El Camino del Libertario</em>, Deusto 2024). Prólogos en obras colectivas
            como <em>De Viena a Madrid</em> (Unión Editorial).
          </div>
        </FadeIn>

        {/* ─── PAPERS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">PAPERS ACADÉMICOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            Más de 50 artículos académicos publicados. Especialidad declarada: crecimiento con y sin dinero.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="arc-papers">
            {papers.map((p, i) => (
              <div key={i} className="arc-paper">
                <span className="arc-paper-topic">{p.topic}</span>
                <h5 className="arc-paper-title">{p.title}</h5>
                <div className="arc-paper-meta">
                  {p.coauthors && <span>con {p.coauthors}</span>}
                  {p.venue && <span>{p.venue}</span>}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Paper con Demian — highlight */}
        <FadeIn>
          <div className="arc-collab">
            <div className="arc-collab-badge">EN PROGRESO</div>
            <h4 className="arc-collab-title">Trabajo Teórico con Demian Reidel</h4>
            <p className="arc-collab-desc">
              Reescribir gran parte de la teoría económica para derivar optimalidad de Pareto — tanto estática
              como intertemporal — con funciones de producción no convexas. Un trabajo que, de completarse,
              resolvería la tensión entre la &ldquo;fábrica de alfileres&rdquo; (rendimientos crecientes a escala)
              y la &ldquo;mano invisible&rdquo; (equilibrio competitivo).
            </p>
            <div className="arc-collab-quote">
              <span className="arc-collab-qmark">&ldquo;</span>
              <blockquote>
                Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica.
              </blockquote>
              <cite>Javier Milei — Instituto Liberal de Praga, junio 2024</cite>
            </div>
          </div>
        </FadeIn>

        {/* ─── DISCURSOS — KEYNOTE CARDS + COMPACT LIST ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">DISCURSOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            Los discursos que redefinieron el debate global — de Davos a las Naciones Unidas, de la CPAC al premio Milton Friedman.
          </p>
        </FadeIn>

        <div className="arc-keynotes">
          {discursos.filter(d => d.keynote).slice(0, 4).map((d, i) => (
            <FadeIn key={i}>
              <div className="arc-keynote">
                <span className="arc-keynote-date">{d.date}</span>
                <h4 className="arc-keynote-title">{d.title}</h4>
                <span className="arc-keynote-loc">{d.location}</span>
                <p className="arc-keynote-desc">{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="arc-speeches-compact">
          {discursos.filter(d => !d.keynote).map((d, i) => (
            <FadeIn key={i}>
              <div className="arc-speech-sm">
                <span className="arc-speech-sm-date">{d.date}</span>
                <div>
                  <h5 className="arc-speech-sm-title">{d.title}</h5>
                  <span className="arc-speech-sm-loc">{d.location}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ─── ENTREVISTAS — MAGAZINE CARDS + COMPACT ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">ENTREVISTAS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            De Tucker Carlson a Lex Fridman, de TIME a la BBC — audiencias globales de cientos de millones.
          </p>
        </FadeIn>

        <div className="arc-interviews-featured">
          {entrevistas.filter(e => e.highlight).map((e, i) => (
            <FadeIn key={i}>
              <div className="arc-interview-lg">
                <h4 className="arc-interview-lg-outlet">{e.outlet}</h4>
                {e.journalist && <span className="arc-interview-lg-by">por {e.journalist}</span>}
                <p className="arc-interview-lg-desc">{e.desc}</p>
                <span className="arc-interview-lg-date">{e.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="arc-interviews-compact">
          {entrevistas.filter(e => !e.highlight).map((e, i) => (
            <FadeIn key={i}>
              <div className="arc-speech-sm">
                <span className="arc-speech-sm-date">{e.date}</span>
                <div>
                  <h5 className="arc-speech-sm-title">{e.outlet}</h5>
                  {e.journalist && <span className="arc-speech-sm-loc">por {e.journalist}</span>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ─── INFLUENCIAS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">INFLUENCIAS INTELECTUALES</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-influences">
            {influencias.map((inf, i) => (
              <div key={i} className="arc-influence">
                <h5 className="arc-influence-school">{inf.school}</h5>
                <p className="arc-influence-names">{inf.names}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-conversion">
            <span className="arc-conversion-qmark">&ldquo;</span>
            <blockquote>
              Leyendo a Rothbard descubrí que lo que había enseñado sobre estructuras de mercado
              en microeconomía estaba equivocado. Luego leí <em>La Acción Humana</em> de Mises de
              principio a fin sin parar y experimenté una verdadera revolución en mi cabeza.
            </blockquote>
            <cite>Javier Milei — Lex Fridman Podcast #453</cite>
          </div>
        </FadeIn>

        {/* ─── RECONOCIMIENTOS — HORIZONTAL BADGE STRIP ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">RECONOCIMIENTOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-awards-strip">
            {reconocimientos.map((r, i) => (
              <div key={i} className="arc-award-badge">
                <span className="arc-award-badge-icon">◆</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

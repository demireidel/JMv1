import FadeIn from "./FadeIn";
import {
  reformas,
  heroCounters,
  reformBlocks,
  reformasHero,
  type Reforma,
} from "@/data/reformas";

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
}: Reforma) {
  return (
    <FadeIn>
      <div className="reform-section">
        <div className="reform-header">
          <div className="reform-number">REFORMA {num}</div>
          <h2 className="reform-title">{title}</h2>
          <p className="reform-subtitle">{subtitle}</p>
        </div>
        <div className="reform-desc">
          <p>{desc}</p>
        </div>
        <div className="reform-trio">
          <div className="reform-box antes">
            <div className="box-label">
              <span className="dot" /> ANTES
            </div>
            <div className="box-text">{antes}</div>
          </div>
          <div className="reform-box ahora">
            <div className="box-label">
              <span className="dot" /> AHORA
            </div>
            <div className="box-text">{ahora}</div>
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

export default function Reformas() {
  return (
    <section className="section-darker" id="reformas">
      {/* Hero Photo */}
      <div className="ref-photo-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/strip/milei-bilateral.jpg"
          alt="Firma de reformas estructurales"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="ref-photo-overlay" />
      </div>

      {/* Hero */}
      <div className="ref-hero">
        <div className="ref-hero-accent" />
        <div className="ref-hero-content">
          <div className="ref-hero-eyebrow">{reformasHero.eyebrow}</div>
          <h2 className="ref-hero-title">
            LAS <span>12 REFORMAS</span>
          </h2>
          <div className="ref-hero-line" />
          <p className="ref-hero-desc">{reformasHero.desc}</p>
          <div className="ref-counter-strip">
            {heroCounters.map((c) => (
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
            <h3>{reformBlocks[0].title}</h3>
            <p>{reformBlocks[0].subtitle}</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(0, 3).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}

        <FadeIn>
          <div className="reform-divider">
            <h3>{reformBlocks[1].title}</h3>
            <p>{reformBlocks[1].subtitle}</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(3, 7).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}

        <FadeIn>
          <div className="reform-divider">
            <h3>{reformBlocks[2].title}</h3>
            <p>{reformBlocks[2].subtitle}</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(7, 10).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}

        <FadeIn>
          <div className="reform-divider">
            <h3>{reformBlocks[3].title}</h3>
            <p>{reformBlocks[3].subtitle}</p>
            <div className="reform-divider-line" />
          </div>
        </FadeIn>

        {reformas.slice(10).map((r) => (
          <ReformaSection key={r.num} {...r} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useAnimatedNumber } from "@/hooks";
import { logros, pobrezaData, logrosSectionHeader } from "@/data/logros";
import type { Logro } from "@/data/logros";
import FadeIn from "./FadeIn";

function AnimatedNumber({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  // Scale target up so the hook's Math.round preserves fractional digits
  const scale = Math.pow(10, decimals);
  const { ref, value } = useAnimatedNumber({
    target: target * scale,
    duration: 1800,
    threshold: 0.3,
  });

  const formatted =
    decimals > 0
      ? (value / scale).toFixed(decimals)
      : value.toString();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="pc-val">
      {formatted + suffix}
    </div>
  );
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
}: Logro) {
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
              <p key={i}>{p}</p>
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

export default function Logros() {
  const pob = pobrezaData;
  const hdr = logrosSectionHeader;

  return (
    <section className="section-dark" id="logros">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 className="section-title">{hdr.sectionTitle}</h2>
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
              <span className="ptb-badge">{pob.badge}</span>
              <span className="ptb-line" />
              <span className="ptb-num">{pob.topbarNum}</span>
            </div>
            <div className="pobreza-headline">
              <div className="ph-kicker">
                {pob.kicker}
              </div>
              <h3>
                {pob.headline}<em>{pob.headlineEm}</em> de argentinos salieron de la pobreza
              </h3>
            </div>
            <div className="pobreza-counters">
              {pob.counters.map((c) => (
                <div className="pc-item" key={c.label}>
                  <AnimatedNumber
                    target={c.target}
                    suffix={c.suffix}
                    decimals={c.decimals}
                  />
                  <div className="pc-label">{c.label}</div>
                  <div className="pc-sub">{c.sub}</div>
                </div>
              ))}
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
                  <div className="fc-tag">{pob.flowBefore.tag}</div>
                  <div className="fc-big">{pob.flowBefore.big}</div>
                  <div className="fc-desc">
                    {pob.flowBefore.desc}
                  </div>
                </div>
                <div className="pb-flow-arrow">▼</div>
                <div className="pb-flow-card card-despues">
                  <div className="fc-tag">{pob.flowAfter.tag}</div>
                  <div className="fc-big">{pob.flowAfter.big}</div>
                  <div className="fc-desc">
                    {pob.flowAfter.desc}
                  </div>
                </div>
              </div>
            </div>
            <div className="pobreza-pills">
              {pob.pills.map((p) => (
                <div className="pp-pill" key={p.lbl}>
                  <span className="pill-val">{p.val}</span>
                  <span className="pill-lbl">{p.lbl}</span>
                </div>
              ))}
            </div>
            <div className="pobreza-quote">
              <p>
                {pob.quote}
              </p>
              <span className="pq-attr">{pob.quoteAttr}</span>
            </div>
            <div className="pobreza-spacer" />
          </div>
        </FadeIn>

        {logros.slice(0, 4).map((l) => (
          <LogroCard key={l.num} {...l} />
        ))}

        {/* Photo break halfway through logros */}
        <FadeIn>
          <div className="arc-photo-break" style={{ margin: "4rem 0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/strip/milei-bilateral.jpg" alt="Reunión bilateral Argentina-EE.UU." loading="eager" />
          </div>
        </FadeIn>

        {logros.slice(4).map((l) => (
          <LogroCard key={l.num} {...l} />
        ))}
      </div>
    </section>
  );
}

"use client";

import FadeIn from "./FadeIn";
import { useAnimatedNumber } from "@/hooks";
import {
  galleryPhotos,
  siliconValley,
  stargate,

  vacaMuerta,
  futuroHeader,
  futuroDividers,

} from "@/data/futuro";

export default function Futuro() {
  return (
    <section id="futuro" className="futuro-section">
      <div className="futuro-accent-line" />
      <div className="futuro-glow-top" />
      <div className="container futuro-container">
        <FadeIn>
          <div className="sec-head">
            <h2 className="sec-title-f">{futuroHeader.sectionTitle}</h2>
            <div className="sec-accent" />
            <p className="sec-intro-f">
              <em>
                «Solo reencontrándonos con las verdades de nuestro pasado
                profundo podemos dar un salto hacia el futuro.»
              </em>{" "}
              — Tres pilares transforman a la Argentina en protagonista de la
              revolución tecnológica global: Silicon Valley, Stargate
              e hidrocarburos.
            </p>
          </div>
        </FadeIn>

        {/* 1. Silicon Valley */}
        <FadeIn>
          <div className="duo">
            <div className="blk">
              <div className="kicker k-gold">{siliconValley.kicker}</div>
              <h3>{siliconValley.titleLine1}<br /><em>{siliconValley.titleLine2Em}</em></h3>
              {siliconValley.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="futuro-stats">
                {siliconValley.stats.map((s, i) => (
                  <div className="futuro-st" key={i}><div className="v">{s.val}</div><div className="l">{s.label}</div></div>
                ))}
              </div>
            </div>
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siliconValley.photo.src} alt={siliconValley.photo.alt} loading="eager" style={{ objectPosition: siliconValley.photo.objectPosition }} />
              <div className="cap">
                <strong>{siliconValley.photo.captionStrong}</strong>
                <span>{siliconValley.photo.captionSpan}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Gallery */}
        <FadeIn>
          <div className="futuro-gallery">
            {galleryPhotos.map((p) => (
              <div className="fg-item" key={p.tag + p.who}>
                <div className="fg-badge">{p.tag}</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.who} loading="eager" style={{ objectPosition: p.pos }} />
                <div className="fg-overlay">
                  <div className="fg-who">{p.who}</div>
                  <div className="fg-where">{p.where}</div>
                  <div className="fg-tag">{p.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mundo-section-divider" style={{ margin: "4rem 0" }}>
            <span className="line" />
            <span className="label">{futuroDividers[0]}</span>
            <span className="line" />
          </div>
        </FadeIn>

        {/* 2. Stargate */}
        <FadeIn>
          <div className="duo flip">
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stargate.photo.src} alt={stargate.photo.alt} loading="eager" style={{ objectPosition: stargate.photo.objectPosition }} />
              <div className="cap">
                <strong>{stargate.photo.captionStrong}</strong>
                <span>{stargate.photo.captionSpan}</span>
              </div>
            </div>
            <div className="blk">
              <div className="kicker k-blue">{stargate.kicker}</div>
              <h3>{stargate.titleLine1}<br />{stargate.titleLine2}</h3>
              <p>{stargate.paragraphs[0]}</p>
              <p>{stargate.paragraphs[1]}</p>
              <p>{stargate.paragraphs[2]}</p>
              <div className="bq">
                {stargate.quote.text}
                <cite>{stargate.quote.cite}</cite>
              </div>
              <p>{stargate.paragraphs[3]}</p>
              <div className="futuro-stats">
                {stargate.stats.map((s, i) => (
                  <div className="futuro-st" key={i}><div className="v">{s.val}</div><div className="l">{s.label}</div></div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mundo-section-divider" style={{ margin: "4rem 0" }}>
            <span className="line" />
            <span className="label">{futuroDividers[1]}</span>
            <span className="line" />
          </div>
        </FadeIn>

        {/* 4. Vaca Muerta */}
        <FadeIn>
          <div className="duo flip">
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={vacaMuerta.photo.src} alt={vacaMuerta.photo.alt} loading="eager" style={{ objectPosition: vacaMuerta.photo.objectPosition }} />
              <div className="cap">
                <strong>{vacaMuerta.photo.captionStrong}</strong>
                <span>{vacaMuerta.photo.captionSpan}</span>
              </div>
            </div>
            <div className="blk">
              <div className="kicker k-green">{vacaMuerta.kicker}</div>
              <h3>{vacaMuerta.titleLine1}<br /><em>{vacaMuerta.titleLine2Em}</em></h3>
              {vacaMuerta.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="futuro-stats">
                {vacaMuerta.stats.map((s, i) => (
                  <div className="futuro-st" key={i}><div className="v">{s.val}</div><div className="l">{s.label}</div></div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Closing Quote */}
        <FadeIn>
          <div className="futuro-closing">
            <div className="futuro-closing-line" />
            <p className="futuro-closing-text">
              &laquo;Tenemos energía de sobra, tierras frías e inhóspitas de sobra, y recurso humano de calidad. Que nadie se sorprenda si la Argentina se convierte en el próximo hub de inteligencia artificial del mundo.&raquo;
            </p>
            <p className="futuro-closing-attr">Javier Milei — Cadena Nacional, diciembre 2024</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

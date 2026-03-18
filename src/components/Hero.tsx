"use client";

import { useParallax } from "@/hooks";
import { heroImage } from "@/data/photos";

export default function Hero() {
  const imgRef = useParallax(0.15);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef as React.RefObject<HTMLImageElement>}
          src={heroImage.src}
          alt={heroImage.alt}
          style={{ transform: "scale(1.05)" }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-accent" />
      <div className="hero-content">
        <p className="hero-subtitle">Presidente de la Nación Argentina</p>
        <h1 className="hero-name">
          JAVIER
          <br />
          MILEI
        </h1>
        <p className="hero-title">La libertad avanza</p>
        <div className="hero-line" />
        <p className="hero-quote">Argentina será el país más libre del mundo</p>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const img = imgRef.current;
          if (img) {
            const s = window.scrollY;
            if (s < window.innerHeight) {
              img.style.transform = `translateY(${s * 0.15}px) scale(1.05)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/4bc8c6ffb5ee4b1ba05998350f9dc353.jpg"
          alt="Milei en el balcón de Casa Rosada"
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
        <p className="hero-quote">
          Argentina será el país más libre del mundo
        </p>
      </div>
      <div className="scroll-indicator">
        <div />
      </div>
    </section>
  );
}

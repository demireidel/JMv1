"use client";

import { useEffect, useRef } from "react";

/**
 * Hook that applies a parallax transform to an element on scroll.
 * Only runs while element is within viewport height for performance.
 */
export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const el = ref.current;
        if (el && window.scrollY < window.innerHeight) {
          el.style.transform = `translateY(${window.scrollY * speed}px) scale(1.05)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

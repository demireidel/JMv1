"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimatedNumberOptions {
  /** Target value to animate to */
  target: number;
  /** Animation duration in ms (default 2000) */
  duration?: number;
  /** IntersectionObserver threshold (default 0.3) */
  threshold?: number;
  /** Format with locale dot separators (default false) */
  formatLocale?: boolean;
}

/**
 * Hook that animates a number from 0 to target when the element scrolls into view.
 * Uses exponential ease-out for a premium feel.
 * Returns a ref to attach and the current display value (string).
 */
export function useAnimatedNumber({
  target,
  duration = 2000,
  threshold = 0.3,
  formatLocale = false,
}: UseAnimatedNumberOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Exponential ease-out: fast start, slow finish
            const eased = 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, threshold]);

  const display = formatLocale
    ? value.toLocaleString("es-AR")
    : value.toLocaleString();

  return { ref, value, display };
}

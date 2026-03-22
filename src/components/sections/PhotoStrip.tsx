"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoStripProps {
  photos: Photo[];
  /** Reverse animation direction */
  reverse?: boolean;
}

/**
 * Infinite-scroll photo strip with drag-to-scroll.
 * Uses requestAnimationFrame for seamless drag->release transitions.
 */
export default function PhotoStrip({ photos, reverse = false }: PhotoStripProps) {
  const doubled = [...photos, ...photos];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Animation state lives in a ref so it persists across renders
  // without causing re-renders
  const anim = useRef({
    offset: 0,           // current translateX in px
    speed: reverse ? 1.2 : -1,  // px per frame (~60fps -> ~60px/s)
    dragging: false,
    dragStartX: 0,
    dragStartOffset: 0,
    rafId: 0,
    hovering: false,
  });

  // Get half the strip width (one full set of photos)
  const getHalfWidth = useCallback(() => {
    if (!stripRef.current) return 1;
    return stripRef.current.scrollWidth / 2;
  }, []);

  // Wrap offset into [-halfWidth, 0) range for seamless looping
  const wrapOffset = useCallback(
    (x: number) => {
      const hw = getHalfWidth();
      let wrapped = x % hw;
      if (wrapped > 0) wrapped -= hw;
      if (wrapped <= -hw) wrapped += hw;
      return wrapped;
    },
    [getHalfWidth]
  );

  // Apply transform
  const applyTransform = useCallback((x: number) => {
    if (stripRef.current) {
      stripRef.current.style.transform = `translateX(${x}px)`;
    }
  }, []);

  // Start the animation loop on mount
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      anim.current.speed = 0;
    }

    const a = anim.current;
    let running = true;

    const tick = () => {
      if (!running) return;
      if (!a.dragging && !a.hovering) {
        const hw = stripRef.current ? stripRef.current.scrollWidth / 2 : 1;
        a.offset = a.offset + a.speed;
        let wrapped = a.offset % hw;
        if (wrapped > 0) wrapped -= hw;
        if (wrapped <= -hw) wrapped += hw;
        a.offset = wrapped;
        if (stripRef.current) {
          stripRef.current.style.transform = `translateX(${a.offset}px)`;
        }
      }
      a.rafId = requestAnimationFrame(tick);
    };

    a.rafId = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(a.rafId);
    };
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!wrapperRef.current) return;
      e.preventDefault();
      const a = anim.current;
      a.dragging = true;
      a.dragStartX = e.clientX;
      a.dragStartOffset = a.offset;
      setIsDragging(true);
      wrapperRef.current.setPointerCapture(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const a = anim.current;
      if (!a.dragging) return;
      e.preventDefault();
      const dx = e.clientX - a.dragStartX;
      a.offset = wrapOffset(a.dragStartOffset + dx);
      applyTransform(a.offset);
    },
    [wrapOffset, applyTransform]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      const a = anim.current;
      if (!a.dragging) return;
      a.dragging = false;
      setIsDragging(false);
      wrapperRef.current?.releasePointerCapture(e.pointerId);
      // Animation loop is still running -- it just resumes moving
      // from a.offset, which is exactly where the user released.
    },
    []
  );

  // Pause on hover (non-drag)
  const handleMouseEnter = useCallback(() => {
    anim.current.hovering = true;
  }, []);
  const handleMouseLeave = useCallback(() => {
    anim.current.hovering = false;
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`photo-strip-wrapper${reverse ? " photo-strip-reverse" : ""}`}
      role="region"
      aria-label="Galería de fotos"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "pan-y" }}
    >
      <div
        ref={stripRef}
        className={`photo-strip${reverse ? " photo-strip-2" : ""}`}
        style={{ animation: "none" }}
      >
        {doubled.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            loading="eager"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

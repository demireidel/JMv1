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
 * Auto-scrolls via CSS animation, pauses on hover or drag.
 */
export default function PhotoStrip({ photos, reverse = false }: PhotoStripProps) {
  const doubled = [...photos, ...photos];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    scrollLeft: 0,
    currentOffset: 0,
    animationPaused: false,
  });
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getTranslateX = useCallback(() => {
    if (!stripRef.current) return 0;
    const style = window.getComputedStyle(stripRef.current);
    const matrix = style.transform;
    if (matrix === "none") return 0;
    const values = matrix.match(/matrix\(([^)]+)\)/);
    if (!values) return 0;
    return parseFloat(values[1].split(",")[4].trim());
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!stripRef.current || !wrapperRef.current) return;
      e.preventDefault();
      setIsDragging(true);

      // Cancel any pending resume
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
        resumeTimer.current = null;
      }

      // Capture current animation position
      const currentX = getTranslateX();
      dragState.current.startX = e.clientX;
      dragState.current.currentOffset = currentX;

      // Freeze animation at current position
      stripRef.current.style.animation = "none";
      stripRef.current.style.transform = `translateX(${currentX}px)`;

      wrapperRef.current.setPointerCapture(e.pointerId);
    },
    [getTranslateX]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !stripRef.current) return;
      e.preventDefault();
      const dx = e.clientX - dragState.current.startX;
      const newX = dragState.current.currentOffset + dx;

      // Wrap around to keep infinite feel
      const stripWidth = stripRef.current.scrollWidth / 2;
      let wrappedX = newX % stripWidth;
      if (wrappedX > 0) wrappedX -= stripWidth;

      stripRef.current.style.transform = `translateX(${wrappedX}px)`;
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !stripRef.current || !wrapperRef.current) return;
      setIsDragging(false);
      wrapperRef.current.releasePointerCapture(e.pointerId);

      const el = stripRef.current;
      const currentX = getTranslateX();
      const stripWidth = el.scrollWidth / 2;

      // The CSS animation goes 0 → -50% (i.e. 0 → -stripWidth).
      // For reverse strips, animation-direction: reverse makes it go -stripWidth → 0.
      // We need to figure out what fraction of the cycle matches currentX.
      // Normalize currentX into [0, stripWidth) range
      let normalizedX = ((currentX % stripWidth) + stripWidth) % stripWidth;
      // progress = how far through the 0→-stripWidth cycle
      // currentX is negative, so progress = normalizedX / stripWidth gives us
      // position in the forward animation where 0 = start, 1 = end
      const progress = 1 - normalizedX / stripWidth;
      const duration = reverse ? 60 : 55;
      const delay = -(progress * duration);

      // Force reflow: remove animation, set it back with correct delay
      el.style.animation = "none";
      el.style.transform = "";
      // Force reflow so browser registers the "none"
      void el.offsetWidth;
      el.style.animation = "";
      el.style.animationDelay = `${delay}s`;
    },
    [isDragging, getTranslateX, reverse]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setIsDragging(false);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`photo-strip-wrapper${reverse ? " photo-strip-reverse" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "pan-y" }}
    >
      <div
        ref={stripRef}
        className={`photo-strip${reverse ? " photo-strip-2" : ""}${isDragging ? " dragging" : ""}`}
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

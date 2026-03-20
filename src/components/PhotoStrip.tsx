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

      // Resume CSS animation from current position
      const currentX = getTranslateX();
      const stripWidth = stripRef.current.scrollWidth / 2;

      // Calculate what percentage through the animation we are
      const progress = Math.abs(currentX / stripWidth);
      const duration = reverse ? 60 : 55;
      const delay = -(progress * duration);

      stripRef.current.style.transform = "";
      stripRef.current.style.animation = "";
      stripRef.current.style.animationDelay = `${delay}s`;
    },
    [isDragging, getTranslateX, reverse]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setIsDragging(false);
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

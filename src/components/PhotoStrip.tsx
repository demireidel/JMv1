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
 * Infinite-scroll photo strip. Server Component — no JS required.
 * Duplicate photos for seamless loop via CSS animation.
 */
export default function PhotoStrip({ photos, reverse = false }: PhotoStripProps) {
  const doubled = [...photos, ...photos];

  return (
    <div className={`photo-strip-wrapper${reverse ? " photo-strip-reverse" : ""}`}>
      <div className={`photo-strip${reverse ? " photo-strip-2" : ""}`}>
        {doubled.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={p.src} alt={p.alt} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

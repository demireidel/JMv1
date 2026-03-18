const photos = [
  { src: "https://www.argentina.gob.ar/sites/default/files/mtso1410.jpg", alt: "Bilateral en la Casa Blanca" },
  { src: "https://www.argentina.gob.ar/sites/default/files/mileidiscursovertical.jpg", alt: "Milei discurso en la ONU" },
  { src: "https://www.argentina.gob.ar/sites/default/files/americasshield.jpg", alt: "Shield of the Americas" },
  { src: "https://www.argentina.gob.ar/sites/default/files/g20fotofamilia.jpg", alt: "G20 Foto de Familia" },
  { src: "https://www.argentina.gob.ar/sites/default/files/mtb1410.jpg", alt: "Reunión bilateral Argentina-EE.UU." },
  { src: "https://www.argentina.gob.ar/sites/default/files/mtlh1410.jpg", alt: "Libro de Honor" },
  { src: "https://www.argentina.gob.ar/sites/default/files/shieldamericas.jpg", alt: "Escudo de las Américas" },
  { src: "https://www.argentina.gob.ar/sites/default/files/banga01.jpg", alt: "Acuerdo financiero internacional" },
];

export default function PhotoStrip2() {
  const allPhotos = [...photos, ...photos];

  return (
    <div className="photo-strip-wrapper photo-strip-reverse">
      <div className="photo-strip photo-strip-2">
        {allPhotos.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={p.src} alt={p.alt} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

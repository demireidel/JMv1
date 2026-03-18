const photos = [
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/27803c407641418b8ef56bf0f207df9c.jpg", alt: "Retrato oficial Presidente Milei" },
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/fe4f9351c4e246ec9de6cbb90ea7e266.jpg", alt: "Milei con Trump en la Casa Blanca 2025" },
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/e33b53a762ae458ab83a35fcfb27712c.jpg", alt: "Milei en el G7 Italia" },
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/5c50c798f91b40939b187ca9e38488b3.jpg", alt: "Milei con Elon Musk" },
  { src: "https://assets.weforum.org/article/image/large_dZsGhcIlGWtbH8eUB_vQpnejhUUnQad0Zeqg3UXQMyI.jpg", alt: "Milei en Davos 2025" },
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/559a408150fb45399be0ba4e12a6c7f2.jpg", alt: "Milei en la ONU" },
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/2a3cb7c9d1c74295b178f3745f02ddbe.jpg", alt: "Asunción presidencial Milei" },
  { src: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/fd911633a1bf4c0c80cd92b24f1aeaea.jpg", alt: "Milei cumbre G7 líderes" },
];

export default function PhotoStrip() {
  // Duplicate for infinite scroll
  const allPhotos = [...photos, ...photos];

  return (
    <div className="photo-strip-wrapper">
      <div className="photo-strip" id="photoStrip">
        {allPhotos.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={p.src} alt={p.alt} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

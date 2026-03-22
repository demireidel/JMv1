import Hero from "@/components/sections/Hero";
import { ScrollProgress, BackToTop } from "@/components/layout/ScrollProgress";
import PhotoStrip from "@/components/sections/PhotoStrip";
import { stripPhotos1 } from "@/data/photos";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <PhotoStrip photos={stripPhotos1} />
      <BackToTop />
    </>
  );
}

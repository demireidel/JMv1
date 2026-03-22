import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import { ScrollProgress, BackToTop } from "@/components/layout/ScrollProgress";
import PhotoStrip from "@/components/sections/PhotoStrip";
import Vision from "@/components/sections/Vision";
import Logros from "@/components/sections/Logros";
import Reformas from "@/components/sections/Reformas";
import Futuro from "@/components/sections/Futuro";
import Mundo from "@/components/sections/Mundo";
import Archivo from "@/components/sections/Archivo";
import Footer from "@/components/layout/Footer";
import { stripPhotos1, stripPhotos2, stripPhotos3 } from "@/data/photos";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <PhotoStrip photos={stripPhotos1} />
      <Vision />
      <Logros />
      <Reformas />
      <PhotoStrip photos={stripPhotos2} reverse />
      <Futuro />
      <Mundo />
      <PhotoStrip photos={stripPhotos3} reverse />
      <Archivo />
      <Footer />
      <BackToTop />
    </>
  );
}

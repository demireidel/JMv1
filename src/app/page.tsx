import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { ScrollProgress, BackToTop } from "@/components/ScrollProgress";
import PhotoStrip from "@/components/PhotoStrip";
import Vision from "@/components/Vision";
import Logros from "@/components/Logros";
import Reformas from "@/components/Reformas";
import Futuro from "@/components/Futuro";
import Mundo from "@/components/Mundo";
import Archivo from "@/components/Archivo";
import Footer from "@/components/Footer";
import { stripPhotos1, stripPhotos2 } from "@/data/photos";

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
      <Archivo />
      <Footer />
      <BackToTop />
    </>
  );
}

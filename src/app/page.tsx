import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { ScrollProgress, BackToTop } from "@/components/ScrollProgress";
import PhotoStrip from "@/components/PhotoStrip";
import Vision from "@/components/Vision";
import Logros from "@/components/Logros";
import Reformas from "@/components/Reformas";
import Futuro from "@/components/Futuro";
import Mundo from "@/components/Mundo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <PhotoStrip />
      <Vision />
      <Logros />
      <Reformas />
      <Futuro />
      <Mundo />
      <Footer />
      <BackToTop />
    </>
  );
}

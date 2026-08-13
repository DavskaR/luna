import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Cenik from "@/components/Cenik";
import Galerie from "@/components/Galerie";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Cenik />
        <Galerie />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

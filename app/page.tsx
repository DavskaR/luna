import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Lookbook from "@/components/Lookbook";
import Manifesto from "@/components/Manifesto";
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
        <Services />
        <Lookbook />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}

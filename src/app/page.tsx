import "./globals.css";

import About from "@/components/layout/about/about";
import Contact from "@/components/layout/contact/contact";
import Footer from "@/components/layout/footer/footer";
import HeroSection from "@/components/layout/hero/hero";  
import Journey from "@/components/layout/journey/journey";
import Projects from "@/components/layout/projects/projects";
import TextScroll from "@/components/layout/text-scroll";

export default function Home() {

  return (
    <>
      <HeroSection />
      <div className="textScroll">
        <TextScroll />
      </div>
      <Projects />
      <Journey />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

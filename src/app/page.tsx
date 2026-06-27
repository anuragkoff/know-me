import data from "@/components/utils/data";
import About from "@/components/layout/about/about";
import Card from "@/components/layout/card/card";
import Contact from "@/components/layout/contact/contact";
import Footer from "@/components/layout/footer/footer";
import HeroSection from "@/components/layout/hero/hero";  
import Journey from "@/components/layout/journey/journey";
import Navbar from "@/components/layout/navbar/navbar";
import TextScroll from "@/components/layout/text-scroll";

export default function Home() {
  const cardData = data();

  return (
    <>
      <Navbar />
      <HeroSection />
      <TextScroll />
      <div className="flex flex-row justify-evenly gap-4 mt-10">
        {cardData.map((project) => (
          <Card key={project.projectName} name={project.projectName} description={project.description} github={project.github} img={project.img} />
        ))}
      </div>
      <Journey />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

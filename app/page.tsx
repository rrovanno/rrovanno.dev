import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import About from "@/components/LandingAbout";
import Projects from "@/components/Projects";
import CustomCursor from "@/components/CustomCursor";
import Atmosphere from "@/components/Atmosphere";

export default function Home() {
  return (
    <main>

      <CustomCursor />

      <Navbar />
      <LandingHero />
      <About />

      <Atmosphere>
        <Projects />
      </Atmosphere>

    </main>
  );
}
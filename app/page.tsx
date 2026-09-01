import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import About from "@/components/LandingAbout";
import Projects from "@/components/Projects";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main>

      <CustomCursor />

      <Navbar />
      <LandingHero />
      <About />
      <Projects />

    </main>
  );
}
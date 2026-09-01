import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import About from "@/components/LandingAbout";
import CustomCursor from "@/components/CustomCursor";
import AtmosphereSection from "@/components/AtmosphereSection";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <LandingHero />
      <About />

      <AtmosphereSection />
    </main>
  );
}
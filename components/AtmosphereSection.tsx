"use client";

import Atmosphere from "@/components/Atmosphere";
import Listening from "@/components/Listening";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function AtmosphereSection() {
  return (
    <Atmosphere>
      {(track) => (
        <>
          <Listening track={track} />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </Atmosphere>
  );
}
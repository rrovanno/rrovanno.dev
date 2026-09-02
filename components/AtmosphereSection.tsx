"use client";

import Atmosphere from "@/components/Atmosphere";
import Listening from "@/components/Listening";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NowWorkingOn from "@/components/NowWorkingOn";

export default function AtmosphereSection() {
  return (
    <Atmosphere>
      {(track) => (
        <>
          <Listening track={track} />
          <NowWorkingOn />

          {/* Projects onward — fixed red atmosphere */}
          <div className="relative bg-background before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-32 before:bg-gradient-to-b before:from-transparent before:to-background">
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  right-[-10%]
                  top-0
                  h-full
                  w-[65%]
                  bg-[radial-gradient(ellipse_at_right,rgba(255,0,0,0.55)_0%,rgba(220,0,0,0.30)_25%,rgba(150,0,0,0.12)_45%,transparent_72%)]
                "
              />
            </div>

            <div className="relative z-[1]">
              <Projects />
              <Contact />
              <Footer />
            </div>
          </div>
        </>
      )}
    </Atmosphere>
  );
}
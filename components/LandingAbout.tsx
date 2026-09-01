"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const xLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  const xRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-4xl">

        <motion.div style={{ x: xLeft }}>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Building software that puts people first.
          </h2>
        </motion.div>

        <motion.div style={{ x: xRight }}>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            I'm Rovanno, a Computer Science graduate from Indonesia who likes
            turning ideas into things that actually work. I build across desktop,
            web, and interactive software, usually starting with a problem or an
            idea and figuring out the technology needed to make it real.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Right now, I'm building Atlas, a local-first personal knowledge
            system designed around user-owned knowledge. Outside of Atlas, I
            experiment across web development, games, AI, and whatever technical
            rabbit hole catches my attention next.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
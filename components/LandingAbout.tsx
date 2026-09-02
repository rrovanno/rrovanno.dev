"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="w-full max-w-4xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          About
        </motion.p>

{/* Main heading */}
<motion.h2
  initial={{
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  viewport={{
    once: false,
    amount: 0.1,
  }}
  transition={{
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mt-4 text-5xl font-bold tracking-tight"
>
  Building software that puts people first.
</motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Hello there! I'm Vanno, a Computer Science graduate from Indonesia who likes
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
"use client";

import { motion } from "motion/react";

export default function LandingHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          SOFTWARE ENGINEER{" "}
          <span className="text-red-700">•</span>
          {" "}JACK OF ALL TRADES
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
          Building software
          <br />
          that remembers.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          I'm Rovanno, a developer passionate about building products,
          AI systems, and experiences that put people first.
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="relative h-12 w-px overflow-hidden bg-red-800/25">
          <motion.div
            animate={{
              y: ["-100%", "300%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-4 w-px bg-red-700"
          />
        </div>
      </motion.div>
    </section>
  );
}
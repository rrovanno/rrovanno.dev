"use client";

import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Atlas",
    description:
      "A local-first personal knowledge system built around user-owned knowledge.",
    status: "Building",
    type: "Knowledge System",
  },
  {
    number: "02",
    title: "Seal",
    description:
      "A digital letters experience built around preserving meaningful memories.",
    status: "Building",
    type: "Web Experience",
  },
  {
    number: "03",
    title: "Dude, Where's Our Stage?",
    description:
      "A 2D platformer inspired by Blink-182, built from the ground up in Godot.",
    status: "Completed",
    type: "Game",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          Projects
        </motion.p>

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
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Things I've been building.
        </motion.h2>

        {/* Project list */}
        <div className="mt-20 border-t border-foreground/15">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                border-b
                border-foreground/15
                py-10
                md:py-12
              "
            >
              <div
                className="
                  grid
                  gap-6
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:-translate-y-1
                  md:grid-cols-[60px_1fr_auto]
                  md:items-start
                "
              >
                {/* Number */}
                <p className="text-sm text-muted-foreground">
                  {project.number}
                </p>

                {/* Main project info */}
                <div>
                  <h3
                    className="
                      max-w-4xl
                      text-3xl
                      font-semibold
                      tracking-tight
                      md:text-5xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-base
                      leading-7
                      text-muted-foreground
                      md:text-lg
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Metadata */}
                <div className="flex gap-8 md:flex-col md:items-end md:gap-2">
                  <p className="text-sm">
                    {project.status}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {project.type}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
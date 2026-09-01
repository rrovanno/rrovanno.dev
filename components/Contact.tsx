"use client";

import { motion } from "motion/react";
import CursorTarget from "@/components/cursor/CursorTarget";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center px-6 py-32"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          Contact
        </motion.p>

        {/* Main message */}
        <motion.div
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
          className="mt-8"
        >
          <p className="text-xl text-muted-foreground md:text-2xl">
            Have something in mind?
          </p>

          <h2 className="mt-3 max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            Let's make
            <br />
            something happen.
          </h2>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 flex flex-col gap-8 border-t border-foreground/15 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <CursorTarget shift>
            <a
              href="mailto:i.rovanno@gmail.com"
              className="text-xl font-medium md:text-2xl"
            >
              i.rovanno@gmail.com ↗
            </a>
          </CursorTarget>

          <div className="flex gap-8">
            <CursorTarget shift>
              <a
                href="https://github.com/rrovanno"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </CursorTarget>

            <CursorTarget shift>
              <a
                href="https://www.linkedin.com/in/rrovanno"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </CursorTarget>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";

export default function Atmosphere({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">

      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          className="
            absolute
            -left-[20%]
            top-[5%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-purple-500/25
            blur-[140px]
          "
          animate={{
            x: [0, 150, -50, 0],
            y: [0, 100, 200, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            right-[-20%]
            top-[25%]
            h-[800px]
            w-[800px]
            rounded-full
            bg-blue-500/20
            blur-[160px]
          "
          animate={{
            x: [0, -180, 50, 0],
            y: [0, 200, -50, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[5%]
            left-[25%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-pink-500/20
            blur-[150px]
          "
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      {/* Actual website content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
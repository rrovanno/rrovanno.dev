"use client";

import { motion } from "motion/react";
import type { Track } from "@/components/Atmosphere";

export default function Listening({
  track,
}: {
  track: Track | null;
}) {
  const isLoading = !track;

  return (
    <section
      id="listening"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          What I'm Listening To
        </motion.p>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center">

          {/* Album artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              aspect-square
              w-full
              max-w-[320px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/10
            "
          >
            {track?.albumArt ? (
              <img
                src={track.albumArt}
                alt={`${track.album} album cover`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="
                  h-full
                  w-full
                  animate-pulse
                  bg-foreground/5
                "
              />
            )}
          </motion.div>

          {/* Track information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="min-w-0"
          >
            {isLoading ? (
              <div className="space-y-5">

                <div
                  className="
                    h-3
                    w-28
                    animate-pulse
                    rounded-full
                    bg-foreground/10
                  "
                />

                <div
                  className="
                    h-12
                    w-64
                    max-w-full
                    animate-pulse
                    rounded-lg
                    bg-foreground/10
                    md:h-16
                    md:w-96
                  "
                />

                <div
                  className="
                    h-6
                    w-40
                    animate-pulse
                    rounded-md
                    bg-foreground/10
                  "
                />

                <div
                  className="
                    h-4
                    w-32
                    animate-pulse
                    rounded-md
                    bg-foreground/5
                  "
                />

              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">

                  {track.nowPlaying && (
                    <span className="relative flex h-2 w-2">
                      <span
                        className="
                          absolute
                          inline-flex
                          h-full
                          w-full
                          animate-ping
                          rounded-full
                          bg-current
                          opacity-50
                        "
                      />

                      <span
                        className="
                          relative
                          inline-flex
                          h-2
                          w-2
                          rounded-full
                          bg-current
                        "
                      />
                    </span>
                  )}

                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {track.nowPlaying
                      ? "Now Playing"
                      : "Last Listened"}
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  {track.title}
                </h2>

                <p className="mt-3 text-xl text-muted-foreground">
                  {track.artist}
                </p>

                {track.album && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {track.album}
                  </p>
                )}
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
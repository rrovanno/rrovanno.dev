"use client";

import { useEffect, useRef, useState } from "react";

export type Track = {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  nowPlaying: boolean;
  url: string;

  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

type Colors = Track["colors"];

const DEFAULT_COLORS: Colors = {
  primary: "#8b5cf6",
  secondary: "#3b82f6",
  accent: "#ec4899",
};

export default function Atmosphere({
  children,
}: {
  children: (track: Track | null) => React.ReactNode;
}) {
  const [track, setTrack] = useState<Track | null>(null);

  const [currentColors, setCurrentColors] =
    useState<Colors>(DEFAULT_COLORS);

  const [previousColors, setPreviousColors] =
    useState<Colors>(DEFAULT_COLORS);

  const [showCurrent, setShowCurrent] = useState(true);

  const currentColorsRef = useRef<Colors>(DEFAULT_COLORS);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch("/api/lastfm");

        if (!response.ok) {
        console.warn(
            `Last.fm temporarily unavailable (${response.status}). Keeping previous track.`
        );

        return;
        }

        const data: Track = await response.json();

        setTrack(data);

        const nextColors = data.colors;

        const oldColors = currentColorsRef.current;

        const colorsChanged =
          oldColors.primary !== nextColors.primary ||
          oldColors.secondary !== nextColors.secondary ||
          oldColors.accent !== nextColors.accent;

        if (colorsChanged) {
          setPreviousColors(oldColors);
          setCurrentColors(nextColors);

          currentColorsRef.current = nextColors;

          // Start new layer invisible
          setShowCurrent(false);

          // Let React paint it first, then fade it in
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setShowCurrent(true);
            });
          });
        }
        } catch (error) {
        console.warn(
            "Unable to update listening data. Keeping previous track.",
            error
        );
        }
    };

    fetchTrack();

    const interval = setInterval(fetchTrack, 15000);

    return () => clearInterval(interval);
  }, []);

  const background = (colors: Colors) => ({
    backgroundImage: `
      radial-gradient(
        circle at 20% 20%,
        ${colors.primary}59,
        transparent 30%
      ),
      radial-gradient(
        circle at 80% 35%,
        ${colors.secondary}4D,
        transparent 35%
      ),
      radial-gradient(
        circle at 45% 75%,
        ${colors.accent}47,
        transparent 35%
      )
    `,
  });

  const atmosphereLayer = `
    absolute
    -inset-[20%]
    blur-[100px]
  `;

  return (
    <div className="relative overflow-visible">

      {/* Atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          -top-40
          bottom-0
          overflow-hidden

          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%)]
        "
      >
        {/* Previous album palette */}
        <div
          className={atmosphereLayer}
          style={{
            ...background(previousColors),
            opacity: 0.7,
          }}
        />

        {/* Current album palette */}
        <div
          className={`
            ${atmosphereLayer}
            transition-opacity
            duration-[2000ms]
            ease-in-out
          `}
          style={{
            ...background(currentColors),
            opacity: showCurrent ? 0.7 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children(track)}
      </div>

    </div>
  );
}
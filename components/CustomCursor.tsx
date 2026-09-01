"use client";

import { useEffect, useRef } from "react";
import { useCursor } from "@/components/cursor/CursorProvider";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);

  const hoveredRectRef = useRef<DOMRect | null>(null);

  const { hoveredRect } = useCursor();

  useEffect(() => {
    hoveredRectRef.current = hoveredRect;
  }, [hoveredRect]);

  useEffect(() => {
    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    let cursor = {
      x: mouse.x,
      y: mouse.y,
    };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!hasMoved.current) {
        cursor.x = mouse.x;
        cursor.y = mouse.y;
        hasMoved.current = true;
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      const rect = hoveredRectRef.current;

      let targetX = mouse.x;
      let targetY = mouse.y;

      // LOCK CURSOR TO TARGET
      if (rect) {
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
      }

      const speed = rect ? 0.25 : 0.15;

      cursor.x += (targetX - cursor.x) * speed;
      cursor.y += (targetY - cursor.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`;

        if (rect) {
          cursorRef.current.style.width =
            `${rect.width + 20}px`;

          cursorRef.current.style.height =
            `${rect.height + 20}px`;

          cursorRef.current.style.borderRadius =
            "9999px";
        } else {
          cursorRef.current.style.width = "16px";
          cursorRef.current.style.height = "16px";
          cursorRef.current.style.borderRadius = "6px";
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed
        z-[9999]

        border
        border-black/20
        dark:border-white/25

        bg-white/5
        dark:bg-white/5

        backdrop-blur-[0.2px]

        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.08)]

        transition-[width,height,border-radius]
        duration-300
        ease-out
      "
      style={{
        width: "16px",
        height: "16px",
      }}
    />
  );
}
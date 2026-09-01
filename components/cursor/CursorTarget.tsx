"use client";

import { useRef } from "react";
import { useCursor } from "@/components/cursor/CursorProvider";

type CursorTargetProps = {
  children: React.ReactNode;
  shift?: boolean;
};

export default function CursorTarget({
  children,
  shift = false,
}: CursorTargetProps) {
  const targetRef = useRef<HTMLSpanElement>(null);

  const { setHoveredRect } = useCursor();

  const handleMouseEnter = () => {
    if (!targetRef.current) return;

    const rect = targetRef.current.getBoundingClientRect();

    setHoveredRect(rect);
  };

  const handleMouseLeave = () => {
    setHoveredRect(null);
  };

  return (
    <span
      ref={targetRef}
      data-cursor
      className={`
        inline-flex items-center
        transition-transform duration-200 ease-out
        ${shift ? "hover:-translate-y-0.5" : ""}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}
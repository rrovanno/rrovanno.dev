"use client";

import CursorTarget from "@/components/cursor/CursorTarget";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          gap-4
          border-t
          border-foreground/15
          pt-6
          text-sm
          text-muted-foreground
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <p>
          © {new Date().getFullYear()} Rovanno Raaf
        </p>

        <CursorTarget shift>
          <a
            href="#home"
            className="inline-flex items-center gap-2"
          >
            Back to top ↑
          </a>
        </CursorTarget>
      </div>
    </footer>
  );
}
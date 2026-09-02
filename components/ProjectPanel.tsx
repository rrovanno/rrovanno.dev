"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CursorTarget from "@/components/cursor/CursorTarget";
import type { Project } from "@/data/projects";

type ProjectPanelProps = {
  project: Project | null;
  onClose: () => void;
};

const modalTransition = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export default function ProjectPanel({
  project,
  onClose,
}: ProjectPanelProps) {
useEffect(() => {
  if (!project) return;

  const previousBodyOverflow = document.body.style.overflow;
  const previousHtmlOverflow = document.documentElement.style.overflow;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  // Lock the page without changing its scroll position
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = previousBodyOverflow;
    document.documentElement.style.overflow = previousHtmlOverflow;

    window.removeEventListener("keydown", handleKeyDown);
  };
}, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="
            fixed inset-0 z-[200]
            flex items-center justify-center
            p-4 md:p-8
          "
        >
          {/* Background */}
          <motion.div
            initial={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(12px)",
            }}
            exit={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            transition={modalTransition}
            onClick={onClose}
            className="absolute inset-0"
            aria-hidden="true"
          />

          {/* Project modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 20,
              filter: "blur(6px)",
            }}
            transition={modalTransition}
            className="
              project-modal-scroll
              relative z-[201]
              max-h-[90vh]
              w-full max-w-4xl
              overflow-y-auto
              rounded-2xl
              border border-foreground/15
              bg-background/95
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <div className="px-6 py-8 md:px-12 md:py-10">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {project.number}
                </p>

                <CursorTarget shift>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="text-sm uppercase tracking-[0.2em]"
                  >
                    Close ×
                  </button>
                </CursorTarget>
              </div>

              {/* Hero */}
              <div className="mt-14">
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  {project.type}
                </p>

                <h2
                  id="project-modal-title"
                  className="mt-4 text-4xl font-bold tracking-tight md:text-6xl"
                >
                  {project.title}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                  {project.description}
                </p>
              </div>

              {/* Status + Stack */}
              <div className="mt-12 grid gap-8 border-y border-foreground/15 py-8 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Status
                  </p>

                  <p className="mt-2">{project.status}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Stack
                  </p>

                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-foreground"
                        />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project sections */}
              <div className="mt-12 space-y-12">
                {project.sections.map((section) => (
                  <section key={section.title}>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {section.title}
                    </p>

                    <p className="mt-4 text-lg leading-8">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="mt-14 flex flex-wrap gap-8 border-t border-foreground/15 pt-8">
                  {project.links.map((link) => (
                    <CursorTarget shift key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                      >
                        {link.label} ↗
                      </a>
                    </CursorTarget>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import CursorTarget from "@/components/cursor/CursorTarget";

type GitHubRepo = {
  name: string;
  pushedAt: string;
  url: string;
};

const project = {
  name: "Atlas",
  description:
    "A local-first personal knowledge system built around user-owned knowledge.",
  stage: "In Development",
  focus: "Identity dashboard",
  stack: ["Next.js", "TypeScript", "SQLite"],
  fallbackUrl: "https://github.com/rrovanno/Atlas",
};

function formatActivity(dateString?: string) {
  if (!dateString) return "Recently";

  const date = new Date(dateString);
  const now = new Date();

  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function NowWorkingOn() {
  const [repo, setRepo] = useState<GitHubRepo | null>(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch("/api/github-current");

        if (!response.ok) {
          console.warn("Unable to load GitHub activity.");
          return;
        }

        const data = await response.json();

        setRepo({
          name: data.name,
          pushedAt: data.pushedAt,
          url: data.url,
        });
      } catch (error) {
        console.warn("Unable to load GitHub activity.", error);
      }
    };

    fetchRepo();
  }, []);

  return (
    <section id="working" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          Currently Building
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 border-y border-foreground/15 py-10 md:py-14"
        >
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
                {repo?.name ?? project.name}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Stage
                </p>
                <p className="mt-2">{project.stage}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Current Focus
                </p>
                <p className="mt-2">{project.focus}</p>
              </div>

              <div className="col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Latest Activity
                </p>

                <p className="mt-2">
                  {repo ? formatActivity(repo.pushedAt) : "Loading activity..."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex border-t border-foreground/15 pt-8">
            <CursorTarget shift>
              <a
                href={repo?.url ?? project.fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                View Repository ↗
              </a>
            </CursorTarget>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
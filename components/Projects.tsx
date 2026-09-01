export default function Projects() {
  const projects = [
    {
      title: "Atlas",
      description:
        "A personal knowledge system designed to keep knowledge user-owned and AI-friendly.",
      status: "Building",
    },
    {
      title: "V.RO",
      description:
        "A hybrid AI assistant combining local and cloud intelligence.",
      status: "Building",
    },
    {
      title: "Seal",
      description:
        "A digital letters app for preserving meaningful memories.",
      status: "Prototype",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Projects
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Things I've been building.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm text-muted-foreground">
                {project.status}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
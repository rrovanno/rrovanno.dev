export default function LandingHero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          SOFTWARE ENGINEER • JACK OF ALL TRADES
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
          Building software
          <br />
          that remembers.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          I'm Rovanno, a developer passionate about building products,
          AI systems, and experiences that put people first.
        </p>

      </div>
    </section>
  );
}
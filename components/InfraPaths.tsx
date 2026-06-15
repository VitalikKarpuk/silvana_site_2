import Reveal from "./ui/Reveal";

const PATHS = [
  {
    title: "Don't code?",
    body: "Trade from the Terminal, swap in two clicks, and track rewards in EarnHub — no integration required.",
    cta: "Open the app →",
  },
  {
    title: "Configure an agent.",
    body: "Simulate a strategy in the Playground, then export the exact agent.toml and CLI command to run it for real.",
    cta: "Try the Playground →",
  },
  {
    title: "Build your own.",
    body: "gRPC services defined in proto work from any language. Agents run in Rust; a TypeScript SDK covers web. Two-phase signing keeps keys local.",
    cta: "Read the docs →",
  },
];

export default function InfraPaths() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-tight text-4xl sm:text-5xl">
            Reliable, extensible infrastructure for every stack
          </h2>
          <p className="mt-5 text-lg text-muted">
            Adapt Silvana to your architecture, not the other way around.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PATHS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="panel flex h-full flex-col rounded-2xl p-6">
              <h3 className="display text-xl">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
              <a href="#" className="mt-5 text-sm text-data">
                {p.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Scale sub-band */}
      <Reveal>
        <div className="panel-2 mt-8 rounded-2xl px-6 py-5">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-fg">Scale with confidence:</span>{" "}
            Sub-second matching, bidirectional settlement streams, and canonical
            update IDs on every transaction — so your systems reconcile on the first
            pass, even at volume.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

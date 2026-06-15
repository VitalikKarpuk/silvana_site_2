import Reveal from "./ui/Reveal";

const SIDE_CARDS = [
  {
    title: "Start trading.",
    body: "Onboard, connect a wallet, and place your first private order today.",
    cta: "Get started →",
  },
  {
    title: "Start building.",
    body: "Get up and running with the SDK in as little as one afternoon.",
    cta: "Quickstart →",
  },
];

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="aurora opacity-50" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/sections/dove.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden w-[680px] -translate-y-1/2 opacity-50 mix-blend-screen lg:block"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl">
              Ready to put agents to work?
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Create an account and trade in minutes, or talk to us about what
              you&apos;re building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Open the app
              </a>
              <a
                href="#"
                className="rounded-lg border border-line bg-surface/60 px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
              >
                Contact the team
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {SIDE_CARDS.map((c) => (
                <a
                  key={c.title}
                  href="#"
                  className="panel flex items-center justify-between gap-4 rounded-2xl p-6 transition-colors hover:bg-surface-2"
                >
                  <div>
                    <h3 className="display text-lg">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted">{c.body}</p>
                  </div>
                  <span className="shrink-0 text-data">{c.cta}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

const COLUMNS = [
  {
    title: "Products",
    links: ["Silvana Book", "Terminal", "Swap", "Agentic API", "SDK", "Markets", "EarnHub"],
  },
  {
    title: "Agents",
    links: ["How agents work", "Agent catalog", "Use cases in action", "Playground", "Marketplace"],
  },
  {
    title: "Build",
    links: ["SDK guide", "API reference", "Agent Space", "docs.silvana.one"],
  },
  {
    title: "Solutions",
    links: ["Use cases", "Who can use Silvana", "Case studies"],
  },
  {
    title: "Company",
    links: ["Our thesis", "About", "Blog", "Contact", "X", "Telegram"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-xs uppercase tracking-widest text-muted">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted/80 transition-colors hover:text-fg"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 text-muted">
              <path d="M9 1.5 16 9l-7 7.5L2 9l7-7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M9 5.5 12.5 9 9 12.5 5.5 9 9 5.5Z" fill="var(--color-accent)" />
            </svg>
            <p className="text-xs text-muted">
              © Silvana · Agentic DeFi on Canton. Private execution. Autonomous
              agents. Atomic settlement.
            </p>
          </div>

          <form
            className="flex max-w-xs gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-lg border border-line bg-bg/60 px-3 py-2 text-xs text-fg placeholder:text-muted/60"
            />
            <button className="rounded-lg border border-line px-3 py-2 text-xs text-fg transition-colors hover:bg-surface-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

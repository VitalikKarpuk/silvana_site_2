"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";
import Media from "./ui/Media";

const STORY_CARDS = [
  { company: "Modo", text: "Modo ships explorer infrastructure on Silvana data." },
  { company: "Loop Wallet", text: "Loop Wallet powers non-custodial DvP for thousands of users." },
  { company: "Supanova", text: "Supanova brings agent-driven apps to Canton wallets." },
];

function CodeBlock() {
  const [tab, setTab] = useState<"rust" | "ts">("rust");
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg/80 backdrop-blur-md">
      <div className="flex items-center gap-1 border-b border-line bg-white/3 p-2">
        {(["rust", "ts"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`mono rounded-md px-3 py-1 text-xs transition-colors ${
              tab === t ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {t === "rust" ? "Rust" : "TypeScript"}
          </button>
        ))}
      </div>
      <pre className="mono overflow-x-auto p-5 text-xs leading-relaxed sm:text-sm">
        <span className="text-muted">$</span> silvana onboard --name my-agent
        --invite <span className="text-accent">EARLYBIRD</span>
        {"\n"}
        <span className="text-data">
          ✓ Key generated · .env written · agent.toml created
        </span>
        {"\n\n"}
        <span className="text-muted">$</span> silvana agent run
        {"\n"}
        <span className="text-data">→</span> Connected to{" "}
        <span className="text-fg">CC/USDC</span> · quoting 6 levels · streaming
        settlement events…
      </pre>
    </div>
  );
}

export default function Developers() {
  return (
    <section id="developers" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3 block">
            Silvana for developers
          </p>
          <h2 className="display text-3xl sm:text-4xl">
            From strategy to running agent in an afternoon.
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Onboard with one CLI command. Configure your strategy in agent.toml.
            Run grid, market-making, or taker flows out of the box — or compose your
            own logic on the core crates. Want to feel it first? The Playground
            simulates your strategy on a mock feed and exports the exact config to
            go live.
          </p>
          <p className="mt-6 max-w-md text-sm text-muted/80">
            A general-purpose SDK, proto interfaces for any language, and four
            hosting models — from your laptop to a TEE.
          </p>
        </Reveal>

        {/* Product shot — framed image with the code block floating over its corner */}
        <Reveal delay={0.1} className="lg:mb-12">
          <div className="relative">
            <Media
              src="/images/sections/developers.png"
              ratio="4 / 3"
              label="A Silvana agent, coding"
              className="rounded-2xl border border-line"
            />
            <div className="mt-4 lg:absolute lg:-bottom-10 lg:-left-8 lg:mt-0 lg:w-[82%]">
              <div className="shadow-2xl shadow-black/50">
                <CodeBlock />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Story cards — horizontal scroll */}
      <div className="rail mt-12 flex snap-x gap-4 overflow-x-auto pb-4">
        {STORY_CARDS.map((c) => (
          <a
            key={c.company}
            href="#"
            className="panel min-w-[260px] snap-start rounded-2xl p-5 transition-colors hover:bg-surface-2"
          >
            <div className="mono mb-2 text-xs uppercase tracking-wider text-muted">
              {c.company}
            </div>
            <p className="text-sm text-fg">{c.text}</p>
            <span className="mt-4 inline-block text-sm text-data">Story →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

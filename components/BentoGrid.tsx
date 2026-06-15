"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import Reveal from "./ui/Reveal";

function ExpandIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
      fill="none"
    >
      <path
        d="M6 2H2v4M10 14h4v-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Card({
  title,
  body,
  link,
  large,
  children,
}: {
  title: string;
  body: string;
  link: string;
  large?: boolean;
  children: ReactNode;
}) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`group panel rounded-2xl p-6 transition-all hover:border-white/15 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={
          large
            ? "flex flex-col gap-6 lg:flex-row lg:items-stretch"
            : "flex h-full flex-col"
        }
      >
        {/* Copy column */}
        <div className={`flex flex-col ${large ? "lg:w-[44%] lg:shrink-0" : "flex-1"}`}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="display text-lg text-balance">{title}</h3>
            <ExpandIcon />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
          <span className="mt-4 text-sm text-data lg:mt-auto lg:pt-4">{link}</span>
        </div>

        {/* Mini-UI */}
        <div className={large ? "lg:flex lg:flex-1 lg:items-center" : "mt-5"}>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </motion.a>
  );
}

/* ---------- Mini-UIs ---------- */

function OrderbookUI() {
  const bids = [
    ["0.9982", "12,400"],
    ["0.9981", "8,250"],
    ["0.9980", "21,030"],
    ["0.9979", "5,500"],
    ["0.9978", "14,120"],
  ];
  const asks = [
    ["0.9983", "9,800"],
    ["0.9984", "16,400"],
    ["0.9985", "7,250"],
    ["0.9986", "11,900"],
    ["0.9987", "4,300"],
  ];
  return (
    <div className="inset rounded-xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="mono inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-1 text-xs text-fg">
          CC-USDC
          <svg width="8" height="8" viewBox="0 0 10 10" className="text-muted" aria-hidden="true">
            <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mono rounded-md bg-data/15 px-2 py-1 text-xs text-data"
        >
          Matched in 0.4s
        </motion.span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="space-y-1">
          {asks.map(([p, s], i) => (
            <div key={i} className="mono flex justify-between text-muted">
              <span className="text-accent">{p}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {bids.map(([p, s], i) => (
            <div key={i} className="mono flex justify-between text-muted">
              <span className="text-data">{p}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mono mt-3 inline-block rounded-md border border-line px-2 py-1 text-[11px] text-muted">
        DvP settled on Canton
      </div>
    </div>
  );
}

function AgentTomlUI() {
  return (
    <div className="inset rounded-xl">
      <pre className="mono overflow-x-auto p-4 text-xs leading-relaxed text-fg">
        <span className="text-muted"># agent.toml</span>
        {"\n"}market{"      "}= <span className="text-data">&quot;CC/USDC&quot;</span>
        {"\n"}delta_percent = <span className="text-data">0.4</span>
        {"\n"}levels{"      "}= <span className="text-data">6</span>
        {"\n"}size{"        "}= <span className="text-data">250</span>
      </pre>
      <div className="mono flex items-center gap-2 border-t border-line px-4 py-2 text-[11px] text-muted">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        Running · 14h uptime · 312 orders managed
      </div>
    </div>
  );
}

function SwapUI() {
  return (
    <div className="inset rounded-xl p-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-lg bg-surface-2 px-3 py-2.5">
          <span className="mono text-sm text-fg">1,000 CC</span>
          <span className="text-xs text-muted">You pay</span>
        </div>
        <div className="flex justify-center text-muted">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M7 2v10M3.5 8.5 7 12l3.5-3.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-surface-2 px-3 py-2.5">
          <span className="mono text-sm text-data">412.50 USDC</span>
          <span className="text-xs text-muted">You receive</span>
        </div>
      </div>
      <div className="mono mt-3 inline-block rounded-md border border-line px-2 py-1 text-[11px] text-muted">
        Atomic DvP
      </div>
    </div>
  );
}

function ApiUI() {
  const [tab, setTab] = useState<"rust" | "ts">("ts");
  return (
    <div className="inset rounded-xl">
      <div className="flex gap-1 border-b border-line p-2">
        {(["ts", "rust"] as const).map((t) => (
          <button
            key={t}
            onClick={(e) => {
              e.preventDefault();
              setTab(t);
            }}
            className={`mono rounded-md px-2.5 py-1 text-xs transition-colors ${
              tab === t ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {t === "ts" ? "TypeScript" : "Rust"}
          </button>
        ))}
      </div>
      <pre className="mono overflow-x-auto p-4 text-xs leading-relaxed">
        {tab === "ts" ? (
          <>
            <span className="text-accent">const</span> tx ={" "}
            <span className="text-data">prepare</span>(req){"\n"}
            <span className="text-accent">const</span> sig ={" "}
            <span className="text-data">sign</span>(tx){"\n"}
            <span className="text-accent">await</span>{" "}
            <span className="text-data">execute</span>(sig){" "}
            <span className="text-muted">{"// → updateId"}</span>
          </>
        ) : (
          <>
            <span className="text-accent">let</span> tx ={" "}
            <span className="text-data">prepare</span>(req)?;{"\n"}
            <span className="text-accent">let</span> sig ={" "}
            <span className="text-data">sign</span>(tx)?;{"\n"}
            <span className="text-data">execute</span>(sig).await?{" "}
            <span className="text-muted">{"// -> update_id"}</span>
          </>
        )}
      </pre>
    </div>
  );
}

function ProofUI() {
  return (
    <div className="inset rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-data/15 text-data">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="text-sm text-fg">Trade activity proof</div>
          <div className="mono inline-flex items-center gap-1 text-xs text-data">
            Verified
            <svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mono mt-3 flex justify-between border-t border-line pt-2 text-[11px] text-muted">
        <span>Orders revealed</span>
        <span className="text-fg">0</span>
      </div>
    </div>
  );
}

function EarnUI() {
  return (
    <div className="inset rounded-xl p-4">
      <div className="mono flex items-center justify-between rounded-lg bg-surface-2 px-3 py-2.5 text-sm">
        <span className="flex items-center gap-2 text-fg">
          <span className="text-muted">#12</span>
          <span className="text-data">↑3</span>
        </span>
        <span className="text-accent">4,820 pts</span>
      </div>
      <div className="mono mt-2 text-[11px] text-muted">Season 6</div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-tight text-4xl sm:text-5xl">
            One platform, every agentic workflow
          </h2>
          <p className="mt-5 text-lg text-muted">
            A complete set of trading and agent infrastructure — designed to work
            individually or together.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          large
          title="Trade privately on a high-performance orderbook."
          body="Off-chain matching in under a second. Zero information leakage, zero slippage, zero pools. Your orders never touch a public mempool."
          link="Explore Silvana Book →"
        >
          <OrderbookUI />
        </Card>
        <Card
          large
          title="Put agents on the flow."
          body="Market making, grid, RFQ, settlement, proving — configure an agent once and let it run around the clock."
          link="Browse the agent catalog →"
        >
          <AgentTomlUI />
        </Card>
        <Card
          title="Swap with atomic settlement."
          body="Assets and payment move simultaneously — or not at all. No pools, no custody handoffs, rollback-protected."
          link="Try Swap →"
        >
          <SwapUI />
        </Card>
        <Card
          title="Build on the Agentic API."
          body="One gRPC interface for everything on Canton: payments, DvP, transfers, multicall workflows."
          link="Read the API reference →"
        >
          <ApiUI />
        </Card>
        <Card
          title="Prove without revealing."
          body="Hand auditors ZK proofs of trading activity — without exposing a single order."
          link="How proving works →"
        >
          <ProofUI />
        </Card>
        <Card
          title="Earn as you trade."
          body="Every settled transaction counts toward seasonal rewards in EarnHub."
          link="Open EarnHub →"
        >
          <EarnUI />
        </Card>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./ui/Reveal";
import Media from "./ui/Media";

type Row = {
  company: string;
  summary: string;
  stat?: string;
  products?: string;
};

const ROWS: Row[] = [
  {
    company: "Hecto",
    summary: "Hecto builds white-label settlement rails on Silvana.",
    stat: "8 integration areas · 3 regulatory environments · weeks, not quarters, to launch",
    products: "Silvana Book, Agentic API, proving agents",
  },
  {
    company: "Supanova",
    summary: "Supanova embeds agent-driven trading directly in its wallet.",
  },
  {
    company: "Modo",
    summary: "Modo indexes Canton settlement activity in real time on Silvana data.",
  },
];

export default function Institutions() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3 block">
              Silvana for institutions
            </p>
            <h2 className="display text-3xl sm:text-4xl">
              Trade size without showing your hand.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Run OTC and block flows through private RFQ. Settle atomically via DvP
              on Canton — no counterparty risk, no partial states. And when reporting
              season comes, hand over ZK proofs instead of spreadsheets: selective
              disclosure means full accountability with zero exposure.
            </p>
            <p className="mt-6 max-w-md text-sm text-muted/80">
              Confidentiality, deterministic execution, and compliance-ready proofs —
              infrastructure that fits how institutions actually operate.
            </p>
            <div className="mt-8">
              <Media
                src="/images/sections/institutions.png"
                ratio="16 / 11"
                label="Zero-knowledge proof of activity"
                className="rounded-2xl border border-line"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel divide-y divide-line overflow-hidden rounded-2xl">
              {ROWS.map((row, i) => {
                const isOpen = open === i;
                return (
                  <div key={row.company}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm text-fg">{row.summary}</span>
                      <span
                        className={`shrink-0 text-muted transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            {row.stat && (
                              <div className="mono mb-3 rounded-lg border border-line bg-bg/60 px-3 py-2 text-xs text-data">
                                {row.stat}
                              </div>
                            )}
                            {row.products && (
                              <p className="text-xs text-muted">
                                Products used: {row.products}
                              </p>
                            )}
                            <a href="#" className="mt-3 inline-block text-sm text-data">
                              Read the story →
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

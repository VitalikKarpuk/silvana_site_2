"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AgenticTree from "./AgenticTree";
import Media from "./ui/Media";

function useTicker(start: number) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const id = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 900) + 100);
    }, 2600);
    return () => clearInterval(id);
  }, []);
  return value;
}

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const settled = useTicker(4218907);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line px-5 pt-32 lg:pt-40"
    >
      <div className="aurora" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Announcement pill (live ticker) */}
        <motion.a
          href="#"
          {...fade}
          transition={{ duration: 0.5 }}
          className="pill mono hover:border-line-soft"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Settled this season&nbsp;
          <span className="text-fg">${settled.toLocaleString("en-US")}</span>
          <span className="text-muted-2">→</span>
        </motion.a>

        <motion.h1
          {...fade}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="display-tight mx-auto mt-7 max-w-3xl text-5xl text-balance sm:text-6xl lg:text-7xl"
        >
          The agent interaction layer
          <br className="hidden sm:block" /> for{" "}
          <span className="accent-text">tokenized assets</span>
        </motion.h1>

        <motion.p
          {...fade}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          Silvana lets AI agents, applications, and institutions securely operate
          tokenized assets on Canton. Deploy agents that trade, settle, and prove —
          from your first transaction to your millionth.
        </motion.p>

        <motion.div
          {...fade}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Open the app
          </a>
          <a
            href="#developers"
            className="panel rounded-lg px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            Start building
          </a>
        </motion.div>

        <motion.p
          {...fade}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-sm text-muted-2"
        >
          Trading takes minutes. Your first agent takes an afternoon.
        </motion.p>
      </div>

      {/* Large centered product visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-16 max-w-4xl lg:mt-20"
      >
        <div className="panel mx-auto overflow-hidden rounded-2xl">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
            <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
            <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
            <span className="mono ml-3 text-xs text-muted-2">
              silvana · agent topology
            </span>
          </div>
          <div className="relative px-6 py-8">
            <Media
              kind="video"
              src="/video/tree.mp4"
              ratio="16 / 10"
              label="App walkthrough — drop /video/tree.mp4"
              fallback={
                <div className="mx-auto aspect-16/10 w-full max-w-2xl">
                  <AgenticTree />
                </div>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./ui/Reveal";

type State = "idle" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setState(valid ? "success" : "error");
  };

  return (
    <section className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
        <Reveal>
          <h2 className="display text-3xl sm:text-4xl">
            The agentic economy, in your inbox.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Product launches, new markets, and deep dives on agent infrastructure.
            Once or twice a month. No noise.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            {state === "success" ? (
              <p className="rounded-lg border border-data/40 bg-data/10 px-4 py-3 text-sm text-data">
                You&apos;re in. Watch for the next dispatch.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="flex-1 rounded-lg border border-line bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted/60"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Subscribe
                </button>
              </form>
            )}

            {state === "error" && (
              <p className="mt-3 text-sm text-accent">
                That email didn&apos;t go through — mind checking it?
              </p>
            )}

            {state !== "success" && (
              <p className="mt-3 text-xs text-muted/70">
                Unsubscribe anytime. We never share your email.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

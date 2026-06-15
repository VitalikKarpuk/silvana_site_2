"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

type NavItem = {
  label: string;
  items?: { label: string; desc: string }[];
  featured?: string;
};

const NAV: NavItem[] = [
  {
    label: "Products",
    items: [
      { label: "Silvana Book", desc: "Private high-performance orderbook" },
      { label: "Terminal", desc: "Trade by hand, no integration" },
      { label: "Swap", desc: "Atomic DvP swaps in two clicks" },
      { label: "Agentic API", desc: "One gRPC interface for Canton" },
      { label: "SDK", desc: "Build agents and apps" },
    ],
    featured: "Compare all products →",
  },
  {
    label: "Agents",
    items: [
      { label: "How agents work", desc: "The agent execution model" },
      { label: "Agent catalog", desc: "Market making, grid, RFQ, proving" },
      { label: "Use cases in action", desc: "Real agents in production" },
      { label: "Playground", desc: "Simulate on a mock feed" },
    ],
    featured: "Try the Playground →",
  },
  {
    label: "Build",
    items: [
      { label: "SDK guide", desc: "From zero to running agent" },
      { label: "API reference", desc: "Every endpoint on Canton" },
      { label: "Agent Space", desc: "Share and discover agents" },
      { label: "docs.silvana.one", desc: "Full documentation" },
    ],
    featured: "5-minute quickstart →",
  },
  {
    label: "Solutions",
    items: [
      { label: "Use cases", desc: "Desks, treasuries, products" },
      { label: "Who can use Silvana", desc: "Find your fit" },
      { label: "Case studies", desc: "How teams ship on Silvana" },
    ],
    featured: "Find your fit →",
  },
];

const FLAT_LINKS = ["Our thesis", "Markets", "EarnHub"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "nav-bar border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Silvana logo */}
        <a href="#top" className="flex items-center" aria-label="Silvana home">
          <Logo className="h-6 w-auto text-fg" />
        </a>

        {/* Desktop nav */}
        <div
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpen(null)}
        >
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(item.label)}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                aria-expanded={open === item.label}
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-60">
                  <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                </svg>
              </button>
              {open === item.label && item.items && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="panel-2 w-72 rounded-xl p-2 shadow-2xl shadow-black/40">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href="#"
                        className="block rounded-lg px-3 py-2 transition-colors hover:bg-surface-2"
                      >
                        <div className="text-sm text-fg">{sub.label}</div>
                        <div className="text-xs text-muted">{sub.desc}</div>
                      </a>
                    ))}
                    {item.featured && (
                      <a
                        href="#"
                        className="mt-1 block border-t border-line px-3 pt-2.5 text-sm text-data"
                      >
                        {item.featured}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {FLAT_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="hidden text-sm text-muted transition-colors hover:text-fg sm:inline-block"
          >
            Log in
          </a>
          <a
            href="#"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-block"
          >
            Open app
          </a>
          {/* Mobile hamburger */}
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-line lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="nav-bar max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line px-5 py-4 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-line py-3">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted">
                {item.label}
              </div>
              <div className="grid gap-1">
                {item.items?.map((sub) => (
                  <a key={sub.label} href="#" className="py-1 text-sm text-fg">
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-x-5 gap-y-2 py-4">
            {FLAT_LINKS.map((l) => (
              <a key={l} href="#" className="text-sm text-muted">
                {l}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Open app
          </a>
        </div>
      )}
    </header>
  );
}

"use client";

import { useRef } from "react";
import Reveal from "./ui/Reveal";
import Media from "./ui/Media";

const FEATURED = {
  slug: "silvana-v2",
  tag: "Product",
  title: "Silvana V2 is here.",
  text: "A redesigned experience across every product — plus the new Trading Terminal.",
  date: "Jun 2026",
};

const POSTS = [
  {
    slug: "sdk-live",
    tag: "Developers",
    title: "The Silvana SDK is live.",
    text: "Build agents and applications on Silvana Book with a developer-first interface.",
    date: "May 2026",
  },
  {
    slug: "ceth-markets",
    tag: "Markets",
    title: "cETH markets are open.",
    text: "Trade CC-cETH and cETH-USDC with atomic DvP settlement.",
    date: "May 2026",
  },
  {
    slug: "earnhub-s6",
    tag: "Community",
    title: "EarnHub Season 6 has started.",
    text: "New challenges, new leaderboard, new rewards for settled activity.",
    date: "Apr 2026",
  },
];

function TagChip({ tag }: { tag: string }) {
  return (
    <span className="mono rounded-full border border-line bg-bg/60 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
      {tag}
    </span>
  );
}

export default function BlogCarousel() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    railRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="display text-3xl sm:text-4xl">What&apos;s happening</h2>
              <p className="mt-2 text-muted">The latest from Silvana.</p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-fg"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-fg"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_2fr]">
          {/* Featured */}
          <Reveal>
            <a
              href="#"
              className="panel flex h-full flex-col rounded-2xl p-3 transition-all hover:border-white/15"
            >
              <Media
                src={[
                  `/images/blog/${FEATURED.slug}.png`,
                  `/images/blog/${FEATURED.slug}.jpg`,
                  `/images/blog/${FEATURED.slug}.webp`,
                  `/images/blog/${FEATURED.slug}.svg`,
                ]}
                ratio="16 / 9"
                label={`${FEATURED.title} — cover`}
                tint
                className="rounded-xl"
              />
              <div className="flex flex-1 flex-col p-4">
                <TagChip tag={FEATURED.tag} />
                <h3 className="display mt-4 text-2xl sm:text-3xl">{FEATURED.title}</h3>
                <p className="mt-3 text-sm text-muted">{FEATURED.text}</p>
                <div className="mono mt-auto flex items-center gap-3 pt-4 text-xs text-muted-2">
                  <span>{FEATURED.date}</span>
                  <span className="text-data">Read the post →</span>
                </div>
              </div>
            </a>
          </Reveal>

          {/* Rail */}
          <Reveal delay={0.1}>
            <div ref={railRef} className="rail flex h-full snap-x gap-4 overflow-x-auto pb-4">
              {POSTS.map((p) => (
                <a
                  key={p.title}
                  href="#"
                  className="panel flex min-w-[260px] snap-start flex-col rounded-2xl p-3 transition-all hover:border-white/15"
                >
                  <Media
                    src={[
                      `/images/blog/${p.slug}.png`,
                      `/images/blog/${p.slug}.jpg`,
                      `/images/blog/${p.slug}.webp`,
                      `/images/blog/${p.slug}.svg`,
                    ]}
                    ratio="16 / 9"
                    label={`${p.title} — cover`}
                    tint
                    className="rounded-xl"
                  />
                  <div className="flex flex-1 flex-col p-3">
                    <TagChip tag={p.tag} />
                    <h3 className="display mt-3 text-lg">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{p.text}</p>
                    <div className="mono mt-auto flex items-center justify-between pt-4 text-xs text-muted-2">
                      <span>{p.date}</span>
                      <span className="text-data">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

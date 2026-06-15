# Silvana — Homepage

Animated marketing homepage for Silvana, built with **Next.js 15 (App Router)**,
**Tailwind CSS v4**, **TypeScript**, and **Framer Motion**.

Content is driven by [`content/HomePage.md`](content/HomePage.md). The visual
direction (dark Apple-glass / glassmorphism, magenta + teal accents) follows
[`design/colors/palette.md`](design/colors/palette.md).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18.18+.

> **Note on Tailwind v4:** if `npm install` ever fails to fetch the native
> binding (`Cannot find native binding`), run
> `rm -rf node_modules package-lock.json && npm install`. The platform binding
> for Apple Silicon is pinned under `optionalDependencies`.

## Structure

- `app/page.tsx` — assembles all sections in spec order.
- `app/layout.tsx` — fonts (Geist + Geist Mono as the Whyte/mono stand-ins) and metadata.
- `app/globals.css` — design tokens, glass utilities, animations, reduced-motion guards.
- `components/` — one file per section (Hero, BentoGrid, Institutions, …).
- `components/AgenticTree.tsx` — the hero's draw-on SVG tree (roots → trunk → pulsing agent nodes).
- `components/ui/` — shared primitives: `Reveal` (scroll fade-in), `CountUp` (stats),
  `MediaPlaceholder` (mock image/video slots).

## Placeholder media

The build uses **no external images or video** — everything is coded (SVG tree,
CSS mini-UIs, ladder chart). Where you want to drop real media, use
`components/ui/MediaPlaceholder.tsx`, which renders a clearly-labelled mock box.
All numeric content marked `[filler]` in the content spec (ticker, leaderboard,
stat counts) is illustrative and should be wired to live data before publish.

## Animations

- Hero tree: 1.6s draw-on, then a 4s pulse on agent nodes.
- Stats: count-up once on scroll-in.
- Logo wall: 30s marquee (pauses on hover/focus), static grid on mobile.
- Scroll reveals, accordion, code/API tabs, blog carousel, newsletter states.
- All honor `prefers-reduced-motion`.

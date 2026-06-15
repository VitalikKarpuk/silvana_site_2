import Reveal from "./ui/Reveal";
import Media from "./ui/Media";

const ASKS: [string, number][] = [
  ["1.0007", 38],
  ["1.0005", 55],
  ["1.0003", 80],
  ["1.0002", 44],
  ["1.0001", 66],
];
const BIDS: [string, number][] = [
  ["0.9999", 70],
  ["0.9998", 48],
  ["0.9997", 90],
  ["0.9995", 34],
  ["0.9993", 58],
];

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <rect x="2.5" y="6" width="9" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

/** A private depth ladder — prices visible, your sizes masked behind a lock. */
function PrivateBook() {
  const Row = ({ price, depth, side }: { price: string; depth: number; side: "ask" | "bid" }) => (
    <div className="relative flex items-center justify-between px-3 py-1.5">
      <div
        className={`absolute inset-y-0.5 right-0 rounded-sm ${
          side === "ask" ? "bg-white/5" : "bg-data/12"
        }`}
        style={{ width: `${depth}%` }}
      />
      <span className={`mono relative text-xs ${side === "ask" ? "text-fg/80" : "text-data"}`}>
        {price}
      </span>
      <span className="mono relative flex items-center gap-1 text-xs text-muted/45">
        ••••
        <LockIcon className="text-muted/40" />
      </span>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg/60">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="mono text-xs text-fg">Your book · CC-USDC</span>
        <span className="mono inline-flex items-center gap-1.5 rounded-md bg-data/10 px-2 py-1 text-[11px] text-data">
          <LockIcon /> Private
        </span>
      </div>

      <div className="divide-y divide-line/60">
        {ASKS.map(([p, d]) => (
          <Row key={p} price={p} depth={d} side="ask" />
        ))}
      </div>

      <div className="mono flex items-center justify-between border-y border-line bg-white/2 px-3 py-1.5 text-[11px] text-muted">
        <span>spread</span>
        <span className="text-fg/70">0.0002</span>
      </div>

      <div className="divide-y divide-line/60">
        {BIDS.map(([p, d]) => (
          <Row key={p} price={p} depth={d} side="bid" />
        ))}
      </div>

      <div className="mono flex items-center gap-1.5 border-t border-line px-4 py-2.5 text-[11px] text-muted">
        <LockIcon className="text-muted" />
        Inventory &amp; sizes stay invisible to the market
      </div>
    </div>
  );
}

export default function LiquidityProviders() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-3 block">Silvana for liquidity providers</p>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">
            Quote both sides. Keep your book to yourself.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Grid orders and RFQ provision on private rails — your inventory, spreads,
            and pricing logic stay invisible to the market. Configure depth and risk
            once; agents keep quotes fresh while you sleep. Every settled fill counts
            toward EarnHub rewards.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Media
              src="/images/sections/liquidity.png"
              ratio="4 / 3"
              label="Agents coordinating liquidity"
              tint
              className="rounded-2xl border border-line"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <PrivateBook />
          </Reveal>
        </div>

        <Reveal>
          <a href="#" className="mt-10 inline-block text-sm text-data">
            See how liquidity works on Silvana →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

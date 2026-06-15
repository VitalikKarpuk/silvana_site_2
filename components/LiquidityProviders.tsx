import Reveal from "./ui/Reveal";
import Media from "./ui/Media";

export default function LiquidityProviders() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow mb-3 block">
            Silvana for liquidity providers
          </p>
          <h2 className="display text-3xl sm:text-4xl">
            Quote both sides. Keep your book to yourself.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            Grid orders and RFQ provision on private rails — your inventory, spreads,
            and pricing logic stay invisible to the market. Configure depth and risk
            once; agents keep quotes fresh while you sleep. Every settled fill counts
            toward EarnHub rewards.
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <Media
              src="/images/sections/liquidity.png"
              ratio="16 / 10"
              label="Agents coordinating liquidity"
              tint
              className="rounded-2xl border border-line"
            />
          </div>

          <a href="#" className="mt-10 inline-block text-sm text-data">
            See how liquidity works on Silvana →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

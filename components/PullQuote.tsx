import Reveal from "./ui/Reveal";
import Media from "./ui/Media";

export default function PullQuote() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-28 text-center lg:px-8">
      <Reveal>
        <Media
          src="/images/logos/loop-wallet.svg"
          ratio="1 / 1"
          label="Loop Wallet"
          fit="contain"
          className="mx-auto mb-8 h-10 w-10 rounded-lg"
          fallback={
            <div className="mx-auto mb-8 grid h-10 w-10 place-items-center rounded-lg border border-line text-sm font-bold text-muted">
              L
            </div>
          }
        />
        <blockquote className="display mx-auto max-w-[20ch] text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
          Silvana gives our users something wallets alone never could: assets that
          stay under their control while agents do the work.
        </blockquote>
        <figcaption className="mt-8 text-sm text-muted">
          Head of Product, Loop Wallet
        </figcaption>
        <a href="#" className="mt-4 inline-block text-sm text-data">
          Read the story →
        </a>
      </Reveal>
    </section>
  );
}

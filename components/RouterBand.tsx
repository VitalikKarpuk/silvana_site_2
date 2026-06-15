import Reveal from "./ui/Reveal";

export default function RouterBand() {
  return (
    <section className="border-y border-line bg-surface/40">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="display text-xl">Not sure where to start?</h2>
            <p className="mt-1 text-sm text-muted">
              Tell us what you operate — a desk, a treasury, a product, a strategy
              — and we&apos;ll point you to the right rails.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-lg border border-line bg-bg/60 px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            Find your fit →
          </a>
        </div>
      </Reveal>
    </section>
  );
}

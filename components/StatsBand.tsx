import CountUp from "./ui/CountUp";
import Reveal from "./ui/Reveal";

const STATS = [
  { value: <CountUp to={1} prefix="<" suffix="s" />, label: "order matching, off-chain and optimistic" },
  { value: <CountUp to={100} suffix="%" />, label: "atomic settlement: every trade settles in full or rolls back" },
  { value: <CountUp to={3} />, label: "live markets, with more launching every season" },
  { value: <CountUp to={1240} />, label: "agents deployed and running" },
];

export default function StatsBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8" aria-label="Silvana by the numbers">
      <h2 className="sr-only">Silvana by the numbers</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="display text-5xl text-fg lg:text-6xl">{s.value}</div>
            <div className="mt-3 max-w-[22ch] text-xs uppercase tracking-wider text-muted">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-xs text-muted/70">Numbers update live from the platform.</p>
    </section>
  );
}

"use client";

import { useState } from "react";

const PARTNERS = [
  { name: "Canton Network", slug: "canton" },
  { name: "Loop Wallet", slug: "loop-wallet" },
  { name: "Supanova", slug: "supanova" },
  { name: "Modo", slug: "modo" },
  { name: "Hecto", slug: "hecto" },
];

/** Partner logo: shows /images/partners/<slug>.svg once present, else the name. */
function PartnerMark({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="whitespace-nowrap text-lg font-medium text-muted/70 transition-colors hover:text-fg">
        {name}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/partners/${slug}.svg`}
      alt={name}
      onError={() => setFailed(true)}
      className="h-7 w-auto object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100"
    />
  );
}

export default function LogoWall() {
  return (
    <section className="border-b border-line py-12">
      <p className="eyebrow mb-7 text-center">Building the agent economy with</p>

      {/* Desktop marquee */}
      <div className="marquee-wrap marquee-mask hidden md:block">
        <div className="marquee-track items-center">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="mx-9 flex items-center">
              <PartnerMark name={p.name} slug={p.slug} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile static grid */}
      <div className="grid grid-cols-2 place-items-center gap-x-6 gap-y-5 px-6 md:hidden">
        {PARTNERS.map((p) => (
          <PartnerMark key={p.slug} name={p.name} slug={p.slug} />
        ))}
      </div>
    </section>
  );
}

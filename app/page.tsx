import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import BentoGrid from "@/components/BentoGrid";
import RouterBand from "@/components/RouterBand";
import StatsBand from "@/components/StatsBand";
import Institutions from "@/components/Institutions";
import Developers from "@/components/Developers";
import LiquidityProviders from "@/components/LiquidityProviders";
import PullQuote from "@/components/PullQuote";
import InfraPaths from "@/components/InfraPaths";
import BlogCarousel from "@/components/BlogCarousel";
import Newsletter from "@/components/Newsletter";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ui/ScrollSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero animates on load — left as-is */}
        <Hero />

        {/* Full-bleed colored bands: subtle so scaling doesn't open seams */}
        <ScrollSection intensity="subtle">
          <LogoWall />
        </ScrollSection>

        {/* Sections on the plain background: full scroll-linked transition */}
        <ScrollSection>
          <BentoGrid />
        </ScrollSection>

        <ScrollSection intensity="subtle">
          <RouterBand />
        </ScrollSection>

        <ScrollSection>
          <StatsBand />
        </ScrollSection>

        <ScrollSection intensity="subtle">
          <Institutions />
        </ScrollSection>

        <ScrollSection>
          <Developers />
        </ScrollSection>

        <ScrollSection intensity="subtle">
          <LiquidityProviders />
        </ScrollSection>

        <ScrollSection>
          <PullQuote />
        </ScrollSection>

        <ScrollSection>
          <InfraPaths />
        </ScrollSection>

        <ScrollSection intensity="subtle">
          <BlogCarousel />
        </ScrollSection>

        <ScrollSection intensity="subtle">
          <Newsletter />
        </ScrollSection>

        <ScrollSection>
          <ClosingCTA />
        </ScrollSection>
      </main>
      <Footer />
    </>
  );
}

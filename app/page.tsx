import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroVariantB } from "@/components/sections/HeroVariantB";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturesVariantC } from "@/components/sections/FeaturesVariantC";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { TestimonialsVariantA } from "@/components/sections/TestimonialsVariantA";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTAVariantC } from "@/components/sections/CTAVariantC";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] relative">
      {/* Light grid background - hero only */}
      <div
        className="absolute top-0 left-0 right-0 h-[700px] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />
      <Navbar />
      <main>
        <HeroVariantB />
        <TrustBar />
        <FeaturesVariantC />
        <FeatureShowcase />
        <TestimonialsVariantA />
        <Pricing />
        <FAQ />
        <CTAVariantC />
      </main>
      <Footer />
    </div>
  );
}

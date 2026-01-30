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
    <div className="min-h-screen bg-[var(--background)]">
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

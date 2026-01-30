import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroVariantB } from "@/components/sections/HeroVariantB";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturesVariantC } from "@/components/sections/FeaturesVariantC";
import { Divider } from "@/components/ui/Divider";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { TestimonialsVariantA } from "@/components/sections/TestimonialsVariantA";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main>
        <HeroVariantB />
        <TrustBar />
        <FeaturesVariantC />
        <Divider />
        <FeatureShowcase />
        <TestimonialsVariantA />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Variation C: Minimal and clean, light background
export function CTAVariantC() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--foreground)]/[0.02] border-t border-[var(--border)]">
      <Container size="md">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent-light)] mb-8">
            <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>

          {/* Headline */}
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
            Ready to launch?
          </h2>

          {/* Description */}
          <p className="text-lg text-[var(--muted)] mb-10 max-w-xl mx-auto leading-relaxed">
            Join over 10,000 teams who&apos;ve shipped faster with LaunchKit. Start your free trial—it only takes 2 minutes.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg">
              Start free trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="ghost" size="lg">
              Schedule demo
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-sm text-[var(--muted)]">or</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Secondary option */}
          <p className="text-[var(--muted)]">
            Have questions?{" "}
            <a href="#" className="text-[var(--accent)] hover:underline font-medium">
              Talk to our team
            </a>
            {" "}— we typically respond within the hour.
          </p>
        </div>
      </Container>
    </section>
  );
}

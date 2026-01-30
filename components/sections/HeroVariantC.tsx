import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Variation C: Bold typography with minimal design
export function HeroVariantC() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Accent line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        {/* Corner accents */}
        <div className="absolute top-32 left-8 w-32 h-32 border border-[var(--accent)]/10 rounded-full" />
        <div className="absolute bottom-32 right-8 w-48 h-48 border border-[var(--accent)]/10 rounded-full" />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Launch faster
            </span>
            <div className="h-px w-12 bg-[var(--accent)]" />
          </div>

          {/* Giant headline */}
          <h1 className="text-center mb-8">
            <span className="block font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--foreground)]">
              Build something
            </span>
            <span className="block font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="relative">
                <span className="text-[var(--accent)]">people</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 6C50 6 50 2 100 2C150 2 150 10 200 10" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              {" "}will love
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-center text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop dreaming. Start building. LaunchKit gives you the tools to go from zero to launch in record time.
          </p>

          {/* Single prominent CTA */}
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="text-base px-8 py-4">
              Start building — it&apos;s free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>

            <p className="text-sm text-[var(--muted)]">
              No credit card required · Free forever for individuals
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-20 pt-12 border-t border-[var(--border)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">
                  10k<span className="text-[var(--accent)]">+</span>
                </div>
                <div className="text-sm text-[var(--muted)]">Happy customers</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">
                  50M<span className="text-[var(--accent)]">+</span>
                </div>
                <div className="text-sm text-[var(--muted)]">API requests/day</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">
                  99.9<span className="text-[var(--accent)]">%</span>
                </div>
                <div className="text-sm text-[var(--muted)]">Uptime SLA</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">
                  4.9<span className="text-[var(--accent)]">/5</span>
                </div>
                <div className="text-sm text-[var(--muted)]">User rating</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

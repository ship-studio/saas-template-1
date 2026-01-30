import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] px-8 py-16 lg:px-16 lg:py-24">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to build something?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Join thousands of teams shipping faster with LaunchKit. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[var(--accent-dark)] hover:bg-white/90 shadow-lg shadow-black/10"
              >
                Get started free
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-white border border-white/30 hover:bg-white/10"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

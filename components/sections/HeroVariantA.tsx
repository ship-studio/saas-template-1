import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Variation A: Split Layout - Text left, visual right
export function HeroVariantA() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--accent)]/5 to-transparent" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <Badge variant="accent" className="mb-6">
              <span className="relative flex h-1.5 w-1.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
              </span>
              Now in public beta
            </Badge>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              Build something{" "}
              <span className="text-[var(--accent)]">people will love</span>
            </h1>

            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              The platform that helps you go from idea to launch. Ship faster, iterate smarter, and create products your customers actually want.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg">
                Start building free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="ghost" size="lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                Watch demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-[var(--border)]">
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--foreground)]">10k+</div>
                <div className="text-sm text-[var(--muted)]">Active users</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--foreground)]">99.9%</div>
                <div className="text-sm text-[var(--muted)]">Uptime</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--foreground)]">4.9/5</div>
                <div className="text-sm text-[var(--muted)]">User rating</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-[var(--background)] rounded-2xl border border-[var(--border)] shadow-2xl shadow-[var(--foreground)]/5 p-6 lg:p-8">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 h-6 bg-[var(--foreground)]/5 rounded-md ml-4" />
                </div>

                {/* Dashboard mockup */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    {["$48.2k", "+24%", "1,429"].map((stat, i) => (
                      <div key={i} className="flex-1 p-4 rounded-xl bg-[var(--foreground)]/[0.03] border border-[var(--border)]">
                        <div className="text-xs text-[var(--muted)] mb-1">{["Revenue", "Growth", "Users"][i]}</div>
                        <div className="font-semibold text-[var(--foreground)]">{stat}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-32 rounded-xl bg-gradient-to-t from-[var(--accent)]/20 to-transparent flex items-end p-4">
                    <div className="flex items-end gap-1.5 w-full">
                      {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-[var(--accent)] rounded-sm"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -bottom-4 -left-4 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--foreground)]">New signup!</div>
                  <div className="text-xs text-[var(--muted)]">Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

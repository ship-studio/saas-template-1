import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const showcaseFeatures = [
  {
    badge: "Workflow",
    title: "Automate your entire process",
    description:
      "Set up triggers and actions that run automatically. Connect with 200+ integrations or build your own with our API. Spend less time on repetitive tasks.",
    image: "workflow",
    reverse: false,
    highlights: [
      "200+ native integrations",
      "Custom webhooks & API",
      "Conditional logic",
    ],
  },
  {
    badge: "Insights",
    title: "See what's working",
    description:
      "Get real-time dashboards that show exactly how your product is performing. Track key metrics, spot trends early, and make decisions backed by data.",
    image: "analytics",
    reverse: true,
    highlights: [
      "Real-time dashboards",
      "Custom reports",
      "Team-wide visibility",
    ],
  },
  {
    badge: "Scale",
    title: "Grow without limits",
    description:
      "Built on infrastructure that handles millions of requests. As your user base grows, your product stays fast. No migrations, no headaches.",
    image: "scale",
    reverse: false,
    highlights: [
      "Auto-scaling infrastructure",
      "99.99% uptime SLA",
      "Global CDN included",
    ],
  },
];

function MockupImage({ type }: { type: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--background)] border border-[var(--border)] shadow-2xl shadow-[var(--foreground)]/5">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--foreground)]/[0.03] border-b border-[var(--border)] flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-5 w-48 max-w-full bg-[var(--foreground)]/5 rounded-md" />
        </div>
      </div>

      {/* Content placeholder */}
      <div className="absolute top-14 left-4 right-4 bottom-4 flex flex-col gap-3">
        {type === "workflow" && (
          <div className="flex flex-col gap-3 h-full">
            <div className="flex gap-3">
              <div className="w-1/3 h-20 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 h-20 rounded-xl bg-[var(--foreground)]/[0.03] border border-[var(--border)] flex items-center px-4">
                <div className="space-y-1.5 w-full">
                  <div className="h-2 w-3/4 bg-[var(--foreground)]/10 rounded" />
                  <div className="h-2 w-1/2 bg-[var(--foreground)]/5 rounded" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex gap-3">
              <div className="flex-1 rounded-xl bg-[var(--foreground)]/[0.03] border border-[var(--border)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded bg-green-400/60" />
                  <div className="h-2 w-16 bg-[var(--foreground)]/10 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-[var(--foreground)]/5 rounded" />
                  <div className="h-2 w-2/3 bg-[var(--foreground)]/5 rounded" />
                </div>
              </div>
              <div className="flex-1 rounded-xl border-2 border-dashed border-[var(--accent)]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--accent)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
          </div>
        )}
        {type === "analytics" && (
          <div className="flex flex-col gap-3 h-full">
            <div className="flex gap-2">
              {[
                { label: "Users", value: "12.4k", trend: "+12%" },
                { label: "Revenue", value: "$48k", trend: "+8%" },
                { label: "Conv.", value: "3.2%", trend: "+0.4%" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--border)] p-3">
                  <div className="text-[10px] text-[var(--muted)] mb-1">{stat.label}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-[var(--foreground)]">{stat.value}</span>
                    <span className="text-[10px] text-green-500">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-xl bg-[var(--foreground)]/[0.03] border border-[var(--border)] p-3">
              <div className="h-full flex items-end gap-1.5 pb-2">
                {[35, 55, 40, 70, 50, 65, 55, 80, 45, 70, 85, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[var(--accent)]/60 rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {type === "scale" && (
          <div className="flex gap-3 h-full">
            <div className="w-1/3 rounded-xl bg-[var(--foreground)]/[0.03] border border-[var(--border)] p-3 flex flex-col">
              <div className="text-xs font-medium text-[var(--foreground)] mb-3">Status</div>
              <div className="space-y-2 flex-1">
                {["API Gateway", "Database", "CDN", "Workers"].map((service, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-[10px] text-[var(--muted)]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[var(--accent)]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full border-4 border-[var(--accent)]/30 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-[var(--accent)]">99.9%</span>
                </div>
                <span className="text-xs text-[var(--muted)]">Uptime</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--foreground)]/[0.02]">
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {showcaseFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Content */}
              <div className="flex-1 max-w-lg">
                <Badge variant="accent" className="mb-4">
                  {feature.badge}
                </Badge>
                <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-[var(--accent)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-[var(--foreground)]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-1 w-full max-w-xl lg:max-w-none">
                <MockupImage type={feature.image} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

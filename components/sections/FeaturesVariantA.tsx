import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Variation A: Bento Grid - Asymmetric cards with varying sizes
const features = [
  {
    title: "Ship in days, not months",
    description:
      "Pre-built components, templates, and workflows that cut development time by 80%. Focus on what makes your product unique.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    title: "Real-time collaboration",
    description: "Work together with your team. See changes instantly and iterate faster.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
  {
    title: "Analytics built-in",
    description: "Understand user behavior with zero setup required.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
  {
    title: "Enterprise security",
    description: "SOC 2 compliant with end-to-end encryption and SSO support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
  {
    title: "Global CDN",
    description: "Lightning-fast delivery worldwide with edge caching.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
];

export function FeaturesVariantA() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything you need to ship"
          description="A complete toolkit for building modern products. No assembly required."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl border p-6
                transition-all duration-300
                ${feature.span}
                ${feature.large
                  ? "bg-[var(--accent)] text-white border-transparent"
                  : "bg-[var(--background)] border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-lg"
                }
              `}
            >
              <div
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-5
                  ${feature.large ? "bg-white/20" : "bg-[var(--accent-light)]"}
                `}
              >
                <span className={feature.large ? "text-white" : "text-[var(--accent)]"}>
                  {feature.icon}
                </span>
              </div>

              <h3
                className={`
                  font-[family-name:var(--font-display)] font-semibold mb-2
                  ${feature.large ? "text-2xl lg:text-3xl text-white" : "text-lg text-[var(--foreground)]"}
                `}
              >
                {feature.title}
              </h3>
              <p
                className={`
                  leading-relaxed
                  ${feature.large ? "text-base lg:text-lg text-white/80" : "text-sm text-[var(--muted)]"}
                `}
              >
                {feature.description}
              </p>

              {feature.large && (
                <div className="absolute bottom-6 right-6 w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

// Variation C: Large cards with mini illustrations/mockups
const features = [
  {
    title: "Ship faster with templates",
    description: "Start with pre-built templates and customize to your needs. Save weeks of development time.",
    visual: (
      <div className="h-40 rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent p-4 flex items-end">
        <div className="flex gap-2 w-full">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 rounded-lg bg-[var(--background)] border border-[var(--border)] p-3 shadow-sm">
              <div className="w-8 h-8 rounded bg-[var(--accent)]/20 mb-2" />
              <div className="h-2 w-full bg-[var(--foreground)]/10 rounded mb-1" />
              <div className="h-2 w-2/3 bg-[var(--foreground)]/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Real-time collaboration",
    description: "See your team's changes as they happen. Comments, cursors, and presence indicators built in.",
    visual: (
      <div className="h-40 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent p-4 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-24 rounded-lg bg-[var(--background)] border border-[var(--border)] shadow-sm p-3">
            <div className="h-2 w-full bg-[var(--foreground)]/10 rounded mb-2" />
            <div className="h-2 w-3/4 bg-[var(--foreground)]/10 rounded mb-2" />
            <div className="h-2 w-1/2 bg-[var(--accent)]/30 rounded" />
          </div>
          {/* Cursors */}
          <div className="absolute -top-2 -right-2 flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-purple-500 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">A</div>
          </div>
          <div className="absolute -bottom-2 -left-2 flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">B</div>
          </div>
          <div className="absolute top-1/2 -right-4 flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">C</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Analytics dashboard",
    description: "Track the metrics that matter. Beautiful charts and insights without any configuration.",
    visual: (
      <div className="h-44 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent p-4">
        {/* Mini dashboard */}
        <div className="h-full flex flex-col gap-2">
          {/* Stats row */}
          <div className="flex gap-2">
            {[
              { label: "Users", value: "2.4k", color: "emerald" },
              { label: "Revenue", value: "$12k", color: "emerald" },
              { label: "Growth", value: "+24%", color: "emerald" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 rounded-lg bg-[var(--background)] border border-[var(--border)] p-2 shadow-sm">
                <div className="text-[9px] text-[var(--muted)]">{stat.label}</div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{stat.value}</div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="flex-1 rounded-lg bg-[var(--background)] border border-[var(--border)] p-3 shadow-sm">
            <div className="h-full flex items-end gap-1">
              {[30, 50, 35, 65, 45, 60, 50, 75, 40, 65, 80, 55].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm min-h-[4px]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Enterprise security",
    description: "Bank-grade encryption, SSO, audit logs, and compliance certifications you can trust.",
    visual: (
      <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent p-4 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-[var(--background)] border border-[var(--border)] shadow-sm flex items-center justify-center">
            <svg className="w-10 h-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          {/* Floating badges */}
          <div className="absolute -top-3 -right-3 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-semibold">
            SOC 2
          </div>
          <div className="absolute -bottom-3 -left-3 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold">
            GDPR
          </div>
        </div>
      </div>
    ),
  },
];

export function FeaturesVariantC() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[var(--foreground)]/[0.02] border-t border-[var(--border)]">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge="Features"
            title="Everything you need to ship"
            description="A complete toolkit for building modern products. No assembly required."
          />
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden hover:shadow-xl hover:border-[var(--accent)]/30 transition-all duration-300">
                {/* Visual */}
                <div className="overflow-hidden">
                  {feature.visual}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionChip } from "@/components/ui/SectionChip";

// Variation B: Centered with large product screenshot below
export function HeroVariantB() {
  return (
    <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent" />
      </div>

      <Container>
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <SectionChip animate>Now in Beta</SectionChip>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[var(--foreground)] mb-6"
          >
            <span className="lg:whitespace-nowrap">The fastest way to</span>{" "}
            <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent">
              ship products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg sm:text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            LaunchKit gives you everything you need to build, launch, and grow your product. Join thousands of teams shipping faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Get started for free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Book a demo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-[var(--muted)]"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Large product screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--accent)]/10 to-transparent rounded-t-3xl blur-2xl" />

          {/* Screenshot container */}
          <div className="relative bg-white rounded-t-2xl border border-[var(--border)] border-b-0 shadow-2xl shadow-[var(--foreground)]/10 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-4 px-4 py-3 bg-[var(--foreground)]/[0.03] border-b border-[var(--border)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--foreground)]/10" />
                <div className="w-3 h-3 rounded-full bg-[var(--foreground)]/10" />
                <div className="w-3 h-3 rounded-full bg-[var(--foreground)]/10" />
              </div>
              <div className="flex-1 max-w-md h-7 bg-[var(--foreground)]/5 rounded-lg flex items-center px-3">
                <svg className="w-3.5 h-3.5 text-[var(--muted)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-[var(--muted)]">app.launchkit.com</span>
              </div>
            </div>

            {/* Mobile: Simplified dashboard */}
            <div className="p-4 md:hidden">
              <div className="space-y-3">
                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Revenue", value: "$48,234", change: "+12.5%" },
                    { label: "Users", value: "2,543", change: "+8.2%" },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <div className="text-[10px] text-[var(--muted)] mb-0.5">{stat.label}</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-semibold text-[var(--foreground)]">{stat.value}</span>
                        <span className="text-[10px] text-green-500">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Chart */}
                <div className="h-32 rounded-xl bg-[var(--background)] border border-[var(--border)] p-3 flex items-end">
                  <div className="flex items-end gap-1.5 w-full h-full">
                    {[35, 55, 40, 70, 50, 65, 55, 80, 45, 70, 85, 60].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[var(--accent)] to-[var(--accent)]/60 rounded-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Full dashboard */}
            <div className="hidden md:block p-6 lg:p-8">
              <div className="grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <div className="col-span-2 space-y-2">
                  {["Dashboard", "Projects", "Analytics", "Team", "Settings"].map((item, i) => (
                    <div
                      key={item}
                      className={`h-8 rounded-lg flex items-center px-3 text-xs ${
                        i === 0 ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "text-[var(--muted)]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-32 bg-[var(--foreground)]/10 rounded" />
                    <div className="flex gap-2">
                      <div className="h-8 w-24 bg-[var(--accent)]/20 rounded-lg" />
                      <div className="h-8 w-8 bg-[var(--foreground)]/5 rounded-lg" />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Total Revenue", value: "$48,234", change: "+12.5%" },
                      { label: "Active Users", value: "2,543", change: "+8.2%" },
                      { label: "Conversion", value: "3.24%", change: "+2.1%" },
                      { label: "Avg. Session", value: "4m 32s", change: "+15.3%" },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                        <div className="text-xs text-[var(--muted)] mb-1">{stat.label}</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-semibold text-[var(--foreground)]">{stat.value}</span>
                          <span className="text-xs text-green-500">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-48 rounded-xl bg-[var(--background)] border border-[var(--border)] p-4 flex items-end">
                    <div className="flex items-end gap-2 w-full h-full">
                      {[35, 55, 40, 70, 50, 65, 55, 80, 45, 70, 85, 60, 75, 90, 65, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[var(--accent)] to-[var(--accent)]/60 rounded-sm"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

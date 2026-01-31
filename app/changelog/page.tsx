"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type ChangeType = "new" | "improved" | "fixed";

interface Change {
  type: ChangeType;
  title: string;
  description?: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: Change[];
}

const changeTypeStyles: Record<ChangeType, { bg: string; text: string; label: string }> = {
  new: { bg: "bg-emerald-100", text: "text-emerald-700", label: "New" },
  improved: { bg: "bg-blue-100", text: "text-blue-700", label: "Improved" },
  fixed: { bg: "bg-amber-100", text: "text-amber-700", label: "Fixed" },
};

const changelog: ChangelogEntry[] = [
  {
    version: "2.1.0",
    date: "January 28, 2025",
    title: "AI-Powered Workflows",
    description: "Introducing intelligent automation that learns from your team's patterns.",
    changes: [
      {
        type: "new",
        title: "AI workflow suggestions",
        description: "Get smart recommendations based on your team's activity patterns.",
      },
      {
        type: "new",
        title: "Natural language commands",
        description: "Create tasks and update projects using plain English.",
      },
      {
        type: "improved",
        title: "Dashboard performance",
        description: "50% faster load times for projects with 1000+ items.",
      },
      {
        type: "fixed",
        title: "Notification delivery",
        description: "Resolved delays in real-time notifications for some users.",
      },
    ],
  },
  {
    version: "2.0.0",
    date: "January 15, 2025",
    title: "LaunchKit 2.0",
    description: "A complete rebuild with new features, better performance, and a fresh design.",
    changes: [
      {
        type: "new",
        title: "Real-time collaboration",
        description: "Work together with your team simultaneously on any project.",
      },
      {
        type: "new",
        title: "Flexible workspaces",
        description: "Custom views, saved filters, and personalized dashboards.",
      },
      {
        type: "new",
        title: "200+ integrations",
        description: "Connect with Slack, GitHub, Figma, Notion, and more.",
      },
      {
        type: "improved",
        title: "API response times",
        description: "80% faster API with completely rewritten backend infrastructure.",
      },
      {
        type: "improved",
        title: "Mobile experience",
        description: "Fully responsive design with native-like interactions.",
      },
    ],
  },
  {
    version: "1.9.2",
    date: "December 20, 2024",
    title: "Bug Fixes & Improvements",
    description: "Quality of life improvements and stability fixes.",
    changes: [
      {
        type: "fixed",
        title: "Export functionality",
        description: "CSV exports now include all custom fields correctly.",
      },
      {
        type: "fixed",
        title: "Search indexing",
        description: "Resolved issue where new items weren't immediately searchable.",
      },
      {
        type: "improved",
        title: "Error messages",
        description: "More helpful and actionable error messages throughout the app.",
      },
    ],
  },
  {
    version: "1.9.0",
    date: "December 5, 2024",
    title: "Advanced Analytics",
    description: "Deep insights into your team's productivity and project health.",
    changes: [
      {
        type: "new",
        title: "Analytics dashboard",
        description: "Visualize team velocity, burndown charts, and custom metrics.",
      },
      {
        type: "new",
        title: "Scheduled reports",
        description: "Automated weekly and monthly reports delivered to your inbox.",
      },
      {
        type: "improved",
        title: "Data export options",
        description: "Export to CSV, JSON, or directly to Google Sheets.",
      },
    ],
  },
  {
    version: "1.8.0",
    date: "November 15, 2024",
    title: "Team Management",
    description: "Better tools for managing teams and permissions.",
    changes: [
      {
        type: "new",
        title: "Role-based permissions",
        description: "Fine-grained control over who can view, edit, and manage projects.",
      },
      {
        type: "new",
        title: "Team templates",
        description: "Create reusable project templates for your team.",
      },
      {
        type: "improved",
        title: "Onboarding flow",
        description: "Streamlined setup process for new team members.",
      },
      {
        type: "fixed",
        title: "Invitation emails",
        description: "Fixed formatting issues in team invitation emails.",
      },
    ],
  },
];

export default function ChangelogPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pb-24">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 pb-16 relative">
          {/* Grid background */}
          <div
            className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            }}
          />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <SectionChip>Changelog</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-6 mb-6">
                What&apos;s new
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-8">
                All the latest updates, improvements, and fixes to LaunchKit.
              </p>

              {/* Subscribe for updates */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                />
                <button className="px-6 py-3 text-base font-semibold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-[var(--muted)] mt-3">
                Get notified when we ship new updates.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Changelog Entries */}
        <section className="py-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              {changelog.map((entry, index) => (
                <ScrollReveal key={entry.version} delay={index * 0.05}>
                  <article className="relative pl-8 border-l-2 border-[var(--border)] [&:not(:last-child)]:pb-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]" />

                    {/* Version & Date */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-sm font-bold text-[var(--accent)] bg-[var(--accent-light)] rounded-full">
                        v{entry.version}
                      </span>
                      <span className="text-sm text-[var(--muted)]">{entry.date}</span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-2">
                      {entry.title}
                    </h2>
                    <p className="text-[var(--muted)] mb-6">
                      {entry.description}
                    </p>

                    {/* Changes */}
                    <div className="space-y-4 mb-8">
                      {entry.changes.map((change, changeIndex) => {
                        const style = changeTypeStyles[change.type];
                        return (
                          <div
                            key={changeIndex}
                            className="p-4 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/20 hover:shadow-md transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${style.bg} ${style.text} flex-shrink-0 mt-0.5`}>
                                {style.label}
                              </span>
                              <div>
                                <h3 className="font-semibold text-[var(--foreground)]">
                                  {change.title}
                                </h3>
                                {change.description && (
                                  <p className="text-sm text-[var(--muted)] mt-1">
                                    {change.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-6 py-3 text-sm font-semibold text-[var(--foreground)] bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 rounded-xl transition-colors">
                View older releases
              </button>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-4">
                Have a feature request?
              </h2>
              <p className="text-[var(--muted)] mb-6">
                We&apos;re always looking to improve. Let us know what you&apos;d like to see next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Request a feature
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      {/* Sanity CMS Banner */}
      {!bannerDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--foreground)] border-t border-white/10">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f03e2f] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 28 28" fill="currentColor">
                    <path d="M7.5 7.5h6v6h-6zM14.5 7.5h6v6h-6zM7.5 14.5h6v6h-6zM14.5 14.5h6v6h-6z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Want a CMS?
                  </p>
                  <p className="text-white/60 text-sm">
                    We recommend Sanity for managing your changelog content.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setBannerDismissed(true)}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  Dismiss
                </button>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-semibold text-[var(--foreground)] bg-white hover:bg-white/90 rounded-lg transition-colors"
                >
                  Set up Sanity CMS
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/ui/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const categories = ["All", "Communication", "Development", "Productivity", "Analytics", "Design"];

const featuredIntegrations = [
  {
    name: "Slack",
    description: "Get instant notifications, create tasks from messages, and keep your team in sync.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    color: "#E01E5A",
    category: "Communication",
  },
  {
    name: "GitHub",
    description: "Sync issues, automate workflows, and track commits directly in LaunchKit.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: "#181717",
    category: "Development",
  },
  {
    name: "Notion",
    description: "Sync pages, embed databases, and create a seamless knowledge base connection.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM2.208 1.155l13.728-.933c1.682-.14 2.102-.046 3.15.7l4.344 3.059c.7.514.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.948c0-.84.374-1.54 1.401-1.632z"/>
      </svg>
    ),
    color: "#000000",
    category: "Productivity",
  },
];

const allIntegrations = [
  // Communication
  { name: "Slack", category: "Communication", icon: "S", color: "#E01E5A" },
  { name: "Discord", category: "Communication", icon: "D", color: "#5865F2" },
  { name: "Microsoft Teams", category: "Communication", icon: "T", color: "#6264A7" },
  { name: "Zoom", category: "Communication", icon: "Z", color: "#2D8CFF" },
  { name: "Intercom", category: "Communication", icon: "I", color: "#1F8DED" },

  // Development
  { name: "GitHub", category: "Development", icon: "G", color: "#181717" },
  { name: "GitLab", category: "Development", icon: "G", color: "#FC6D26" },
  { name: "Bitbucket", category: "Development", icon: "B", color: "#0052CC" },
  { name: "Jira", category: "Development", icon: "J", color: "#0052CC" },
  { name: "Linear", category: "Development", icon: "L", color: "#5E6AD2" },
  { name: "Vercel", category: "Development", icon: "V", color: "#000000" },
  { name: "Netlify", category: "Development", icon: "N", color: "#00C7B7" },

  // Productivity
  { name: "Notion", category: "Productivity", icon: "N", color: "#000000" },
  { name: "Asana", category: "Productivity", icon: "A", color: "#F06A6A" },
  { name: "Trello", category: "Productivity", icon: "T", color: "#0052CC" },
  { name: "Monday.com", category: "Productivity", icon: "M", color: "#FF3D57" },
  { name: "Airtable", category: "Productivity", icon: "A", color: "#18BFFF" },
  { name: "Google Drive", category: "Productivity", icon: "G", color: "#4285F4" },
  { name: "Dropbox", category: "Productivity", icon: "D", color: "#0061FF" },

  // Analytics
  { name: "Google Analytics", category: "Analytics", icon: "G", color: "#E37400" },
  { name: "Mixpanel", category: "Analytics", icon: "M", color: "#7856FF" },
  { name: "Amplitude", category: "Analytics", icon: "A", color: "#1E61D5" },
  { name: "Segment", category: "Analytics", icon: "S", color: "#52BD94" },
  { name: "Hotjar", category: "Analytics", icon: "H", color: "#FF3C00" },

  // Design
  { name: "Figma", category: "Design", icon: "F", color: "#F24E1E" },
  { name: "Sketch", category: "Design", icon: "S", color: "#F7B500" },
  { name: "Adobe XD", category: "Design", icon: "X", color: "#FF61F6" },
  { name: "Framer", category: "Design", icon: "F", color: "#0055FF" },
  { name: "InVision", category: "Design", icon: "I", color: "#FF3366" },
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredIntegrations = activeCategory === "All"
    ? allIntegrations
    : allIntegrations.filter((i) => i.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 pb-20 relative">
          {/* Grid background */}
          <div
            className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
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
              <SectionChip>Integrations</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-6 mb-6">
                Connect your favorite tools
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-8">
                LaunchKit integrates with 200+ tools you already use. Automate workflows,
                sync data, and build without switching tabs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#browse"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Explore integrations
                </a>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors"
                >
                  Sign up free
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Featured Integrations */}
        <section className="py-20 border-y border-[var(--border)]">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-3">
                  Most popular
                </h2>
                <p className="text-[var(--muted)]">
                  The integrations our customers love most
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {featuredIntegrations.map((integration) => (
                <StaggerItem key={integration.name}>
                  <div className="group relative p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                    {/* Background decoration */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/4 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ backgroundColor: integration.color }}
                    />

                    <div className="relative">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${integration.color}15`, color: integration.color }}
                      >
                        {integration.icon}
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mb-2">
                        {integration.name}
                      </h3>
                      <p className="text-[var(--muted)] leading-relaxed mb-4">
                        {integration.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                        Learn more
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* All Integrations */}
        <section id="browse" className="py-20 sm:py-28 scroll-mt-24">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-12">
                <SectionChip>Browse All</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                  200+ integrations and counting
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  From dev tools to analytics, we&apos;ve got you covered
                </p>
              </div>
            </ScrollReveal>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--foreground)]/5 text-[var(--muted)] hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredIntegrations.map((integration) => (
                <div
                  key={integration.name}
                  className="group p-5 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-lg font-bold transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${integration.color}15`, color: integration.color }}
                  >
                    {integration.icon}
                  </div>
                  <div className="font-medium text-[var(--foreground)] text-sm">
                    {integration.name}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-1">
                    {integration.category}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Build Your Own Section */}
        <section className="py-20 sm:py-28 bg-[var(--foreground)]/[0.02] border-y border-[var(--border)]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal>
                <SectionChip>Developer API</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-6">
                  Build custom integrations
                </h2>
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                  Can&apos;t find what you need? Our REST API and webhooks make it easy
                  to build custom integrations with any tool or service.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "RESTful API", desc: "Full access to all LaunchKit features" },
                    { title: "Webhooks", desc: "Real-time events for any action" },
                    { title: "SDKs", desc: "Libraries for Python, Node, Ruby, and more" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[var(--foreground)]">{item.title}</div>
                        <div className="text-sm text-[var(--muted)]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
                  >
                    View API documentation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden bg-[#1e1e1e] p-6 shadow-2xl">
                  {/* Code editor header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                    <span className="ml-3 text-sm text-white/40">api-example.js</span>
                  </div>

                  {/* Code block */}
                  <pre className="text-sm leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-white"> launchkit </span>
                      <span className="text-white">= </span>
                      <span className="text-[#dcdcaa]">require</span>
                      <span className="text-white">(</span>
                      <span className="text-[#ce9178]">&apos;launchkit&apos;</span>
                      <span className="text-white">);</span>
                      {"\n\n"}
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-white"> client </span>
                      <span className="text-white">= </span>
                      <span className="text-[#dcdcaa]">launchkit</span>
                      <span className="text-white">(</span>
                      <span className="text-[#ce9178]">&apos;your-api-key&apos;</span>
                      <span className="text-white">);</span>
                      {"\n\n"}
                      <span className="text-[#6a9955]">{"// Create a new project"}</span>
                      {"\n"}
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-white"> project </span>
                      <span className="text-white">= </span>
                      <span className="text-[#569cd6]">await</span>
                      <span className="text-white"> client.projects.</span>
                      <span className="text-[#dcdcaa]">create</span>
                      <span className="text-white">({"{"}</span>
                      {"\n"}
                      <span className="text-white">  name: </span>
                      <span className="text-[#ce9178]">&apos;My Project&apos;</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">  team: </span>
                      <span className="text-[#ce9178]">&apos;team_123&apos;</span>
                      {"\n"}
                      <span className="text-white">{"})"}</span>
                      <span className="text-white">;</span>
                    </code>
                  </pre>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] p-10 sm:p-16 text-center overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to connect your tools?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Start your free trial and set up your first integration in minutes.
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-white text-[var(--accent)] hover:bg-white/90 transition-colors"
                  >
                    Start free trial
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    Talk to sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

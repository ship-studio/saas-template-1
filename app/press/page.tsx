"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pressHighlights = [
  {
    publication: "TechCrunch",
    logo: (
      <svg className="h-6" viewBox="0 0 200 30" fill="currentColor">
        <text x="0" y="22" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900">TechCrunch</text>
      </svg>
    ),
    quote: "LaunchKit is redefining how teams build and ship products, with a fresh approach to collaboration.",
    date: "January 2025",
  },
  {
    publication: "Forbes",
    logo: (
      <svg className="h-6" viewBox="0 0 100 30" fill="currentColor">
        <text x="0" y="22" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fontStyle="italic">Forbes</text>
      </svg>
    ),
    quote: "One of the most promising startups to watch in 2025.",
    date: "December 2024",
  },
  {
    publication: "Wired",
    logo: (
      <svg className="h-6" viewBox="0 0 80 30" fill="currentColor">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700">WIRED</text>
      </svg>
    ),
    quote: "A thoughtfully designed tool that actually makes developers more productive.",
    date: "November 2024",
  },
];

const pressReleases = [
  {
    date: "January 28, 2025",
    title: "LaunchKit Raises $25M Series B to Accelerate Product Development",
    description: "Funding led by Accel will help expand the platform's AI capabilities and global reach.",
    link: "#",
  },
  {
    date: "January 15, 2025",
    title: "LaunchKit 2.0 Launches with Real-Time Collaboration",
    description: "Major platform update introduces simultaneous editing, 200+ integrations, and redesigned interface.",
    link: "#",
  },
  {
    date: "October 10, 2024",
    title: "LaunchKit Surpasses 10,000 Teams on Platform",
    description: "Milestone reflects growing demand for streamlined product development tools.",
    link: "#",
  },
  {
    date: "July 22, 2024",
    title: "LaunchKit Named to Forbes Cloud 100 Rising Stars",
    description: "Recognition highlights the company's rapid growth and industry impact.",
    link: "#",
  },
  {
    date: "April 5, 2024",
    title: "LaunchKit Announces Partnership with GitHub",
    description: "Integration brings seamless code collaboration directly into the LaunchKit workflow.",
    link: "#",
  },
];

const brandAssets = [
  {
    title: "Logo Package",
    description: "Primary logo, wordmark, and icon in SVG, PNG, and PDF formats.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Brand Guidelines",
    description: "Colors, typography, spacing, and usage guidelines for our brand.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Product Screenshots",
    description: "High-resolution screenshots of key features and interfaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Executive Photos",
    description: "Professional headshots and team photos for media use.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10K+", label: "Teams using LaunchKit" },
  { value: "$25M", label: "Series B funding" },
  { value: "50+", label: "Countries represented" },
  { value: "200+", label: "Integrations" },
];

export default function PressPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);

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
              <SectionChip>Press</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-6 mb-6">
                LaunchKit in the news
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-8">
                Get the latest news, press releases, and media resources about LaunchKit
                and our mission to help teams ship better products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#media-kit"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Download media kit
                </a>
                <a
                  href="mailto:press@launchkit.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Contact press team
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-[var(--border)]">
          <Container>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" staggerDelay={0.1}>
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="relative group p-6 lg:p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent)]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative">
                      <div className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)]/70 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[var(--muted)] font-medium">{stat.label}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Press Highlights */}
        <section className="py-20 sm:py-28">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip>Featured Coverage</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                  What people are saying
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  LaunchKit has been featured in leading publications around the world.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {pressHighlights.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="text-[var(--foreground)]/40 mb-6">
                      {item.logo}
                    </div>
                    <blockquote className="text-lg text-[var(--foreground)] leading-relaxed mb-6 flex-grow">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <div className="text-sm text-[var(--muted)]">
                      {item.publication} &middot; {item.date}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Press Releases */}
        <section className="py-20 sm:py-28 bg-[var(--foreground)]/[0.02]">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip>Press Releases</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                  Latest announcements
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  Official news and announcements from LaunchKit.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-4">
              {pressReleases.map((release, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <a
                    href={release.link}
                    className="group block p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-grow">
                        <div className="text-sm text-[var(--muted)] mb-2">{release.date}</div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                          {release.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)]">
                          {release.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                          Read more
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Media Kit */}
        <section id="media-kit" className="py-20 sm:py-28 scroll-mt-24">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip>Media Kit</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                  Brand assets
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  Download official LaunchKit logos, screenshots, and brand guidelines for your coverage.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.05}>
              {brandAssets.map((asset, index) => (
                <StaggerItem key={index}>
                  <a
                    href="#"
                    className="group block p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {asset.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)] mb-2">
                      {asset.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] mb-4">
                      {asset.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                      Download
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Download All Button */}
            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-[var(--foreground)] text-white hover:bg-[var(--foreground)]/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download complete media kit
              </a>
            </div>
          </Container>
        </section>

        {/* Press Contact */}
        <section className="py-20 sm:py-28 bg-[var(--foreground)]/[0.02]">
          <Container>
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[var(--border)] text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                    Press inquiries
                  </h2>
                  <p className="text-[var(--muted)] mb-8 leading-relaxed">
                    For press inquiries, interview requests, or additional information,
                    please reach out to our communications team.
                  </p>
                  <a
                    href="mailto:press@launchkit.com"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    press@launchkit.com
                  </a>
                  <p className="text-sm text-[var(--muted)] mt-6">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </ScrollReveal>
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
                    We recommend Sanity for managing your press content.
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
                  href="https://www.sanity.io/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
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

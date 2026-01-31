"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cultureValues = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Ship fast, learn faster",
    description: "We value speed and iteration over perfection. Every launch teaches us something new.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Collaboration over competition",
    description: "We win together. Success is shared, and helping others is how we all grow.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Ideas come from everywhere",
    description: "The best solutions can come from anyone. We listen first and titles don't matter.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global perspectives",
    description: "Our team spans 15+ countries, bringing diverse viewpoints to every challenge.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Competitive salary",
    description: "Top-of-market compensation with equity packages for all full-time roles.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Remote-first",
    description: "Work from anywhere in the world. We have team members across 15+ countries.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Flexible time off",
    description: "Unlimited PTO policy plus company-wide breaks and mental health days.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Learning budget",
    description: "$2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Health & wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Home office setup",
    description: "$1,500 stipend for your home office plus monthly internet reimbursement.",
  },
];

const departments = ["All", "Engineering", "Design", "Product", "Marketing", "Operations"];

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, performant user interfaces with React and TypeScript.",
  },
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and scale our API infrastructure serving millions of requests.",
  },
  {
    title: "Staff Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Lead technical initiatives and mentor engineers across the organization.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Shape the future of our product through user research and interaction design.",
  },
  {
    title: "Senior Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Drive product strategy and work closely with engineering and design.",
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content that educates and engages our audience.",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers succeed and grow with LaunchKit.",
  },
];

export default function CareersPage() {
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
              <SectionChip>We&apos;re Hiring</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-6 mb-6">
                Build the future of product development
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-8">
                Join a team of builders, dreamers, and problem solvers. We&apos;re on a mission
                to help teams ship products faster, and we need your help.
              </p>
              <a
                href="#positions"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                View open positions
              </a>
            </motion.div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-[var(--border)]">
          <Container>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" staggerDelay={0.1}>
              {[
                { value: "45+", label: "Team members" },
                { value: "15+", label: "Countries" },
                { value: "4.9", label: "Glassdoor rating" },
                { value: "92%", label: "Would recommend" },
              ].map((stat, index) => (
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

        {/* Culture Section */}
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal>
                <SectionChip>Our Culture</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-6">
                  Where great work happens
                </h2>
                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>
                    We believe the best products are built by diverse teams who genuinely enjoy
                    working together. That&apos;s why we&apos;ve created an environment where
                    everyone can do their best work.
                  </p>
                  <p>
                    As a remote-first company, we prioritize async communication, deep work,
                    and flexibility. We trust our team to manage their time and deliver
                    exceptional results.
                  </p>
                  <p>
                    But remote doesn&apos;t mean disconnected. We come together for team
                    offsites, virtual events, and spontaneous conversations that spark
                    creativity and build lasting relationships.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                {cultureValues.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 sm:py-28 bg-[var(--foreground)]/[0.02]">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip>Benefits</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                  Taking care of our team
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  We offer competitive benefits to help you do your best work and live your best life.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 sm:py-28 scroll-mt-24">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-12">
                <SectionChip>Open Positions</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                  Find your next role
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  We&apos;re looking for talented people to join our team. Don&apos;t see a perfect fit?
                  Reach out anyway — we&apos;re always open to meeting great people.
                </p>
              </div>
            </ScrollReveal>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    dept === "All"
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--foreground)]/5 text-[var(--muted)] hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="max-w-3xl mx-auto space-y-4">
              {openPositions.map((job, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <Link
                    href="/contact"
                    className="group block p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-1">
                          {job.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mb-2">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 text-xs font-medium text-[var(--accent)] bg-[var(--accent-light)] rounded-full">
                            {job.department}
                          </span>
                          <span className="text-xs text-[var(--muted)]">{job.location}</span>
                          <span className="text-xs text-[var(--muted)]">•</span>
                          <span className="text-xs text-[var(--muted)]">{job.type}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                          Apply
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* No perfect fit CTA */}
            <div className="text-center mt-12">
              <p className="text-[var(--muted)] mb-4">
                Don&apos;t see the right role?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
              >
                Send us your resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
                  Ready to make an impact?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Join us in building tools that help thousands of teams ship better products.
                  Your work here will matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#positions"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-white text-[var(--accent)] hover:bg-white/90 transition-colors"
                  >
                    View open positions
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    Learn about us
                  </Link>
                </div>
              </div>
            </motion.div>
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
                    We recommend Sanity for managing your careers content.
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

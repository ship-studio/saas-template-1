"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const stats = [
  { value: "10k+", label: "Teams using LaunchKit" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50ms", label: "Average response time" },
  { value: "24/7", label: "Support availability" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Move fast",
    description: "We ship early and often. Speed is a feature, and we believe in learning from real users rather than endless planning.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Obsess over quality",
    description: "Every pixel matters. We sweat the details because we know that great products are built from thousands of small decisions done right.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Win together",
    description: "We succeed as a team. Collaboration isn't just encouraged—it's how we work. The best ideas come from diverse perspectives.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Stay curious",
    description: "We're always learning. Technology evolves fast, and we embrace change as an opportunity to grow and improve.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former product lead at Stripe. Building tools she wished existed.",
    image: null,
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    bio: "Ex-Google engineer. Passionate about developer experience.",
    image: null,
    initials: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Previously at Figma. Believes design is how it works.",
    image: null,
    initials: "ER",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Shipped products at scale. Loves elegant solutions.",
    image: null,
    initials: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Marketing",
    bio: "Growth expert from HubSpot. Data-driven storyteller.",
    image: null,
    initials: "LT",
  },
  {
    name: "James Wilson",
    role: "Head of Sales",
    bio: "Enterprise sales veteran. Customer-obsessed.",
    image: null,
    initials: "JW",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function AboutPage() {
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
              <SectionChip>About Us</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-6 mb-6">
                We&apos;re building the future of product development
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
                LaunchKit started with a simple idea: building products should be faster,
                easier, and more enjoyable. We&apos;re a team of builders who got tired of
                the slow, complex tools that held us back.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-[var(--border)]">
          <Container>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" staggerDelay={0.1}>
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="relative group p-6 lg:p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300 text-center overflow-hidden">
                    {/* Background decoration */}
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

        {/* Story Section */}
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <SectionChip>Our Story</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-6">
                  From frustration to innovation
                </h2>
                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>
                    In 2021, our founders were working at a fast-growing startup, trying to ship
                    products quickly. But they kept running into the same problems: scattered tools,
                    slow workflows, and too much time spent on repetitive tasks.
                  </p>
                  <p>
                    They realized that modern teams deserved better. So they set out to build
                    LaunchKit—a platform that brings together everything you need to go from
                    idea to launch, without the complexity.
                  </p>
                  <p>
                    Today, thousands of teams use LaunchKit to ship products faster. We&apos;re
                    just getting started, and we&apos;re excited to build the future with you.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] p-8 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl sm:text-7xl font-bold mb-2">2021</div>
                    <div className="text-white/80 font-medium">Founded in San Francisco</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 sm:py-28 bg-[var(--foreground)]/[0.02]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <SectionChip>Our Values</SectionChip>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                What drives us every day
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Our values aren&apos;t just words on a wall. They&apos;re how we make decisions,
                build products, and treat each other.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-[var(--border)] p-8 hover:shadow-lg hover:border-[var(--accent)]/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center mb-5">
                    {value.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 sm:py-28">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <SectionChip>Our Team</SectionChip>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-6 mb-4">
                Meet the people behind LaunchKit
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                We&apos;re a small but mighty team of designers, engineers, and operators
                who love building great products.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-[var(--border)] p-6 text-center hover:shadow-lg hover:border-[var(--accent)]/20 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center mx-auto mb-4 text-white text-xl font-semibold group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)] mb-1">
                    {member.name}
                  </h3>
                  <div className="text-sm text-[var(--accent)] font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-[var(--muted)]">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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
                  Ready to join us?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  We&apos;re always looking for talented people who share our values.
                  Check out our open positions or just say hello.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-white text-[var(--accent)] hover:bg-white/90 transition-colors"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    Start free trial
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

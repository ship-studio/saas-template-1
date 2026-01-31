"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionChip } from "@/components/ui/SectionChip";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const heroFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Lightning fast",
    description: "Built for speed. Every interaction feels instant.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Enterprise secure",
    description: "SOC 2 certified with end-to-end encryption.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Team-first",
    description: "Collaborate in real-time with your entire team.",
  },
];

const featureCategories = [
  {
    badge: "Build",
    title: "Ship products in record time",
    description: "Start with battle-tested templates and components. Customize everything to match your brand. Deploy with a single click.",
    color: "accent",
    features: [
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>
        ),
        title: "Pre-built templates",
        description: "50+ production-ready templates for dashboards, landing pages, and apps.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
        ),
        title: "Design system",
        description: "Consistent, beautiful UI components that work together seamlessly.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        ),
        title: "One-click deploy",
        description: "Push to production instantly with zero configuration required.",
      },
    ],
    visual: (
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[var(--border)] shadow-2xl shadow-[var(--foreground)]/5">
        <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--foreground)]/[0.03] border-b border-[var(--border)] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
          </div>
        </div>
        <div className="absolute top-14 left-4 right-4 bottom-4">
          <div className="grid grid-cols-3 gap-3 h-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[var(--border)] p-3 flex flex-col">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 mb-2" />
                <div className="h-2 w-full bg-[var(--foreground)]/10 rounded mb-1" />
                <div className="h-2 w-2/3 bg-[var(--foreground)]/5 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Automate",
    title: "Let workflows do the heavy lifting",
    description: "Connect your tools and automate repetitive tasks. Triggers, actions, and conditions that work while you sleep.",
    color: "purple",
    features: [
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
          </svg>
        ),
        title: "200+ integrations",
        description: "Connect with Slack, GitHub, Notion, Figma, and all your favorite tools.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Custom webhooks",
        description: "Build your own integrations with our powerful webhook system.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        ),
        title: "Conditional logic",
        description: "Build complex workflows with if/then conditions and branching.",
      },
    ],
    visual: (
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[var(--border)] shadow-2xl shadow-[var(--foreground)]/5">
        <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--foreground)]/[0.03] border-b border-[var(--border)] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
          </div>
        </div>
        <div className="absolute top-14 left-4 right-4 bottom-4 flex flex-col gap-3">
          {/* Workflow visualization */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500/40 to-[var(--accent)]/40" />
            <div className="w-16 h-16 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-[var(--foreground)]/[0.02] border border-[var(--border)] p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-[var(--foreground)]">Workflow active</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-500/20" />
                <div className="h-2 flex-1 bg-[var(--foreground)]/10 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[var(--accent)]/20" />
                <div className="h-2 flex-1 bg-[var(--foreground)]/10 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-emerald-500/20" />
                <div className="h-2 w-2/3 bg-[var(--foreground)]/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Analyze",
    title: "Make data-driven decisions",
    description: "Beautiful dashboards that surface insights instantly. Track what matters, spot trends early, and prove ROI.",
    color: "emerald",
    features: [
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        ),
        title: "Real-time dashboards",
        description: "Live metrics that update as events happen. No refresh needed.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        title: "Custom reports",
        description: "Build and share reports tailored to your team's needs.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        ),
        title: "Smart alerts",
        description: "Get notified when metrics hit thresholds you care about.",
      },
    ],
    visual: (
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[var(--border)] shadow-2xl shadow-[var(--foreground)]/5">
        <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--foreground)]/[0.03] border-b border-[var(--border)] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
          </div>
        </div>
        <div className="absolute top-14 left-4 right-4 bottom-4 flex flex-col gap-3">
          {/* Stats row */}
          <div className="flex gap-2">
            {[
              { label: "Revenue", value: "$48.2k", change: "+12.5%" },
              { label: "Users", value: "2,847", change: "+8.1%" },
              { label: "Conversion", value: "3.24%", change: "+0.4%" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 rounded-lg bg-[var(--background)] border border-[var(--border)] p-2.5">
                <div className="text-[9px] text-[var(--muted)] mb-0.5">{stat.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-[var(--foreground)]">{stat.value}</span>
                  <span className="text-[9px] text-emerald-500">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="flex-1 rounded-xl bg-[var(--background)] border border-[var(--border)] p-3">
            <div className="h-full flex items-end gap-1.5">
              {[35, 45, 30, 55, 40, 70, 50, 65, 45, 80, 60, 75, 55, 85, 65, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const stats = [
  { value: "10k+", label: "Teams using LaunchKit" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50ms", label: "Average response time" },
  { value: "24/7", label: "Support availability" },
];

const integrations = [
  { name: "Slack", icon: "S" },
  { name: "GitHub", icon: "G" },
  { name: "Notion", icon: "N" },
  { name: "Figma", icon: "F" },
  { name: "Linear", icon: "L" },
  { name: "Stripe", icon: "S" },
  { name: "Vercel", icon: "V" },
  { name: "AWS", icon: "A" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] relative">
      {/* Grid background */}
      <div
        className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none"
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

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <SectionChip>Features</SectionChip>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[var(--foreground)] mb-6"
              >
                Everything you need to{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent">
                  build faster
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-[var(--muted)] mb-10 leading-relaxed max-w-2xl mx-auto"
              >
                A complete platform for building, shipping, and scaling your product.
                From idea to launch in record time.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <Button size="lg">
                  Start building free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="secondary" size="lg">
                  View pricing
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--muted)]"
              >
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature.title}</span>
                  </div>
                ))}
              </motion.div>
            </div>
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

        {/* Feature Categories */}
        {featureCategories.map((category, catIndex) => (
          <section
            key={catIndex}
            className={`py-24 lg:py-32 ${catIndex % 2 === 0 ? "" : "bg-[var(--foreground)]/[0.02]"} border-b border-[var(--border)]`}
          >
            <Container>
              <div
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  catIndex % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Content */}
                <ScrollReveal className="flex-1 max-w-xl">
                  <SectionChip className="mb-4">{category.badge}</SectionChip>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                    {category.description}
                  </p>

                  <div className="space-y-6">
                    {category.features.map((feature, featIndex) => (
                      <div key={featIndex} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--foreground)] mb-1">{feature.title}</h3>
                          <p className="text-sm text-[var(--muted)]">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Visual */}
                <ScrollReveal className="flex-1 w-full max-w-xl lg:max-w-none" delay={0.1}>
                  {category.visual}
                </ScrollReveal>
              </div>
            </Container>
          </section>
        ))}

        {/* Integrations Section */}
        <section className="py-24 lg:py-32">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip className="mb-4">Integrations</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                  Works with your stack
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  Connect with 200+ tools you already use. Or build your own integrations with our API.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-4 md:grid-cols-8 gap-4" staggerDelay={0.05}>
              {integrations.map((integration, index) => (
                <StaggerItem key={index}>
                  <div className="aspect-square rounded-2xl bg-white border border-[var(--border)] flex flex-col items-center justify-center gap-2 hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[var(--foreground)]/5 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--foreground)]">
                        {integration.icon}
                      </span>
                    </div>
                    <span className="text-xs text-[var(--muted)] font-medium">{integration.name}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <Button variant="secondary">
                  View all integrations
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-[var(--foreground)]/[0.02] to-[var(--background)] border-t border-[var(--border)]">
          <Container size="md">
            <ScrollReveal>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent-light)] mb-8">
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
                  Ready to ship faster?
                </h2>
                <p className="text-lg text-[var(--muted)] mb-10 max-w-xl mx-auto leading-relaxed">
                  Join 10,000+ teams building better products with LaunchKit. Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg">
                    Start free trial
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button variant="secondary" size="lg">
                    View pricing
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

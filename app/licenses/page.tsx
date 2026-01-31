"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const openSourceLibraries = [
  {
    name: "React",
    version: "18.2.0",
    license: "MIT",
    url: "https://github.com/facebook/react",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Next.js",
    version: "14.0.0",
    license: "MIT",
    url: "https://github.com/vercel/next.js",
    description: "The React Framework for the Web",
  },
  {
    name: "Tailwind CSS",
    version: "3.4.0",
    license: "MIT",
    url: "https://github.com/tailwindlabs/tailwindcss",
    description: "A utility-first CSS framework",
  },
  {
    name: "Framer Motion",
    version: "10.16.0",
    license: "MIT",
    url: "https://github.com/framer/motion",
    description: "A production-ready motion library for React",
  },
  {
    name: "TypeScript",
    version: "5.3.0",
    license: "Apache-2.0",
    url: "https://github.com/microsoft/TypeScript",
    description: "TypeScript is a superset of JavaScript",
  },
  {
    name: "Lucide Icons",
    version: "0.300.0",
    license: "ISC",
    url: "https://github.com/lucide-icons/lucide",
    description: "Beautiful & consistent icon toolkit",
  },
];

const sections = [
  {
    id: "software-license",
    title: "Software License Agreement",
    content: `This Software License Agreement ("Agreement") is entered into between you ("Licensee") and LaunchKit ("Licensor").

**1. Grant of License**
Subject to the terms of this Agreement, Licensor grants Licensee a non-exclusive, non-transferable license to use the LaunchKit software ("Software") solely for Licensee's internal business purposes.

**2. Restrictions**
Licensee shall not:
• Sublicense, sell, or distribute the Software
• Modify, adapt, or create derivative works
• Reverse engineer or decompile the Software
• Remove any proprietary notices or labels

**3. Ownership**
The Software and all copies thereof are proprietary to Licensor. Licensor retains all right, title, and interest in the Software.`,
  },
  {
    id: "subscription-terms",
    title: "Subscription License Terms",
    content: `**Duration:**
Your license to use the Software is valid for the duration of your active subscription. Upon termination or expiration of your subscription, your license to use the Software terminates immediately.

**Updates:**
During your subscription period, you are entitled to receive all updates and new versions of the Software at no additional charge.

**Support:**
Subscription includes access to our support resources, including documentation, community forums, and email support (response times vary by plan).

**Backups:**
You are responsible for maintaining backups of your data. We provide data export tools to facilitate this.`,
  },
  {
    id: "permitted-use",
    title: "Permitted Use",
    content: `Your license permits you to:

• Use the Software for your personal or business projects
• Create unlimited projects using the Software
• Deploy projects to production environments
• Use the Software on multiple devices (for individual licenses)
• Collaborate with team members (for team licenses)

**Client Projects:**
If you're using LaunchKit to build projects for clients, the resulting work product belongs to you (or your clients as agreed), but the underlying LaunchKit Software remains our property.`,
  },
  {
    id: "open-source",
    title: "Open Source Licenses",
    content: `LaunchKit incorporates open source software components. We are grateful to the open source community for their contributions.

Each open source component is subject to its own license terms. We have included a list of the major open source components and their respective licenses below.

**Your Obligations:**
When using LaunchKit, you agree to comply with the license terms of all incorporated open source components. Most components use permissive licenses (MIT, Apache 2.0) that allow commercial use.`,
  },
  {
    id: "trademark",
    title: "Trademark Policy",
    content: `**LaunchKit Trademarks:**
The LaunchKit name, logo, and associated branding are trademarks of LaunchKit, Inc. You may not use our trademarks without prior written permission, except as follows:

**Permitted Uses:**
• Referring to LaunchKit in a factual manner
• Using "Built with LaunchKit" badges as provided
• Discussing or reviewing our products

**Prohibited Uses:**
• Implying endorsement or affiliation without permission
• Using our trademarks in your product name
• Modifying or altering our logos
• Using our trademarks in a way that damages our reputation`,
  },
  {
    id: "attribution",
    title: "Attribution Requirements",
    content: `**Open Source Attribution:**
If you distribute derivative works, you must include attribution as required by the applicable open source licenses. This typically includes:
• Copyright notices
• License text or links
• Modification notices (if applicable)

**LaunchKit Attribution:**
Attribution to LaunchKit is appreciated but not required for projects built with our Software, unless you are using our branding materials or templates that specifically require attribution.`,
  },
  {
    id: "contact",
    title: "License Inquiries",
    content: `For questions about licensing, including:
• Enterprise licensing options
• Custom licensing arrangements
• Open source license compliance
• Trademark usage requests

Please contact us at:

**Email**: licensing@launchkit.com
**Address**: 123 Innovation Way, San Francisco, CA 94107

We typically respond to licensing inquiries within 2-3 business days.`,
  },
];

export default function LicensesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 pb-16 relative">
          {/* Grid background */}
          <div
            className="absolute top-0 left-0 right-0 h-[400px] pointer-events-none"
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
              <SectionChip>Legal</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-[var(--foreground)] mt-6 mb-6">
                Licenses
              </h1>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Information about software licenses, open source attributions,
                and terms of use for LaunchKit products.
              </p>
              <p className="text-sm text-[var(--muted)] mt-4">
                Last updated: January 15, 2025
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Open Source Libraries */}
        <section className="pb-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-6">
                  Open Source Libraries
                </h2>
                <div className="space-y-3">
                  {openSourceLibraries.map((lib) => (
                    <div
                      key={lib.name}
                      className="p-4 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-[var(--foreground)]">
                            {lib.name}
                          </h3>
                          <span className="px-2 py-0.5 text-xs font-mono text-[var(--muted)] bg-[var(--foreground)]/5 rounded">
                            v{lib.version}
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 text-xs font-medium bg-[var(--accent-light)] text-[var(--accent)] rounded-full w-fit">
                          {lib.license}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--muted)] mb-2">
                        {lib.description}
                      </p>
                      <a
                        href={lib.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
                      >
                        View on GitHub
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="pb-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-white border border-[var(--border)] mb-12"
              >
                <h2 className="font-semibold text-[var(--foreground)] mb-4">Table of Contents</h2>
                <nav className="grid sm:grid-cols-2 gap-2">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {index + 1}. {section.title}
                    </a>
                  ))}
                </nav>
              </motion.div>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-32"
                  >
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-4">
                      {index + 1}. {section.title}
                    </h2>
                    <div className="prose prose-slate max-w-none">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-[var(--muted)] leading-relaxed mb-4 whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: paragraph
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--foreground)]">$1</strong>')
                          }}
                        />
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

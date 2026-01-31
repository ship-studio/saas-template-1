"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Required for the website to function properly. These cannot be disabled.",
    examples: ["Session management", "Security tokens", "Load balancing"],
    required: true,
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
    examples: ["Page views", "Traffic sources", "User behavior patterns"],
    required: false,
  },
  {
    name: "Functional Cookies",
    description: "Remember your preferences and settings for a better experience.",
    examples: ["Language preferences", "Theme settings", "Saved form data"],
    required: false,
  },
  {
    name: "Marketing Cookies",
    description: "Used to deliver relevant advertisements and track campaign performance.",
    examples: ["Ad targeting", "Conversion tracking", "Retargeting"],
    required: false,
  },
];

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.

Cookies serve various purposes:
• **Session Management**: Keep you logged in as you navigate
• **Personalization**: Remember your preferences and settings
• **Analytics**: Help us understand how you use our services
• **Advertising**: Enable relevant advertising based on your interests

Cookies can be "persistent" (stored until they expire or you delete them) or "session" (deleted when you close your browser).`,
  },
  {
    id: "how-we-use",
    title: "How We Use Cookies",
    content: `We use cookies and similar technologies to:

• **Authenticate users** and prevent fraudulent use of accounts
• **Remember your preferences** such as language and display settings
• **Analyze traffic and usage** to improve our services
• **Deliver relevant content** based on your interests
• **Measure advertising** effectiveness and reach

We also use web beacons, pixel tags, and similar technologies to collect information about your interactions with our emails and website.`,
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    content: `Some cookies on our website are set by third-party services. These include:

**Analytics Providers:**
• Google Analytics - Website usage analysis
• Mixpanel - Product analytics and user behavior

**Advertising Partners:**
• Google Ads - Advertising and remarketing
• LinkedIn - B2B advertising

**Social Media:**
• Twitter - Social sharing and widgets
• LinkedIn - Social sharing and widgets

These third parties have their own privacy policies governing how they use information collected through cookies.`,
  },
  {
    id: "managing-cookies",
    title: "Managing Cookies",
    content: `You have several options for managing cookies:

**Browser Settings:**
Most browsers allow you to control cookies through their settings. You can:
• Block all cookies
• Accept only first-party cookies
• Delete cookies when you close your browser
• Receive alerts before cookies are stored

**Browser-Specific Instructions:**
• **Chrome**: Settings → Privacy and Security → Cookies
• **Firefox**: Settings → Privacy & Security → Cookies
• **Safari**: Preferences → Privacy → Cookies
• **Edge**: Settings → Privacy, Search, and Services → Cookies

**Note**: Blocking certain cookies may impact your experience and limit functionality of our services.`,
  },
  {
    id: "do-not-track",
    title: "Do Not Track",
    content: `Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked.

Currently, there is no universal standard for how websites should respond to DNT signals. As a result, our website does not currently respond to DNT browser signals.

However, you can use the cookie management tools described above to control tracking on our website.`,
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.

When we make changes, we will update the "Last Updated" date at the top of this policy. We encourage you to review this policy periodically.

For significant changes, we may provide additional notice such as an email notification or a prominent notice on our website.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have questions about our use of cookies or this Cookie Policy, please contact us:

**Email**: privacy@launchkit.com
**Address**: 123 Innovation Way, San Francisco, CA 94107

You can also manage your cookie preferences by clicking the "Cookie Settings" link in the footer of our website.`,
  },
];

export default function CookiesPage() {
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
                Cookie Policy
              </h1>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                This policy explains how we use cookies and similar technologies
                to recognize you when you visit our website.
              </p>
              <p className="text-sm text-[var(--muted)] mt-4">
                Last updated: January 15, 2025
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Cookie Types Overview */}
        <section className="pb-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cookieTypes.map((cookie) => (
                    <div
                      key={cookie.name}
                      className="p-5 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-[var(--foreground)]">
                          {cookie.name}
                        </h3>
                        {cookie.required ? (
                          <span className="px-2 py-0.5 text-xs font-medium bg-[var(--foreground)]/10 text-[var(--foreground)] rounded-full">
                            Required
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-xs font-medium bg-[var(--accent-light)] text-[var(--accent)] rounded-full">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--muted)] mb-3">
                        {cookie.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cookie.examples.map((example) => (
                          <span
                            key={example}
                            className="px-2 py-0.5 text-xs text-[var(--muted)] bg-[var(--foreground)]/5 rounded"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
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

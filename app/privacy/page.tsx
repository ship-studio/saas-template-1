"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes:

• **Account Information**: Name, email address, password, and profile details
• **Payment Information**: Billing address and payment method details (processed securely by our payment providers)
• **Communications**: Messages you send us, feedback, and support requests
• **Usage Data**: Information about how you interact with our services

We also automatically collect certain information when you use our services, including your IP address, device information, browser type, and usage patterns.`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and abuse
• Personalize and improve your experience
• Send promotional communications (with your consent)`,
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    content: `We do not sell your personal information. We may share your information in the following circumstances:

• **Service Providers**: With vendors who perform services on our behalf
• **Legal Requirements**: When required by law or to protect our rights
• **Business Transfers**: In connection with a merger, acquisition, or sale of assets
• **With Your Consent**: When you direct us to share your information

We require all third parties to respect the security of your personal data and treat it in accordance with applicable law.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments and penetration testing
• Access controls and authentication requirements
• Employee training on data protection

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal information:

• **Access**: Request a copy of your personal data
• **Correction**: Request correction of inaccurate data
• **Deletion**: Request deletion of your personal data
• **Portability**: Request transfer of your data to another service
• **Objection**: Object to certain processing of your data
• **Restriction**: Request restriction of processing

To exercise these rights, please contact us at privacy@launchkit.com.`,
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect and track information about your use of our services. You can control cookies through your browser settings and other tools. For more information, please see our Cookie Policy.

We use the following types of cookies:
• **Essential Cookies**: Required for the service to function
• **Analytics Cookies**: Help us understand how you use our services
• **Preference Cookies**: Remember your settings and preferences`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after any modifications indicates your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

**Email**: privacy@launchkit.com
**Address**: 123 Innovation Way, San Francisco, CA 94107

We aim to respond to all legitimate requests within 30 days.`,
  },
];

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Your privacy is important to us. This policy explains how we collect,
                use, and protect your personal information.
              </p>
              <p className="text-sm text-[var(--muted)] mt-4">
                Last updated: January 15, 2025
              </p>
            </motion.div>
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
                transition={{ duration: 0.5, delay: 0.1 }}
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

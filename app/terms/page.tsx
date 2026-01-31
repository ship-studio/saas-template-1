"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing or using LaunchKit's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.

These Terms apply to all visitors, users, and others who access or use the Service. By using our Service, you agree to these Terms.`,
  },
  {
    id: "accounts",
    title: "User Accounts",
    content: `When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.

You are responsible for:
• Safeguarding your password and account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized access

We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.`,
  },
  {
    id: "use-license",
    title: "Use License",
    content: `Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use our Service for your personal or internal business purposes.

**You may not:**
• Modify, copy, or create derivative works based on our Service
• Reverse engineer or attempt to extract the source code
• Remove any copyright or proprietary notations
• Transfer the materials to another person or organization
• Use the Service for any unlawful purpose

This license shall automatically terminate if you violate any of these restrictions.`,
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: `Certain features of the Service may require payment of fees. You agree to provide accurate billing information and authorize us to charge your payment method.

**Billing:**
• Subscription fees are billed in advance on a recurring basis
• All fees are non-refundable except as required by law
• We may change our fees upon 30 days' notice
• Failure to pay may result in suspension of your account

**Cancellation:**
You may cancel your subscription at any time. Your access will continue until the end of your current billing period.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `The Service and its original content, features, and functionality are and will remain the exclusive property of LaunchKit and its licensors. The Service is protected by copyright, trademark, and other laws.

Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of LaunchKit.

**Your Content:**
You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and display such content in connection with providing the Service.`,
  },
  {
    id: "prohibited-uses",
    title: "Prohibited Uses",
    content: `You agree not to use the Service:

• For any unlawful purpose or to solicit others to perform unlawful acts
• To violate any international, federal, or state regulations or laws
• To infringe upon or violate our intellectual property rights
• To harass, abuse, insult, harm, or discriminate against others
• To submit false or misleading information
• To upload malware or malicious code
• To spam or send unsolicited messages
• To interfere with or circumvent security features
• To collect user information without consent

We reserve the right to terminate your use for violating any prohibited uses.`,
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. LAUNCHKIT MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS ALL OTHER WARRANTIES INCLUDING:

• Merchantability and fitness for a particular purpose
• Non-infringement of intellectual property rights
• Accuracy, reliability, or completeness of content
• Uninterrupted or error-free operation

We do not warrant that the Service will meet your requirements or that any errors will be corrected.`,
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    content: `IN NO EVENT SHALL LAUNCHKIT, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING:

• Loss of profits, data, or goodwill
• Service interruption or computer damage
• Cost of substitute services

Our total liability shall not exceed the amount you paid us in the twelve (12) months prior to the claim. Some jurisdictions do not allow these limitations, so they may not apply to you.`,
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: `You agree to defend, indemnify, and hold harmless LaunchKit and its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses arising out of:

• Your violation of these Terms
• Your use of the Service
• Your content or data
• Your violation of any third-party rights`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms.

Upon termination:
• Your right to use the Service will cease immediately
• We may delete your account and data
• Provisions that should survive termination will remain in effect

You may terminate your account at any time by contacting us or using the account settings.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.

Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in San Francisco County, California. You consent to the personal jurisdiction of such courts.`,
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before the new terms take effect.

By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us at:

**Email**: legal@launchkit.com
**Address**: 123 Innovation Way, San Francisco, CA 94107`,
  },
];

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Please read these terms carefully before using our services.
                By using LaunchKit, you agree to be bound by these terms.
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

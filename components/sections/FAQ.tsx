"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How long does it take to get started?",
    answer:
      "You can be up and running in under 5 minutes. Sign up, connect your tools, and start building. No complex setup, no lengthy onboarding calls.",
  },
  {
    question: "Can I use my existing tools and integrations?",
    answer:
      "Absolutely. LaunchKit connects with 200+ popular tools including Slack, GitHub, Notion, Figma, and more. If we don't have a native integration, you can use our API or Zapier connection.",
  },
  {
    question: "What happens when I hit my plan limits?",
    answer:
      "We'll give you a heads up before you hit any limits. You can upgrade anytime to get more capacity, or we can help you optimize your current usage. We never shut down your projects without warning.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is built into everything we do. We're SOC 2 Type II compliant, use end-to-end encryption, and never sell your data. Your data stays yours, period.",
  },
  {
    question: "Can I export my data if I leave?",
    answer:
      "Yes, you own your data. You can export everything at any time in standard formats. No lock-in, no export fees, no hassle.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day free trial on all paid plans, so you can try before you buy. If you're not satisfied within the first 30 days of a paid plan, we'll refund you—no questions asked.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-[var(--border)]">
      <Container size="md">
        <SectionHeading
          badge="FAQ"
          title="Questions? Answers."
          description="Everything you need to know about LaunchKit."
        />

        <div className="mt-12 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-[var(--accent)]/30 bg-[var(--accent-light)]/30"
                    : "border-[var(--border)] bg-transparent hover:border-[var(--accent)]/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between gap-4 w-full text-left p-5"
                >
                  <span className="font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[var(--muted)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--muted)]">
            Still have questions?{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:underline font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

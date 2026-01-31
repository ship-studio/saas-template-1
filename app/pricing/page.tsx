"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionChip } from "@/components/ui/SectionChip";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const plans = [
  {
    name: "Free",
    description: "Perfect for side projects and trying things out",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1 team member",
      "7-day data retention",
    ],
    cta: "Start for free",
    popular: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    name: "Pro",
    description: "For growing teams who need more power",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Up to 10 team members",
      "90-day data retention",
      "Custom integrations",
      "API access",
      "Advanced security",
    ],
    cta: "Start free trial",
    popular: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Enterprise",
    description: "For organizations with custom requirements",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & SAML",
      "Dedicated account manager",
      "Custom contracts",
      "99.99% SLA guarantee",
      "On-premise deployment",
      "24/7 phone support",
    ],
    cta: "Contact sales",
    popular: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Projects", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Team members", free: "1", pro: "10", enterprise: "Unlimited" },
      { name: "Data retention", free: "7 days", pro: "90 days", enterprise: "Unlimited" },
      { name: "API access", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Analytics",
    features: [
      { name: "Basic metrics", free: true, pro: true, enterprise: true },
      { name: "Advanced analytics", free: false, pro: true, enterprise: true },
      { name: "Custom reports", free: false, pro: true, enterprise: true },
      { name: "Real-time dashboards", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", free: true, pro: true, enterprise: true },
      { name: "Email support", free: false, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: true, enterprise: true },
      { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
      { name: "24/7 phone support", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Security & Compliance",
    features: [
      { name: "SSL encryption", free: true, pro: true, enterprise: true },
      { name: "Two-factor auth", free: true, pro: true, enterprise: true },
      { name: "SSO & SAML", free: false, pro: false, enterprise: true },
      { name: "Audit logs", free: false, pro: true, enterprise: true },
      { name: "SOC 2 compliance", free: false, pro: true, enterprise: true },
      { name: "Custom security review", free: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, you'll receive credit toward future invoices.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and can also set up invoicing for Enterprise customers.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start. You'll only be charged if you decide to continue after the trial.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export all your data at any time. After cancellation, we retain your data for 30 days in case you change your mind, then it's permanently deleted.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Yes! We offer 50% off for verified nonprofits and educational institutions. Contact our sales team to learn more.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <SectionChip>Pricing</SectionChip>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6"
              >
                Simple pricing,{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent">
                  no surprises
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-[var(--muted)] mb-10 leading-relaxed"
              >
                Start free and scale as you grow. All plans include a 14-day trial.
                <br className="hidden sm:block" />
                No credit card required.
              </motion.p>

              {/* Billing Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-4 p-1.5 bg-[var(--foreground)]/5 rounded-full"
              >
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                    !isYearly
                      ? "bg-white text-[var(--foreground)] shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                    isYearly
                      ? "bg-white text-[var(--foreground)] shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  Yearly
                  <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full">
                    -20%
                  </span>
                </button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24">
          <Container>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start" staggerDelay={0.1}>
              {plans.map((plan, index) => (
                <StaggerItem key={index}>
                  <div
                    className={`relative flex flex-col h-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                      plan.popular
                        ? "border-[var(--accent)] bg-white shadow-2xl shadow-[var(--accent)]/10 md:-mt-4 md:mb-4 md:scale-105"
                        : "border-[var(--border)] bg-white hover:border-[var(--accent)]/30 hover:shadow-xl"
                    }`}
                  >
                    {/* Popular badge */}
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white text-xs font-semibold text-center py-2">
                        Most Popular
                      </div>
                    )}

                    <div className={`p-6 lg:p-8 flex flex-col h-full ${plan.popular ? "pt-14 lg:pt-16" : ""}`}>
                      {/* Plan icon and name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          plan.popular
                            ? "bg-[var(--accent)] text-white"
                            : "bg-[var(--accent-light)] text-[var(--accent)]"
                        }`}>
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--foreground)]">
                            {plan.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-[var(--muted)] mb-6">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-6">
                        {plan.monthlyPrice !== null ? (
                          <>
                            <div className="flex items-baseline gap-1">
                              <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--foreground)]">
                                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                              </span>
                              <span className="text-[var(--muted)]">/month</span>
                            </div>
                            {isYearly && plan.yearlyPrice !== null && plan.yearlyPrice > 0 && (
                              <p className="text-sm text-[var(--muted)] mt-1">
                                Billed ${plan.yearlyPrice * 12}/year
                              </p>
                            )}
                            {plan.monthlyPrice === 0 && (
                              <p className="text-sm text-[var(--muted)] mt-1">
                                Free forever
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--foreground)]">
                              Custom
                            </span>
                            <p className="text-sm text-[var(--muted)] mt-1">
                              Let&apos;s talk about your needs
                            </p>
                          </>
                        )}
                      </div>

                      {/* CTA */}
                      <Button
                        variant={plan.popular ? "primary" : "secondary"}
                        className="w-full mb-8"
                        size="lg"
                      >
                        {plan.cta}
                      </Button>

                      {/* Features */}
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                          What&apos;s included
                        </p>
                        <ul className="space-y-3">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-3">
                              <svg
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  plan.popular ? "text-[var(--accent)]" : "text-emerald-500"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-sm text-[var(--foreground)]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Trust indicators */}
            <ScrollReveal delay={0.3}>
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>SOC 2 Type II certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-24 bg-[var(--foreground)]/[0.02] border-t border-[var(--border)]">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip className="mb-4">Compare Plans</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                  Everything you need to know
                </h2>
                <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                  A detailed breakdown of what&apos;s included in each plan
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  {/* Table Header */}
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 pr-4 font-semibold text-[var(--foreground)]">Features</th>
                      <th className="text-center py-4 px-4 font-semibold text-[var(--foreground)] w-32">Free</th>
                      <th className="text-center py-4 px-4 font-semibold text-[var(--foreground)] w-32 bg-[var(--accent-light)]/50 rounded-t-lg">Pro</th>
                      <th className="text-center py-4 pl-4 font-semibold text-[var(--foreground)] w-32">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, catIndex) => (
                      <React.Fragment key={`cat-${catIndex}`}>
                        <tr className="border-b border-[var(--border)]">
                          <td colSpan={4} className="pt-8 pb-3">
                            <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                              {category.category}
                            </span>
                          </td>
                        </tr>
                        {category.features.map((feature, featIndex) => (
                          <tr key={`feat-${catIndex}-${featIndex}`} className="border-b border-[var(--border)]/50">
                            <td className="py-4 pr-4 text-sm text-[var(--foreground)]">{feature.name}</td>
                            <td className="py-4 px-4 text-center">
                              {typeof feature.free === "boolean" ? (
                                feature.free ? (
                                  <svg className="w-5 h-5 mx-auto text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 mx-auto text-[var(--muted)]/30" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                )
                              ) : (
                                <span className="text-sm text-[var(--foreground)]">{feature.free}</span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-center bg-[var(--accent-light)]/30">
                              {typeof feature.pro === "boolean" ? (
                                feature.pro ? (
                                  <svg className="w-5 h-5 mx-auto text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 mx-auto text-[var(--muted)]/30" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                )
                              ) : (
                                <span className="text-sm font-medium text-[var(--accent)]">{feature.pro}</span>
                              )}
                            </td>
                            <td className="py-4 pl-4 text-center">
                              {typeof feature.enterprise === "boolean" ? (
                                feature.enterprise ? (
                                  <svg className="w-5 h-5 mx-auto text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 mx-auto text-[var(--muted)]/30" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                )
                              ) : (
                                <span className="text-sm text-[var(--foreground)]">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24 border-t border-[var(--border)]">
          <Container size="md">
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionChip className="mb-4">FAQ</SectionChip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                  Common questions
                </h2>
                <p className="text-lg text-[var(--muted)]">
                  Everything you need to know about our pricing
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="space-y-3" staggerDelay={0.05}>
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <StaggerItem key={index}>
                    <div
                      className={`rounded-xl border transition-all duration-200 ${
                        isOpen
                          ? "border-[var(--accent)]/30 bg-[var(--accent-light)]/30"
                          : "border-[var(--border)] bg-white hover:border-[var(--accent)]/20"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex items-center justify-between gap-4 w-full text-left p-5"
                      >
                        <span className="font-semibold text-[var(--foreground)]">
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
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 text-center">
                <p className="text-[var(--muted)]">
                  Still have questions?{" "}
                  <a href="#" className="text-[var(--accent)] hover:underline font-medium">
                    Contact our sales team
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-[var(--foreground)]/[0.02] to-[var(--background)] border-t border-[var(--border)]">
          <Container size="md">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                  Ready to get started?
                </h2>
                <p className="text-lg text-[var(--muted)] mb-8 max-w-xl mx-auto">
                  Join thousands of teams shipping faster with LaunchKit. Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg">
                    Start free trial
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button variant="secondary" size="lg">
                    Talk to sales
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

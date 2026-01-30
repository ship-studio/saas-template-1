"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying things out",
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
  },
  {
    name: "Pro",
    description: "For growing teams and businesses",
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
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with custom needs",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & SAML",
      "Dedicated support",
      "Custom contracts",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[var(--foreground)]/[0.02] border-t border-[var(--border)]">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple, transparent pricing"
          description="Start free, upgrade when you need to. No hidden fees, no surprises."
        />

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-[var(--foreground)]" : "text-[var(--muted)]"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-[var(--border)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            style={{ backgroundColor: isYearly ? "var(--accent)" : undefined }}
            aria-label="Toggle yearly billing"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300 ease-out ${
                isYearly ? "left-8" : "left-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium flex items-center gap-2 transition-colors ${
              isYearly ? "text-[var(--foreground)]" : "text-[var(--muted)]"
            }`}
          >
            Yearly
            <Badge variant="success">Save 20%</Badge>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "border-[var(--accent)] bg-[var(--background)] shadow-xl shadow-[var(--accent)]/10 md:-mt-4 md:mb-4"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)]/30 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">Most popular</Badge>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[var(--muted)]">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--foreground)]">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[var(--muted)]">/month</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--foreground)]">
                      Custom
                    </span>
                  </div>
                )}
                {isYearly && plan.yearlyPrice !== null && plan.yearlyPrice > 0 && (
                  <p className="text-sm text-[var(--muted)] mt-1">
                    Billed ${plan.yearlyPrice * 12}/year
                  </p>
                )}
                {!isYearly && plan.monthlyPrice === 0 && (
                  <p className="text-sm text-[var(--muted)] mt-1">
                    Free forever
                  </p>
                )}
              </div>

              {/* CTA */}
              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full mb-8"
              >
                {plan.cta}
              </Button>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
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
          ))}
        </div>

        {/* Money-back guarantee */}
        <p className="text-center text-sm text-[var(--muted)] mt-12">
          All paid plans include a 14-day free trial. No credit card required to start.
        </p>
      </Container>
    </section>
  );
}

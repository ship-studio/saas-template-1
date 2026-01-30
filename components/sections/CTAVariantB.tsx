"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Variation B: Split layout with email signup form
export function CTAVariantB() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 lg:py-32 bg-[var(--foreground)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start building today
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Get started in minutes. No credit card required. Cancel anytime.
            </p>

            {/* Email signup form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
              />
              <Button size="lg" className="whitespace-nowrap">
                Get started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </form>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right: Visual/Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-white mb-2">10k+</div>
                <div className="text-sm text-white/60">Active teams</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-white/60">Uptime SLA</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-white mb-2">50M+</div>
                <div className="text-sm text-white/60">API requests/day</div>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--accent)] border border-[var(--accent)]">
                <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-sm text-white/80">Customer rating</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

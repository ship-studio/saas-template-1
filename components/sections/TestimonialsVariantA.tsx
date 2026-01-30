"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "We launched our MVP in 3 weeks instead of 3 months. LaunchKit handled all the complexity so we could focus on what our customers actually needed.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Stackflow",
    avatar: "SC",
  },
  {
    quote:
      "The analytics alone paid for itself. We spotted a 40% drop-off in our onboarding flow and fixed it in a day. That insight would have taken months to surface otherwise.",
    name: "Marcus Johnson",
    role: "Head of Product",
    company: "Relay",
    avatar: "MJ",
  },
  {
    quote:
      "I've tried every no-code tool out there. This is the first one that doesn't make me compromise on what I can build. It just works.",
    name: "Elena Rodriguez",
    role: "Solo Founder",
    company: "Notion Templates Co",
    avatar: "ER",
  },
  {
    quote:
      "The support team is incredible. They helped us migrate our entire platform in a weekend. Can't recommend them enough.",
    name: "David Park",
    role: "CTO",
    company: "Freshly",
    avatar: "DP",
  },
  {
    quote:
      "We've 10x'd our development speed since switching to LaunchKit. Our engineering team actually enjoys shipping now.",
    name: "Amanda Foster",
    role: "VP Engineering",
    company: "Metric",
    avatar: "AF",
  },
];

export function TestimonialsVariantA() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 400;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            badge="Testimonials"
            title="Loved by builders"
            description="Join thousands of founders and teams who ship faster with LaunchKit."
            align="left"
          />

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white"
                  : "border-[var(--border)]/50 text-[var(--muted)]/50 cursor-not-allowed"
              }`}
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white"
                  : "border-[var(--border)]/50 text-[var(--muted)]/50 cursor-not-allowed"
              }`}
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[400px] snap-start"
          >
            <div className="h-full flex flex-col p-6 lg:p-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-lg hover:border-[var(--accent)]/30 transition-all duration-300">
              {/* Quote mark */}
              <div className="text-[var(--accent)]/10 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-[var(--foreground)] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-semibold text-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="text-xs text-[var(--muted)]">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

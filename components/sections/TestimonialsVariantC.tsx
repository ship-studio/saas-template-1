import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Variation C: Masonry-style staggered layout
const testimonials = [
  {
    quote: "We launched our MVP in 3 weeks instead of 3 months. The speed is absolutely unreal.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Stackflow",
    avatar: "SC",
    featured: true,
  },
  {
    quote: "Finally, a tool that doesn't make me compromise on what I can build.",
    name: "Elena Rodriguez",
    role: "Solo Founder",
    company: "Notion Templates Co",
    avatar: "ER",
  },
  {
    quote: "The analytics spotted a 40% drop-off in our onboarding. Fixed it in a day. That insight alone paid for a year of LaunchKit.",
    name: "Marcus Johnson",
    role: "Head of Product",
    company: "Relay",
    avatar: "MJ",
  },
  {
    quote: "Best developer experience I've ever had. Period.",
    name: "Alex Kim",
    role: "CTO",
    company: "Buildspace",
    avatar: "AK",
  },
  {
    quote: "We've tried Webflow, Framer, and custom code. LaunchKit is the only one that scales with us as we grow. The integrations are chef's kiss.",
    name: "Jordan Taylor",
    role: "Growth Lead",
    company: "Nomad",
    avatar: "JT",
    featured: true,
  },
  {
    quote: "Support team replied in 5 minutes. On a Sunday. Enough said.",
    name: "Casey Morgan",
    role: "Founder",
    company: "Indie Labs",
    avatar: "CM",
  },
];

export function TestimonialsVariantC() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Loved by builders"
          description="Join thousands of founders and teams who ship faster with LaunchKit."
        />

        {/* Masonry grid */}
        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                break-inside-avoid rounded-2xl p-6 border transition-all duration-300
                ${testimonial.featured
                  ? "bg-[var(--accent)] text-white border-transparent"
                  : "bg-[var(--background)] border-[var(--border)] hover:shadow-lg hover:border-[var(--accent)]/30"
                }
              `}
            >
              {/* Quote */}
              <blockquote className={`text-base leading-relaxed mb-6 ${testimonial.featured ? "text-white" : "text-[var(--foreground)]"}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs ${
                  testimonial.featured
                    ? "bg-white/20 text-white"
                    : "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] text-white"
                }`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${testimonial.featured ? "text-white" : "text-[var(--foreground)]"}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs ${testimonial.featured ? "text-white/70" : "text-[var(--muted)]"}`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";

// Variation B: Large single testimonial with rotating quotes feel
const testimonials = [
  {
    quote:
      "LaunchKit completely transformed how we build products. We went from idea to paying customers in just 3 weeks. The speed is unreal.",
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "Stackflow",
    avatar: "SC",
    logo: "Stackflow",
  },
];

const logos = [
  "Acme", "Globex", "Hooli", "Pied Piper", "Soylent"
];

export function TestimonialsVariantB() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--foreground)] text-white overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Large quote */}
          <blockquote className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-10">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-semibold">
              {testimonials[0].avatar}
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">{testimonials[0].name}</p>
              <p className="text-white/60">{testimonials[0].role}, {testimonials[0].company}</p>
            </div>
          </div>
        </div>

        {/* Logo bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center text-sm text-white/40 mb-8 uppercase tracking-wider">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-sm text-white">{logo[0]}</span>
                </div>
                <span className="font-semibold text-white">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

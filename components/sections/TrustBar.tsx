import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Acme", icon: "A" },
  { name: "Globex", icon: "G" },
  { name: "Hooli", icon: "H" },
  { name: "Pied Piper", icon: "P" },
  { name: "Soylent", icon: "S" },
  { name: "Massive", icon: "M" },
];

export function TrustBar() {
  return (
    <section className="py-12 lg:py-16 border-t border-[var(--border)] bg-[var(--background)]">
      <Container>
        <p className="text-center text-xs font-medium text-[var(--muted)] mb-8 uppercase tracking-widest">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 opacity-50 hover:opacity-80 transition-opacity cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--foreground)]/5 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm text-[var(--foreground)]/70">
                  {logo.icon}
                </span>
              </div>
              <span className="font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)]/80">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

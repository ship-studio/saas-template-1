import { ReactNode } from "react";
import { SectionChip } from "./SectionChip";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignStyles}`}>
      {badge && (
        <div className="mb-4">
          <SectionChip>{badge}</SectionChip>
        </div>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

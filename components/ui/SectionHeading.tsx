import { ReactNode } from "react";

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
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-dark)] bg-[var(--accent-light)] rounded-full">
          {badge}
        </span>
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

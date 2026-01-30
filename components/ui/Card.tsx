import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ children, className = "", hover = false, padding = "md" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--background)]
        ${paddingStyles[padding]}
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:border-[var(--accent)]/30" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

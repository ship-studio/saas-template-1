"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionChipProps {
  children: ReactNode;
  animate?: boolean;
  className?: string;
}

export function SectionChip({ children, animate = false, className = "" }: SectionChipProps) {
  const chipContent = (
    <span
      className={`
        inline-flex items-center gap-2
        px-4 py-1.5
        text-xs font-semibold uppercase tracking-wider
        text-[var(--accent-dark)]
        bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5
        border border-[var(--accent)]/20
        rounded-full
        ${className}
      `}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-40 animate-ping" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      </span>
      {children}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="inline-block"
      >
        {chipContent}
      </motion.div>
    );
  }

  return chipContent;
}

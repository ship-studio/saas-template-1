"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sending code logic here
    console.log("Send code to:", email);
    // Store email in sessionStorage for the verify page
    sessionStorage.setItem("resetEmail", email);
    router.push("/forgot-password/verify");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2.5 mb-8 group">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center transition-transform group-hover:scale-105">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-display)] font-bold text-2xl text-[var(--foreground)]">
            LaunchKit
          </span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--foreground)] mb-2">
            Reset your password
          </h1>
          <p className="text-[var(--muted)]">
            Enter your email and we&apos;ll send you a 6-digit code to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
              required
              autoFocus
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Send reset code
          </Button>
        </form>

        {/* Back to login */}
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Remember your password?{" "}
          <Link href="/login" className="text-[var(--accent)] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

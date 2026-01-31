"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function VerifyCodePage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [email] = useState(() => {
    // Initialize from sessionStorage on client
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("resetEmail") || "";
    }
    return "";
  });
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace - go to previous input
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i];
    }
    setCode(newCode);

    // Focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex((digit) => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 6) return;

    // Handle code verification logic here
    console.log("Verify code:", fullCode);
    router.push("/forgot-password/reset");
  };

  const handleResend = () => {
    // Handle resend logic here
    console.log("Resend code to:", email);
  };

  const isCodeComplete = code.every((digit) => digit !== "");

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
            Check your email
          </h1>
          <p className="text-[var(--muted)]">
            We sent a 6-digit code to{" "}
            {email ? (
              <span className="text-[var(--foreground)] font-medium">{email}</span>
            ) : (
              "your email"
            )}
            . Enter it below to reset your password.
          </p>
        </div>

        {/* Code Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
              Verification code
            </label>
            <div className="flex gap-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-xl font-semibold rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                />
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={!isCodeComplete}>
            Verify code
          </Button>
        </form>

        {/* Resend code */}
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-[var(--accent)] hover:underline font-medium"
          >
            Resend
          </button>
        </p>

        {/* Back to login */}
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          <Link href="/login" className="text-[var(--accent)] hover:underline font-medium">
            Back to sign in
          </Link>
        </p>
      </motion.div>

      {/* Memberstack Banner */}
      {!bannerDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--foreground)] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#6366f1] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Need authentication?
                  </p>
                  <p className="text-white/60 text-sm">
                    We recommend Memberstack for user auth and memberships.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setBannerDismissed(true)}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  Dismiss
                </button>
                <a
                  href="https://www.memberstack.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold text-[var(--foreground)] bg-white hover:bg-white/90 rounded-lg transition-colors"
                >
                  Set up Memberstack
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

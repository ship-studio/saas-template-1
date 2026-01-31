"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Placeholder article data - in production this would come from Sanity CMS
const article = {
  title: "Introducing LaunchKit 2.0: The fastest way to ship products",
  excerpt: "We've completely rebuilt LaunchKit from the ground up. New features, better performance, and a fresh design that helps you ship even faster.",
  category: "Product",
  date: "Jan 28, 2025",
  readTime: "5 min read",
  author: {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    initials: "SC",
    bio: "Sarah is the CEO and Co-founder of LaunchKit. Previously, she led product at Stripe.",
  },
};

const relatedPosts = [
  {
    title: "How we reduced our API response time by 80%",
    excerpt: "A deep dive into the performance optimizations that made LaunchKit lightning fast.",
    category: "Engineering",
    date: "Jan 25, 2025",
    readTime: "8 min read",
    author: { name: "David Kim", initials: "DK" },
    slug: "api-performance",
  },
  {
    title: "Building a design system that scales",
    excerpt: "Lessons learned from creating a component library used by thousands of teams.",
    category: "Engineering",
    date: "Jan 22, 2025",
    readTime: "6 min read",
    author: { name: "Emily Rodriguez", initials: "ER" },
    slug: "design-system",
  },
  {
    title: "Why we're betting big on AI-powered workflows",
    excerpt: "Our vision for the future of product development and how AI fits into it.",
    category: "Product",
    date: "Jan 18, 2025",
    readTime: "4 min read",
    author: { name: "Sarah Chen", initials: "SC" },
    slug: "ai-workflows",
  },
];

export default function ArticlePage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pb-24">
        {/* Article Header */}
        <section className="pt-32 sm:pt-40 pb-12 relative">
          {/* Grid background */}
          <div
            className="absolute top-0 left-0 right-0 h-[400px] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            }}
          />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-8">
                <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Blog
                </Link>
                <span className="text-[var(--muted)]">/</span>
                <span className="text-[var(--accent)]">{article.category}</span>
              </div>

              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-light)] rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-[var(--muted)]">{article.date}</span>
                <span className="text-sm text-[var(--muted)]">·</span>
                <span className="text-sm text-[var(--muted)]">{article.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 leading-[1.1]">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
                {article.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pb-8 border-b border-[var(--border)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-semibold">
                  {article.author.initials}
                </div>
                <div>
                  <div className="font-medium text-[var(--foreground)]">{article.author.name}</div>
                  <div className="text-sm text-[var(--muted)]">{article.author.role}</div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <Container>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="space-y-6 text-lg text-[var(--muted)] leading-relaxed">
                <p>
                  Today, we&apos;re thrilled to announce LaunchKit 2.0 — the biggest update we&apos;ve ever shipped. After months of work, countless conversations with our users, and more than a few late nights, we&apos;re ready to share what we&apos;ve been building.
                </p>

                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">
                  Why we rebuilt LaunchKit
                </h2>

                <p>
                  When we launched LaunchKit three years ago, we had a simple goal: help teams ship products faster. And while we&apos;ve helped thousands of teams do exactly that, we knew we could do better.
                </p>

                <p>Over the past year, we&apos;ve listened to your feedback. You told us you wanted:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Faster performance across the board</li>
                  <li>Better collaboration features for distributed teams</li>
                  <li>More flexibility in how you structure your projects</li>
                  <li>Deeper integrations with the tools you already use</li>
                </ul>

                <p>So we went back to the drawing board and rebuilt LaunchKit from the ground up.</p>

                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">
                  What&apos;s new in 2.0
                </h2>

                <p>
                  LaunchKit 2.0 is faster, more powerful, and easier to use than ever before. Here are the highlights:
                </p>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mt-8 mb-3">
                  Lightning-fast performance
                </h3>

                <p>
                  We&apos;ve completely rewritten our backend infrastructure. The result? Page loads are now 3x faster, and our API response times have dropped by 80%. Everything just feels snappier.
                </p>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mt-8 mb-3">
                  Real-time collaboration
                </h3>

                <p>
                  Work together with your team in real-time. See who&apos;s online, watch changes as they happen, and never worry about conflicts again. It&apos;s like Google Docs, but for building products.
                </p>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mt-8 mb-3">
                  Flexible workspaces
                </h3>

                <p>
                  Organize your work the way that makes sense for your team. Create custom views, save filters, and build dashboards that show exactly what you need to see.
                </p>

                <blockquote className="border-l-4 border-[var(--accent)] bg-[var(--accent-light)] py-4 px-6 rounded-r-xl my-8">
                  <p className="text-[var(--foreground)] italic mb-2">
                    &ldquo;LaunchKit 2.0 has transformed how our team works. We&apos;re shipping twice as fast and with fewer bugs. It&apos;s become essential to our workflow.&rdquo;
                  </p>
                  <cite className="text-sm text-[var(--accent-dark)] font-medium not-italic">
                    — Alex Rivera, CTO at Stackflow
                  </cite>
                </blockquote>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)] mt-8 mb-3">
                  200+ integrations
                </h3>

                <p>
                  Connect LaunchKit to the tools you already use. We&apos;ve added integrations with Slack, GitHub, Figma, Notion, Linear, and dozens more. Plus, our new API makes it easy to build custom integrations.
                </p>

                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">
                  Getting started
                </h2>

                <p>
                  If you&apos;re already a LaunchKit user, you don&apos;t need to do anything — you&apos;ll automatically get access to all the new features. Just log in and explore.
                </p>

                <p>
                  If you&apos;re new to LaunchKit, there&apos;s never been a better time to get started. Sign up for a free trial and see what you can build.
                </p>

                <p>
                  We can&apos;t wait to see what you create with LaunchKit 2.0. As always, we&apos;d love to hear your feedback — drop us a line at{" "}
                  <a href="mailto:hello@launchkit.com" className="text-[var(--accent)] hover:underline">
                    hello@launchkit.com
                  </a>{" "}
                  or find us on Twitter.
                </p>

                <p className="text-2xl">Happy shipping! 🚀</p>
              </div>
            </motion.article>

            {/* Share & Tags */}
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-[var(--border)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--muted)]">Share:</span>
                  <div className="flex gap-2">
                    {[
                      { label: "Twitter", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                      { label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                    ].map((social) => (
                      <button
                        key={social.label}
                        className="w-9 h-9 rounded-lg bg-[var(--foreground)]/5 flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
                        aria-label={`Share on ${social.label}`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </button>
                    ))}
                    <button
                      className="w-9 h-9 rounded-lg bg-[var(--foreground)]/5 flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
                      aria-label="Copy link"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="max-w-3xl mx-auto mt-12">
              <div className="p-6 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--border)]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-semibold text-xl flex-shrink-0">
                    {article.author.initials}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)] mb-1">
                      {article.author.name}
                    </div>
                    <div className="text-sm text-[var(--accent)] mb-2">{article.author.role}</div>
                    <p className="text-sm text-[var(--muted)]">{article.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Posts */}
        <section className="py-16 border-t border-[var(--border)]">
          <Container>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-8 text-center">
              Related articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full p-5 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 text-xs font-medium text-[var(--accent)] bg-[var(--accent-light)] rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-[var(--muted)]">{post.readTime}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[var(--muted)] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
              >
                View all posts
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      {/* Sanity CMS Banner */}
      {!bannerDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--foreground)] border-t border-white/10">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f03e2f] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 28 28" fill="currentColor">
                    <path d="M7.5 7.5h6v6h-6zM14.5 7.5h6v6h-6zM7.5 14.5h6v6h-6zM14.5 14.5h6v6h-6z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Want a CMS?
                  </p>
                  <p className="text-white/60 text-sm">
                    We recommend Sanity for managing your blog content.
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
                  href="https://www.sanity.io/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold text-[var(--foreground)] bg-white hover:bg-white/90 rounded-lg transition-colors"
                >
                  Set up Sanity CMS
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

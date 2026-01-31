"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionChip } from "@/components/ui/SectionChip";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const categories = ["All", "Product", "Engineering", "Company", "Tutorials"];

const featuredPost = {
  title: "Introducing LaunchKit 2.0: The fastest way to ship products",
  excerpt: "We've completely rebuilt LaunchKit from the ground up. New features, better performance, and a fresh design that helps you ship even faster.",
  category: "Product",
  date: "Jan 28, 2025",
  readTime: "5 min read",
  author: {
    name: "Sarah Chen",
    role: "CEO",
    initials: "SC",
  },
  slug: "launchkit-2",
};

const posts = [
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
  {
    title: "Getting started with LaunchKit: A complete guide",
    excerpt: "Everything you need to know to set up your first project and start shipping.",
    category: "Tutorials",
    date: "Jan 15, 2025",
    readTime: "10 min read",
    author: { name: "Marcus Johnson", initials: "MJ" },
    slug: "getting-started",
  },
  {
    title: "Our journey to SOC 2 compliance",
    excerpt: "How we achieved enterprise-grade security certification and what it means for you.",
    category: "Company",
    date: "Jan 12, 2025",
    readTime: "5 min read",
    author: { name: "James Wilson", initials: "JW" },
    slug: "soc-2-compliance",
  },
  {
    title: "Integrating LaunchKit with your CI/CD pipeline",
    excerpt: "Step-by-step tutorial for connecting LaunchKit to GitHub Actions, CircleCI, and more.",
    category: "Tutorials",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    author: { name: "David Kim", initials: "DK" },
    slug: "cicd-integration",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pb-24">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 pb-16 relative">
          {/* Grid background */}
          <div
            className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
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
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <SectionChip>Blog</SectionChip>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-6 mb-6">
                Insights & updates
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
                Stories, tutorials, and announcements from the LaunchKit team.
              </p>
            </motion.div>

            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] p-8 sm:p-12">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/20 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-white/70">{featuredPost.date}</span>
                    </div>

                    <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:underline decoration-2 underline-offset-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-white/80 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-sm">
                        {featuredPost.author.initials}
                      </div>
                      <div>
                        <div className="text-white font-medium">{featuredPost.author.name}</div>
                        <div className="text-white/70 text-sm">{featuredPost.readTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <Container>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--foreground)]/5 text-[var(--muted)] hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
              {filteredPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="h-full p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300 flex flex-col">
                      {/* Placeholder image */}
                      <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-[var(--foreground)]/5 to-[var(--foreground)]/10 mb-5 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-[var(--muted)]">
                          <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-0.5 text-xs font-medium text-[var(--accent)] bg-[var(--accent-light)] rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--muted)]">{post.date}</span>
                      </div>

                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[var(--border)]">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-medium text-xs">
                          {post.author.initials}
                        </div>
                        <div className="text-sm">
                          <span className="text-[var(--foreground)] font-medium">{post.author.name}</span>
                          <span className="text-[var(--muted)]"> · {post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-6 py-3 text-sm font-semibold text-[var(--foreground)] bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 rounded-xl transition-colors">
                Load more posts
              </button>
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
                  href="#"
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

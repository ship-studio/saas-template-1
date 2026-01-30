import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchKit - Build something people will love",
  description: "The platform that helps you go from idea to launch. Ship faster, iterate smarter, and create products your customers actually want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-[family-name:var(--font-figtree)] antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CodeLab for students",
  description:
    "Students: learn Python, Java and more without installing anything. Run every example instantly and share your code with a link.",
  alternates: { canonical: "/use-cases/students" },
};

export default function StudentsPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "CodeLab for students",
          url: `${SITE_URL}/use-cases/students`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Use cases", href: "/use-cases" },
            { label: "Students", href: "/use-cases/students" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ USE CASE — STUDENTS ]
        </p>
        <h1 className="display-brand mt-4 max-w-[18ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Learn by running, not by configuring.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          The biggest blocker for beginners is setup, not syntax. CodeLab
          removes it: open the compiler, pick your course language, and run
          your first program in seconds.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { h: "1. Match your course", p: "Start with the per-language guides for Python, Java or C — each names the exact runtime version." },
            { h: "2. Run every example", p: "Type each textbook example and press Run. Use stdin whenever a program asks for input." },
            { h: "3. Ask with a link", p: "Stuck? Copy the page URL and send it to a tutor or forum — they see your exact code." },
          ].map((s) => (
            <div key={s.h} className="rounded-marketing border border-hairline-soft bg-canvas-soft p-6">
              <h2 className="display-brand text-[20px] text-white">{s.h}</h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-ash">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compiler" className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand">
            Start learning — free
          </Link>
          <Link href="/languages/python" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            Run Python online <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}

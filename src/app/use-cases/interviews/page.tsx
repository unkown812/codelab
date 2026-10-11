import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CodeLab for interview prep",
  description:
    "Practice coding interviews online: drill algorithms in Python, Java or JavaScript with stdin support and zero setup.",
  alternates: { canonical: "/use-cases/interviews" },
};

export default function InterviewsPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "CodeLab for interview prep",
          url: `${SITE_URL}/use-cases/interviews`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Use cases", href: "/use-cases" },
            { label: "Interviews", href: "/use-cases/interviews" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ USE CASE — INTERVIEWS ]
        </p>
        <h1 className="display-brand mt-4 max-w-[18ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Practice like it&apos;s the real round.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          Real assessments give you a blank editor and a clock — not your
          lovingly configured IDE. Train under the same constraints.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { h: "1. Pick the interview language", p: "Most rounds are Python, Java or JavaScript. Use the matching per-language guide to warm up." },
            { h: "2. Time yourself", p: "Solve with stdin test cases, the way platforms feed hidden inputs to your program." },
            { h: "3. Review the run", p: "Re-run with edge cases. Share the link with a study partner for a mock review." },
          ].map((s) => (
            <div key={s.h} className="rounded-marketing border border-hairline-soft bg-canvas-soft p-6">
              <h2 className="display-brand text-[20px] text-white">{s.h}</h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-ash">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compiler" className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand">
            Start a timed drill
          </Link>
          <Link href="/blog/stdin-guide-online-compiler" className="inline-flex h-11 items-center rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            How stdin works →
          </Link>
        </div>
      </div>
    </main>
  );
}

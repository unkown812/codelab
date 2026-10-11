import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Honest CodeLab comparisons: online compiler vs local IDE and plan differences. No hype, just where each option fits.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Compare — CodeLab",
    description: "Honest comparisons: where CodeLab fits and where it doesn't.",
    url: "/compare",
    type: "website",
  },
};

export default function CompareHubPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Compare — CodeLab",
          url: `${SITE_URL}/compare`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Compare", href: "/compare" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ COMPARE ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Honest comparisons.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          Where CodeLab fits, where it doesn&apos;t, and how the plans differ.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">
              Online compiler vs local IDE
            </h2>
            <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
              Setup, sharing, classrooms and offline work compared — plus the
              point where you should graduate to a local setup.
            </p>
            <Link
              href="/compare/online-compiler-vs-local-ide"
              className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white"
            >
              Read the comparison <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </article>
          <article className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">
              Playground vs Pro vs Classroom
            </h2>
            <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
              Free runtimes for trying ideas, Pro for builders, Classroom for
              teachers and teams. Side-by-side tiers and limits.
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white"
            >
              Compare plans <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}

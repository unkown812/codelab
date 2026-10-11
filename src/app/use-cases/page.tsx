import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "How students, teachers and interview candidates use CodeLab: learn faster, teach live and practice coding interviews with zero setup.",
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "Use cases — CodeLab",
    description:
      "How students, teachers and interview candidates use CodeLab with zero setup.",
    url: "/use-cases",
    type: "website",
  },
};

const CASES = [
  {
    slug: "students",
    title: "Students",
    body: "Learn your first language without installing a toolchain. Run every example the moment you read it.",
  },
  {
    slug: "teachers",
    title: "Teachers",
    body: "Demo live in class. Every student opens the same runtime in one click — no version drift.",
  },
  {
    slug: "interviews",
    title: "Interview prep",
    body: "Drill data structures and algorithms in a clean, timed-friendly editor that mirrors real assessments.",
  },
];

export default function UseCasesPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Use cases — CodeLab",
          description:
            "How students, teachers and interview candidates use the CodeLab online compiler.",
          url: `${SITE_URL}/use-cases`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Use cases", href: "/use-cases" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ USE CASES ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          One compiler, three jobs.
        </h1>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.slug}
              className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8"
            >
              <h2 className="display-brand text-[24px] text-white">{c.title}</h2>
              <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
                {c.body}
              </p>
              <Link
                href={`/use-cases/${c.slug}`}
                className="mt-6 text-[13px] font-medium text-ash transition hover:text-white"
              >
                How {c.title.toLowerCase()} use CodeLab →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CodeLab pricing: free Playground with 80+ runtimes, Pro for builders and Classroom for teachers and teams. No credit card to try.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — CodeLab",
    description:
      "Free to start. Fair when you grow. Playground, Pro and Classroom plans.",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pricing — CodeLab",
    description:
      "Free to start. Fair when you grow. Playground, Pro and Classroom plans.",
  },
};

const TIERS = [
  {
    name: "Playground",
    desc: "For trying ideas fast.",
    price: "$0",
    cta: "Start for free",
    href: "/compiler",
    featured: false,
    features: ["80+ runtimes", "Unlimited public runs", "Share via link", "Basic stdin support"],
  },
  {
    name: "Pro",
    desc: "For builders who live in the editor.",
    price: "$8/mo",
    cta: "Go Pro",
    href: "/compiler",
    featured: true,
    features: ["Everything in Playground", "Private saved snippets", "Larger timeouts + files", "No ads, priority queue"],
  },
  {
    name: "Classroom",
    desc: "For teachers & teams.",
    price: "Custom",
    cta: "Contact sales",
    href: "/docs",
    featured: false,
    features: ["Everything in Pro", "Assignments + rosters", "Plagiarism-friendly history", "SSO + support"],
  },
];

export default function PricingPage() {
  return (
    <main className="w-full bg-canvas-light px-6 py-16 text-ink md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pricing — CodeLab",
          description:
            "CodeLab plans: free Playground, Pro and Classroom.",
          url: `${SITE_URL}/pricing`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Pricing", href: "/pricing" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-slate-soft uppercase">
          [ PRICING ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] sm:text-[72px] sm:tracking-[-2.88px]">
          Free to start. Fair when you grow.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[18px] leading-[1.5] text-ink-soft/80">
          Light canvas, maximum legibility — the commercial surface. No credit
          card to try. Upgrade when timeouts, privacy or classrooms matter.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map((t) =>
            t.featured ? (
              <article key={t.name} className="flex flex-col rounded-marketing bg-ink p-8 text-white">
                <h2 className="display-brand text-[32px] leading-[1.13] tracking-[-0.32px]">{t.name}</h2>
                <p className="mt-2 text-[16px] text-ash">{t.desc}</p>
                <p className="display-brand mt-6 text-[48px] leading-[1.08] tracking-[-1.68px]">{t.price}</p>
                <Link
                  href={t.href}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-canvas-light text-[16px] font-medium text-ink transition hover:bg-brand"
                >
                  {t.cta}
                </Link>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.5] text-white/90">
                  {t.features.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-success">✓</span> {x}
                    </li>
                  ))}
                </ul>
              </article>
            ) : (
              <article key={t.name} className="flex flex-col rounded-marketing border border-hairline bg-white p-8">
                <h2 className="display-brand text-[32px] leading-[1.13] tracking-[-0.32px]">{t.name}</h2>
                <p className="mt-2 text-[16px] text-ink-soft/75">{t.desc}</p>
                <p className="display-brand mt-6 text-[48px] leading-[1.08] tracking-[-1.68px]">{t.price}</p>
                <Link
                  href={t.href}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-ink text-[16px] font-medium text-white transition hover:bg-graphite"
                >
                  {t.cta}
                </Link>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.5]">
                  {t.features.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-success">✓</span> {x}
                    </li>
                  ))}
                </ul>
              </article>
            ),
          )}
        </div>

        <div className="mt-8 overflow-hidden rounded-marketing border border-hairline">
          {[
            ["Private snippets", "—", "✓", "✓"],
            ["Run timeout", "10s", "30s", "60s"],
            ["File uploads", "1 file", "5 files", "Unlimited"],
            ["Classroom dashboards", "—", "—", "✓"],
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-2 bg-white p-4 text-[15px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-hairline"
            >
              <span className="font-medium">{row[0]}</span>
              <span className="text-center">{row[1]}</span>
              <span className="text-center">{row[2]}</span>
              <span className="text-center">{row[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Online compiler vs local IDE",
  description:
    "When to use an online compiler vs a local IDE: setup, sharing, classrooms and offline work compared honestly — plus where CodeLab fits.",
  alternates: { canonical: "/compare/online-compiler-vs-local-ide" },
  openGraph: {
    title: "Online compiler vs local IDE — CodeLab",
    description:
      "Setup, sharing, classrooms and offline work compared honestly — plus where CodeLab fits.",
    url: "/compare/online-compiler-vs-local-ide",
    type: "article",
  },
};

const ROWS: [string, string, string][] = [
  ["Setup time", "Seconds — open a URL", "Minutes to hours — install toolchain"],
  ["Best for", "Learning, interviews, quick repros", "Large projects, daily professional work"],
  ["Sharing a run", "One link opens identical state", "Requires repo + environment replication"],
  ["Classrooms", "Identical runtime for everyone", "Version drift across student machines"],
  ["Offline work", "Needs internet", "Works fully offline"],
  ["Big codebases", "Single-file runs", "Multi-file projects, debugging, extensions"],
  ["Cost to try", "Free, no account", "Free, but setup effort"],
];

export default function ComparePage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Online compiler vs local IDE — CodeLab",
          url: `${SITE_URL}/compare/online-compiler-vs-local-ide`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <article className="mx-auto w-full max-w-[880px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Compare", href: "/compare" },
            { label: "Online vs local IDE", href: "/compare/online-compiler-vs-local-ide" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ COMPARISON ]
        </p>
        <h1 className="display-brand mt-4 text-[38px] leading-[1.08] font-normal tracking-[-1.14px] text-white sm:text-[48px]">
          Online compiler vs local IDE: which do you need?
        </h1>
        <p className="mt-4 text-[18px] leading-[1.5] text-ash">
          Short answer: use CodeLab when setup is the blocker, and a local IDE
          when the project outgrows single-file runs. They solve different
          problems — here is the honest split.
        </p>

        <div className="mt-10 overflow-hidden rounded-marketing border border-hairline-soft">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-hairline-soft bg-canvas-soft text-white">
                <th scope="col" className="p-4 font-medium">Dimension</th>
                <th scope="col" className="p-4 font-medium">Online compiler</th>
                <th scope="col" className="p-4 font-medium">Local IDE</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className="border-b border-hairline-soft/60 last:border-0">
                  <th scope="row" className="p-4 font-medium text-white">{r[0]}</th>
                  <td className="p-4 text-ash">{r[1]}</td>
                  <td className="p-4 text-ash">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-10">
          <h2 className="display-brand text-[28px] text-white">Where CodeLab fits</h2>
          <p className="mt-3 text-[16px] leading-[1.65] text-ash">
            CodeLab is a static page around an embedded runtime: you get 80+
            languages with no installs and shareable links, but execution
            happens in a hosted sandbox — not on your machine. Graduate to a
            local IDE when you need multi-file projects, real debugging,
            offline work or dependency control.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/compiler"
            className="inline-flex h-11 items-center rounded-full bg-brand px-6 text-[16px] font-medium text-ink transition hover:bg-canvas-light"
          >
            Try the online option
          </Link>
          <Link
            href="/use-cases/students"
            className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
          >
            Students start here <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}

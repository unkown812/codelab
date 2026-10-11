import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Features",
  description:
    "CodeLab features: instant in-browser runtimes, 80+ languages, shareable run links and classroom-ready workflows. Free, no setup.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features — CodeLab",
    description:
      "Instant runtimes, 80+ languages, shareable runs and classroom-ready workflows.",
    url: "/features",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Features — CodeLab",
    description:
      "Instant runtimes, 80+ languages, shareable runs and classroom-ready workflows.",
  },
};

const CARDS = [
  {
    eyebrow: "01 / INSTANT RUNTIME",
    title: "No setup. Just run.",
    body: "A full compiler in your browser. Pick a language, type, hit Run — output streams back in milliseconds with stdin and args support.",
  },
  {
    eyebrow: "02 / 80+ LANGUAGES",
    title: "One tab for every stack",
    body: "Python, JavaScript, Java, C++, Go, Rust and more. Switch runtimes without losing code, stdin, or history.",
  },
  {
    eyebrow: "03 / SHAREABLE",
    title: "Share code in one click",
    body: "Every run gets a link. Send snippets, repros, and assignments that open exactly where you left off.",
  },
  {
    eyebrow: "04 / CLASSROOM READY",
    title: "Teach with live code",
    body: "Rosters, assignments and run history on Classroom plans. Students start in one click — no installs, no version drift.",
  },
  {
    eyebrow: "05 / INTERVIEW MODE",
    title: "Signal, not setup",
    body: "Clean prompt, timer-friendly layout and copy-paste controls. Focus on problem solving, not environment debugging.",
  },
  {
    eyebrow: "06 / FAST BY DEFAULT",
    title: "Priority queue on Pro",
    body: "Larger timeouts, bigger file support and no ads. Your hot loop stays hot.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Features — CodeLab",
          description:
            "CodeLab features: instant in-browser runtimes, 80+ languages and shareable run links.",
          url: `${SITE_URL}/features`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ FEATURES ]
        </p>
        <h1 className="display-brand mt-4 max-w-[18ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          An editor that reads like a journal, runs like a tool.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          Dark canvas, oversized type, zero chrome. Everything that isn&apos;t
          code gets out of the way — so learners, candidates and teams can
          focus on the program in front of them.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((f) => (
            <article
              key={f.title}
              className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8"
            >
              <p className="font-mono text-[13px] text-mute">{f.eyebrow}</p>
              <h2 className="display-brand mt-4 text-[24px] leading-[1.1] tracking-[-0.24px] text-white">
                {f.title}
              </h2>
              <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
                {f.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 rounded-marketing bg-brand p-8 text-ink md:flex-row md:items-center md:p-10">
          <div>
            <p className="font-mono text-[13px] text-ink/70">
              07 / BUILT FOR SHARING
            </p>
            <h2 className="display-brand mt-2 text-[32px] leading-[1.13] tracking-[-0.32px]">
              Paste. Run. Send the link.
            </h2>
          </div>
          <Link
            href="/compiler"
            className="inline-flex h-11 w-fit shrink-0 items-center rounded-full bg-ink px-6 text-[16px] font-medium text-white transition hover:bg-canvas-soft"
          >
            Open the compiler
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompilerView from "@/components/CompilerView";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Compiler",
  description:
    "The CodeLab playground: write, compile and run Python, JavaScript, Java, C++, Go, Rust and 70+ more languages free in your browser.",
  alternates: { canonical: "/compiler" },
  openGraph: {
    title: "Compiler — CodeLab",
    description:
      "Write, compile and run 80+ languages free in your browser. No setup, no account.",
    url: "/compiler",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compiler — CodeLab",
    description:
      "Write, compile and run 80+ languages free in your browser. No setup, no account.",
  },
};

export default function CompilerPage() {
  return (
    <main className="w-full bg-canvas px-6 py-10 md:py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "CodeLab Compiler",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web browser",
            url: `${SITE_URL}/compiler`,
            description:
              "Free online compiler. Write, compile and run 80+ programming languages in the browser with no setup.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to run code in the CodeLab compiler",
            description:
              "Run any supported language in three steps: pick a runtime, write code, press Run.",
            step: [
              {
                "@type": "HowToStep",
                name: "Pick a runtime",
                text: "Choose a language pill above or use the language picker inside the editor.",
              },
              {
                "@type": "HowToStep",
                name: "Write your program",
                text: "Type code in the editor. Add stdin input if your program reads from standard input.",
              },
              {
                "@type": "HowToStep",
                name: "Press Run",
                text: "Use the Run button in the editor. Output, errors and exit code appear in the result pane.",
              },
            ],
          },
        ]}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Compiler", href: "/compiler" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ COMPILER ]
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display-brand max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white">
            The playground. Full height.
          </h1>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white"
          >
            New here? Read the 10-second quickstart <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <CompilerView />
        <section aria-label="How to use the compiler" className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { h: "1. Pick a runtime", p: "Use the pills above or the picker inside the editor. Code persists per language." },
            { h: "2. Write + add input", p: "Type your program. If it reads input, fill the stdin panel before running." },
            { h: "3. Run and share", p: "Press Run in the editor. Copy the page URL to share your exact state." },
          ].map((s) => (
            <div key={s.h} className="rounded-marketing border border-hairline-soft bg-canvas-soft p-5">
              <h2 className="display-brand text-[18px] text-white">{s.h}</h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-ash">{s.p}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

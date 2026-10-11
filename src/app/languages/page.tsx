import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LanguageExplorer from "@/components/LanguageExplorer";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Languages",
  description:
    "Browse 80+ runtimes on CodeLab — Python, JavaScript, Java, C++, Go, Rust and more. Open a per-language guide with sample code.",
  alternates: { canonical: "/languages" },
  openGraph: {
    title: "Languages — CodeLab",
    description:
      "Browse 80+ runtimes on CodeLab — Python, JavaScript, Java, C++, Go, Rust and more.",
    url: "/languages",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Languages — CodeLab",
    description:
      "Browse 80+ runtimes on CodeLab — Python, JavaScript, Java, C++, Go, Rust and more.",
  },
};

export default function LanguagesPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Languages — CodeLab",
          description:
            "Browse 80+ programming language runtimes available in the CodeLab online compiler.",
          url: `${SITE_URL}/languages`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Languages", href: "/languages" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ LANGUAGES ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          80+ languages, one shortcut away.
        </h1>
        <LanguageExplorer />
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/compiler"
            className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand"
          >
            Start coding — free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
          >
            Compare plans <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}

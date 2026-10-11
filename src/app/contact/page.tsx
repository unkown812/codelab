import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CREATOR_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CodeLab: start with the docs and compiler for fast answers, and learn who builds and maintains the project.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — CodeLab",
    description: "Get help with CodeLab: docs, compiler and project info.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — CodeLab",
          url: `${SITE_URL}/contact`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ CONTACT ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Get unstuck fast.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          CodeLab is a small static project by {CREATOR_NAME} with no support
          desk or account system — so the fastest help is already on this
          site. No contact form that goes nowhere; just the three links that
          actually resolve questions.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">1. Read the docs</h2>
            <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
              Quickstart, stdin, sharing and run limits — most questions end here.
            </p>
            <Link href="/docs" className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white">
              Open docs <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </article>
          <article className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">2. Reproduce it</h2>
            <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
              Set up the failing run in the compiler and share the link when asking anywhere.
            </p>
            <Link href="/compiler" className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white">
              Open compiler <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </article>
          <article className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">3. Know the project</h2>
            <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
              Who builds CodeLab, how it works, and what it does with your code (nothing).
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white">
              About CodeLab <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}

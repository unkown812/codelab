import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CREATOR_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "CodeLab terms: free ISC-licensed static compiler shell. Your responsibilities for code you run and share.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of use — CodeLab",
    description: "Free ISC-licensed compiler shell. Your responsibilities for shared code.",
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of use — CodeLab",
          url: `${SITE_URL}/terms`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <article className="mx-auto w-full max-w-[880px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Terms", href: "/terms" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ TERMS ]
        </p>
        <h1 className="display-brand mt-4 text-[38px] leading-[1.08] font-normal tracking-[-1.14px] text-white sm:text-[48px]">
          Simple terms for a simple tool.
        </h1>
        <div className="mt-8 space-y-8 text-[16px] leading-[1.65] text-ash">
          <section>
            <h2 className="display-brand text-[24px] text-white">License</h2>
            <p className="mt-3">
              CodeLab&apos;s own code is released by {CREATOR_NAME} under the
              ISC License — free to use, copy, modify and distribute, provided
              the copyright and permission notices travel with it. The full
              license text ships with the project.
            </p>
          </section>
          <section>
            <h2 className="display-brand text-[24px] text-white">No warranties</h2>
            <p className="mt-3">
              The site is provided &quot;as is&quot;. Runtimes, availability
              and results depend on the embedded third-party execution service
              and the hosting platform, which carry their own terms.
            </p>
          </section>
          <section>
            <h2 className="display-brand text-[24px] text-white">Your responsibilities</h2>
            <p className="mt-3">
              Don&apos;t run or share code you don&apos;t have the right to
              use, and never put secrets or personal data into shared links —
              anyone with the link can open that run state. You are
              responsible for code you execute and distribute.
            </p>
          </section>
          <section>
            <h2 className="display-brand text-[24px] text-white">Plans</h2>
            <p className="mt-3">
              The Playground tier is free. Any paid Pro or Classroom offering
              described on the pricing page would be governed by its own
              checkout terms at purchase time.
            </p>
          </section>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/privacy" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            Read the privacy policy <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/pricing" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            See plans <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}

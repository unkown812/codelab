import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "CodeLab privacy: the site itself collects nothing — no backend, no accounts, no analytics. Execution runs in the embedded runtime.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy policy — CodeLab",
    description: "CodeLab collects nothing itself. How code, hosting and embeds work.",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy policy — CodeLab",
          url: `${SITE_URL}/privacy`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <article className="mx-auto w-full max-w-[880px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Privacy", href: "/privacy" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ PRIVACY ]
        </p>
        <h1 className="display-brand mt-4 text-[38px] leading-[1.08] font-normal tracking-[-1.14px] text-white sm:text-[48px]">
          CodeLab collects nothing itself.
        </h1>
        <div className="mt-8 space-y-8 text-[16px] leading-[1.65] text-ash">
          <section>
            <h2 className="display-brand text-[24px] text-white">No backend, no accounts, no analytics</h2>
            <p className="mt-3">
              CodeLab is a static website: it runs no server code, stores no
              user data, requires no account, and ships no analytics or
              advertising trackers of its own. There is nowhere on
              CodeLab&apos;s own infrastructure for your code or identity to
              be saved — because that infrastructure does not exist.
            </p>
          </section>
          <section>
            <h2 className="display-brand text-[24px] text-white">Your code runs in the embedded runtime</h2>
            <p className="mt-3">
              When you press Run, your code executes inside the embedded
              OneCompiler editor, a third-party service loaded in an iframe.
              Whatever you type, paste or run is subject to OneCompiler&apos;s
              own privacy policy and terms — review them at onecompiler.com
              before running sensitive code.
            </p>
          </section>
          <section>
            <h2 className="display-brand text-[24px] text-white">Hosting</h2>
            <p className="mt-3">
              The site is hosted on Vercel, which processes standard web logs
              (such as IP addresses and request metadata) to deliver pages.
              See Vercel&apos;s privacy policy for details.
            </p>
          </section>
          <section>
            <h2 className="display-brand text-[24px] text-white">Shared links</h2>
            <p className="mt-3">
              Playground share links encode run state in the URL itself. Anyone
              with the link can open that state — so never put secrets,
              passwords or personal data into shared code.
            </p>
          </section>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/terms" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            Read the terms <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/about" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            About the project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}

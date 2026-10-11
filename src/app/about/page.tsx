import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CREATOR_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "About CodeLab: a free, static online compiler built by Jay Jogane. No backend, no account needed — code runs in embedded runtimes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — CodeLab",
    description:
      "A free, static online compiler built by Jay Jogane. No backend, no account needed.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About — CodeLab",
          url: `${SITE_URL}/about`,
          mainEntity: {
            "@type": "Person",
            name: CREATOR_NAME,
            url: `${SITE_URL}/about`,
          },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ ABOUT ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Built by {CREATOR_NAME}. Free for learners.
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">
              What CodeLab is
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-ash">
              CodeLab is a static Next.js website that embeds a full code
              editor and runtime for 80+ programming languages. There is no
              CodeLab backend, database or account system: the page renders
              the editor chrome, and code execution happens inside the
              embedded runtime. It is released under the ISC License.
            </p>
          </section>
          <section className="rounded-marketing border border-hairline-soft bg-canvas-soft p-8">
            <h2 className="display-brand text-[24px] text-white">
              How it is built
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-ash">
              The frontend uses Next.js with the App Router, React, TypeScript
              and Tailwind CSS, with Inter and IBM Plex Mono typography. The
              compiler surface embeds OneCompiler&apos;s editor, which
              provides language runtimes, stdin handling and program output.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/compiler"
            className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand"
          >
            Open the compiler
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-11 items-center rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
          >
            Read the docs →
          </Link>
        </div>
      </div>
    </main>
  );
}

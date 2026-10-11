import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "CodeLab guides: run Python and JavaScript online, share code links and master stdin. Short, practical tutorials with zero setup.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — CodeLab",
    description: "Short, practical guides to running code online with zero setup.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CodeLab Blog",
          url: `${SITE_URL}/blog`,
          description: "Practical guides to running code online with CodeLab.",
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ BLOG ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Guides that run, not just read.
        </h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8"
            >
              <p className="font-mono text-[11px] text-mute uppercase">
                {p.date} · {p.intent}
              </p>
              <h2 className="display-brand mt-3 text-[24px] leading-[1.15] text-white">
                <Link href={`/blog/${p.slug}`} className="transition hover:text-brand">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
                {p.description}
              </p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-6 text-[13px] font-medium text-ash transition hover:text-white"
              >
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

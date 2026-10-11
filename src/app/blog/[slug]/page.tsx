import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} — CodeLab`,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            author: { "@type": "Person", name: "Jay Jogane" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <article className="mx-auto w-full max-w-[880px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />
        <p className="mt-8 font-mono text-[11px] text-mute uppercase">
          {post.date} · {post.intent}
        </p>
        <h1 className="display-brand mt-4 text-[38px] leading-[1.08] font-normal tracking-[-1.14px] text-white sm:text-[48px]">
          {post.title}
        </h1>
        <p className="mt-4 text-[18px] leading-[1.5] text-ash">{post.description}</p>

        {post.sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="display-brand text-[28px] text-white">{s.h}</h2>
            {s.ps.map((p, i) => (
              <p key={i} className="mt-3 text-[16px] leading-[1.65] text-ash">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section aria-label="Frequently asked questions" className="mt-12">
          <h2 className="display-brand text-[28px] text-white">FAQ</h2>
          <div className="mt-5 space-y-4">
            {post.faq.map((f) => (
              <details
                key={f.q}
                className="rounded-marketing border border-hairline-soft bg-canvas-soft p-5"
              >
                <summary className="cursor-pointer text-[16px] font-medium text-white">
                  {f.q}
                </summary>
                <p className="mt-2 text-[15px] leading-[1.5] text-ash">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <nav aria-label="Related" className="mt-12 rounded-marketing bg-canvas-soft p-8">
          <p className="font-mono text-[11px] text-mute uppercase">Keep going</p>
          <div className="mt-3 flex flex-col gap-2">
            {post.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-[16px] text-white underline decoration-mute underline-offset-4 transition hover:text-brand"
              >
                {r.label} →
              </Link>
            ))}
          </div>
        </nav>
      </article>
    </main>
  );
}

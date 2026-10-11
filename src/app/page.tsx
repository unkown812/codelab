import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CodeEditor from "@/components/CodeEditor";
import { SITE_URL } from "@/lib/seo";

const LANGUAGES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "C",
  "Go",
  "Rust",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
];

const FEATURES = [
  {
    eyebrow: "01 / INSTANT RUNTIME",
    title: "No setup. Just run.",
    body: "A full compiler in your browser. Pick a language, type, hit Run — output streams back in milliseconds.",
    href: "/features",
  },
  {
    eyebrow: "02 / 80+ LANGUAGES",
    title: "One tab for every stack",
    body: "Python to Rust to Java. Switch runtimes without losing code, stdin, or history.",
    href: "/languages",
  },
  {
    eyebrow: "03 / SHAREABLE",
    title: "Share code in one click",
    body: "Every run gets a link. Send snippets, repros, and assignments that open exactly where you left off.",
    href: "/docs",
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-canvas font-sans text-white antialiased">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CodeLab",
            alternateName: "CodeLab Online Compiler",
            url: `${SITE_URL}/`,
            description:
              "Free online compiler. Write, compile and run 80+ programming languages in the browser.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jay Jogane",
            url: `${SITE_URL}/about`,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "CodeLab",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web browser",
            url: `${SITE_URL}/`,
            description:
              "Free online compiler supporting Python, JavaScript, Java, C++, Go, Rust and 70+ more languages. No setup, no account.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
        ]}
      />
      {/* alert-banner */}
      <div className="flex w-full justify-center bg-surface-blue-bg px-6 py-2.5 text-center">
        <p className="text-[13px] leading-5 text-ink">
          <span className="mr-2 inline-block rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] text-white">
            NEW
          </span>
          Python 3.13, Node 24 and Java 21 runtimes are live —{" "}
          <Link href="/compiler" className="font-medium underline">
            try them in the compiler
          </Link>
          .
        </p>
      </div>

      <main className="flex w-full flex-col">
        {/* hero-display */}
        <section className="w-full bg-canvas px-6 pt-16 pb-12 md:pt-24">
          <div className="mx-auto w-full max-w-[1640px]">
            <p className="mono-eyebrow font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
              [ ONLINE COMPILER — 80+ LANGUAGES ]
            </p>
            <h1 className="display-brand mt-6 max-w-[16ch] text-[64px] leading-[0.95] font-normal tracking-[-1.92px] text-white sm:text-[80px] lg:text-[112px] lg:tracking-[-4.48px]">
              Code runs here. No setup.
            </h1>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <p className="display-brand max-w-[52ch] text-[18px] leading-[1.5] tracking-[-0.18px] text-ash">
                CodeLab is the fast, editorial-grade playground for writing,
                compiling and running code in your browser. Built for learners,
                interview prep, and teams that share repros daily.
              </p>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <Link
                  href="/compiler"
                  className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand"
                >
                  Start coding — free
                </Link>
                <Link
                  href="/features"
                  className="inline-flex h-9 items-center gap-1.5 rounded-app-md border border-hairline-soft bg-canvas-soft px-4 text-[13px] font-medium text-ash transition hover:text-white"
                >
                  See how it works <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* studio-window preview → full /compiler page */}
            <div className="mt-12 overflow-hidden rounded-app-lg border border-hairline-soft bg-canvas-soft">
              <div className="flex items-center justify-between border-b border-hairline-soft px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="rounded-app-sm bg-white/10 px-2.5 py-1 font-mono text-[11px] text-ash uppercase">
                    Python
                  </span>
                </div>
                <Link
                  href="/compiler"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-ash transition hover:text-white"
                >
                  Open full compiler <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
              <div className="h-[560px] bg-[#0f172a]">
                <CodeEditor
                  id="compiler"
                  title="Code Lab Compiler"
                  className="h-[560px]"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-hairline-soft/70 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="font-mono text-[11px] tracking-[0.08em] text-mute uppercase">
                Built for classrooms, bootcamps & interviews
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-ash">
                <span>Students</span>
                <span>Teachers</span>
                <span>Interview prep</span>
                <span>Study groups</span>
                <span>Dev teams</span>
              </div>
            </div>

            {/* AEO answer block — crawlable facts, not hidden behind JS */}
            <section
              aria-label="What is CodeLab"
              className="mt-10 grid gap-4 rounded-marketing border border-hairline-soft bg-canvas-soft/60 p-8 md:grid-cols-3"
            >
              <div>
                <h2 className="display-brand text-[20px] text-white">
                  What is CodeLab?
                </h2>
                <p className="mt-2 text-[15px] leading-[1.5] text-ash">
                  CodeLab is a free online compiler. It is a static web page
                  that embeds a full code editor and runtime for 80+
                  languages — you write code and run it without installing
                  anything.
                </p>
              </div>
              <div>
                <h2 className="display-brand text-[20px] text-white">
                  Who is it for?
                </h2>
                <p className="mt-2 text-[15px] leading-[1.5] text-ash">
                  Students learning their first language, candidates
                  practicing interviews, teachers running live demos, and
                  teams sharing quick reproductions. See{" "}
                  <Link href="/use-cases" className="underline hover:text-white">
                    use cases
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2 className="display-brand text-[20px] text-white">
                  Is it free?
                </h2>
                <p className="mt-2 text-[15px] leading-[1.5] text-ash">
                  Yes — the Playground is free with no account. Optional Pro
                  and Classroom plans add privacy, larger limits and teaching
                  tools. See{" "}
                  <Link href="/pricing" className="underline hover:text-white">
                    pricing
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* features preview */}
        <section className="w-full bg-canvas px-6 py-24">
          <div className="mx-auto w-full max-w-[1640px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[13px] text-mute uppercase">
                  [ WHY CODELAB ]
                </p>
                <h2 className="display-brand mt-4 max-w-[18ch] text-[48px] leading-[1.08] font-normal tracking-[-1.68px] text-white">
                  An editor that reads like a journal, runs like a tool.
                </h2>
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white"
              >
                All features <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8"
                >
                  <p className="font-mono text-[13px] text-mute">{f.eyebrow}</p>
                  <h3 className="display-brand mt-4 text-[24px] leading-[1.1] tracking-[-0.24px] text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ash">
                    {f.body}
                  </p>
                  <Link
                    href={f.href}
                    className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </article>
              ))}

              <article className="flex flex-col rounded-marketing bg-brand p-8 text-ink">
                <p className="font-mono text-[13px] text-ink/70">
                  04 / BUILT FOR SHARING
                </p>
                <h3 className="display-brand mt-4 text-[24px] leading-[1.1] tracking-[-0.24px]">
                  Paste. Run. Send the link.
                </h3>
                <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ink/85">
                  stdin, args and files travel with the URL. No screenshots,
                  no “works on my machine”.
                </p>
                <Link
                  href="/compiler"
                  className="mt-6 inline-flex h-11 w-fit items-center rounded-full bg-ink px-5 text-[16px] font-medium text-white transition hover:bg-canvas-soft"
                >
                  Try a sample run
                </Link>
              </article>
            </div>

            <div className="mt-16 rounded-marketing border border-hairline-soft bg-canvas-soft/60 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h3 className="display-brand text-[32px] leading-[1.13] tracking-[-0.32px] text-white">
                  80+ languages, one shortcut away
                </h3>
                <Link
                  href="/languages"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-ash transition hover:text-white"
                >
                  All languages <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-hairline-soft bg-canvas px-3.5 py-1.5 text-[13px] text-ash"
                  >
                    {l}
                  </span>
                ))}
                <Link
                  href="/languages"
                  className="rounded-full bg-canvas-light px-3.5 py-1.5 text-[13px] font-medium text-ink"
                >
                  +68 more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* pricing preview — polarity flip */}
        <section className="w-full bg-canvas-light px-6 py-24 text-ink">
          <div className="mx-auto w-full max-w-[1640px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[13px] tracking-[0.08em] text-slate-soft uppercase">
                  [ PRICING ]
                </p>
                <h2 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.08] font-normal tracking-[-1.68px]">
                  Free to start. Fair when you grow.
                </h2>
              </div>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-[16px] font-medium text-white transition hover:bg-graphite"
              >
                Compare plans
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { n: "Playground", p: "$0", d: "Trying ideas fast." },
                { n: "Pro", p: "$8/mo", d: "Living in the editor.", dark: true },
                { n: "Classroom", p: "Custom", d: "Teachers & teams." },
              ].map((t) => (
                <article
                  key={t.n}
                  className={`flex flex-col rounded-marketing p-8 ${
                    t.dark
                      ? "bg-ink text-white"
                      : "border border-hairline bg-white"
                  }`}
                >
                  <h3 className="display-brand text-[32px]">{t.n}</h3>
                  <p className={`mt-1 text-[16px] ${t.dark ? "text-ash" : "text-ink-soft/75"}`}>
                    {t.d}
                  </p>
                  <p className="display-brand mt-4 text-[48px]">{t.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section className="w-full bg-canvas px-6 py-24">
          <div className="mx-auto flex w-full max-w-[1640px] flex-col justify-center rounded-marketing bg-canvas-soft p-10 lg:p-12">
            <p className="font-mono text-[13px] text-mute">
              05 / START IN 10 SECONDS
            </p>
            <h2 className="display-brand mt-3 text-[48px] leading-[1.08] font-normal tracking-[-1.68px] text-white">
              Paste your first program.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/compiler"
                className="inline-flex h-11 items-center rounded-full bg-brand px-6 text-[16px] font-medium text-ink transition hover:bg-canvas-light"
              >
                Open the compiler
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
              >
                Read the docs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
              >
                Guides <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-mute">
              <Link href="/use-cases/students" className="transition hover:text-white">
                For students
              </Link>
              <Link href="/use-cases/teachers" className="transition hover:text-white">
                For teachers
              </Link>
              <Link href="/use-cases/interviews" className="transition hover:text-white">
                For interview prep
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About CodeLab
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

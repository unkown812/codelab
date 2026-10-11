import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "CodeLab docs: 10-second quickstart, stdin and sharing guide, run limits and answers for students, teachers and interview prep.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Docs — CodeLab",
    description:
      "Quickstart, sharing, stdin and classroom guides for the CodeLab compiler.",
    url: "/docs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Docs — CodeLab",
    description:
      "Quickstart, sharing, stdin and classroom guides for the CodeLab compiler.",
  },
};

const STEPS = [
  {
    n: "01",
    title: "Pick a runtime",
    body: "Open /compiler and choose from 80+ languages in the picker. Your code, stdin and args persist per language.",
  },
  {
    n: "02",
    title: "Write + Run",
    body: "Type in the editor, add stdin if your program reads input, then hit Run. Output streams back with exit code and timing.",
  },
  {
    n: "03",
    title: "Share the link",
    body: "Copy the URL — it encodes language, code and inputs. Reviewers open your exact state. No screenshots needed.",
  },
];

const FAQS = [
  {
    q: "Do I need an account?",
    a: "No. The playground runs anonymously. Accounts unlock saving, history and larger limits on Pro and Classroom.",
  },
  {
    q: "How do stdin and args work?",
    a: "Use the stdin panel for piped input and the args field for CLI arguments. Both travel with shared links.",
  },
  {
    q: "Can I embed CodeLab in my course or blog?",
    a: "Yes. Use the /compiler URL in an iframe, or talk to us about Classroom embeds with rosters and assignments.",
  },
  {
    q: "What are the run limits?",
    a: "Playground runs cap at ~10s. Pro raises timeouts and file sizes; Classroom raises them further with priority queuing.",
  },
];

export default function DocsPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to run code on CodeLab",
            description:
              "Run any supported language on CodeLab in three steps.",
            step: STEPS.map((s) => ({
              "@type": "HowToStep",
              name: s.title,
              text: s.body,
            })),
          },
        ]}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Docs", href: "/docs" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ DOCS ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Start in 10 seconds.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          The shortest path from zero to a running program — plus answers to
          the questions every new user asks.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="flex flex-col rounded-marketing border border-hairline-soft bg-canvas-soft p-8"
            >
              <p className="font-mono text-[13px] text-mute">{s.n}</p>
              <h2 className="display-brand mt-3 text-[24px] text-white">{s.title}</h2>
              <p className="mt-3 text-[16px] leading-[1.5] text-ash">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {FAQS.map((f) => (
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
          <div className="flex flex-col justify-center rounded-marketing bg-canvas-soft p-10">
            <p className="font-mono text-[13px] text-mute">TRY IT LIVE</p>
            <h2 className="display-brand mt-3 text-[38px] leading-[1.1] tracking-[-1.14px] text-white">
              Paste your first program.
            </h2>
            <p className="mt-3 text-[16px] text-ash">
              No install, no config, no credit card.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/compiler"
                className="inline-flex h-11 items-center rounded-full bg-brand px-6 text-[16px] font-medium text-ink transition hover:bg-canvas-light"
              >
                Open the compiler
              </Link>
              <Link
                href="/languages"
                className="inline-flex h-11 items-center rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
              >
                Browse languages →
              </Link>
            </div>
          </div>
        </div>

        <section aria-label="Further reading" className="mt-12 rounded-marketing border border-hairline-soft bg-canvas-soft/60 p-8">
          <h2 className="display-brand text-[24px] text-white">Further reading</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { label: "How to run Python online without installing anything", href: "/blog/run-python-online-no-install" },
              { label: "Stdin in an online compiler: how piped input works", href: "/blog/stdin-guide-online-compiler" },
              { label: "Run Python online guide", href: "/languages/python" },
              { label: "Online compiler vs local IDE", href: "/compare/online-compiler-vs-local-ide" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] text-ash underline decoration-mute underline-offset-4 transition hover:text-white">
                {l.label} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {
  LANGUAGE_META,
  LANGUAGE_SLUGS,
  type LanguageSlug,
} from "@/lib/seo";

const SAMPLES: Record<LanguageSlug, string> = {
  python: `name = input("Your name: ")\nprint(f"Hello, {name}!")\n\ntotal = sum(range(1, 101))\nprint(f"Sum 1..100 = {total}")`,
  javascript: `const name = "CodeLab";\nconsole.log(\`Hello, \${name}!\`);\n\nconst total = Array.from({ length: 100 }, (_, i) => i + 1)\n  .reduce((a, b) => a + b, 0);\nconsole.log("Sum 1..100 =", total);`,
  typescript: `function greet(name: string): string {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet("CodeLab"));`,
  java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Your name: ");\n        System.out.println("Hello, " + sc.nextLine() + "!");\n    }\n}`,
  cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    string name;\n    cout << "Your name: ";\n    getline(cin, name);\n    cout << "Hello, " << name << "!\\n";\n    return 0;\n}`,
  c: `#include <stdio.h>\n\nint main(void) {\n    char name[64];\n    printf("Your name: ");\n    scanf("%63s", name);\n    printf("Hello, %s!\\n", name);\n    return 0;\n}`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n    var name string\n    fmt.Print("Your name: ")\n    fmt.Scanln(&name)\n    fmt.Printf("Hello, %s!\\n", name)\n}`,
  rust: `use std::io;\n\nfn main() {\n    let mut name = String::new();\n    println!("Your name:");\n    io::stdin().read_line(&mut name).unwrap();\n    println!("Hello, {}!", name.trim());\n}`,
  ruby: `print "Your name: "\nname = gets.chomp\nputs "Hello, #{name}!"`,
  php: `<?php\n$name = readline("Your name: ");\necho "Hello, $name!\\n";`,
  swift: `print("Your name:", terminator: " ")\nif let name = readLine() {\n    print("Hello, \\(name)!")\n}`,
  kotlin: `fun main() {\n    print("Your name: ")\n    val name = readLine() ?: "coder"\n    println("Hello, $name!")\n}`,
};

const RELATED: Record<LanguageSlug, LanguageSlug[]> = {
  python: ["javascript", "java", "go"],
  javascript: ["typescript", "python", "java"],
  typescript: ["javascript", "python", "java"],
  java: ["kotlin", "python", "cpp"],
  cpp: ["c", "java", "rust"],
  c: ["cpp", "rust", "go"],
  go: ["rust", "python", "c"],
  rust: ["go", "cpp", "c"],
  ruby: ["python", "php", "javascript"],
  php: ["ruby", "javascript", "python"],
  swift: ["kotlin", "java", "javascript"],
  kotlin: ["java", "swift", "python"],
};

export function generateStaticParams() {
  return LANGUAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = LANGUAGE_META[slug as LanguageSlug];
  if (!meta) return {};
  return {
    title: `Run ${meta.label} online`,
    description: `${meta.blurb} Free ${meta.runtime} runtime in your browser — paste code and press Run.`,
    alternates: { canonical: `/languages/${slug}` },
    openGraph: {
      title: `Run ${meta.label} online — CodeLab`,
      description: meta.blurb,
      url: `/languages/${slug}`,
      type: "article",
    },
  };
}

export default async function LanguageGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = LANGUAGE_META[slug as LanguageSlug];
  if (!meta) notFound();
  const sample = SAMPLES[slug as LanguageSlug];
  const related = RELATED[slug as LanguageSlug];
  const faqs = [
    {
      q: `Do I need to install ${meta.label} to use this?`,
      a: `No. The ${meta.runtime} runtime runs in your browser via CodeLab's embedded editor. Open the compiler, pick ${meta.label}, and press Run.`,
    },
    {
      q: `Is running ${meta.label} online free?`,
      a: `Yes. The CodeLab Playground is free with no account. Optional paid plans add privacy and larger limits — see the pricing page.`,
    },
    {
      q: `How do I handle input in ${meta.label}?`,
      a: `Use the stdin panel inside the editor for piped input, then press Run. The sample below reads a name from stdin.`,
    },
  ];

  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How to run ${meta.label} online`,
            description: meta.blurb,
            step: [
              {
                "@type": "HowToStep",
                name: `Open the ${meta.label} runtime`,
                text: `Open the CodeLab compiler and select ${meta.label} (${meta.runtime}).`,
              },
              {
                "@type": "HowToStep",
                name: "Paste your program",
                text: "Copy the sample below or type your own code into the editor.",
              },
              {
                "@type": "HowToStep",
                name: "Run it",
                text: "Press Run. Output and errors appear in the result pane.",
              },
            ],
          },
        ]}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Languages", href: "/languages" },
            { label: meta.label, href: `/languages/${slug}` },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ LANGUAGE — {meta.runtime.toUpperCase()} ]
        </p>
        <h1 className="display-brand mt-4 max-w-[18ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          Run {meta.label} online. No install.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          {meta.blurb}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section
            aria-label={`${meta.label} sample program`}
            className="overflow-hidden rounded-marketing border border-hairline-soft bg-canvas-soft"
          >
            <p className="border-b border-hairline-soft px-6 py-3 font-mono text-[11px] text-mute uppercase">
              Sample — copy into the compiler
            </p>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-[1.7] text-white">
              <code>{sample}</code>
            </pre>
          </section>
          <section aria-label="Steps" className="flex flex-col gap-4">
            {[
              { h: `1. Open the ${meta.label} runtime`, p: `Go to the compiler and select ${meta.label}. Your code persists per language.` },
              { h: "2. Paste and add input", p: "Copy the sample or type your own. Fill stdin if the program reads input." },
              { h: "3. Run and share", p: "Press Run in the editor, then copy the page URL to share your exact state." },
            ].map((s) => (
              <div key={s.h} className="rounded-marketing border border-hairline-soft bg-canvas-soft p-6">
                <h2 className="display-brand text-[20px] text-white">{s.h}</h2>
                <p className="mt-2 text-[15px] leading-[1.5] text-ash">{s.p}</p>
              </div>
            ))}
            <Link
              href="/compiler"
              className="inline-flex h-11 w-fit items-center rounded-full bg-brand px-6 text-[16px] font-medium text-ink transition hover:bg-canvas-light"
            >
              Run {meta.label} now
            </Link>
          </section>
        </div>

        <section aria-label="Frequently asked questions" className="mt-12">
          <h2 className="display-brand text-[32px] text-white">
            {meta.label} FAQ
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
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

        <section aria-label="Related languages" className="mt-12">
          <h2 className="display-brand text-[24px] text-white">
            Keep exploring
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r}
                href={`/languages/${r}`}
                className="rounded-full border border-hairline-soft bg-canvas-soft px-4 py-2 text-[13px] text-ash transition hover:text-white"
              >
                Run {LANGUAGE_META[r].label} online →
              </Link>
            ))}
            <Link
              href="/languages"
              className="rounded-full bg-canvas-light px-4 py-2 text-[13px] font-medium text-ink"
            >
              All languages
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

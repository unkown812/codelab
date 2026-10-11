"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const ALL = [
  { name: "Python", tag: "Most popular", hot: true },
  { name: "JavaScript", tag: "Node 24", hot: true },
  { name: "TypeScript", tag: "Strict", hot: true },
  { name: "Java", tag: "Java 21", hot: true },
  { name: "C++", tag: "GCC 14", hot: false },
  { name: "C", tag: "GCC 14", hot: false },
  { name: "Go", tag: "1.23", hot: false },
  { name: "Rust", tag: "1.82", hot: false },
  { name: "Ruby", tag: "3.3", hot: false },
  { name: "PHP", tag: "8.4", hot: false },
  { name: "Swift", tag: "6.0", hot: false },
  { name: "Kotlin", tag: "2.0", hot: false },
  { name: "C#", tag: ".NET 9", hot: false },
  { name: "R", tag: "4.4", hot: false },
  { name: "Scala", tag: "3.5", hot: false },
  { name: "Dart", tag: "3.5", hot: false },
];

export default function LanguagesPage() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return ALL;
    return ALL.filter((l) => l.name.toLowerCase().includes(needle));
  }, [q]);

  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1640px]">
        <p className="font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ LANGUAGES ]
        </p>
        <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          80+ languages, one shortcut away.
        </h1>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[52ch] text-[18px] leading-[1.5] text-ash">
            The twelve below are pinned. Search to filter, then jump straight
            into the compiler with that runtime selected.
          </p>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search languages…"
            aria-label="Search languages"
            className="h-11 w-full max-w-72 rounded-app-xs border border-ink-soft bg-canvas px-4 text-[16px] text-white placeholder:text-mute focus:border-link-blue-soft focus:outline-none"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((l) => (
            <Link
              key={l.name}
              href={`/compiler`}
              className="group flex items-center justify-between rounded-marketing border border-hairline-soft bg-canvas-soft p-5 transition hover:border-ash/50"
            >
              <div>
                <p className="display-brand text-[20px] text-white">{l.name}</p>
                <p className="mt-1 font-mono text-[11px] text-mute uppercase">
                  {l.tag}
                </p>
              </div>
              <span className="text-[13px] text-ash transition group-hover:text-white">
                Open →
              </span>
            </Link>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-8 rounded-marketing border border-hairline-soft bg-canvas-soft p-6 text-[16px] text-ash">
            No match for “{q}” in the pinned list — the full 80+ runtime index
            is available inside the compiler language picker.
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/compiler"
            className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand"
          >
            Start coding — free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white"
          >
            Compare plans →
          </Link>
        </div>
      </div>
    </main>
  );
}

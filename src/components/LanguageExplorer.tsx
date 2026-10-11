"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LANGUAGE_META, LANGUAGE_SLUGS } from "@/lib/seo";

export default function LanguageExplorer() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const all = LANGUAGE_SLUGS.map((s) => ({
      slug: s,
      ...LANGUAGE_META[s],
    }));
    if (!needle) return all;
    return all.filter((l) => l.label.toLowerCase().includes(needle));
  }, [q]);

  return (
    <div>
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[52ch] text-[18px] leading-[1.5] text-ash">
          The twelve below are pinned. Search to filter, then open a dedicated
          guide for that language — each with a sample program and answers.
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
            key={l.slug}
            href={`/languages/${l.slug}`}
            className="group flex items-center justify-between rounded-marketing border border-hairline-soft bg-canvas-soft p-5 transition hover:border-ash/50"
          >
            <div>
              <p className="display-brand text-[20px] text-white">{l.label}</p>
              <p className="mt-1 font-mono text-[11px] text-mute uppercase">
                {l.runtime}
              </p>
            </div>
            <span className="text-[13px] text-ash transition group-hover:text-white">
              Guide →
            </span>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-8 rounded-marketing border border-hairline-soft bg-canvas-soft p-6 text-[16px] text-ash">
          No match for “{q}” in the pinned list — the full 80+ runtime index is
          available inside the{" "}
          <Link href="/compiler" className="underline hover:text-white">
            compiler language picker
          </Link>
          .
        </p>
      )}
    </div>
  );
}

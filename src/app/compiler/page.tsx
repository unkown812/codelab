"use client";

import Link from "next/link";
import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";

const QUICK = ["python", "javascript", "typescript", "java", "c", "cpp", "go", "rust"];

export default function CompilerPage() {
  const [language, setLanguage] = useState("python");

  return (
    <main className="w-full bg-canvas px-6 py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1640px]">
        <p className="font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ COMPILER ]
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display-brand max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white">
            The playground. Full height.
          </h1>
          <Link
            href="/docs"
            className="text-[13px] font-medium text-ash transition hover:text-white"
          >
            New here? Read the 10-second quickstart →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {QUICK.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLanguage(l)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[12px] uppercase transition ${
                language === l
                  ? "bg-canvas-light font-medium text-ink"
                  : "border border-hairline-soft bg-canvas text-ash hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
          <Link
            href="/languages"
            className="rounded-full border border-dashed border-hairline-soft px-3.5 py-1.5 font-mono text-[12px] text-mute uppercase transition hover:text-white"
          >
            +68 more
          </Link>
        </div>

        <div className="mt-6 overflow-hidden rounded-app-lg border border-hairline-soft bg-canvas-soft">
          <div className="flex items-center justify-between border-b border-hairline-soft px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="rounded-app-sm bg-white/10 px-2.5 py-1 font-mono text-[11px] text-ash uppercase">
                {language}
              </span>
            </div>
            <p className="hidden font-mono text-[11px] text-mute sm:block">
              codelab / compiler — ready
            </p>
          </div>
          <div className="h-[72vh] min-h-[480px] bg-[#0f172a]">
            <CodeEditor
              key={language}
              language={language}
              title={`CodeLab — ${language}`}
              className="h-[72vh] min-h-[480px]"
            />
          </div>
        </div>

        <p className="mt-4 font-mono text-[11px] text-mute">
          TIP — stdin, args and files persist per language. Copy the page URL to
          share this exact state.
        </p>
      </div>
    </main>
  );
}

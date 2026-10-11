"use client";

import Link from "next/link";
import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";

const QUICK = ["python", "javascript", "typescript", "java", "c", "cpp", "go", "rust"];

export default function CompilerView() {
  const [language, setLanguage] = useState("python");

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose a runtime">
        {QUICK.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLanguage(l)}
            aria-pressed={language === l}
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
    </div>
  );
}

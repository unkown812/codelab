import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center bg-canvas px-6 py-24 text-center">
      <p className="font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
        [ 404 — PAGE NOT FOUND ]
      </p>
      <h1 className="display-brand mt-4 max-w-[16ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px]">
        This page doesn&apos;t compile.
      </h1>
      <p className="mt-6 max-w-[48ch] text-[18px] leading-[1.5] text-ash">
        The URL you opened doesn&apos;t match any CodeLab page. Head home, open
        the compiler, or browse the docs.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand"
        >
          Go home
        </Link>
        <Link
          href="/compiler"
          className="inline-flex h-11 items-center rounded-full border border-hairline-soft bg-canvas-soft px-6 text-[16px] font-medium text-white transition hover:border-ash/60"
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
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Languages", href: "/languages" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Compiler", href: "/compiler" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-hairline-soft/60 bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1640px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="CodeLab home">
          <Image
            src="/favicon.png"
            alt="CodeLab logo"
            width={28}
            height={28}
            className="h-7 w-7 rounded-[6px]"
            priority
          />
          <span className="display-brand text-[20px] font-normal tracking-[-0.2px] text-white">
            CodeLab
          </span>
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-brand"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`rounded-full px-3 py-2 text-[16px] transition hover:bg-white/10 hover:text-white ${
                  active ? "bg-white/10 text-white" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/pricing"
            className="hidden text-[13px] font-medium text-ash transition hover:text-white sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-app-md border border-hairline-soft bg-canvas-soft px-3 text-[13px] font-medium text-ash transition hover:text-white md:inline-flex"
          >
            Book a Demo
          </Link>
          <Link
            href="/compiler"
            className="inline-flex h-11 items-center rounded-full bg-canvas-light px-5 text-[16px] font-medium text-ink transition hover:bg-brand"
          >
            Get Started Free
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-soft text-white lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="absolute top-16 right-0 left-0 border-b border-hairline-soft bg-canvas px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-app-md px-3 py-2.5 text-[16px] text-white/90 transition hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

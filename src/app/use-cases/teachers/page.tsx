import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CodeLab for teachers",
  description:
    "Teachers: demo code live and give every student the same runtime in one click. No installs, no version drift, shareable assignment links.",
  alternates: { canonical: "/use-cases/teachers" },
};

export default function TeachersPage() {
  return (
    <main className="w-full bg-canvas px-6 py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "CodeLab for teachers",
          url: `${SITE_URL}/use-cases/teachers`,
          isPartOf: { "@type": "WebSite", name: "CodeLab", url: SITE_URL },
        }}
      />
      <div className="mx-auto w-full max-w-[1640px]">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Use cases", href: "/use-cases" },
            { label: "Teachers", href: "/use-cases/teachers" },
          ]}
        />
        <p className="mt-8 font-mono text-[13px] tracking-[0.08em] text-mute uppercase">
          [ USE CASE — TEACHERS ]
        </p>
        <h1 className="display-brand mt-4 max-w-[18ch] text-[48px] leading-[1.05] font-normal tracking-[-1.68px] text-white sm:text-[72px] sm:tracking-[-2.88px]">
          One link. Every student runs it.
        </h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-ash">
          Skip the lab-setup week. Share a compiler link and the whole room
          runs identical runtimes — then collect their solution links back.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { h: "1. Demo live", p: "Project the compiler during lectures. Switch runtimes without reinstalling anything." },
            { h: "2. Assign by link", p: "Send one starter link per exercise. Students fork it by editing and re-sharing." },
            { h: "3. Review fast", p: "Open each submission link to see exact code and inputs — no screenshots to decode." },
          ].map((s) => (
            <div key={s.h} className="rounded-marketing border border-hairline-soft bg-canvas-soft p-6">
              <h2 className="display-brand text-[20px] text-white">{s.h}</h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-ash">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compiler" className="inline-flex h-11 items-center rounded-full bg-canvas-light px-6 text-[16px] font-medium text-ink transition hover:bg-brand">
            Try a classroom demo
          </Link>
          <Link href="/pricing" className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium text-ash transition hover:text-white">
            Classroom plans <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

const COLS: { h: string; links: { label: string; href: string }[] }[] = [
  {
    h: "PRODUCT",
    links: [
      { label: "Playground", href: "/compiler" },
      { label: "Languages", href: "/languages" },
      { label: "Pricing", href: "/pricing" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    h: "SOLUTIONS",
    links: [
      { label: "Students", href: "/features" },
      { label: "Teachers", href: "/pricing" },
      { label: "Interviews", href: "/features" },
      { label: "Teams", href: "/pricing" },
    ],
  },
  {
    h: "RESOURCES",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Compiler", href: "/compiler" },
      { label: "Samples", href: "/languages" },
      { label: "Home", href: "/" },
    ],
  },
  {
    h: "CUSTOMERS",
    links: [
      { label: "Classrooms", href: "/pricing" },
      { label: "Bootcamps", href: "/features" },
      { label: "Clubs", href: "/features" },
      { label: "Stories", href: "/docs" },
    ],
  },
  {
    h: "COMPANY",
    links: [
      { label: "About", href: "/docs" },
      { label: "Contact", href: "/docs" },
      { label: "Privacy", href: "/docs" },
      { label: "Terms", href: "/docs" },
    ],
  },
  {
    h: "COMPARE",
    links: [
      { label: "All languages", href: "/languages" },
      { label: "Pro vs Free", href: "/pricing" },
      { label: "FAQ", href: "/docs" },
      { label: "Start coding", href: "/compiler" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-canvas px-6 pt-16 pb-8">
      <div className="mx-auto w-full max-w-[1640px]">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          {COLS.map((col) => (
            <div key={col.h}>
              <p className="font-mono text-[11px] tracking-[0.08em] text-mute uppercase">
                {col.h}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-ash transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-hairline-soft/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-mute">
            © 2026 Jay Jogane — ISC License. Built for learners.
          </p>
          <Link href="/" className="flex items-center gap-2" aria-label="CodeLab home">
            <Image
              src="/favicon.png"
              alt="CodeLab logo"
              width={22}
              height={22}
              className="h-[22px] w-[22px] rounded-[5px]"
            />
            <span className="display-brand text-[18px] text-white">CodeLab</span>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

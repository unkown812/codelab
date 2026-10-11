import Link from "next/link";
import { canonical } from "@/lib/seo";
import JsonLd from "./JsonLd";

export default function Breadcrumbs({
  trail,
}: {
  trail: { label: string; href: string }[];
}) {
  const items = trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.label,
    item: canonical(t.href),
  }));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items,
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.06em] uppercase">
          {trail.map((t, i) => (
            <li key={t.href} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-mute">
                  /
                </span>
              )}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-ash">
                  {t.label}
                </span>
              ) : (
                <Link
                  href={t.href}
                  className="text-mute transition hover:text-white"
                >
                  {t.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

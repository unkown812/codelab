import type { MetadataRoute } from "next";
import { LANGUAGE_SLUGS, SITE_URL } from "@/lib/seo";

const BLOG_SLUGS = [
  "run-python-online-no-install",
  "share-code-run-link",
  "run-javascript-online-node",
  "stdin-guide-online-compiler",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/compiler", priority: 0.9, changeFrequency: "weekly" },
    { path: "/features", priority: 0.8, changeFrequency: "monthly" },
    { path: "/languages", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/docs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/use-cases", priority: 0.7, changeFrequency: "monthly" },
    { path: "/use-cases/students", priority: 0.6, changeFrequency: "monthly" },
    { path: "/use-cases/teachers", priority: 0.6, changeFrequency: "monthly" },
    { path: "/use-cases/interviews", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
    { path: "/compare/online-compiler-vs-local-ide", priority: 0.6, changeFrequency: "monthly" },
  ];

  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...LANGUAGE_SLUGS.map((s) => ({
      url: `${SITE_URL}/languages/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...BLOG_SLUGS.map((s) => ({
      url: `${SITE_URL}/blog/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

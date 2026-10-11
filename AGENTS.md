<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CodeLab — Agent Instructions

## Project Overview

CodeLab is a **static, zero-backend online compiler shell** (Next.js App Router).
`src/app/page.tsx` + routes render marketing/content pages; `CodeEditor`
(`src/components/CodeEditor.tsx`) embeds the real editor/runner via an
**OneCompiler iframe** (`https://onecompiler.com/embed`). No API routes, no
database, no auth, no state store — user code never touches CodeLab servers.
See `README.md` for the full picture and `DESIGN.md` before writing any UI.

## Repository Structure

```text
src/app/            Routes: /, /compiler, /features, /languages (+[slug]),
                    /pricing, /docs, /blog (+[slug]), /use-cases (+3 slugs),
                    /compare (+1), /about, /contact, /privacy, /terms,
                    plus robots.ts, sitemap.ts, manifest.ts, not-found.tsx
src/components/     Navbar, Footer, CodeEditor, CompilerView (client),
                    LanguageExplorer (client), Breadcrumbs, JsonLd
src/lib/            seo.ts (canonical site config), posts.ts (blog data)
public/             favicon.png, favicon.ico (only assets)
documents/          LaTeX print suite (may lag current routes; don't duplicate)
```

## Technology Stack

Next.js 16 (App Router, `cacheComponents`) + React 19 + TypeScript 5 strict +
Tailwind CSS 4 + `lucide-react` icons + `next/font` (Inter, IBM Plex Mono).
Package manager: **npm** (`package-lock.json`). No test runner, no Docker.

## Development Setup

```bash
npm install
npm run dev      # http://localhost:3000
```

No env vars, no services, no DB. Node 22+ recommended (unpinned — see README).

## Common Commands

| Command         | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Local dev server                                     |
| `npm run build` | Production build (includes typecheck; must pass)     |
| `npm start`     | Serve the production build                           |
| `npm run lint`  | ESLint (must pass; zero warnings is the bar)         |
| `npx next typegen` | Regenerate route types (`LayoutProps`/`PageProps`) |

## Architecture Notes

- **Server Components by default.** `CompilerView` and `LanguageExplorer`
  are the only client islands (they hold `useState`). Keep it that way; new
  interactivity goes in small client components, pages stay server-rendered
  with `metadata` exports (required for SEO — never convert a page to
  `"use client"`).
- **SEO is load-bearing.** Every route needs `title`, `description`,
  `alternates.canonical`; JSON-LD via `<JsonLd>`; internal links over
  generic anchors. `src/app/sitemap.ts` must list every new indexable route.
- **Content data lives in `src/lib/`** (`seo.ts` language metadata,
  `posts.ts` blog posts). New programmatic pages extend these, not ad-hoc JSX.
- **OneCompiler contract:** all embed behavior flows through
  `buildOneCompilerSrc()` props (`language`, `codeId`, `theme`, hide-flags)
  or a full `src` override. Don't add backend/auth/DB without a design doc.

## Coding Conventions

- Tailwind utilities; design tokens in `src/app/globals.css` (`@theme`).
  Never hardcode `#0b0b0b` / `#f36458` — use `bg-canvas`, `bg-brand`, etc.
- Icons: `lucide-react` only (`ArrowRight`/`ArrowDown` for link arrows),
  always `aria-hidden="true"`, sized to text (`h-3`/`h-3.5`/`h-4`).
- 2-space indent, LF endings, final newline (see `.editorconfig`).
- Keep `LayoutProps<"/">` / `PageProps` generics; run `next typegen` if
  route types go stale.
- Don't invent stats, testimonials, customers, or offers in content or schema.

## Testing & Definition of Done

No test suite exists. For every change: `npm run lint` clean,
`npx tsc --noEmit` clean, `npm run build` passes. Never claim verification
you didn't run. Done = requirements met, nothing else broken, diff reviewed,
docs (README/this file) updated if behavior or routes changed.

## Security & Git

Never commit secrets (repo has none; keep it that way), don't log user data,
validate untrusted input. Focused diffs only; never `git push --force` or
history rewrites; `LICENSE` (ISC, Jay Jogane) terms must not change.

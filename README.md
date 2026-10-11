<h1 align="center">
  <img src="./public/favicon.png" width="48" height="48" alt="CodeLab logo" />
  <br />
  CodeLab — Online Compiler
</h1>

<p align="center">
  Write, compile and run 80+ languages in your browser. Zero backend, zero setup.<br />
  <a href="https://code--lab.vercel.app/">Live demo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4.0-black?logo=next.js" alt="Next.js 16.4.0" />
  <img src="https://img.shields.io/badge/React-19.3.0-61DAFB?logo=react&logoColor=black" alt="React 19.3.0" />
  <img src="https://img.shields.io/badge/TypeScript-5_strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5 strict" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/editor-OneCompiler_embed-6366F1" alt="OneCompiler embed" />
  <img src="https://img.shields.io/badge/backend-none-lightgrey" alt="No backend" />
</p>

---

## What is CodeLab?

CodeLab is a **static, zero-backend online compiler shell** built with the
Next.js App Router:

1. **Content + marketing routes** (`src/app/`) explain the product and guide
   users — home, compiler, features, languages, pricing, docs, blog,
   use-cases, comparisons, and legal pages.
2. **`CodeEditor`** (`src/components/CodeEditor.tsx`) renders the editor
   chrome and embeds the real editor/runner in an
   `<iframe id="onecompiler">`.
3. **OneCompiler does all execution** — editing, compiling, running. CodeLab
   servers never see user code. There are no API routes, no database, no
   auth, and no state store in this repository.

## Routes

| Route | Purpose |
|---|---|
| `/` | Landing page with live playground preview |
| `/compiler` | Full-height playground with runtime switcher |
| `/features` | Product capabilities |
| `/languages` + `/languages/[slug]` (×12) | Runtime index + per-language guides |
| `/pricing` | Playground / Pro / Classroom tiers |
| `/docs` | Quickstart, FAQ, further reading |
| `/blog` + `/blog/[slug]` (×4) | Practical guides |
| `/use-cases` (+ students, teachers, interviews) | Audience workflows |
| `/compare` (+ online-compiler-vs-local-ide) | Honest comparisons |
| `/about`, `/contact`, `/privacy`, `/terms` | Project info + legal |

Every indexable route is listed in `src/app/sitemap.ts`, served with
canonical URLs, Open Graph metadata, JSON-LD structured data, and
breadcrumbs.

## Tech Stack

| Category | Technology | Evidence |
|---|---|---|
| Framework | Next.js 16.4 (App Router, `cacheComponents`) | `package.json`, `next.config.ts` |
| UI runtime | React 19.3 | `package.json` |
| Language | TypeScript 5, strict | `tsconfig.json` |
| Styling | Tailwind CSS 4 | `src/app/globals.css` (`@import "tailwindcss"`) |
| Icons | `lucide-react` | `package.json` |
| Fonts | Inter + IBM Plex Mono via `next/font` | `src/app/layout.tsx` |
| Embed | OneCompiler iframe | `src/components/CodeEditor.tsx` |
| Lint | ESLint 9 + `eslint-config-next` | `eslint.config.mjs` |

**Explicitly absent** (verified by file search): backend/API routes,
database/ORM, auth, test runner, Docker, CI workflows (see
[Recommended Next Steps](#recommended-next-steps)), `.env` configuration.

## Repository Structure

```text
src/app/            Routes (see table above) + robots.ts, sitemap.ts,
                    manifest.ts, not-found.tsx, layout.tsx, globals.css
src/components/     Navbar, Footer, CodeEditor, CompilerView (client),
                    LanguageExplorer (client), Breadcrumbs, JsonLd
src/lib/            seo.ts (canonical site config), posts.ts (blog data)
public/             favicon.png, favicon.ico (only assets)
documents/          LaTeX print suite (may lag current routes)
DESIGN.md           Sanity-inspired design tokens (source of truth for UI)
AGENTS.md           Contributor + AI-agent instructions
```

## Getting Started

Prerequisites: **Node.js + npm** (version unpinned — Node 22+ recommended).

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # must pass with zero warnings
npm run build    # production build + typecheck; must pass
npm start        # serve the production build
npx next typegen # regenerate route types if LayoutProps/PageProps go stale
```

No environment variables, services, or database setup. There is no test
suite; see [Recommended Next Steps](#recommended-next-steps).

## Embed URL Contract

All embed behavior flows through `buildOneCompilerSrc()` in
`src/components/CodeEditor.tsx`:

```text
https://onecompiler.com/embed[/<language>[/<codeId>]]?theme=<dark|light>&fontSize=<8-32>&<flag>=true...
```

```tsx
<CodeEditor language="python" title="Python Playground" />
<CodeEditor language="javascript" codeId="3wyne344h" />
<CodeEditor src="https://onecompiler.com/embed/python/..." />  // full override
```

Props: `language`, `codeId`, `theme`, `fontSize` (clamped 8–32), hide-flags
(`hideTitle` defaults true), `disableCopyPaste`/`disableAutoComplete`,
`availableLanguages`/`codeChangeEvent`/`listenToEvents`. See the in-app
`/docs` page for the user-facing guide.

## Design System

UI follows [`DESIGN.md`](./DESIGN.md): dark-first editorial surface
(`bg-canvas` `#0b0b0b`), single coral accent (`bg-brand` `#f36458`), tight
display type (Inter standing in for waldenburgNormal), IBM Plex Mono for
eyebrows only, pill CTAs + sharp app radii. Never hardcode hex tokens in
components — use the `@theme` tokens in `src/app/globals.css`.

## Security Notes

- Static pages + third-party iframe; no secrets exist in this repo (keep it
  that way — see [`SECURITY.md`](./SECURITY.md)).
- `CodeEditor` strips `/` from `language`/`codeId` before URL interpolation.
- Iframe permission is limited to `clipboard-read; clipboard-write`.
- User code executes on OneCompiler infrastructure, never on CodeLab hosts.
- Never put secrets or personal data into shared run links (they encode
  state in the URL).

## Documentation Suite (`documents/`)

`documents/` holds a LaTeX print suite (`README.md` index, 22 section
files, Mermaid diagrams). It may lag the current routes — treat `src/` as
the source of truth and don't duplicate content between the two.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) and [`AGENTS.md`](./AGENTS.md).
Focused diffs only; `npm run lint` + `npm run build` must pass before a PR.

## Recommended Next Steps

Honest gaps, not roadmap promises:

- No test suite — `buildOneCompilerSrc()` unit tests + `/` smoke test would
  be the highest-value first tests.
- No CI — a lint+build workflow is proposed (`.github/` not yet present).
- Node version unpinned — consider `.nvmrc` once a version is standardized.
- `documents/` LaTeX suite predates the multi-route app and needs a refresh
  pass if print docs matter.

## License & Acknowledgements

- License: **ISC** © 2026 Jay Jogane — see [`LICENSE`](./LICENSE).
- Execution + editing: [OneCompiler Embed API](https://onecompiler.com/apis/embed-editor).
- Bootstrapped with `create-next-app`; brand mark: `public/favicon.png`.

# Contributing to CodeLab

Thanks for considering a contribution. CodeLab is a small static Next.js app —
the workflow below matches the repository as it actually exists.

## Development Setup

```bash
npm install
npm run dev      # http://localhost:3000
```

No environment variables, services, or database. Node 22+ recommended
(unpinned).

## Before Opening a PR

1. Keep the diff focused — one concern per PR, no unrelated reformatting.
2. `npm run lint` must pass with zero warnings.
3. `npx tsc --noEmit` must pass.
4. `npm run build` must pass (it includes the typecheck).
5. There is no test suite. If you add one, document how to run it here.

## Conventions

- Read [`AGENTS.md`](./AGENTS.md) and [`DESIGN.md`](./DESIGN.md) first.
- Server Components by default; client islands only for real interactivity.
- Every new indexable route needs `metadata` (title, description,
  `alternates.canonical`), JSON-LD via `<JsonLd>`, and a sitemap entry in
  `src/app/sitemap.ts`.
- Tailwind `@theme` tokens only (`bg-canvas`, `bg-brand`, …) — no hardcoded
  hex. Icons from `lucide-react` with `aria-hidden="true"`.
- Don't invent stats, testimonials, customers, or offers.

## Commit Messages & Reviews

- Short imperative summary line (e.g. `Add /contact page with honest support paths`).
- Never `git push --force`, never rewrite history.
- Reviewers check: requirements met, nothing else broken, `LICENSE` terms
  untouched, no secrets committed.

## Reporting Bugs / Proposing Features

Use the GitHub issue templates (bug report / feature request) so reports
include repro steps and environment details.

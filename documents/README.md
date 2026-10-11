# CodeLab Documentation

Evidence-based documentation suite for the CodeLab repository (`C:/Dev/codelab`:
Next.js App Router application at the repository root).
Generated strictly from repository analysis on 2026-10-11 (v1.1 refresh of the
2026-10-10 v1.0 suite). No features, APIs, customers, or metrics outside the
repo are claimed.

## Purpose

Professional software/product documentation in LaTeX source form, designed for
conversion to Microsoft Word (DOCX) and PDF.

## Structure

```text
documents/
├── README.md            (this file)
├── latex/
│   ├── main.tex         (master document)
│   ├── preamble.tex     (packages + style)
│   ├── metadata.tex     (title-page metadata, v1.1)
│   ├── sections/        (30 modular section files)
│   └── diagrams/        (Mermaid sources, .mmd: system, user-flow, data-flow, routes, component)
└── output/              (generated DOCX/PDF go here)
```

## Sections and status

| Section | File | Status |
|---|---|---|
| Executive Summary | `sections/executive-summary.tex` | Refreshed v1.1 (multi-route app) |
| Project Overview | `sections/project-overview.tex` | Refreshed v1.1 (routes, remote, deployment) |
| Product Description | `sections/project-description.tex` | Refreshed v1.1 (guides, SEO signals) |
| BRD | `sections/brd.tex` | New in v1.1 (evidence-only, metrics marked UNKNOWN) |
| PRD | `sections/prd.tex` | Refreshed v1.1 (reconstructed, marked INFERRED) |
| Functional Requirements | `sections/functional-requirements.tex` | Extended (FR-01..FR-18) |
| Non-Functional Requirements | `sections/non-functional-requirements.tex` | Refreshed v1.1 |
| Technical Requirements | `sections/technical-requirements.tex` | Refreshed v1.1 (fonts, icons, CI, license fields) |
| Software and System Architecture | `sections/software-architecture.tex` | Refreshed v1.1 (layers incl. SEO) |
| Frontend Architecture | `sections/frontend-architecture.tex` | Refreshed v1.1 (full route tree + catalogue) |
| Integrations | `sections/integrations.tex` | Verified current (OneCompiler only) |
| User Flows | `sections/user-flows.tex` | New in v1.1 (4 evidence-traced journeys) |
| Data Flows | `sections/data-flows.tex` | New in v1.1 (build-time + runtime, nothing stored) |
| Configuration | `sections/configuration.tex` | Refreshed v1.1 (root paths, CI, editorconfig) |
| UI/UX | `sections/ui-ux.tex` | Refreshed v1.1 (screens, states, a11y) |
| Design System | `sections/design-system.tex` | Refreshed v1.1 (DESIGN.md + @theme tokens) |
| Security | `sections/security.tex` | Refreshed v1.1 (SECURITY.md, share-link row) |
| Performance and Scalability | `sections/performance.tex` | Refreshed v1.1 (33 URLs, islands) |
| Testing | `sections/testing.tex` | Verified current (NOT APPLICABLE + strategy) |
| Deployment | `sections/deployment.tex` | Refreshed v1.1 (root commands, CI, observed host) |
| CI/CD | `sections/cicd.tex` | New in v1.1 (workflow + Dependabot + templates) |
| SEO | `sections/seo.tex` | Refreshed v1.1 (implemented inventory) |
| AEO | `sections/aeo.tex` | New in v1.1 |
| GEO | `sections/geo.tex` | New in v1.1 |
| Known Issues | `sections/known-issues.tex` | Refreshed v1.1 (fixed items kept as history) |
| Technical Debt | `sections/technical-debt.tex` | Refreshed v1.1 (resolved items kept as history) |
| Roadmap | `sections/roadmap.tex` | Refreshed v1.1 (shipped items moved to EXISTING) |
| Development Guidelines | `sections/development-guidelines.tex` | Refreshed v1.1 (AGENTS.md/CONTRIBUTING.md) |
| Contribution Guide | `sections/contribution-guide.tex` | New in v1.1 (summarizes repo files) |
| Glossary | `sections/glossary.tex` | Extended v1.1 (AEO/GEO/JSON-LD/canonical) |

Still intentionally omitted (no evidence in repo; creating them would be
fabrication): backend architecture, database design/ERD, API reference,
authentication, authorization, environment-variable secrets. System,
high-level, and low-level design stay merged into `software-architecture.tex`
and scalability into `performance.tex` by design.

## Build instructions

Requires a LaTeX distribution (TeX Live / MiKTeX) with `pdflatex` + `latexmk`.
No LaTeX toolchain was available in the analysis environment, so PDF/DOCX were
not generated here. (`documents/output/Documentation.pdf` is a stale v1.0
artifact — regenerate after this refresh.)

```bash
cd documents/latex
latexmk -pdf main.tex            # → main.pdf
```

DOCX via Pandoc (Word-compatible structure was a design constraint:
standard headings/tables/lists, no custom macros, no external images):

```bash
cd documents/latex
pandoc main.tex -o ../output/CodeLab-Documentation.docx --toc
```

Diagrams: render each `diagrams/*.mmd` with Mermaid CLI and, for print builds,
include the PNGs as figures:

```bash
mmdc -i diagrams/routes-sitemap.mmd -o diagrams/routes-sitemap.png
```

## Known documentation gaps

- No behavioural measurements (performance, coverage) exist to document.
- OneCompiler embed internals are third-party; only the documented URL contract
  (https://onecompiler.com/apis/embed-editor) is referenced.
- No product tracker, so PRD/roadmap items are reconstructions and
  recommendations, clearly labeled as such.
- Hosting is observed (Vercel URL serves the app) but unconfigured in-repo;
  deployment specifics beyond local commands + CI are operator-owned.

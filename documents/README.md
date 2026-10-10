# CodeLab Documentation

Evidence-based documentation suite for the CodeLab repository (`C:/Dev/codelab`:
root static prototype `index.html` + Next.js app in `codelab/`).
Generated strictly from repository analysis on 2026-10-10. No features, APIs,
customers, or metrics outside the repo are claimed.

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
│   ├── metadata.tex     (title-page metadata)
│   ├── sections/        (22 modular section files)
│   └── diagrams/        (Mermaid sources, .mmd)
└── output/              (generated DOCX/PDF go here)
```

## Sections and status

| Section | File | Status |
|---|---|---|
| Executive Summary | `sections/executive-summary.tex` | Written (IMPLEMENTED + marked INFERRED) |
| Project Overview | `sections/project-overview.tex` | Written |
| Product Description | `sections/project-description.tex` | Written |
| PRD | `sections/prd.tex` | Written (reconstructed, marked INFERRED) |
| Functional Requirements | `sections/functional-requirements.tex` | Written (FR-01..FR-10) |
| Non-Functional Requirements | `sections/non-functional-requirements.tex` | Written |
| Technical Requirements | `sections/technical-requirements.tex` | Written |
| Software and System Architecture | `sections/software-architecture.tex` | Written (backend/DB marked NOT APPLICABLE) |
| Frontend Architecture | `sections/frontend-architecture.tex` | Written |
| Integrations | `sections/integrations.tex` | Written (OneCompiler only) |
| Configuration | `sections/configuration.tex` | Written (no env vars) |
| UI/UX | `sections/ui-ux.tex` | Written |
| Design System | `sections/design-system.tex` | Written (values extracted verbatim) |
| Security | `sections/security.tex` | Written (review table) |
| Performance and Scalability | `sections/performance.tex` | Written (INFERRED, no measurements) |
| Testing | `sections/testing.tex` | Written (NOT APPLICABLE + recommended strategy) |
| Deployment | `sections/deployment.tex` | Written |
| SEO | `sections/seo.tex` | Written (AEO/GEO: NOT APPLICABLE) |
| Known Issues | `sections/known-issues.tex` | Written (5 verified issues) |
| Technical Debt | `sections/technical-debt.tex` | Written |
| Roadmap | `sections/roadmap.tex` | Written (EXISTING vs RECOMMENDED vs POTENTIAL) |
| Development Guidelines | `sections/development-guidelines.tex` | Written (doubles as contribution guide) |
| Glossary | `sections/glossary.tex` | Written |

Intentionally omitted (no evidence in repo; creating them would be fabrication):
BRD, backend architecture, database design/ERD, API reference, authentication,
authorization, CI/CD pipelines, AEO/GEO standalone docs.

## Build instructions

Requires a LaTeX distribution (TeX Live / MiKTeX) with `pdflatex` + `latexmk`.
No LaTeX toolchain was available in the analysis environment, so PDF/DOCX were
not generated here.

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
mmdc -i diagrams/system-context.mmd -o diagrams/system-context.png
```

## Known documentation gaps

- No behavioural measurements (performance, coverage) exist to document.
- OneCompiler embed internals are third-party; only the documented URL contract
  (https://onecompiler.com/apis/embed-editor) is referenced.
- No product tracker, so PRD/roadmap items are reconstructions and
  recommendations, clearly labeled as such.

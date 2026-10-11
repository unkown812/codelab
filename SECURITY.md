# Security Policy

## Reporting a Vulnerability

CodeLab is a static frontend with no backend, accounts, or data store, but
reports are still welcome.

**Preferred channel:** open a **private GitHub Security Advisory** on
[`unkown812/codelab`](https://github.com/unkown812/codelab) (Security tab →
Advisories → Report a vulnerability).

Please include:

1. Affected URL or file (e.g. a route or component).
2. Steps to reproduce.
3. What you expected vs. what happened.
4. Your environment (browser, OS) if it matters.

Do **not** open a public issue for a suspected vulnerability, and do not
include credentials or personal data in the report.

## Scope Notes

- The app runs no server code of its own; most execution risk lives in the
  embedded third-party runtime (OneCompiler) and the hosting platform
  (Vercel) — issues there belong to those vendors, but tell us anyway if
  CodeLab's integration is the vector.
- There is no published list of supported versions yet; the `master` branch
  is the maintained line. If you need a versioned support statement,
  [open an issue](https://github.com/unkown812/codelab/issues) asking for one.

## What Not to Report

- The absence of authentication is by design (zero-backend architecture).
- Shared run links encoding state in the URL is documented behavior
  (see `/privacy`).

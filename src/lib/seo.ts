export const SITE_URL = "https://code--lab.vercel.app";
export const SITE_NAME = "CodeLab";
export const SITE_TAGLINE = "Write. Run. Ship Code.";
export const SITE_DESCRIPTION =
  "CodeLab is a free online compiler. Write, compile and run 80+ programming languages in your browser — no setup, no account needed.";
export const CREATOR_NAME = "Jay Jogane";

export const OG_IMAGE = `${SITE_URL}/favicon.png`;

export function canonical(path: string) {
  if (path === "/") return SITE_URL + "/";
  return SITE_URL + path;
}

export const LANGUAGE_SLUGS = [
  "python",
  "javascript",
  "typescript",
  "java",
  "cpp",
  "c",
  "go",
  "rust",
  "ruby",
  "php",
  "swift",
  "kotlin",
] as const;

export type LanguageSlug = (typeof LANGUAGE_SLUGS)[number];

export const LANGUAGE_META: Record<
  LanguageSlug,
  { label: string; runtime: string; blurb: string }
> = {
  python: {
    label: "Python",
    runtime: "Python 3.13",
    blurb:
      "Run Python online without installing anything. Ideal for learning, interview practice and quick scripts.",
  },
  javascript: {
    label: "JavaScript",
    runtime: "Node 24",
    blurb:
      "Run JavaScript online with Node. Test snippets, practice algorithms and debug without local setup.",
  },
  typescript: {
    label: "TypeScript",
    runtime: "Strict mode",
    blurb:
      "Compile and run TypeScript online. Check types and logic instantly in your browser.",
  },
  java: {
    label: "Java",
    runtime: "Java 21",
    blurb:
      "Compile and run Java online. Practice OOP, data structures and exam problems with zero setup.",
  },
  cpp: {
    label: "C++",
    runtime: "GCC 14",
    blurb:
      "Compile and run C++ online. Test algorithms and competitive-programming solutions fast.",
  },
  c: {
    label: "C",
    runtime: "GCC 14",
    blurb:
      "Compile and run C online. Learn pointers, memory and systems basics without a toolchain.",
  },
  go: {
    label: "Go",
    runtime: "Go 1.23",
    blurb:
      "Run Go online. Experiment with goroutines, CLIs and backend snippets instantly.",
  },
  rust: {
    label: "Rust",
    runtime: "Rust 1.82",
    blurb:
      "Compile and run Rust online. Learn ownership and borrowing without installing cargo.",
  },
  ruby: {
    label: "Ruby",
    runtime: "Ruby 3.3",
    blurb: "Run Ruby online for scripting practice and interview warm-ups.",
  },
  php: {
    label: "PHP",
    runtime: "PHP 8.4",
    blurb: "Run PHP online to test backend snippets and form logic quickly.",
  },
  swift: {
    label: "Swift",
    runtime: "Swift 6.0",
    blurb: "Run Swift online to practice iOS-style logic without Xcode.",
  },
  kotlin: {
    label: "Kotlin",
    runtime: "Kotlin 2.0",
    blurb: "Run Kotlin online to practice Android-style code without setup.",
  },
};

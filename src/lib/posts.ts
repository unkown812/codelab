export type PostSection = { h: string; ps: string[] };
export type PostFaq = { q: string; a: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  intent: string;
  sections: PostSection[];
  faq: PostFaq[];
  related: { label: string; href: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "run-python-online-no-install",
    title: "How to run Python online without installing anything",
    description:
      "Run Python 3.13 in your browser with CodeLab: open the compiler, pick Python, paste code and press Run. Includes stdin tips.",
    date: "2026-10-01",
    intent: "Informational tutorial",
    sections: [
      {
        h: "Open the Python runtime",
        ps: [
          "Go to the CodeLab compiler and select Python. The pinned Python 3.13 runtime loads with an empty editor — nothing to download, and it works on Chromebooks, tablets and lab machines where you cannot install software.",
          "If you arrived from the languages hub, the per-language Python guide has a starter program you can copy.",
        ],
      },
      {
        h: "Paste code and press Run",
        ps: [
          "Type or paste your script into the editor, then use the Run button inside the editor. Output, tracebacks and the exit code appear in the result pane below the code.",
          "Tracebacks reference your exact lines, so debugging works the same way it does locally — read the last line first, then scroll up for the call chain.",
        ],
      },
      {
        h: "Feed input with stdin",
        ps: [
          "Programs that call input() need piped stdin. Open the stdin panel inside the editor, type each input on its own line, then press Run. Match the order your program reads values.",
          "A common beginner mistake is pressing Run with an empty stdin panel and watching input() raise EOFError. Fill stdin first, then run.",
        ],
      },
    ],
    faq: [
      {
        q: "Which Python version runs online?",
        a: "CodeLab pins Python 3.13. The exact version is shown in the per-language Python guide and may be updated as runtimes roll forward.",
      },
      {
        q: "Can I install pip packages?",
        a: "The embedded runtime ships a fixed standard library plus common packages chosen by the runtime provider. Arbitrary pip installs are not part of the CodeLab playground workflow.",
      },
      {
        q: "Is it really free?",
        a: "Yes. The Playground tier is free with no account. You only hit limits on very long runs or large files.",
      },
    ],
    related: [
      { label: "Run Python online guide", href: "/languages/python" },
      { label: "How stdin works", href: "/blog/stdin-guide-online-compiler" },
      { label: "Open the compiler", href: "/compiler" },
    ],
  },
  {
    slug: "share-code-run-link",
    title: "How to share a code run with one link",
    description:
      "Share exact code, language and inputs with one URL: set up the run, copy the page link, and your reviewer opens your identical state.",
    date: "2026-10-03",
    intent: "How-to",
    sections: [
      {
        h: "Set up the exact state first",
        ps: [
          "Select the right language, paste the final code, and fill stdin with the failing input before you copy anything. Reviewers open whatever state the link captures — a half-edited buffer wastes a review round.",
          "Run once yourself to confirm the output matches what you describe. If it errors, keep the error: a reproducing error is more useful than a description of one.",
        ],
      },
      {
        h: "Copy the page URL",
        ps: [
          "Copy the browser URL while the run is set up. Language selection, code and inputs travel with the link, so the recipient lands in your identical state.",
          "Paste it into chat, an issue tracker, a classroom assignment or a forum post alongside one sentence of context: what you expected versus what you got.",
        ],
      },
      {
        h: "What the recipient sees",
        ps: [
          "They open the same language with your code preloaded and can press Run immediately — no setup, no file downloads, no version mismatch.",
          "For coursework, ask students to submit their solution links instead of screenshots. You can open each link and run it yourself in seconds.",
        ],
      },
    ],
    faq: [
      {
        q: "Do shared links expire?",
        a: "Links encode the run state in the URL itself, so there is no server-side snippet to expire on the Playground tier.",
      },
      {
        q: "Can the recipient edit my code?",
        a: "They get their own editable copy in their browser. Your original state is unaffected — there is no shared document to overwrite.",
      },
    ],
    related: [
      { label: "10-second quickstart", href: "/docs" },
      { label: "Open the compiler", href: "/compiler" },
      { label: "Teachers use case", href: "/use-cases/teachers" },
    ],
  },
  {
    slug: "run-javascript-online-node",
    title: "How to run JavaScript online with Node",
    description:
      "Test JavaScript snippets with the Node 24 runtime in CodeLab: console.log debugging, quick algorithm checks and JSON experiments.",
    date: "2026-10-05",
    intent: "Informational tutorial",
    sections: [
      {
        h: "Pick the JavaScript runtime",
        ps: [
          "Open the compiler and choose JavaScript to load the Node 24 runtime. Use it for logic, algorithms and data wrangling — browser DOM APIs are not part of a Node-style run.",
          "The JavaScript guide has a starter snippet with console.log output you can run immediately.",
        ],
      },
      {
        h: "Debug with console output",
        ps: [
          "Sprinkle console.log around the suspicious values, then read the result pane top to bottom. For objects, log JSON.stringify(value, null, 2) so nested structure stays readable.",
          "Keep each run small: isolate the failing function with hardcoded inputs before testing the whole program.",
        ],
      },
      {
        h: "Practice algorithms under constraints",
        ps: [
          "Interview platforms feed hidden stdin to your program, so practice reading input rather than hardcoding arrays. Time your solutions the way a real round would.",
        ],
      },
    ],
    faq: [
      {
        q: "Does the online runtime support fetch and DOM?",
        a: "Node-style runs focus on language logic and standard libraries. Browser-only APIs like document are outside this workflow — test those in a real browser page instead.",
      },
      {
        q: "JavaScript or TypeScript — which should I pick?",
        a: "Pick JavaScript for speed and interview practice. Pick TypeScript when you want the compiler to check your types before running.",
      },
    ],
    related: [
      { label: "Run JavaScript online guide", href: "/languages/javascript" },
      { label: "Run TypeScript online guide", href: "/languages/typescript" },
      { label: "Interview prep use case", href: "/use-cases/interviews" },
    ],
  },
  {
    slug: "stdin-guide-online-compiler",
    title: "Stdin in an online compiler: how piped input works",
    description:
      "Programs that read input need stdin, not typing at a terminal. Learn how the stdin panel maps to input(), Scanner, cin and readLine.",
    date: "2026-10-07",
    intent: "Guide",
    sections: [
      {
        h: "Stdin is a file, not a conversation",
        ps: [
          "Online runtimes cannot pause and ask you to type mid-run the way a terminal does. Instead, everything your program will read must be pre-filled in the stdin panel before you press Run.",
          "Think of stdin as a text file your program reads from top to bottom: the first input() or Scanner call takes the first line, the next call takes the second, and so on.",
        ],
      },
      {
        h: "Map lines to reads",
        ps: [
          "Python input() reads one line; Java Scanner.nextLine() reads one line; C++ getline(cin, s) reads one line. Count your reads and provide exactly that many lines.",
          "Running out of lines raises EOFError in Python or blocks with NoSuchElementException in Java. Extra lines are simply ignored, so err on the side of complete input while learning.",
        ],
      },
      {
        h: "Debug stdin failures fast",
        ps: [
          "Echo the input back as the first output line while debugging, so you can confirm what the program actually received. Then remove the echo before submitting.",
          "For multi-case algorithm practice, put the case count on line one (e.g. 3) followed by one case per line — the standard competitive-programming layout.",
        ],
      },
    ],
    faq: [
      {
        q: "Where is the stdin panel?",
        a: "Inside the embedded editor, next to the code and output panes. Fill it before pressing Run — edits after the run starts do not apply retroactively.",
      },
      {
        q: "Why does my program hang waiting for input?",
        a: "It is almost always an empty or short stdin panel. Provide every line the program reads, in order, then run again.",
      },
    ],
    related: [
      { label: "Run Python online", href: "/languages/python" },
      { label: "Run Java online", href: "/languages/java" },
      { label: "Docs quickstart", href: "/docs" },
    ],
  },
];

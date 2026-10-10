export type OneCompilerTheme = "dark" | "light";

type CodeEditorProps = {
  /** Title shown in the window header bar */
  title?: string;
  /** Full embed URL override. If set, all embed option props below are ignored. */
  src?: string;
  /** Language path, e.g. "python" -> /embed/python */
  language?: string;
  /** Saved code id, e.g. /embed/javascript/3wyne344h */
  codeId?: string;
  /** Editor theme. Default: "dark" */
  theme?: OneCompilerTheme;
  /** Editor font size 8-32. Omitted = OneCompiler default (14). */
  fontSize?: number;
  /** Status text shown on the right of the header */
  statusText?: string;
  /** Section id for anchor links, e.g. #compiler */
  id?: string;
  /** Extra classes applied to the outer <section> */
  className?: string;
  hideTitle?: boolean;
  hideLanguageSelection?: boolean;
  hideNew?: boolean;
  hideRun?: boolean;
  hideNewFileOption?: boolean;
  hideEditorOptions?: boolean;
  hideStdin?: boolean;
  hideResult?: boolean;
  disableCopyPaste?: boolean;
  disableAutoComplete?: boolean;
  availableLanguages?: boolean;
  codeChangeEvent?: boolean;
  listenToEvents?: boolean;
};

const EMBED_BASE = "https://onecompiler.com/embed";

function clampFontSize(n: number) {
  if (Number.isNaN(n)) return 14;
  return Math.min(32, Math.max(8, Math.round(n)));
}

export function buildOneCompilerSrc({
  language = "",
  codeId = "",
  theme = "dark",
  fontSize,
  hideTitle = true,
  hideLanguageSelection = false,
  hideNew = false,
  hideRun = false,
  hideNewFileOption = false,
  hideEditorOptions = false,
  hideStdin = false,
  hideResult = false,
  disableCopyPaste = false,
  disableAutoComplete = false,
  availableLanguages = true,
  codeChangeEvent = true,
  listenToEvents = true,
}: Omit<CodeEditorProps, "title" | "src" | "statusText" | "id" | "className"> = {}) {
  let path = EMBED_BASE;
  const lang = language.trim().replaceAll("/", "");
  const code = codeId.trim().replaceAll("/", "");
  if (lang) path += `/${lang}`;
  else if (code) path += "/";
  if (code) path += `/${code}`;

  const q = new URLSearchParams();
  if (theme) q.set("theme", theme);
  if (fontSize !== undefined) q.set("fontSize", String(clampFontSize(fontSize)));
  const flags: Record<string, boolean | undefined> = {
    hideTitle,
    hideLanguageSelection,
    hideNew,
    hideRun,
    hideNewFileOption,
    hideEditorOptions,
    hideStdin,
    hideResult,
    disableCopyPaste,
    disableAutoComplete,
    availableLanguages,
    codeChangeEvent,
    listenToEvents,
  };
  for (const [key, value] of Object.entries(flags)) {
    if (value) q.set(key, "true");
  }
  const qs = q.toString();
  return qs ? `${path}?${qs}` : path;
}

/**
 * CodeEditor — OneCompiler embed wrapped in the CodeLab window chrome.
 *
 * Ported from `index.html` `.compiler-section` / `.compiler-header` /
 * `.compiler-wrapper` Markup + CSS, converted to Tailwind utilities.
 */
export default function CodeEditor({
  title = "Code Lab Compiler",
  src,
  language = "",
  codeId = "",
  theme = "dark",
  fontSize,
  statusText = "Ready to compile",
  id = "compiler",
  className = "",
  hideTitle = true,
  hideLanguageSelection = false,
  hideNew = false,
  hideRun = false,
  hideNewFileOption = false,
  hideEditorOptions = false,
  hideStdin = false,
  hideResult = false,
  disableCopyPaste = false,
  disableAutoComplete = false,
  availableLanguages = false,
  codeChangeEvent = true,
  listenToEvents = false,
}: CodeEditorProps) {
  const iframeSrc =
    src ??
    buildOneCompilerSrc({
      language,
      codeId,
      theme,
      fontSize,
      hideTitle,
      hideLanguageSelection,
      hideNew,
      hideRun,
      hideNewFileOption,
      hideEditorOptions,
      hideStdin,
      hideResult,
      disableCopyPaste,
      disableAutoComplete,
      availableLanguages,
      codeChangeEvent,
      listenToEvents,
    });
  return (
    <section
      id={id}
      aria-label={title}
      className={`m-0 flex h-dvh w-full flex-col p-0 ${className}`}
    >
      {/* Window header bar */}
      <div className="flex shrink-0 items-center justify-between rounded-none border-x-0 border-t-0 border-b border-white/[0.08] bg-[#0f172a]/85 px-[18px] py-[15px] backdrop-blur-[14px] max-sm:p-3">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-50">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          </div>
          <span>{title}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 max-sm:hidden">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
          />
          {statusText}
        </div>
      </div>

      {/* Iframe body */}
      <div className="flex w-full min-h-0 flex-1 flex-col overflow-hidden rounded-none border-0 bg-[#0f172a]">
        <iframe
          id="onecompiler"
          src={iframeSrc}
          title="Online Code Compiler"
          loading="lazy"
          allow="clipboard-read; clipboard-write"
          className="block h-full min-h-0 w-full flex-1 border-0 bg-[#0f172a]"
        />
      </div>
    </section>
  );
}

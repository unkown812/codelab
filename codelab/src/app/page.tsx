import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-[#070b12] font-sans text-slate-50 antialiased">
      <main className="m-0 flex min-h-0 w-full flex-1 flex-col p-0">
        <CodeEditor />
      </main>
    </div>
  );
}

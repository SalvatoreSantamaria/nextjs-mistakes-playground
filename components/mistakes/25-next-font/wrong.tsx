import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Manual Google Fonts via <code>&lt;link&gt;</code> causes layout shift
        while the browser downloads and swaps fonts.
      </DemoNote>
      {/* Simulated manual font loading — not actually applied globally */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      />
      <p
        style={{ fontFamily: "Roboto, sans-serif" }}
        className="text-lg text-zinc-700 dark:text-zinc-300"
      >
        Text styled via external stylesheet — watch for FOUT/CLS.
      </p>
      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-3 text-xs text-zinc-100">
        <code>{`<link href="https://fonts.googleapis.com/css2?family=Roboto…" />`}</code>
      </pre>
    </div>
  );
}

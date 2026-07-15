import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        This app loads <code>Source_Serif_4</code> via{" "}
        <code>next/font/google</code> in <code>app/layout.tsx</code> — self-hosted,
        zero layout shift.
      </DemoNote>
      <p className="font-[family-name:var(--font-serif)] text-xl tracking-tight text-emerald-900 dark:text-emerald-100">
        Optimized serif via CSS variable — no external font request.
      </p>
      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-3 text-xs text-zinc-100">
        <code>{`const serif = Source_Serif_4({ variable: "--font-serif" });
// className={serif.variable} on <html>`}</code>
      </pre>
    </div>
  );
}

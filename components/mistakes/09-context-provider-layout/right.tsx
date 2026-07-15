import { DemoNote } from "@/components/DemoNote";
import { DemoMetric } from "@/components/DemoMetric";
import { ThemeProvider, ThemeToggle } from "./theme-provider";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Only the provider shell and toggle are client components. Static copy
        stays on the server.
      </DemoNote>
      <DemoMetric
        label="Tree status"
        value="Provider client · copy server"
        tone="right"
      />
      <ThemeProvider>
        <p className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
          <span className="rounded border border-emerald-300 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-emerald-800 dark:border-emerald-800 dark:text-emerald-200">
            Server island
          </span>
          This heading never became a client component.
        </p>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
}

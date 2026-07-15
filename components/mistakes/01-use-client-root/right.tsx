import { DemoMetric } from "@/components/DemoMetric";
import { ClickCounter } from "./click-counter";

/** Server Component page shell with a small client leaf */
export function Right() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This outer shell is a Server Component. Only the button below is a
        client leaf — the recommended pattern.
      </p>
      <DemoMetric
        label="Client boundary"
        value="button only"
        tone="right"
      />
      <DemoMetric label="JS for this panel" value="low" tone="right" />
      <p className="inline-flex items-center gap-2 font-mono text-sm text-emerald-700 dark:text-emerald-300">
        <span className="rounded border border-emerald-300 px-1.5 py-0.5 text-[10px] uppercase tracking-wide dark:border-emerald-800">
          Server-rendered
        </span>
        Static text — no hydration required for this paragraph.
      </p>
      <ClickCounter />
    </div>
  );
}

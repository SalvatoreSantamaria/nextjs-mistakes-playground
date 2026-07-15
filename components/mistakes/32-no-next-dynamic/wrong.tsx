import { DemoNote } from "@/components/DemoNote";
import { HeavyChart } from "./heavy-chart";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        A static <code>import</code> of a heavy client widget means its JS is in
        the critical path even if the chart is below the fold.
      </DemoNote>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Page shell + chart ship together.
      </p>
      <HeavyChart />
    </div>
  );
}

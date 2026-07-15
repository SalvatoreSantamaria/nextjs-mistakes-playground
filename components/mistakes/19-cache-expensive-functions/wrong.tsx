import { DemoNote } from "@/components/DemoNote";
import {
  computeTopSellersUncached,
  getCounter,
  getSampleOrders,
  resetCounter,
} from "@/lib/demo-cache";

export function Wrong() {
  resetCounter("expensive-uncached");
  const orders = getSampleOrders();

  // Two callers in the same tree — work runs twice.
  const summary = computeTopSellersUncached(orders);
  const sidebar = computeTopSellersUncached(orders);
  const hits = getCounter("expensive-uncached");

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Dashboard and Sidebar each call the expensive aggregator. With no{" "}
        <code>cache()</code>, the work runs once per caller.
      </DemoNote>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        computeTopSellers ran <strong>{hits}</strong> time{hits === 1 ? "" : "s"} this
        render
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <section className="rounded-md border border-red-200 p-3 dark:border-red-900/50">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            DashboardSummary
          </h3>
          <ul className="font-mono text-sm">
            {summary.map((row) => (
              <li key={row.product}>
                {row.product}: {row.total}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-md border border-red-200 p-3 dark:border-red-900/50">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Sidebar
          </h3>
          <ul className="font-mono text-sm">
            {sidebar.map((row) => (
              <li key={row.product}>
                {row.product}: {row.total}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

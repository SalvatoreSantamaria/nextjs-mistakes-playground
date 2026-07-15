import { DemoNote } from "@/components/DemoNote";
import {
  computeTopSellersCached,
  getCounter,
  getSampleOrders,
  resetCounter,
} from "@/lib/demo-cache";

export function Right() {
  resetCounter("expensive-cached");
  const orders = getSampleOrders();

  const summary = computeTopSellersCached(orders);
  const sidebar = computeTopSellersCached(orders);
  const hits = getCounter("expensive-cached");

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Wrapping the aggregator in React&apos;s <code>cache()</code> memoizes it
        for the request — both callers reuse one result.
      </DemoNote>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        computeTopSellers ran <strong>{hits}</strong> time{hits === 1 ? "" : "s"} this
        render
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <section className="rounded-md border border-emerald-200 p-3 dark:border-emerald-900/50">
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
        <section className="rounded-md border border-emerald-200 p-3 dark:border-emerald-900/50">
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

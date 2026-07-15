import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="An expensive, non-fetch computation (a heavy sort, a report aggregation, a database join) runs uncached inside a helper that multiple components import, so the work is repeated for every caller during the same render."
      code={`function getTopSellers(orders: Order[]) {
  // Expensive O(n log n) aggregation, re-run from
  // scratch every single time any component calls it.
  return orders
    .reduce(aggregateByProduct, new Map())
    .values()
    .toArray()
    .sort((a, b) => b.total - a.total)
}

export async function DashboardSummary() {
  const top = getTopSellers(await getOrders())
  return <TopList items={top} />
}

export async function Sidebar() {
  const top = getTopSellers(await getOrders()) // recomputed
  return <MiniList items={top} />
}`}
    />
  );
}

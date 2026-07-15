import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Wrap the expensive function in React's cache() so its result is memoized per request — every component that calls it with the same arguments during that render reuses the same computed value."
      code={`import { cache } from 'react'

const getTopSellers = cache((orders: Order[]) => {
  // Computed once per request; every caller with the
  // same 'orders' reference shares this cached result.
  return orders
    .reduce(aggregateByProduct, new Map())
    .values()
    .toArray()
    .sort((a, b) => b.total - a.total)
})

export async function DashboardSummary() {
  const top = getTopSellers(await getOrders())
  return <TopList items={top} />
}

export async function Sidebar() {
  const top = getTopSellers(await getOrders()) // reused
  return <MiniList items={top} />
}`}
    />
  );
}

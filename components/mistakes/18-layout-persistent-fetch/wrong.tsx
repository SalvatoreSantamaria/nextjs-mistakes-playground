import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="Shared data like the current user or nav links is fetched inside every page.tsx that needs it, instead of once in a shared layout — the same request repeats on every navigation within that segment."
      code={`// app/dashboard/settings/page.tsx
export default async function SettingsPage() {
  const user = await getUser() // fetched again
  return <Settings user={user} />
}

// app/dashboard/billing/page.tsx
export default async function BillingPage() {
  const user = await getUser() // and again
  return <Billing user={user} />
}

// Every sibling route under /dashboard re-runs getUser(),
// even though the layout they share already needs it too.`}
    />
  );
}

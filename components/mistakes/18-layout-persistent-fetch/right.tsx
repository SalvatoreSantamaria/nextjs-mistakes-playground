import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Fetch shared data once in an async layout and pass it down via context or props. The layout persists across sibling route navigations, so the fetch doesn't re-run on every page."
      code={`// app/dashboard/layout.tsx
import { UserProvider } from './user-context'

export default async function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  const user = await getUser() // fetched once per session

  return (
    <UserProvider value={user}>
      <Sidebar user={user} />
      {children}
    </UserProvider>
  )
}

// app/dashboard/settings/page.tsx
export default function SettingsPage() {
  const user = useUser() // reads context, no new fetch
  return <Settings user={user} />
}`}
    />
  );
}

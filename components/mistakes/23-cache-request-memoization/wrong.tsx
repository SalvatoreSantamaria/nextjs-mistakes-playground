import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="Multiple sibling Server Components each call a data-access function that uses a database client or SDK instead of fetch, so Next.js's automatic request memoization never kicks in and the query runs once per caller."
      code={`// lib/data.ts
export async function getUser(id: string) {
  // db.query is not fetch(), so there's no automatic
  // per-request de-duplication for this call.
  return db.query('SELECT * FROM users WHERE id = $1', [id])
}

// Header.tsx
export async function Header({ userId }: { userId: string }) {
  const user = await getUser(userId) // query #1
  return <span>{user.name}</span>
}

// Sidebar.tsx
export async function Sidebar({ userId }: { userId: string }) {
  const user = await getUser(userId) // query #2, same row
  return <Avatar user={user} />
}`}
    />
  );
}

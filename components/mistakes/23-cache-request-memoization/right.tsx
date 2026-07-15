import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Wrap non-fetch data access in React's cache() so it gets the same per-request memoization as fetch — every Server Component calling it with the same arguments shares one in-flight query."
      code={`// lib/data.ts
import { cache } from 'react'

export const getUser = cache(async (id: string) => {
  // Memoized for the lifetime of a single render pass.
  return db.query('SELECT * FROM users WHERE id = $1', [id])
})

// Header.tsx
export async function Header({ userId }: { userId: string }) {
  const user = await getUser(userId) // query #1
  return <span>{user.name}</span>
}

// Sidebar.tsx
export async function Sidebar({ userId }: { userId: string }) {
  const user = await getUser(userId) // reuses query #1
  return <Avatar user={user} />
}`}
    />
  );
}

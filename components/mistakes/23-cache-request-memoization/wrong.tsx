import { DemoNote } from "@/components/DemoNote";
import { getDbUserUncached, peekDbUserHits } from "@/lib/demo-cache";

export async function Wrong() {
  const userId = "u-turing";

  // Two sibling Server Components each calling the same non-fetch loader.
  const headerUser = await getDbUserUncached(userId);
  const sidebarUser = await getDbUserUncached(userId);
  const hits = peekDbUserHits("uncached");

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Header and Sidebar each call a non-<code>fetch</code> DB helper. Next.js
        does not auto-dedupe that — two queries for the same row.
      </DemoNote>
      <p className="rounded-md border border-red-200 px-3 py-2 font-mono text-sm dark:border-red-900/50">
        Header → {headerUser.name} ({headerUser.role})
      </p>
      <p className="rounded-md border border-red-200 px-3 py-2 font-mono text-sm dark:border-red-900/50">
        Sidebar → {sidebarUser.name} ({sidebarUser.role})
      </p>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        getDbUser queries this render: <strong>{hits}</strong>
      </p>
    </div>
  );
}

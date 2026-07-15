import { DemoNote } from "@/components/DemoNote";
import { getDbUserCached, peekDbUserHits } from "@/lib/demo-cache";

export async function Right() {
  const userId = "u-turing";

  const headerUser = await getDbUserCached(userId);
  const sidebarUser = await getDbUserCached(userId);
  const hits = peekDbUserHits("cached");

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Wrap the loader in React&apos;s <code>cache()</code> so both Server
        Components share one in-flight query for the same arguments.
      </DemoNote>
      <p className="rounded-md border border-emerald-200 px-3 py-2 font-mono text-sm dark:border-emerald-900/50">
        Header → {headerUser.name} ({headerUser.role})
      </p>
      <p className="rounded-md border border-emerald-200 px-3 py-2 font-mono text-sm dark:border-emerald-900/50">
        Sidebar → {sidebarUser.name} ({sidebarUser.role})
      </p>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        getDbUser queries this render: <strong>{hits}</strong>
      </p>
    </div>
  );
}

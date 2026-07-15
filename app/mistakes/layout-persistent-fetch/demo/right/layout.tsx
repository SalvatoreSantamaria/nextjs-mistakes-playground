import Link from "next/link";
import { connection } from "next/server";
import { getUserForLayout } from "@/lib/demo-cache";

export default async function RightLayoutDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();
  const user = await getUserForLayout();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Link
          href="/mistakes/layout-persistent-fetch?mode=right"
          className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back to mistake #18
        </Link>
        <h1 className="text-2xl font-semibold">Layout fetch (right)</h1>
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 font-mono text-sm dark:border-emerald-900/50 dark:bg-emerald-950/40">
          Layout user: {user.name} · fetched at {user.fetchedAt}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Shared data lives in the layout. Switch tabs — the timestamp above
          should stay put (layout does not remount).
        </p>
        <nav className="flex gap-2">
          <Link
            href="/mistakes/layout-persistent-fetch/demo/right/settings"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Settings
          </Link>
          <Link
            href="/mistakes/layout-persistent-fetch/demo/right/billing"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Billing
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}

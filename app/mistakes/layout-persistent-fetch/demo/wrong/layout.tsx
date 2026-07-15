import Link from "next/link";

export default function WrongLayoutDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Link
          href="/mistakes/layout-persistent-fetch?mode=wrong"
          className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back to mistake #18
        </Link>
        <h1 className="text-2xl font-semibold">Per-page fetch (wrong)</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          This layout does not fetch the user. Each page loads it again —
          watch the timestamp change when you switch tabs.
        </p>
        <nav className="flex gap-2">
          <Link
            href="/mistakes/layout-persistent-fetch/demo/wrong/settings"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Settings
          </Link>
          <Link
            href="/mistakes/layout-persistent-fetch/demo/wrong/billing"
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

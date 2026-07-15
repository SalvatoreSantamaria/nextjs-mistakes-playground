import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Settings and Billing each fetch the user in <code>page.tsx</code>.
        Navigating between siblings re-runs the fetch every time.
      </DemoNote>
      <Link
        href="/mistakes/layout-persistent-fetch/demo/wrong/settings"
        className="inline-block rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Open per-page fetch demo →
      </Link>
    </div>
  );
}

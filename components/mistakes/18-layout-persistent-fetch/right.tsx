import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Fetch the shared user once in <code>layout.tsx</code>. Sibling
        navigations reuse the layout — no repeated fetch.
      </DemoNote>
      <Link
        href="/mistakes/layout-persistent-fetch/demo/right/settings"
        className="inline-block rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
      >
        Open layout fetch demo →
      </Link>
    </div>
  );
}

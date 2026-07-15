import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Wrap the shared loader in React&apos;s <code>cache()</code> so metadata
        and the page dedupe onto one call per request.
      </DemoNote>
      <Link
        href="/mistakes/duplicate-fetch-metadata/demo/right"
        className="inline-block rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
      >
        Open cache()-memoized demo →
      </Link>
    </div>
  );
}

import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        The demo layout <code>await</code>s slow data with no Suspense — the
        child page cannot paint until the layout finishes (~1.2s).
      </DemoNote>
      <Link
        href="/mistakes/blocking-layout-await/demo/wrong"
        className="inline-block rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Open blocking layout demo →
      </Link>
    </div>
  );
}

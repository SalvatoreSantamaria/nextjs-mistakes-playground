import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>generateMetadata</code> and the page each call an uncached loader
        — two DB hits per request. Open the demo and check the hit counter.
      </DemoNote>
      <Link
        href="/mistakes/duplicate-fetch-metadata/demo/wrong"
        className="inline-block rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Open uncached metadata + page demo →
      </Link>
    </div>
  );
}

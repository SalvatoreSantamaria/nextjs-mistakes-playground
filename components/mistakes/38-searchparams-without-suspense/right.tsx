import { Suspense } from "react";
import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";
import { SearchLabel } from "./search-label";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Keep the page/shell as a Server Component. Isolate{" "}
        <code>useSearchParams</code> in a small client child wrapped in{" "}
        <code>Suspense</code>.
      </DemoNote>
      <Suspense
        fallback={
          <p className="font-mono text-sm text-zinc-500">Reading search params…</p>
        }
      >
        <SearchLabel />
      </Suspense>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/mistakes/searchparams-without-suspense?mode=right&q=alpha"
          className="underline"
        >
          ?q=alpha
        </Link>
        <Link
          href="/mistakes/searchparams-without-suspense?mode=right&q=beta"
          className="underline"
        >
          ?q=beta
        </Link>
      </div>
    </div>
  );
}

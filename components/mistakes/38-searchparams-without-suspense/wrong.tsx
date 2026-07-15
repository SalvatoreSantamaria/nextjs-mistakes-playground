"use client";

import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";
import { SearchLabel } from "./search-label";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        This whole panel is a Client Component that calls{" "}
        <code>useSearchParams</code> with no Suspense boundary above it — the
        segment opts into client rendering for the param read.
      </DemoNote>
      <SearchLabel />
      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/mistakes/searchparams-without-suspense?mode=wrong&q=alpha"
          className="underline"
        >
          ?q=alpha
        </Link>
        <Link
          href="/mistakes/searchparams-without-suspense?mode=wrong&q=beta"
          className="underline"
        >
          ?q=beta
        </Link>
      </div>
    </div>
  );
}

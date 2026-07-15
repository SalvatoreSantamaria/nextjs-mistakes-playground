"use client";

import { useRouter } from "next/navigation";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Using <code>router.push</code> for a hard server redirect skips
        middleware/cookie logic that <code>redirect()</code> runs on the server.
      </DemoNote>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        router.push(&quot;/&quot;) — client nav
      </button>
    </div>
  );
}

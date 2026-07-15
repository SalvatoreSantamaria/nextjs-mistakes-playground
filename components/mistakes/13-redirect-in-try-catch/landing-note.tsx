"use client";

import { useSearchParams } from "next/navigation";

export function LandingNote() {
  const params = useSearchParams();
  const landed = params.get("landed") === "1";

  if (!landed) {
    return (
      <p className="text-sm text-zinc-500">
        Submit a redirect button — if navigation succeeds, this note appears
        with <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">?landed=1</code>.
      </p>
    );
  }

  return (
    <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100">
      Landed via redirect — navigation was not swallowed.
    </p>
  );
}

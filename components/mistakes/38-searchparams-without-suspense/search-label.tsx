"use client";

import { useSearchParams } from "next/navigation";

export function SearchLabel() {
  const params = useSearchParams();
  const q = params.get("q") ?? "(none)";

  return (
    <p className="font-mono text-sm">
      Current <code>q</code> search param:{" "}
      <span className="rounded-md border border-zinc-300 px-2 py-0.5 dark:border-zinc-600">
        {q}
      </span>
    </p>
  );
}

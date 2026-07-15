"use client";

import { useState } from "react";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Interactive counters belong in a client leaf with local{" "}
        <code>useState</code> — instant feedback, no round-trip.
      </DemoNote>
      <p className="font-mono text-sm">Client count: {count}</p>
      <button
        type="button"
        onClick={() => setCount((n) => n + 1)}
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Increment (client)
      </button>
    </div>
  );
}

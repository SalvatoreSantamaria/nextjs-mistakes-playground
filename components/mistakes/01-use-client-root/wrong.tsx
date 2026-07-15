"use client";

import { useState } from "react";
import { DemoMetric } from "@/components/DemoMetric";

/** Simulates a page that was incorrectly marked "use client" at the root */
export function Wrong() {
  const [n, setN] = useState(0);
  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This whole view is a client component (as if the page had{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
          &quot;use client&quot;
        </code>
        ). Even static text ships JS that did not need to.
      </p>
      <DemoMetric
        label="Client boundary"
        value="entire panel"
        tone="wrong"
      />
      <DemoMetric label="JS for this panel" value="high" tone="wrong" />
      <p className="font-mono text-sm">Client counter: {n}</p>
      <button
        type="button"
        onClick={() => setN((x) => x + 1)}
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Increment
      </button>
    </div>
  );
}

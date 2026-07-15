import { Suspense } from "react";
import { SlowChild } from "./slow-child";

/** Suspense sits one level below the slow call, wrapping the component that
 *  does the awaiting — the fallback actually streams in first. */
export function Right() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        The parent renders immediately.{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">Suspense</code> wraps{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">SlowChild</code>, the async component that
        actually awaits{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">getSlowMessage</code>, so the fallback streams
        in first.
      </p>
      <Suspense
        fallback={
          <p className="font-mono text-sm text-zinc-500">
            Loading slow message…
          </p>
        }
      >
        <SlowChild />
      </Suspense>
    </div>
  );
}

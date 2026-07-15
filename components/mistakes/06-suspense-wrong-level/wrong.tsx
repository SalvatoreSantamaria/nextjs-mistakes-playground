import { Suspense } from "react";
import { getSlowMessage } from "@/lib/data";

/** Anti-pattern: awaiting the slow data in the parent means the Suspense
 *  boundary below has nothing left to suspend on — its fallback can never
 *  actually appear. */
export async function Wrong() {
  const message = await getSlowMessage("Suspense demo (wrong level)");

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        The parent component <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">await</code>s the slow
        call itself, so the whole subtree blocks for 1.2s before anything
        renders. The <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">Suspense</code> boundary below is
        pointless — the data was already awaited above it, so the fallback
        never gets a chance to show.
      </p>
      <Suspense
        fallback={
          <p className="font-mono text-sm text-zinc-500">
            Loading… (you will never see this)
          </p>
        }
      >
        <p className="rounded-md border border-red-200 px-3 py-2 font-mono text-sm dark:border-red-900/50">
          {message}
        </p>
      </Suspense>
    </div>
  );
}

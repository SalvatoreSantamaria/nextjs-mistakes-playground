import { getSlowMessage } from "@/lib/data";

/** The async component that actually does the awaiting — this is what a
 *  Suspense boundary should wrap. */
export async function SlowChild() {
  const message = await getSlowMessage("Suspense demo");
  return (
    <p className="rounded-md border border-emerald-200 px-3 py-2 font-mono text-sm dark:border-emerald-900/50">
      {message}
    </p>
  );
}

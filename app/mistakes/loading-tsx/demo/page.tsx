import Link from "next/link";
import { getSlowMessage } from "@/lib/data";

export default async function LoadingDemoPage() {
  const message = await getSlowMessage("loading.tsx demo");

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/loading-tsx"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #15
      </Link>
      <h1 className="text-2xl font-semibold">loading.tsx demo</h1>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        {message}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        While this page awaited data, the sibling{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
          loading.tsx
        </code>{" "}
        showed a skeleton — no client spinner required.
      </p>
    </div>
  );
}

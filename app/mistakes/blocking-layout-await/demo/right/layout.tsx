import Link from "next/link";
import { Suspense } from "react";
import { getSlowMessage } from "@/lib/data";

async function SlowBanner() {
  const banner = await getSlowMessage("layout banner");
  return (
    <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 font-mono text-sm dark:border-emerald-900/50 dark:bg-emerald-950/40">
      Streamed: {banner}
    </div>
  );
}

export default function StreamingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/blocking-layout-await?mode=right"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #39
      </Link>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Layout chrome is instant. Banner streams in below.
      </p>
      <Suspense
        fallback={
          <p className="font-mono text-sm text-zinc-500">Loading banner…</p>
        }
      >
        <SlowBanner />
      </Suspense>
      {children}
    </div>
  );
}

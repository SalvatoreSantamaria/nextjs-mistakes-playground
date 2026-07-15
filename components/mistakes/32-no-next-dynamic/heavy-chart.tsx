"use client";

/** Simulated heavy client widget — static import pulls this into the page bundle. */
export function HeavyChart() {
  const bars = Array.from({ length: 24 }, (_, i) => 20 + ((i * 17) % 60));

  return (
    <div className="space-y-2 rounded-md border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        HeavyChart (client)
      </p>
      <div className="flex h-32 items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-zinc-800 dark:bg-zinc-200"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="font-mono text-xs text-zinc-500">
        Pretend this pulled a large charting library into the initial JS.
      </p>
    </div>
  );
}

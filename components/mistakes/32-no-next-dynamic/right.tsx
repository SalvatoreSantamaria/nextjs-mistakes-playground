"use client";

import dynamic from "next/dynamic";
import { DemoNote } from "@/components/DemoNote";

const HeavyChart = dynamic(
  () => import("./heavy-chart").then((m) => m.HeavyChart),
  {
    loading: () => (
      <p className="font-mono text-sm text-zinc-500">Loading chart chunk…</p>
    ),
  },
);

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        <code>next/dynamic</code> code-splits the chart so the shell can render
        first; the heavy chunk loads afterward.
      </DemoNote>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Shell is ready; chart streams in as its chunk loads.
      </p>
      <HeavyChart />
    </div>
  );
}

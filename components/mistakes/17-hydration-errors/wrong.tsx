"use client";

import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const now = new Date().toLocaleString();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Server HTML renders one timestamp; the client renders another on
        hydration — check the console for a mismatch warning.
      </DemoNote>
      <p className="font-mono text-sm">Rendered at: {now}</p>
    </div>
  );
}

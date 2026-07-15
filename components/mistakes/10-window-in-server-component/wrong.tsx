"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/DemoNote";

function WindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <p className="font-mono text-sm">
      window.innerWidth: {width ?? "…"}
    </p>
  );
}

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        You cannot use <code>window</code> in a Server Component — the build
        fails. Teams often mix browser APIs into the wrong layer instead of
        extracting a client leaf.
      </DemoNote>
      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100">
        <code>{`// page.tsx — Server Component (no "use client")
export default function Page() {
  const w = window.innerWidth; // ReferenceError at build/runtime
  return <div>{w}</div>;
}`}</code>
      </pre>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Below, browser width works — but only because this demo panel is already
        a client component (the anti-pattern when the whole page is forced client
        just for one value):
      </p>
      <WindowWidth />
    </div>
  );
}

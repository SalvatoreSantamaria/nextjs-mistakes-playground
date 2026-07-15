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

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        The RSC shell has no <code>window</code>. Only the small{" "}
        <code>WindowWidth</code> leaf is marked{" "}
        <code>&quot;use client&quot;</code>.
      </DemoNote>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This wrapper is a Server Component in the real app; here it is inlined
        next to the client leaf for the demo.
      </p>
      <WindowWidth />
    </div>
  );
}

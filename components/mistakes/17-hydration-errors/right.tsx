"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setNow(new Date().toLocaleString());
  }, []);

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Gate browser-only values behind <code>useEffect</code> (or a mounted
        flag) so server and client HTML match on first paint.
      </DemoNote>
      <p className="font-mono text-sm">
        {mounted ? `Client time: ${now}` : "Waiting for mount…"}
      </p>
    </div>
  );
}

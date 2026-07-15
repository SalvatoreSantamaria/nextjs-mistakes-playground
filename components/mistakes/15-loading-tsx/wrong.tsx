"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setMessage("Loaded after client-side delay");
      setLoading(false);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        The page was converted to a client component just to show a spinner —
        extra JS instead of a route-level <code>loading.tsx</code>.
      </DemoNote>
      {loading ? (
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100" />
          Loading…
        </div>
      ) : (
        <p className="font-mono text-sm">{message}</p>
      )}
    </div>
  );
}

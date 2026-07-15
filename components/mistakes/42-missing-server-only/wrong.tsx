"use client";

import { DemoNote } from "@/components/DemoNote";
import { getInternalConfig } from "@/lib/unsafe-dal";

export function Wrong() {
  const config = getInternalConfig();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        A Client Component imported a DAL without <code>server-only</code>. The
        connection string is now in the client bundle:
      </DemoNote>
      <p className="break-all rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-xs dark:border-red-900/50 dark:bg-red-950/40">
        {config.dbUrl}
      </p>
    </div>
  );
}

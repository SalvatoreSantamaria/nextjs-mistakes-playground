"use client";

import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const secret = process.env.DEMO_SECRET;
  const publicLabel = process.env.NEXT_PUBLIC_DEMO_LABEL;

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Non-<code>NEXT_PUBLIC_</code> env vars are stripped from the client
        bundle — secrets look &quot;safe&quot; but public vars must be prefixed.
      </DemoNote>
      <dl className="space-y-2 font-mono text-sm">
        <div>
          <dt className="text-zinc-500">process.env.DEMO_SECRET (client)</dt>
          <dd>{secret ?? "undefined — not exposed to client"}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">process.env.NEXT_PUBLIC_DEMO_LABEL</dt>
          <dd>{publicLabel ?? "undefined — set NEXT_PUBLIC_DEMO_LABEL"}</dd>
        </div>
      </dl>
    </div>
  );
}

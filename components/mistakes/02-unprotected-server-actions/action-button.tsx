"use client";

import { useState, useTransition } from "react";

type Result = { ok: boolean; message: string };

export function ActionButton({
  action,
  label,
}: {
  action: () => Promise<Result>;
  label: string;
}) {
  const [msg, setMsg] = useState<string | null>(null);
  const [pending, start] = useTransition();

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const res = await action();
            setMsg(res.message);
          })
        }
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? "Working…" : label}
      </button>
      {msg && <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400">{msg}</p>}
    </div>
  );
}

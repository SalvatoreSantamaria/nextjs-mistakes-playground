"use client";

import { useState } from "react";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        A plain form was marked <code>&quot;use client&quot;</code> just to
        handle submit — extra JS for no reason.
      </DemoNote>
      <form
        className="flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setMsg(`Client-only submit: "${name || "Item"}" (never hit a Server Action)`);
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Add (client form)
        </button>
      </form>
      {msg && <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400">{msg}</p>}
    </div>
  );
}

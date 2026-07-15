"use client";

import { useState, useTransition } from "react";
import { DemoNote } from "@/components/DemoNote";
import { getProductsBad } from "./bad-server";

type Product = { id: string; name: string };

export function Wrong() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [pending, start] = useTransition();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>getProductsBad</code> is exported from a{" "}
        <code>&quot;use server&quot;</code> file — so Next.js treats it as a
        public Server Action, even though it only reads data.
      </DemoNote>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        The client must POST to invoke a read that belongs in{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">lib/data.ts</code>.
      </p>
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            setProducts(await getProductsBad());
          })
        }
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? "Fetching…" : "Fetch via Server Action file (bad)"}
      </button>
      {products && (
        <ul className="space-y-1 font-mono text-sm">
          {products.map((p) => (
            <li
              key={p.id}
              className="rounded-md border border-red-200 px-3 py-1.5 dark:border-red-900/50"
            >
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

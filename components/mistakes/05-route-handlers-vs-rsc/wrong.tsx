"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/DemoNote";

type Product = { id: string; name: string };

export function Wrong() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/demo-products")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        A simple GET read was pushed into{" "}
        <code>/api/demo-products</code>, forcing client JS, a network hop, and
        loading state boilerplate.
      </DemoNote>
      {loading && <p className="text-sm text-zinc-500">Loading via fetch…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      {!loading && !error && (
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

import Link from "next/link";
import type { Metadata } from "next";
import { connection } from "next/server";
import {
  getProductUncached,
  peekProductHits,
} from "@/lib/demo-cache";

export async function generateMetadata(): Promise<Metadata> {
  await connection();
  const product = await getProductUncached("notebook");
  return {
    title: `${product.name} · uncached metadata demo`,
  };
}

export default async function UncachedMetadataDemoPage() {
  await connection();
  const product = await getProductUncached("notebook");
  const hits = peekProductHits("uncached");

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/duplicate-fetch-metadata?mode=wrong"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #16
      </Link>
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Price: ${product.price}. Check the browser tab title —{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
          generateMetadata
        </code>{" "}
        loaded the same product.
      </p>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        getProduct hits this request: <strong>{hits}</strong> (expect 2)
      </p>
      <p className="text-sm text-zinc-500">
        Refresh the page to run another request — the counter resets per
        request but stays at 2 each time.
      </p>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { connection } from "next/server";
import {
  getProductCached,
  peekProductHits,
} from "@/lib/demo-cache";

export async function generateMetadata(): Promise<Metadata> {
  await connection();
  const product = await getProductCached("notebook");
  return {
    title: `${product.name} · cache() metadata demo`,
  };
}

export default async function CachedMetadataDemoPage() {
  await connection();
  const product = await getProductCached("notebook");
  const hits = peekProductHits("cached");

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/duplicate-fetch-metadata?mode=right"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #16
      </Link>
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Same product loader is wrapped in React{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
          cache()
        </code>
        , so metadata and the page share one result.
      </p>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        getProduct hits this request: <strong>{hits}</strong> (expect 1)
      </p>
    </div>
  );
}

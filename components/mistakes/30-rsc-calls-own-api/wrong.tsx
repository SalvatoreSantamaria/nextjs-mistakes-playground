import { headers } from "next/headers";
import { DemoNote } from "@/components/DemoNote";

export async function Wrong() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const started = Date.now();
  const res = await fetch(`${proto}://${host}/api/demo-products`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { products: { id: string; name: string }[] };
  const ms = Date.now() - started;

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        This Server Component{" "}
        <code>fetch</code>es its own <code>/api/demo-products</code> — an
        HTTP round-trip to the same process instead of importing the DAL.
      </DemoNote>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        Self-fetch took ~{ms}ms
      </p>
      <ul className="space-y-1 font-mono text-sm">
        {data.products.map((p) => (
          <li
            key={p.id}
            className="rounded-md border border-red-200 px-3 py-1.5 dark:border-red-900/50"
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

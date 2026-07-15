import { getDemoProducts } from "@/lib/data";

export async function Right() {
  const products = await getDemoProducts();

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reads live in{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
          lib/data.ts
        </code>
        . This Server Component awaits{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
          getDemoProducts()
        </code>{" "}
        directly — no public action endpoint.
      </p>
      <ul className="space-y-1 font-mono text-sm">
        {products.map((p) => (
          <li
            key={p.id}
            className="rounded-md border border-emerald-200 px-3 py-1.5 dark:border-emerald-900/50"
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

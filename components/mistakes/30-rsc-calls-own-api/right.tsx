import { DemoNote } from "@/components/DemoNote";
import { getDemoProducts } from "@/lib/data";

export async function Right() {
  const started = Date.now();
  const products = await getDemoProducts();
  const ms = Date.now() - started;

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Import <code>getDemoProducts()</code> directly. The Route Handler can
        call the same function for external clients — no self-HTTP.
      </DemoNote>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        Direct DAL call took ~{ms}ms
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

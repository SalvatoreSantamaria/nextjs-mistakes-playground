import { addItemAction } from "@/lib/actions";
import { getCart } from "@/lib/data";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  const items = getCart();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        No client boundary needed — the form posts to a Server Action via{" "}
        <code>action={"{"}addItemAction{"}"}</code>.
      </DemoNote>
      <form action={addItemAction} className="flex flex-wrap gap-2">
        <input
          name="name"
          placeholder="Item name"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Add (Server Action)
        </button>
      </form>
      <ul className="font-mono text-sm">
        {items.length === 0 ? (
          <li className="text-zinc-500">Cart empty</li>
        ) : (
          items.map((i) => <li key={i.id}>{i.name}</li>)
        )}
      </ul>
    </div>
  );
}

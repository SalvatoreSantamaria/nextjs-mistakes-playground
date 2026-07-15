import { addItemWithoutRevalidate } from "@/lib/actions";
import { getCart } from "@/lib/data";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const items = getCart();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        The mutation runs, but without <code>revalidatePath</code> the Server
        Component list may stay stale until a full refresh.
      </DemoNote>
      <form action={addItemWithoutRevalidate} className="flex flex-wrap gap-2">
        <input
          name="name"
          placeholder="Item name"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Add (no revalidate)
        </button>
      </form>
      <ul className="font-mono text-sm">
        {items.length === 0 ? (
          <li className="text-zinc-500">Cart empty — add an item</li>
        ) : (
          items.map((i) => <li key={i.id}>{i.name}</li>)
        )}
      </ul>
    </div>
  );
}

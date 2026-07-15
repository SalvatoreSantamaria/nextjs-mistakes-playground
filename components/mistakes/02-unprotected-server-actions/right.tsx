import { cookies } from "next/headers";
import { protectedDeleteAll, setDemoSession } from "@/lib/actions";
import { getCart, addToCart } from "@/lib/data";
import { ActionButton } from "./action-button";

export async function Right() {
  const jar = await cookies();
  const session = jar.get("demo_session")?.value ?? "(none)";
  if (getCart().length === 0) addToCart("Demo item");
  const items = getCart();
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Protected action checks{" "}
        <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">demo_session</code>{" "}
        before mutating. Set role to <strong>admin</strong> to succeed.
      </p>
      <p className="font-mono text-xs">Current session: {session}</p>
      <form action={setDemoSession} className="flex flex-wrap gap-2">
        <button
          name="role"
          value="guest"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600"
        >
          Set guest
        </button>
        <button
          name="role"
          value="admin"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600"
        >
          Set admin
        </button>
      </form>
      <ul className="font-mono text-sm">
        {items.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
      <ActionButton action={protectedDeleteAll} label="Delete all (protected)" />
    </div>
  );
}

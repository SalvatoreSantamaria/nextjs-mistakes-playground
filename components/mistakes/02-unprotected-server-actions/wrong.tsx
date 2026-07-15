import { unprotectedDeleteAll } from "@/lib/actions";
import { getCart, addToCart } from "@/lib/data";
import { ActionButton } from "./action-button";

export function Wrong() {
  if (getCart().length === 0) addToCart("Demo item");
  const items = getCart();
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This action has no auth check — anyone who can hit the endpoint can
        clear data.
      </p>
      <ul className="font-mono text-sm">
        {items.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
      <ActionButton action={unprotectedDeleteAll} label="Delete all (unprotected)" />
    </div>
  );
}

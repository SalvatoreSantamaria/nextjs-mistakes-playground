import { ClickCounter } from "./click-counter";

/** Server Component page shell with a small client leaf */
export function Right() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This outer shell is a Server Component. Only the button below is a
        client leaf — the recommended pattern.
      </p>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        Served as RSC static text (no client JS required for this paragraph).
      </p>
      <ClickCounter />
    </div>
  );
}

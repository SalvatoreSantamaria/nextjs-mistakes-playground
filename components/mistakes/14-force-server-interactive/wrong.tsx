import { incrementViaServerAction } from "./counter-actions";
import { getServerCount } from "./counter-store";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const count = getServerCount();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Every click round-trips to the server — laggy for simple local UI state.
      </DemoNote>
      <p className="font-mono text-sm">Server-stored count: {count}</p>
      <form action={incrementViaServerAction}>
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Increment (Server Action)
        </button>
      </form>
    </div>
  );
}

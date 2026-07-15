import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Pair <code>loading.tsx</code> with <code>error.tsx</code> at the same
        route segment so render failures show recovery UI.
      </DemoNote>
      <Link
        href="/mistakes/error-tsx/demo"
        className="inline-block rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
      >
        Open demo route (toggle ?fail=1) →
      </Link>
    </div>
  );
}

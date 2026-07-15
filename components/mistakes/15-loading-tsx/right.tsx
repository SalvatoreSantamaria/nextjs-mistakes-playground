import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Keep the page a Server Component and add{" "}
        <code>loading.tsx</code> at the route segment — instant streaming UI
        with no client spinner boilerplate.
      </DemoNote>
      <Link
        href="/mistakes/loading-tsx/demo"
        className="inline-block rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
      >
        Open demo route with loading.tsx →
      </Link>
    </div>
  );
}

import { headers } from "next/headers";
import { DemoNote } from "@/components/DemoNote";
import { bumpDemoVersion } from "@/lib/actions";

async function readVersion(path: string) {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const res = await fetch(`${proto}://${host}${path}`);
  return res.json() as Promise<{ value: string; at: string }>;
}

export async function Wrong() {
  const data = await readVersion("/api/demo-version");

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Fetching <code>/api/demo-version</code> with no cache options — after you
        bump the store, a cached GET can keep serving the old value.
      </DemoNote>
      <p className="font-mono text-sm">
        value={data.value} · at={data.at}
      </p>
      <form action={bumpDemoVersion}>
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Bump server value
        </button>
      </form>
      <p className="text-sm text-zinc-500">
        Refresh this wrong panel after bumping — the timestamp/value may stick if
        the GET was cached.
      </p>
    </div>
  );
}

import { headers } from "next/headers";
import { DemoNote } from "@/components/DemoNote";
import { bumpDemoVersion } from "@/lib/actions";

export async function Wrong() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const res = await fetch(`${proto}://${host}/api/demo-version`);
  const data = (await res.json()) as { value: string; at: string };

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>GET /api/demo-version</code> has no <code>dynamic</code> /
        no-store opt-out. People expect “always now”; caching can freeze the
        timestamp.
      </DemoNote>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        {data.value} · {data.at}
      </p>
      <form action={bumpDemoVersion}>
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Bump underlying value
        </button>
      </form>
    </div>
  );
}

import { headers } from "next/headers";
import { DemoNote } from "@/components/DemoNote";
import { bumpDemoVersion } from "@/lib/actions";

async function readFreshVersion() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const res = await fetch(`${proto}://${host}/api/demo-version-fresh`, {
    cache: "no-store",
  });
  return res.json() as Promise<{ value: string; at: string }>;
}

export async function Right() {
  const data = await readFreshVersion();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Be explicit: <code>cache: &apos;no-store&apos;</code> (and/or a dynamic
        Route Handler) when the read must always be fresh.
      </DemoNote>
      <p className="font-mono text-sm">
        value={data.value} · at={data.at}
      </p>
      <form action={bumpDemoVersion}>
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
        >
          Bump server value
        </button>
      </form>
      <p className="text-sm text-zinc-500">
        After bumping, this panel should show the new value on the next render.
      </p>
    </div>
  );
}

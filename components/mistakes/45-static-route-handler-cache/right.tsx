import { headers } from "next/headers";
import { DemoNote } from "@/components/DemoNote";
import { bumpDemoVersion } from "@/lib/actions";

export async function Right() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const res = await fetch(`${proto}://${host}/api/demo-version-fresh`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { value: string; at: string };

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Mark the handler <code>dynamic = &apos;force-dynamic&apos;</code> (and/or
        fetch with <code>cache: &apos;no-store&apos;</code>) when freshness is
        required.
      </DemoNote>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        {data.value} · {data.at}
      </p>
      <form action={bumpDemoVersion}>
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
        >
          Bump underlying value
        </button>
      </form>
    </div>
  );
}

import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";
import { setDemoSession } from "@/lib/actions";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Guard the segment in <code>proxy.ts</code> before React renders — no
        flash of protected UI. Matcher is scoped to this demo path only.
      </DemoNote>
      <div className="flex flex-wrap gap-2">
        <form action={setDemoSession}>
          <input type="hidden" name="role" value="admin" />
          <button
            type="submit"
            className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white"
          >
            Set demo_session=admin
          </button>
        </form>
        <form action={setDemoSession}>
          <input type="hidden" name="role" value="guest" />
          <button
            type="submit"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600"
          >
            Set guest (clear admin)
          </button>
        </form>
      </div>
      <Link
        href="/mistakes/client-auth-redirect/demo/protected"
        className="inline-block rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
      >
        Open proxy-protected demo →
      </Link>
      <p className="text-sm text-zinc-500">
        As guest you are redirected before the protected page renders.
      </p>
    </div>
  );
}

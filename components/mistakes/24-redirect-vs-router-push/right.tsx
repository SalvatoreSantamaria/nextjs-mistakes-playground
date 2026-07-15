import { serverRedirectHome } from "@/lib/actions";
import { DemoNote } from "@/components/DemoNote";
import { ClientNav } from "./client-nav";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Use <code>redirect()</code> from Server Actions or RSC for authoritative
        navigation. Use <code>router.push</code> only when you need client-side
        UI first (toasts, animations).
      </DemoNote>
      <form action={serverRedirectHome}>
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          redirect(&quot;/&quot;) via Server Action
        </button>
      </form>
      <ClientNav />
    </div>
  );
}

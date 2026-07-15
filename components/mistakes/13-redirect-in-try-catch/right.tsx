import { redirectRight } from "@/lib/actions";
import { DemoNote } from "@/components/DemoNote";
import { LandingNote } from "./landing-note";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Call <code>redirect()</code> outside the catch block (or rethrow redirect
        errors) so navigation completes.
      </DemoNote>
      <form action={redirectRight}>
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Redirect (outside catch — good)
        </button>
      </form>
      <LandingNote />
    </div>
  );
}

import { DemoNote } from "@/components/DemoNote";
import { slowSaveNote } from "@/lib/actions";
import { SubmitButton } from "./submit-button";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        This form is a Server Component. Only <code>SubmitButton</code> is a
        client leaf that calls <code>useFormStatus</code>.
      </DemoNote>
      <form action={slowSaveNote} className="flex flex-wrap gap-2">
        <input
          name="note"
          placeholder="Note"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <SubmitButton />
      </form>
    </div>
  );
}

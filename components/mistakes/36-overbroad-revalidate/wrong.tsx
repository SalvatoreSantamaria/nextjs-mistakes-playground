import { DemoNote } from "@/components/DemoNote";
import { getCachedNote } from "@/lib/demo-cache";
import { saveNoteBroad } from "@/lib/actions";

export async function Wrong() {
  const note = await getCachedNote();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Saving a sticky note calls <code>revalidatePath(&apos;/&apos;)</code> and
        a layout-wide path — far more cache work than this edit needs.
      </DemoNote>
      <p className="font-mono text-sm">
        Note:{" "}
        <span className="rounded-md border border-red-200 px-2 py-0.5 dark:border-red-900/50">
          {note}
        </span>
      </p>
      <form action={saveNoteBroad} className="flex flex-wrap gap-2">
        <input
          name="note"
          defaultValue={note}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Save + revalidatePath(&apos;/&apos;)
        </button>
      </form>
    </div>
  );
}

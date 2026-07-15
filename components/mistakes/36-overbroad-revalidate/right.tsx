import { DemoNote } from "@/components/DemoNote";
import { getCachedNote } from "@/lib/demo-cache";
import { saveNoteNarrow } from "@/lib/actions";

export async function Right() {
  const note = await getCachedNote();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        <code>updateTag(&apos;demo-note&apos;)</code> expires only the note cache
        entry — unrelated pages stay warm.
      </DemoNote>
      <p className="font-mono text-sm">
        Note:{" "}
        <span className="rounded-md border border-emerald-200 px-2 py-0.5 dark:border-emerald-900/50">
          {note}
        </span>
      </p>
      <form action={saveNoteNarrow} className="flex flex-wrap gap-2">
        <input
          name="note"
          defaultValue={note}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
        >
          Save + updateTag()
        </button>
      </form>
    </div>
  );
}

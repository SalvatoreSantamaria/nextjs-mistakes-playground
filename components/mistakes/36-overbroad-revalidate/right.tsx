import { DemoNote } from "@/components/DemoNote";
import { DemoMetric } from "@/components/DemoMetric";
import { getCachedNote, getCachedSidebarTip } from "@/lib/demo-cache";
import { saveNoteNarrow } from "@/lib/actions";

export async function Right() {
  const note = await getCachedNote();
  const tip = await getCachedSidebarTip();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Only <code>updateTag(&apos;demo-note&apos;)</code> runs. The unrelated
        tip keeps its <code>cachedAt</code> — still warm.
      </DemoNote>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2 rounded-md border border-emerald-200 p-3 dark:border-emerald-900/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Note (edited)
          </p>
          <p className="font-mono text-sm">{note.text}</p>
          <DemoMetric label="cachedAt" value={note.cachedAt} tone="right" />
        </div>
        <div className="space-y-2 rounded-md border border-emerald-200 p-3 dark:border-emerald-900/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Unrelated tip
          </p>
          <p className="font-mono text-sm">{tip.text}</p>
          <DemoMetric label="cachedAt" value={tip.cachedAt} tone="right" />
        </div>
      </div>
      <form action={saveNoteNarrow} className="flex flex-wrap gap-2">
        <input
          name="note"
          defaultValue={note.text}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
        >
          Save + updateTag(note only)
        </button>
      </form>
    </div>
  );
}

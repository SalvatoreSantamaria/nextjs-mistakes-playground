import { DemoNote } from "@/components/DemoNote";
import { DemoMetric } from "@/components/DemoMetric";
import { getCachedNote, getCachedSidebarTip } from "@/lib/demo-cache";
import { saveNoteBroad } from "@/lib/actions";

export async function Wrong() {
  const note = await getCachedNote();
  const tip = await getCachedSidebarTip();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Saving the note also expires an unrelated sidebar cache (and broad
        paths). Watch both <code>cachedAt</code> values jump.
      </DemoNote>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2 rounded-md border border-red-200 p-3 dark:border-red-900/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Note (edited)
          </p>
          <p className="font-mono text-sm">{note.text}</p>
          <DemoMetric label="cachedAt" value={note.cachedAt} tone="wrong" />
        </div>
        <div className="space-y-2 rounded-md border border-red-200 p-3 dark:border-red-900/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Unrelated tip
          </p>
          <p className="font-mono text-sm">{tip.text}</p>
          <DemoMetric label="cachedAt" value={tip.cachedAt} tone="wrong" />
        </div>
      </div>
      <form action={saveNoteBroad} className="flex flex-wrap gap-2">
        <input
          name="note"
          defaultValue={note.text}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Save (broad invalidation)
        </button>
      </form>
    </div>
  );
}

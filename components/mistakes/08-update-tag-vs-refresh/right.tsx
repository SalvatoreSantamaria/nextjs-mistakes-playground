import { DemoNote } from "@/components/DemoNote";
import { getCachedProfile } from "@/lib/demo-cache";
import { resetProfileDemo, updateProfileWithTag } from "@/lib/actions";

export async function Right() {
  const profile = await getCachedProfile();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        The Server Action calls <code>updateTag(&apos;demo-profile&apos;)</code>{" "}
        after the write so the tagged cache expires in the same request —
        read-your-own-writes, no client refresh required.
      </DemoNote>
      <p className="font-mono text-sm">
        Cached profile name:{" "}
        <span className="rounded-md border border-emerald-200 px-2 py-0.5 dark:border-emerald-900/50">
          {profile.name}
        </span>
      </p>
      <form action={updateProfileWithTag} className="flex flex-wrap items-end gap-2">
        <label className="block text-sm">
          <span className="mb-1 block text-zinc-500">New display name</span>
          <input
            name="name"
            defaultValue={profile.name}
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          Save + updateTag()
        </button>
      </form>
      <form action={resetProfileDemo}>
        <button
          type="submit"
          className="font-mono text-xs text-zinc-500 underline hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          Reset profile
        </button>
      </form>
    </div>
  );
}

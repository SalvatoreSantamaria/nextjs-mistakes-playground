import { DemoNote } from "@/components/DemoNote";
import { getPostsUntagged } from "@/lib/demo-cache";
import { createPostWithoutTag, resetPostsDemo } from "@/lib/actions";

export async function Wrong() {
  const posts = await getPostsUntagged();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Posts are cached with <code>unstable_cache</code> but no tags. After you
        add a post there is nothing to invalidate — the list stays stale until
        the process restarts.
      </DemoNote>
      <ul className="space-y-1 font-mono text-sm">
        {posts.map((p) => (
          <li
            key={p.id}
            className="rounded-md border border-red-200 px-3 py-1.5 dark:border-red-900/50"
          >
            {p.title}
          </li>
        ))}
      </ul>
      <form action={createPostWithoutTag} className="flex flex-wrap gap-2">
        <input
          name="title"
          placeholder="New post title"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Add (no tag / no revalidate)
        </button>
      </form>
      <form action={resetPostsDemo}>
        <button
          type="submit"
          className="font-mono text-xs text-zinc-500 underline hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          Reset posts store + clear tagged cache
        </button>
      </form>
    </div>
  );
}

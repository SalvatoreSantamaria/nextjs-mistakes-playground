import { DemoNote } from "@/components/DemoNote";
import { getPostsTagged } from "@/lib/demo-cache";
import { createPostWithTag, resetPostsDemo } from "@/lib/actions";

export async function Right() {
  const posts = await getPostsTagged();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        The cache entry is tagged <code>demo-posts</code>. After creating a
        post, <code>updateTag(&apos;demo-posts&apos;)</code> expires it so the
        list refetches immediately.
      </DemoNote>
      <ul className="space-y-1 font-mono text-sm">
        {posts.map((p) => (
          <li
            key={p.id}
            className="rounded-md border border-emerald-200 px-3 py-1.5 dark:border-emerald-900/50"
          >
            {p.title}
          </li>
        ))}
      </ul>
      <form action={createPostWithTag} className="flex flex-wrap gap-2">
        <input
          name="title"
          placeholder="New post title"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          Add + updateTag()
        </button>
      </form>
      <form action={resetPostsDemo}>
        <button
          type="submit"
          className="font-mono text-xs text-zinc-500 underline hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          Reset posts
        </button>
      </form>
    </div>
  );
}

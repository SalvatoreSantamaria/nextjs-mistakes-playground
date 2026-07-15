import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="A cached fetch is never tagged, so when the underlying data changes there's no way to invalidate just that entry — the only option is waiting for the revalidate window or nuking the whole cache."
      code={`async function getPosts() {
  'use cache'
  // No cacheTag() call, so this entry has no handle
  // that a mutation can later target for invalidation.
  return fetch('https://api.example.com/posts').then((r) => r.json())
}

export async function createPost(formData: FormData) {
  'use server'
  await db.posts.create({ title: formData.get('title') })
  // Nothing to revalidate — the posts list stays stale
  // until its default revalidate window expires.
}`}
    />
  );
}

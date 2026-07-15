import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Tag the cached fetch with cacheTag() when it's created, then call revalidateTag() from the Server Action that mutates the underlying data — only that tag's cache entries are invalidated."
      code={`import { cacheTag, revalidateTag } from 'next/cache'

async function getPosts() {
  'use cache'
  cacheTag('posts')
  return fetch('https://api.example.com/posts').then((r) => r.json())
}

export async function createPost(formData: FormData) {
  'use server'
  await db.posts.create({ title: formData.get('title') })
  // Marks the 'posts' tag stale-while-revalidate;
  // only entries tagged 'posts' are affected.
  revalidateTag('posts', 'max')
}`}
    />
  );
}

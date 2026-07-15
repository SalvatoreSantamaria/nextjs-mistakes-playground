import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Read cookies() outside the cache boundary and pass the value as an argument to a plain 'use cache' function, so the result can be part of the static shell and shared across requests when possible."
      code={`import { cookies } from 'next/headers'
import { cacheLife } from 'next/cache'

async function getRecommendations(productId: string, sessionId: string) {
  'use cache'
  cacheLife('hours')
  // sessionId is just a serializable argument now,
  // so this can be prerendered and cached server-side.
  return fetchRecs(productId, sessionId)
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const sessionId = (await cookies()).get('session-id')?.value ?? 'guest'
  return <Recommendations data={await getRecommendations(id, sessionId)} />
}

// Reserve 'use cache: private' only for cases where refactoring
// runtime data out of the cached scope truly isn't practical.`}
    />
  );
}

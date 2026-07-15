import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="Reaching for 'use cache: private' by default because a function happens to read cookies(), even though the value could easily be read outside the cache and passed in as an argument."
      code={`import { cookies } from 'next/headers'

async function getRecommendations(productId: string) {
  'use cache: private'
  // Never persisted server-side, only cached in-browser,
  // and this function can't be part of the static shell.
  const sessionId = (await cookies()).get('session-id')?.value
  return fetchRecs(productId, sessionId)
}

// Used for every product page, even anonymous visitors
// who don't need per-session personalization at all.`}
    />
  );
}

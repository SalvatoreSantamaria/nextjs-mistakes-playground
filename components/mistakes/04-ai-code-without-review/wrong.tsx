import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="An AI assistant generates a fix or feature and it's merged straight from the suggestion, with no diff review, no local run, and no check of what APIs it assumed existed."
      code={`// Workflow, not code:
// 1. Ask AI: "add caching to getProduct()"
// 2. AI returns a diff using 'use cache' + cacheTag()
// 3. Accept-all, commit, push
// 4. Deploy straight to production

// Nobody checked:
// - Does this Next.js version even support 'use cache'?
// - Is cacheComponents enabled in next.config.ts?
// - Did the AI invent a config flag that doesn't exist?
export async function getProduct(id: string) {
  'use cache'
  cacheTag(\`product-\${id}\`) // cacheTag never imported!
  return fetch(\`/api/products/\${id}\`)
}`}
    />
  );
}

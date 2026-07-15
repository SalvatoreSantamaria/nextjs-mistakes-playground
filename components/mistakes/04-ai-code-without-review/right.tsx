import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="AI-generated diffs go through the same checklist as any PR: read the diff, verify imports and config against the docs actually installed in node_modules, then run it locally before merging."
      code={`// Checklist before merging AI-generated Next.js code:
// [ ] Read the full diff, don't "accept all"
// [ ] Grep node_modules/next/dist/docs for any API used
// [ ] Confirm required next.config.ts flags are set
// [ ] Run \`next build\` locally, not just \`next dev\`
// [ ] Check imports actually exist (e.g. cacheTag from 'next/cache')

import { cacheTag } from 'next/cache'

export async function getProduct(id: string) {
  'use cache'
  cacheTag(\`product-\${id}\`)
  return fetch(\`/api/products/\${id}\`)
}

// Verified: cacheComponents: true is set in next.config.ts,
// and 'next build' completed without cache-related errors.`}
    />
  );
}

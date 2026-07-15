import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="The static `metadata` object export tries to read route params or fetched data directly. The object is evaluated once at the module level, so params is undefined and any promise is silently ignored."
      code={`// app/products/[id]/page.tsx
import type { Metadata } from 'next'

type Props = { params: Promise<{ id: string }> }

// params is never available here — this object is
// built once when the module loads, not per request.
export const metadata: Metadata = {
  title: \`Product \${params.id}\`, // TypeError: params is undefined
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <ProductView id={id} />
}`}
    />
  );
}

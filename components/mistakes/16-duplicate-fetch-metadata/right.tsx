import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Wrap the shared data loader in React's cache() so generateMetadata and the Page component dedupe onto a single call per request, no matter how many places import the helper."
      code={`import { cache } from 'react'

const getProduct = cache(async (id: string) => {
  // Memoized per render pass — same 'id' returns the
  // same in-flight promise instead of querying twice.
  return db.product.findUnique({ where: { id } })
})

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id) // query #1
  return { title: product.name }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id) // reuses query #1's result
  return <ProductView product={product} />
}`}
    />
  );
}

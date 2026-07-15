import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Use the async generateMetadata function whenever metadata depends on params, searchParams, or fetched data — it runs per request and can await everything it needs before returning the Metadata object."
      code={`// app/products/[id]/page.tsx
import type { Metadata } from 'next'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  return { title: product.name }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <ProductView id={id} />
}

// Note: you cannot export both \`metadata\` and
// \`generateMetadata\` from the same route segment.`}
    />
  );
}

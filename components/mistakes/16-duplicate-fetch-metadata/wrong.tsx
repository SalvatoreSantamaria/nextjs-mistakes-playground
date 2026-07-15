import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="generateMetadata and the Page component each call a plain async helper to load the same product, so the database (or non-fetch API) is hit twice per request instead of once."
      code={`async function getProduct(id: string) {
  // Not a fetch() call, so Next.js's automatic
  // fetch de-duplication doesn't apply here at all.
  return db.product.findUnique({ where: { id } })
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id) // query #1
  return { title: product.name }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id) // query #2, same data
  return <ProductView product={product} />
}`}
    />
  );
}

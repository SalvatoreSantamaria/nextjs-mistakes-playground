import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="Debug console.log calls added during development ship straight to production because nothing strips them, leaking internal state, request payloads, and stack traces into browser and server logs."
      code={`export async function checkout(formData: FormData) {
  console.log('checkout formData:', formData) // ships to prod
  const card = formData.get('cardNumber')
  console.log('card number:', card) // leaks sensitive data

  const result = await charge(card)
  console.log('charge result:', result)
  return result
}

// next.config.ts has no compiler options at all —
// every console.* call survives the production build.
const nextConfig = {}
export default nextConfig`}
    />
  );
}

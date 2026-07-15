import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Configure compiler.removeConsole in next.config.ts so the production build strips console calls automatically, while keeping console.error (or a real logger) so genuine failures are still visible."
      code={`// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    // Strips console.log/info/warn/debug from the
    // production build, but keeps console.error.
    removeConsole: { exclude: ['error'] },
  },
}

export default nextConfig

// actions.ts
export async function checkout(formData: FormData) {
  const card = formData.get('cardNumber')
  try {
    return await charge(card)
  } catch (err) {
    console.error('charge failed', err) // survives the build
    throw err
  }
}`}
    />
  );
}

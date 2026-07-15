import { ExplainPanel } from "@/components/ExplainPanel";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <ExplainPanel
        label="Wrong"
        description="Server Components cannot pass functions (or many class instances) to Client Components — the RSC payload only carries serializable data."
        code={`// Server Component
import { ClientCard } from './client-card'

export default function Page() {
  return (
    <ClientCard
      title="Hello"
      // Functions are not serializable across the boundary
      onSelect={() => console.log('picked')}
    />
  )
}

// Runtime/build error:
// Functions cannot be passed directly to Client Components…`}
      />
      <DemoNote tone="wrong">
        This mistake is shown as code because shipping the broken pattern would
        fail the render. Switch to Right for a working serializable version.
      </DemoNote>
    </div>
  );
}

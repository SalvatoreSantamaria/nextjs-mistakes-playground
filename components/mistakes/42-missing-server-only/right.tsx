import { DemoNote } from "@/components/DemoNote";
import { ExplainPanel } from "@/components/ExplainPanel";
import { getSafeInternalConfig } from "@/lib/safe-dal";

export function Right() {
  const config = getSafeInternalConfig();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        <code>lib/safe-dal.ts</code> starts with <code>import &apos;server-only&apos;</code>.
        Only Server Components (or Server Actions) can import it — the URL never
        reaches the client bundle.
      </DemoNote>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        Server-only read OK · region={config.region}
      </p>
      <ExplainPanel
        label="Right"
        description="If a Client Component imported this module, the build would fail."
        code={`import 'server-only'

export function getSafeInternalConfig() {
  return { dbUrl: process.env.DATABASE_URL }
}

// Client file that imports this → build error from server-only`}
      />
    </div>
  );
}

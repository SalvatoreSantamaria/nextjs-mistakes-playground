import { ExplainPanel } from "@/components/ExplainPanel";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <ExplainPanel
        label="Wrong"
        description="Calling a mutation during Server Component render causes side effects on every render, races between requests, and stale UI — RSC output is not reactive to writes."
        code={`// page.tsx — Server Component
import { addToCart, getCart } from '@/lib/data';

export default function Page({ searchParams }) {
  if (searchParams.add) {
    addToCart('Free sticker'); // runs during render!
  }
  return <ul>{getCart().map(...)}</ul>;
}`}
      />
      <DemoNote tone="wrong">
        Never mutate in render — use a Server Action triggered by a form or
        event, then revalidate.
      </DemoNote>
    </div>
  );
}

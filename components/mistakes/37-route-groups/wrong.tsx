import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="A flat app/ tree mixes public marketing, auth, and authenticated product routes — shared layouts become awkward and files sprawl."
      code={`app/
  page.tsx          # marketing home
  login/page.tsx
  signup/page.tsx
  dashboard/page.tsx
  settings/page.tsx
  admin/users/page.tsx
  admin/billing/page.tsx
  layout.tsx        # one layout forced on everyone`}
    />
  );
}

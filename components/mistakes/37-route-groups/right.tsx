import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Route groups (folders in parentheses) organize segments and shared layouts without changing the URL."
      code={`app/
  (marketing)/
    page.tsx              # URL: /
    layout.tsx            # marketing chrome
  (auth)/
    login/page.tsx        # URL: /login
    signup/page.tsx       # URL: /signup
    layout.tsx            # centered auth shell
  (app)/
    dashboard/page.tsx    # URL: /dashboard
    settings/page.tsx
    layout.tsx            # app nav + sidebar
  (admin)/
    admin/users/page.tsx
    layout.tsx            # admin-only shell`}
    />
  );
}

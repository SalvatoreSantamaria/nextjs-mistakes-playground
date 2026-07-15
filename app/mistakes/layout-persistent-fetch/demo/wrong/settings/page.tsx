import { connection } from "next/server";
import { getUserForPage } from "@/lib/demo-cache";

export default async function WrongSettingsPage() {
  await connection();
  const user = await getUserForPage();

  return (
    <div className="space-y-2 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/40">
      <h2 className="text-lg font-medium">Settings</h2>
      <p className="font-mono text-sm">
        User: {user.name} · fetched at {user.fetchedAt}
      </p>
      <p className="text-sm text-red-800 dark:text-red-200">
        Fetched inside <code>settings/page.tsx</code> — navigating to Billing
        will fetch again.
      </p>
    </div>
  );
}

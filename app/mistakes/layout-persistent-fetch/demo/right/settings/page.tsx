export default function RightSettingsPage() {
  return (
    <div className="space-y-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/40">
      <h2 className="text-lg font-medium">Settings</h2>
      <p className="text-sm text-emerald-900 dark:text-emerald-100">
        No user fetch here — the page reads shared data from the parent layout
        (shown above).
      </p>
    </div>
  );
}

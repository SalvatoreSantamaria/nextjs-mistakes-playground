export default function BlockingChildPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Child page</h1>
      <p className="text-sm text-red-800 dark:text-red-200">
        You only see this after the layout finished its 1.2s await — the whole
        segment was blocked.
      </p>
    </div>
  );
}

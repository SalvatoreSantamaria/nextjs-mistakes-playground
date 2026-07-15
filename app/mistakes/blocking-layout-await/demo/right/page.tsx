export default function StreamingChildPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Child page</h1>
      <p className="text-sm text-emerald-800 dark:text-emerald-200">
        This content can paint while the banner is still loading.
      </p>
    </div>
  );
}

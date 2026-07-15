export default function Loading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-8 w-64 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-4 w-full max-w-md rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-4 w-3/4 max-w-sm rounded bg-zinc-200 dark:bg-zinc-800" />
      <p className="text-sm text-zinc-500">loading.tsx skeleton…</p>
    </div>
  );
}

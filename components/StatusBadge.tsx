import type { MistakeMode } from "@/lib/mistakes";

export function StatusBadge({ mode }: { mode: MistakeMode }) {
  if (mode === "live") {
    return (
      <span className="inline-flex items-center rounded-md bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800 dark:bg-sky-950 dark:text-sky-200">
        Live demo
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-200">
      Explanation
    </span>
  );
}

"use client";

export function ClientPublicLabel({ label }: { label: string }) {
  return (
    <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm dark:border-emerald-900/50 dark:bg-emerald-950/40">
      Public label from server prop:{" "}
      <span className="font-mono">{label}</span>
    </p>
  );
}

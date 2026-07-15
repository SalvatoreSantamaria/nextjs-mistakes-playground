"use client";

type Props = {
  title: string;
  createdAtIso: string;
};

export function ClientCard({ title, createdAtIso }: Props) {
  const createdAt = new Date(createdAtIso);

  return (
    <div className="rounded-md border border-emerald-200 px-3 py-2 dark:border-emerald-900/50">
      <p className="font-medium">{title}</p>
      <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">
        Created {createdAt.toLocaleString()}
      </p>
    </div>
  );
}

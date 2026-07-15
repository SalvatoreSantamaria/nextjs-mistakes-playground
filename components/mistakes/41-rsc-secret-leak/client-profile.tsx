"use client";

type Props = {
  user: Record<string, string>;
};

export function ClientProfile({ user }: Props) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100">
      {JSON.stringify(user, null, 2)}
    </pre>
  );
}

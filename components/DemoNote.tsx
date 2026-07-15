import type { ReactNode } from "react";

type Tone = "neutral" | "wrong" | "right";

type Props = {
  tone?: Tone;
  children: ReactNode;
};

const toneClasses: Record<Tone, string> = {
  neutral:
    "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
  wrong:
    "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-100",
  right:
    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100",
};

export function DemoNote({ tone = "neutral", children }: Props) {
  return (
    <div className={`rounded-lg border p-3 text-sm ${toneClasses[tone]}`}>
      {children}
    </div>
  );
}

type Tone = "wrong" | "right" | "neutral";

type Props = {
  label: string;
  value: string;
  tone?: Tone;
};

const toneClasses: Record<Tone, string> = {
  neutral:
    "border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100",
  wrong:
    "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-100",
  right:
    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100",
};

export function DemoMetric({ label, value, tone = "neutral" }: Props) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-2 rounded-md border px-3 py-2 font-mono text-xs ${toneClasses[tone]}`}
    >
      <span className="uppercase tracking-wide opacity-70">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

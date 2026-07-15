type Props = {
  label: "Wrong" | "Right";
  description: string;
  code: string;
};

export function ExplainPanel({ label, description, code }: Props) {
  const isWrong = label === "Wrong";
  return (
    <div className="space-y-4">
      <div>
        <p
          className={`mb-1 text-xs font-semibold uppercase tracking-wide ${
            isWrong
              ? "text-red-700 dark:text-red-300"
              : "text-emerald-700 dark:text-emerald-300"
          }`}
        >
          {label} pattern
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
      </div>
      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

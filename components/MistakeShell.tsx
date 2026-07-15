"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  getCategory,
  type Mistake,
  type MistakeMode,
} from "@/lib/mistakes";
import { StatusBadge } from "./StatusBadge";

type Props = {
  mistake: Mistake;
  wrong: React.ReactNode;
  right: React.ReactNode;
};

export function MistakeShell({ mistake, wrong, right }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") === "right" ? "right" : "wrong";
  const category = getCategory(mistake.category);

  function setMode(next: "wrong" | "right") {
    const params = new URLSearchParams(searchParams.toString());
    params.set("mode", next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-zinc-500">#{mistake.id}</span>
          {category && (
            <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {category.label}
            </span>
          )}
          <StatusBadge mode={mistake.mode as MistakeMode} />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {mistake.title}
        </h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/40">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-300">
              Problem
            </p>
            <p className="text-sm text-red-950 dark:text-red-100">{mistake.problem}</p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/40">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Solution
            </p>
            <p className="text-sm text-emerald-950 dark:text-emerald-100">
              {mistake.solution}
            </p>
          </div>
        </div>
      </header>

      <div className="flex gap-2 rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-900">
        <button
          type="button"
          onClick={() => setMode("wrong")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${
            mode === "wrong"
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          Wrong way
        </button>
        <button
          type="button"
          onClick={() => setMode("right")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${
            mode === "right"
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          Right way
        </button>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        {mode === "wrong" ? wrong : right}
      </div>
    </article>
  );
}

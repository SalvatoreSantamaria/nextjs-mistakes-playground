"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorDemoBoundary({ error, reset }: Props) {
  useEffect(() => {
    console.error("[error.tsx demo]", error);
  }, [error]);

  return (
    <div className="space-y-4 rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/40">
      <h2 className="text-lg font-semibold text-red-900 dark:text-red-100">
        Something went wrong
      </h2>
      <p className="font-mono text-sm text-red-800 dark:text-red-200">
        {error.message}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Try again (reset)
        </button>
        <Link
          href="/"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600"
        >
          Home
        </Link>
        <Link
          href="/mistakes/error-tsx/demo"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600"
        >
          Back to OK state
        </Link>
      </div>
    </div>
  );
}

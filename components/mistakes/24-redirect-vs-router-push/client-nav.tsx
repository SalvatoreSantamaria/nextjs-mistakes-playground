"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ClientNav() {
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => {
          setToast("Saved! Navigating…");
          setTimeout(() => router.push("/"), 800);
        }}
        className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600"
      >
        Client nav after toast (router.push)
      </button>
      {toast && (
        <p className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900">
          {toast}
        </p>
      )}
    </div>
  );
}

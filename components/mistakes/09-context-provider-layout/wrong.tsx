"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { DemoNote } from "@/components/DemoNote";
import { DemoMetric } from "@/components/DemoMetric";

const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggle: () => void;
} | null>(null);

function ThemeToggleInline() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  return (
    <button
      type="button"
      onClick={ctx.toggle}
      className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
    >
      Toggle ({ctx.theme})
    </button>
  );
}

/** Simulates marking the whole layout subtree as client for one provider. */
export function Wrong() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const shell: ReactNode = (
    <div className="space-y-3">
      <p className="text-sm">
        Static intro text — still ships as client JS because the parent is{" "}
        <code>&quot;use client&quot;</code>.
      </p>
      <ThemeToggleInline />
    </div>
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
      }}
    >
      <div className="space-y-4">
        <DemoNote tone="wrong">
          The entire demo — provider, static copy, and toggle — lives in one
          client boundary (as if the root layout were marked{" "}
          <code>&quot;use client&quot;</code>).
        </DemoNote>
        <DemoMetric
          label="Tree status"
          value="Whole tree is client"
          tone="wrong"
        />
        <div
          className={
            theme === "dark"
              ? "rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-zinc-100"
              : "rounded-lg border border-zinc-200 bg-zinc-50 p-4"
          }
        >
          {shell}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

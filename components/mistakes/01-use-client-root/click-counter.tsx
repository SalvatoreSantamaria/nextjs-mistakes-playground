"use client";

import { useState } from "react";

export function ClickCounter() {
  const [n, setN] = useState(0);
  return (
    <div className="flex items-center gap-3">
      <p className="font-mono text-sm">Leaf counter: {n}</p>
      <button
        type="button"
        onClick={() => setN((x) => x + 1)}
        className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white"
      >
        Increment
      </button>
    </div>
  );
}

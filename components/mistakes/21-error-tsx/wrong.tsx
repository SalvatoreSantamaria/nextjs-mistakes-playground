"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/demo-products");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await res.json();
        setStatus("ok");
        setMessage("Fetched OK — but no error boundary if this route throws");
      } catch (e) {
        setStatus("error");
        setMessage(e instanceof Error ? e.message : "Unknown error");
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Client try/catch around fetch cannot recover from a Server Component
        render throw — you need a segment-level <code>error.tsx</code>.
      </DemoNote>
      <p className="font-mono text-sm">
        Status: {status} {message && `— ${message}`}
      </p>
    </div>
  );
}

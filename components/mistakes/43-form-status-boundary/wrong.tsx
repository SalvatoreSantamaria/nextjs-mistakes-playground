"use client";

import { useFormStatus } from "react-dom";
import { DemoNote } from "@/components/DemoNote";
import { DemoMetric } from "@/components/DemoMetric";
import { slowSaveNote } from "@/lib/actions";

function Pending() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
    >
      {pending ? "Saving…" : "Save"}
    </button>
  );
}

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        The entire form file is <code>&apos;use client&apos;</code> just so{" "}
        <code>useFormStatus</code> works — the form itself did not need a client
        boundary.
      </DemoNote>
      <form action={slowSaveNote} className="flex flex-wrap gap-2">
        <input
          name="note"
          placeholder="Note"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
        <Pending />
      </form>
      <DemoMetric
        label="Boundaries"
        value="Form: client · Button: client"
        tone="wrong"
      />
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { DemoNote } from "@/components/DemoNote";
import { updateProfileWithoutTag } from "@/lib/actions";

type Props = {
  name: string;
};

export function RefreshProfileForm({ name }: Props) {
  const router = useRouter();
  const [pending, start] = useTransition();

  return (
    <form
      className="flex flex-wrap items-end gap-2"
      action={(fd) => {
        start(async () => {
          await updateProfileWithoutTag(fd);
          // Re-renders Server Components, but the tagged unstable_cache
          // entry is still considered fresh — same old name comes back.
          router.refresh();
        });
      }}
    >
      <label className="block text-sm">
        <span className="mb-1 block text-zinc-500">New display name</span>
        <input
          name="name"
          defaultValue={name}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? "Saving…" : "Save + router.refresh()"}
      </button>
    </form>
  );
}

export function WrongNote() {
  return (
    <DemoNote tone="wrong">
      After the mutation, <code>router.refresh()</code> only clears the client
      router cache. It does <strong>not</strong> expire the tagged server cache,
      so the old name comes right back.
    </DemoNote>
  );
}

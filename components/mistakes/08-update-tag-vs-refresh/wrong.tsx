import { getCachedProfile } from "@/lib/demo-cache";
import { resetProfileDemo } from "@/lib/actions";
import { RefreshProfileForm, WrongNote } from "./refresh-form";

export async function Wrong() {
  const profile = await getCachedProfile();

  return (
    <div className="space-y-4">
      <WrongNote />
      <p className="font-mono text-sm">
        Cached profile name:{" "}
        <span className="rounded-md border border-red-200 px-2 py-0.5 dark:border-red-900/50">
          {profile.name}
        </span>
      </p>
      <RefreshProfileForm name={profile.name} />
      <form action={resetProfileDemo}>
        <button
          type="submit"
          className="font-mono text-xs text-zinc-500 underline hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          Reset profile
        </button>
      </form>
    </div>
  );
}

import Link from "next/link";
import { getSlowMessage } from "@/lib/data";

export default async function BlockingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const banner = await getSlowMessage("layout banner");

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/blocking-layout-await?mode=wrong"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #39
      </Link>
      <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-sm dark:border-red-900/50 dark:bg-red-950/40">
        Layout awaited: {banner}
      </div>
      {children}
    </div>
  );
}

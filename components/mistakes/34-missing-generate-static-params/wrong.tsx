import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        A dynamic <code>[slug]</code> route with a known set of posts and no{" "}
        <code>generateStaticParams</code> — every visit is on-demand.
      </DemoNote>
      <Link
        href="/mistakes/missing-generate-static-params/demo/wrong/hello"
        className="inline-block rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Open on-demand [slug] demo →
      </Link>
    </div>
  );
}

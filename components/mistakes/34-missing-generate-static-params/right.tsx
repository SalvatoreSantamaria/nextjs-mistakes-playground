import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Export <code>generateStaticParams</code> for known slugs so they can be
        prerendered at build time.
      </DemoNote>
      <div className="flex flex-wrap gap-2">
        {["hello", "nextjs", "caching"].map((slug) => (
          <Link
            key={slug}
            href={`/mistakes/missing-generate-static-params/demo/right/${slug}`}
            className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
          >
            /{slug}
          </Link>
        ))}
      </div>
    </div>
  );
}

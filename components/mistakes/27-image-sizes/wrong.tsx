import Image from "next/image";
import { DemoNote } from "@/components/DemoNote";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>fill</code> without <code>sizes</code> makes the browser guess —
        often downloading an oversized image on mobile.
      </DemoNote>
      <div className="relative h-40 max-w-md overflow-hidden rounded-lg border border-red-200 dark:border-red-900/50">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          fill
          unoptimized
          className="object-contain p-4 dark:invert"
        />
      </div>
      <p className="font-mono text-xs text-zinc-500">No sizes prop</p>
    </div>
  );
}

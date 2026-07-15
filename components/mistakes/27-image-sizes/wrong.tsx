import Image from "next/image";
import { DemoNote } from "@/components/DemoNote";
import { SizeMeter } from "./size-meter";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>fill</code> without <code>sizes</code> — the browser often assumes
        a large candidate (about <code>100vw</code>) even in a narrow slot.
      </DemoNote>
      <SizeMeter sizesHint="(missing → ~100vw)" tone="wrong">
        <div className="relative h-40 max-w-md overflow-hidden rounded-lg border border-red-200 dark:border-red-900/50">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            fill
            unoptimized
            className="object-contain p-4 dark:invert"
          />
        </div>
      </SizeMeter>
    </div>
  );
}

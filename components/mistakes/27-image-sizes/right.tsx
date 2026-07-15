import Image from "next/image";
import { DemoNote } from "@/components/DemoNote";
import { SizeMeter } from "./size-meter";

const SIZES = "(max-width: 768px) 100vw, 28rem";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Pass <code>sizes</code> matching the layout slot so the browser can pick
        a smaller source on desktop.
      </DemoNote>
      <SizeMeter sizesHint={SIZES} tone="right">
        <div className="relative h-40 max-w-md overflow-hidden rounded-lg border border-emerald-200 dark:border-emerald-900/50">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            fill
            sizes={SIZES}
            unoptimized
            className="object-contain p-4 dark:invert"
          />
        </div>
      </SizeMeter>
    </div>
  );
}

import Image from "next/image";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Pass <code>sizes</code> so the browser picks an appropriate source width
        for the layout slot.
      </DemoNote>
      <div className="relative h-40 max-w-md overflow-hidden rounded-lg border border-emerald-200 dark:border-emerald-900/50">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          fill
          sizes="(max-width: 768px) 100vw, 28rem"
          unoptimized
          className="object-contain p-4 dark:invert"
        />
      </div>
      <p className="font-mono text-xs text-emerald-700 dark:text-emerald-300">
        sizes=&quot;(max-width: 768px) 100vw, 28rem&quot;
      </p>
    </div>
  );
}

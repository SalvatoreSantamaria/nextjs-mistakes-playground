import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";
import { PrefetchList, type PrefetchLink } from "./prefetch-list";

const HEAVY: PrefetchLink[] = [
  { href: "/mistakes/blocking-layout-await/demo/wrong", label: "Heavy demo A" },
  { href: "/mistakes/blocking-layout-await/demo/right", label: "Heavy demo B" },
  {
    href: "/mistakes/client-auth-redirect/demo/protected",
    label: "Auth-gated panel",
  },
];

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        <code>prefetch=&#123;false&#125;</code> — no eager prefetches on mount.
        Cheap public links can still use the default.
      </DemoNote>
      <PrefetchList links={HEAVY} autoPrefetch={false} tone="right" />
      <p className="text-sm text-zinc-500">
        Cheap link still prefetches by default:{" "}
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  );
}

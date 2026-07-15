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

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        On mount we eagerly <code>router.prefetch</code> every heavy/gated link
        (same effect as default Link prefetch for a long list).
      </DemoNote>
      <PrefetchList links={HEAVY} autoPrefetch tone="wrong" />
    </div>
  );
}

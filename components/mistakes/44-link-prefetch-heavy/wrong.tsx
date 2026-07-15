import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

const HEAVY = [
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
        Default <code>Link</code> prefetch is on. A list of heavy or protected
        destinations can trigger lots of background work the user may never
        need.
      </DemoNote>
      <ul className="space-y-2">
        {HEAVY.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="font-mono text-sm underline">
              {item.label}
            </Link>
            <span className="ml-2 text-xs text-zinc-500">prefetch default</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

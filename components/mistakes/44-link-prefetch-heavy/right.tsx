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

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Set <code>prefetch=&#123;false&#125;</code> on expensive or gated links.
        Keep default prefetch for cheap public pages.
      </DemoNote>
      <ul className="space-y-2">
        {HEAVY.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              prefetch={false}
              className="font-mono text-sm underline"
            >
              {item.label}
            </Link>
            <span className="ml-2 text-xs text-emerald-700 dark:text-emerald-300">
              prefetch=false
            </span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-zinc-500">
        Cheap link still prefetches by default:{" "}
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  );
}

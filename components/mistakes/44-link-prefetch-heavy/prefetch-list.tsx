"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DemoMetric } from "@/components/DemoMetric";

export type PrefetchLink = { href: string; label: string };

type Props = {
  links: PrefetchLink[];
  /** When true, simulate eager prefetch of every link on mount (Wrong). */
  autoPrefetch: boolean;
  tone: "wrong" | "right";
};

export function PrefetchList({ links, autoPrefetch, tone }: Props) {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const hrefKey = links.map((l) => l.href).join("|");

  useEffect(() => {
    if (!autoPrefetch) {
      setCount(0);
      return;
    }
    let n = 0;
    for (const item of links) {
      router.prefetch(item.href);
      n += 1;
    }
    setCount(n);
  }, [autoPrefetch, router, hrefKey, links]);

  return (
    <div className="space-y-3">
      <DemoMetric
        label="Prefetches fired on mount"
        value={String(count)}
        tone={tone}
      />
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              prefetch={autoPrefetch ? undefined : false}
              className="font-mono text-sm underline"
            >
              {item.label}
            </Link>
            <span
              className={`ml-2 text-xs ${
                tone === "wrong"
                  ? "text-zinc-500"
                  : "text-emerald-700 dark:text-emerald-300"
              }`}
            >
              {autoPrefetch ? "prefetch default" : "prefetch=false"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

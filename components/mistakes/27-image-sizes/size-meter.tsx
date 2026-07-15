"use client";

import { useEffect, useRef, useState } from "react";
import { DemoMetric } from "@/components/DemoMetric";

type Props = {
  sizesHint: string;
  tone: "wrong" | "right";
  children: React.ReactNode;
};

export function SizeMeter({ sizesHint, tone, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w != null) setWidth(Math.round(w));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="space-y-2">
      <div ref={ref}>{children}</div>
      <DemoMetric
        label="Container width"
        value={width != null ? `${width}px` : "…"}
        tone={tone}
      />
      <DemoMetric label="sizes hint" value={sizesHint} tone={tone} />
    </div>
  );
}

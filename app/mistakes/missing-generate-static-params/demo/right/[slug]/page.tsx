import Link from "next/link";
import { DemoMetric } from "@/components/DemoMetric";

type Props = { params: Promise<{ slug: string }> };

const KNOWN = ["hello", "nextjs", "caching"] as const;

export function generateStaticParams() {
  return KNOWN.map((slug) => ({ slug }));
}

export default async function PrebuiltSlugPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/missing-generate-static-params?mode=right"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #34
      </Link>
      <h1 className="text-2xl font-semibold">Post: {slug}</h1>
      <DemoMetric
        label="Render mode"
        value="prerender-eligible"
        tone="right"
      />
      <DemoMetric
        label="generateStaticParams"
        value={KNOWN.join(", ")}
        tone="right"
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This slug was listed in <code>generateStaticParams</code>, so it can be
        prerendered at build time (no per-request <code>connection()</code>).
      </p>
    </div>
  );
}

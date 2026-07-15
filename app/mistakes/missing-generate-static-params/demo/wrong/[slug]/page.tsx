import Link from "next/link";
import { connection } from "next/server";
import { DemoMetric } from "@/components/DemoMetric";

type Props = { params: Promise<{ slug: string }> };

export default async function OnDemandSlugPage({ params }: Props) {
  await connection();
  const { slug } = await params;
  const renderedAt = new Date().toLocaleTimeString();

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/missing-generate-static-params?mode=wrong"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #34
      </Link>
      <h1 className="text-2xl font-semibold">Post: {slug}</h1>
      <DemoMetric label="Render mode" value="on-demand" tone="wrong" />
      <DemoMetric label="renderedAt" value={renderedAt} tone="wrong" />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        No <code>generateStaticParams</code> — refresh and watch{" "}
        <code>renderedAt</code> change every time.
      </p>
    </div>
  );
}

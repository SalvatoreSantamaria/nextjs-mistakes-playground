import Link from "next/link";
import { connection } from "next/server";

type Props = { params: Promise<{ slug: string }> };

export default async function OnDemandSlugPage({ params }: Props) {
  await connection();
  const { slug } = await params;

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/missing-generate-static-params?mode=wrong"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #34
      </Link>
      <h1 className="text-2xl font-semibold">Post: {slug}</h1>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        No generateStaticParams — this segment is rendered on demand
        (connection() forced for the demo).
      </p>
    </div>
  );
}

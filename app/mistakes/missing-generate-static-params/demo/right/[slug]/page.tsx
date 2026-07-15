import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "nextjs" }, { slug: "caching" }];
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
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        generateStaticParams() included this slug — eligible for prerender at
        build time.
      </p>
    </div>
  );
}

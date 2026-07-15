import Link from "next/link";

type Props = {
  searchParams: Promise<{ fail?: string }>;
};

export default async function ErrorDemoPage({ searchParams }: Props) {
  const params = await searchParams;

  if (params.fail === "1") {
    throw new Error("Intentional demo failure — error.tsx should catch this");
  }

  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/error-tsx"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #21
      </Link>
      <h1 className="text-2xl font-semibold">error.tsx demo</h1>
      <p className="text-sm text-emerald-700 dark:text-emerald-300">
        Page rendered OK.
      </p>
      <Link
        href="/mistakes/error-tsx/demo?fail=1"
        className="inline-block rounded-md bg-red-700 px-3 py-1.5 text-sm text-white hover:bg-red-600"
      >
        Trigger render error (?fail=1)
      </Link>
    </div>
  );
}

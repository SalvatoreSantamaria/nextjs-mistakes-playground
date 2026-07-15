import Link from "next/link";

export default function ProtectedDemoPage() {
  return (
    <div className="space-y-4">
      <Link
        href="/mistakes/client-auth-redirect?mode=right"
        className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to mistake #33
      </Link>
      <h1 className="text-2xl font-semibold">Proxy-protected page</h1>
      <p className="text-sm text-emerald-700 dark:text-emerald-300">
        You only see this because <code>proxy.ts</code> allowed{" "}
        <code>demo_session=admin</code> before render — no client flash.
      </p>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DemoNote } from "@/components/DemoNote";
import Link from "next/link";

export function Wrong() {
  const router = useRouter();
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    const hasSession = document.cookie.includes("demo_session=admin");
    if (!hasSession) {
      // Protected UI already painted — then we bounce.
      const t = setTimeout(() => {
        setFlash(false);
        router.push("/mistakes/client-auth-redirect?mode=wrong&bounced=1");
      }, 800);
      return () => clearTimeout(t);
    }
    setFlash(false);
  }, [router]);

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        Auth is checked in <code>useEffect</code> + <code>router.push</code>.
        Protected content flashes for ~800ms before the bounce.
      </DemoNote>
      <div className="rounded-md border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/40">
        <p className="font-semibold text-red-900 dark:text-red-100">
          Secret admin panel
        </p>
        <p className="text-sm text-red-800 dark:text-red-200">
          Payroll data, API keys, internal notes…
          {flash ? " (you should not see this if logged out)" : ""}
        </p>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Clear the <code>demo_session</code> cookie, then refresh this wrong mode
        to see the flash. Or open the{" "}
        <Link
          href="/mistakes/client-auth-redirect/demo/protected"
          className="underline"
        >
          proxy-guarded demo
        </Link>{" "}
        for the right approach.
      </p>
    </div>
  );
}

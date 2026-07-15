import { DemoNote } from "@/components/DemoNote";
import { ClientPublicLabel } from "./client-public-label";

export function Right() {
  const secret = process.env.DEMO_SECRET;
  const publicLabel = process.env.NEXT_PUBLIC_DEMO_LABEL ?? "Playground demo";

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Read secrets only in Server Components or Server Actions. Pass safe
        labels to the client via props — never the secret itself.
      </DemoNote>
      <dl className="space-y-2 font-mono text-sm">
        <div>
          <dt className="text-zinc-500">DEMO_SECRET (server only)</dt>
          <dd className="text-emerald-700 dark:text-emerald-300">
            {secret ?? "(not set — add DEMO_SECRET to .env.local)"}
          </dd>
        </div>
      </dl>
      <ClientPublicLabel label={publicLabel} />
    </div>
  );
}

import { DemoNote } from "@/components/DemoNote";
import { getSecretUserRow, toPublicUser } from "@/lib/data";
import { ClientProfile } from "./client-profile";

export async function Right() {
  const row = await getSecretUserRow();
  const pub = toPublicUser(row);

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Map to a public DTO before crossing the boundary. Secrets stay on the
        server (consider React taint APIs in stricter apps).
      </DemoNote>
      <ClientProfile user={pub} />
    </div>
  );
}

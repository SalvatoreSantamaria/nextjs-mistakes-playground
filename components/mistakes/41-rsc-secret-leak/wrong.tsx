import { DemoNote } from "@/components/DemoNote";
import { getSecretUserRow } from "@/lib/data";
import { ClientProfile } from "./client-profile";

export async function Wrong() {
  const row = await getSecretUserRow();

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        The full DB row (including <code>apiToken</code> and{" "}
        <code>passwordHash</code>) is passed into a Client Component — those
        fields ride the RSC payload to the browser.
      </DemoNote>
      <ClientProfile user={row} />
    </div>
  );
}

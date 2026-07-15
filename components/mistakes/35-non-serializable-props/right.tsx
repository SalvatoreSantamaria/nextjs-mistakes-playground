import { DemoNote } from "@/components/DemoNote";
import { ClientCard } from "./client-card";

export function Right() {
  const createdAt = new Date();

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Pass an ISO string (or other plain data). The client reconstructs a{" "}
        <code>Date</code> locally.
      </DemoNote>
      <ClientCard title="Serializable card" createdAtIso={createdAt.toISOString()} />
    </div>
  );
}

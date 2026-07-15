import { ExplainPanel } from "@/components/ExplainPanel";

export function Right() {
  return (
    <ExplainPanel
      label="Right"
      description="Invalidate the actual cache tag inside the Server Action with updateTag() so the data expires and refetches in the same request — the UI shows the write immediately, no client refresh required."
      code={`'use server'
import { updateTag } from 'next/cache'

export async function updateProfile(formData: FormData) {
  await db.users.update({
    name: formData.get('name'),
  })

  // Expires the 'profile' cache and refreshes the router
  // in one step — read-your-own-writes, guaranteed fresh.
  updateTag('profile')
}

// Use revalidateTag('profile', 'max') instead when it's fine
// to serve stale data while it revalidates in the background.`}
    />
  );
}

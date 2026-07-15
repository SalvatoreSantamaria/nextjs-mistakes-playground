import { ExplainPanel } from "@/components/ExplainPanel";

export function Wrong() {
  return (
    <ExplainPanel
      label="Wrong"
      description="After a mutation, the client calls router.refresh() expecting fresh data. It only clears the client-side router cache and re-renders — it never invalidates the tagged server-side cache, so the same stale fetch result comes right back."
      code={`'use client'
import { useRouter } from 'next/navigation'
import { updateProfile } from './actions'

export function ProfileForm() {
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    await updateProfile(formData)
    // Re-fetches Server Components, but the tagged
    // 'use cache' data for this user is still fresh
    // from the server's point of view — same old data.
    router.refresh()
  }

  return <form action={onSubmit}>{/* fields */}</form>
}`}
    />
  );
}

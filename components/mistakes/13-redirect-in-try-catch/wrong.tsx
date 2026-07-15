import { redirectWrong } from "@/lib/actions";
import { DemoNote } from "@/components/DemoNote";
import { ActionButton } from "@/components/mistakes/02-unprotected-server-actions/action-button";
import { LandingNote } from "./landing-note";

export function Wrong() {
  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>redirect()</code> throws internally. Wrapping it in{" "}
        <code>try/catch</code> swallows the redirect and you stay on this page.
      </DemoNote>
      <ActionButton
        action={redirectWrong}
        label="Redirect (inside try/catch — bad)"
      />
      <LandingNote />
    </div>
  );
}

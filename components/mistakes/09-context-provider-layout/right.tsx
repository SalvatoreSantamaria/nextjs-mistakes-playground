import { DemoNote } from "@/components/DemoNote";
import { ThemeProvider, ThemeToggle } from "./theme-provider";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Only the provider shell and toggle are client components. Static copy
        stays on the server.
      </DemoNote>
      <ThemeProvider>
        <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
          This paragraph is rendered by a Server Component — no client JS for
          static text.
        </p>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
}

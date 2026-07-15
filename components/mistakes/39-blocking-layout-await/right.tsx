import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";

export function Right() {
  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Layout renders chrome immediately; slow data lives in a child behind{" "}
        <code>Suspense</code>.
      </DemoNote>
      <Link
        href="/mistakes/blocking-layout-await/demo/right"
        className="inline-block rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
      >
        Open streaming layout demo →
      </Link>
    </div>
  );
}

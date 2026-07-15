import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getAllSlugs, getMistake } from "@/lib/mistakes";
import { getMistakeViews } from "@/lib/registry";
import { MistakeShell } from "@/components/MistakeShell";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const mistake = getMistake(slug);
  if (!mistake) return { title: "Not found" };
  return {
    title: `#${mistake.id} ${mistake.title} · Next.js Mistakes`,
    description: mistake.problem,
  };
}

export default async function MistakePage({ params }: Props) {
  const { slug } = await params;
  const mistake = getMistake(slug);
  if (!mistake) notFound();

  const views = getMistakeViews(slug);
  if (!views) notFound();

  const Wrong = views.Wrong;
  const Right = views.Right;

  return (
    <Suspense
      fallback={
        <div className="animate-pulse rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          Loading…
        </div>
      }
    >
      <MistakeShell
        mistake={mistake}
        wrong={<Wrong />}
        right={<Right />}
      />
    </Suspense>
  );
}

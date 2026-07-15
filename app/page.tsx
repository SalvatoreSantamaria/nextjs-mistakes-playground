import Link from "next/link";
import { getMistakesByCategory, mistakes } from "@/lib/mistakes";
import { StatusBadge } from "@/components/StatusBadge";

export default function Home() {
  const live = mistakes.filter((m) => m.mode === "live").length;
  const explain = mistakes.filter((m) => m.mode === "explain").length;
  const grouped = getMistakesByCategory();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          App Router cheatsheet
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Next.js Mistakes Playground
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {mistakes.length} common App Router mistakes across {grouped.length}{" "}
          categories. Toggle each page between the wrong way and the right way.{" "}
          {live} live demos run on the server; {explain} are explanation-only
          with code samples.
        </p>
      </section>

      <div className="space-y-12">
        {grouped.map(({ category, items }) => (
          <section key={category.id} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {category.label}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {category.description}
              </p>
            </div>
            <ol className="space-y-2">
              {items.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/mistakes/${m.slug}`}
                    className="flex flex-wrap items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 transition hover:border-[var(--accent)] hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-[var(--accent)]"
                  >
                    <span className="w-8 font-mono text-sm text-zinc-400">
                      {String(m.id).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 font-medium text-zinc-900 dark:text-zinc-50">
                      {m.title}
                    </span>
                    <StatusBadge mode={m.mode} />
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

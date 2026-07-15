export type MistakeMode = "live" | "explain";

export type Mistake = {
  id: number;
  slug: string;
  title: string;
  mode: MistakeMode;
  problem: string;
  solution: string;
};

export const mistakes: Mistake[] = [
  {
    id: 1,
    slug: "use-client-on-root",
    title: "Marking the Root Page as a Client Component",
    mode: "live",
    problem:
      'Adding "use client" at the top of a root page forces the entire tree to render on the client, losing Server Component benefits.',
    solution:
      "Only mark interactive leaf nodes as client components. Keep pages and layouts as Server Components when possible.",
  },
  {
    id: 2,
    slug: "unprotected-server-actions",
    title: "Not Protecting Server Actions",
    mode: "live",
    problem:
      "Server Actions are public HTTP endpoints. Unprotected actions can be triggered by anyone.",
    solution:
      "Verify authentication, validate input, and check authorization before running sensitive logic.",
  },
  {
    id: 3,
    slug: "gets-in-use-server-file",
    title: "Placing Server Component get Calls Inside a Server Actions File",
    mode: "live",
    problem:
      'Any export from a "use server" file becomes a public endpoint. Putting get/fetch helpers there exposes them unnecessarily.',
    solution:
      "Keep reads in lib/data.ts (or similar). Only put mutations in \"use server\" files.",
  },
  {
    id: 4,
    slug: "ai-code-without-review",
    title: "Shipping AI-Generated Code to Production Without Review",
    mode: "explain",
    problem:
      "AI-generated code can ship bugs, missing edge cases, or inconsistent patterns if merged unchecked.",
    solution:
      "Use AI for speed, then review thoroughly — humans plus AI review tools — before production.",
  },
  {
    id: 5,
    slug: "route-handlers-vs-rsc",
    title: "Using Route Handlers Instead of Server Components for GET Requests",
    mode: "live",
    problem:
      "Creating /api GET routes for simple reads adds boilerplate and often forces client fetching.",
    solution:
      "Fetch directly in an async Server Component. Use Suspense for loading UI.",
  },
  {
    id: 6,
    slug: "suspense-wrong-level",
    title: "Placing a Suspense Boundary at the Wrong Level",
    mode: "live",
    problem:
      "Wrapping the async call itself with Suspense does not show the fallback correctly.",
    solution:
      "Place Suspense one level below, wrapping the component that consumes the fetched data.",
  },
  {
    id: 7,
    slug: "use-cache-vs-private",
    title: "Mixing Up use cache and use cache private",
    mode: "explain",
    problem:
      "Using use cache for user-specific data (cookies/headers) can leak data or error at runtime.",
    solution:
      "Use use cache for shared static data; use cache private for cookie/header-dependent data.",
  },
  {
    id: 8,
    slug: "update-tag-vs-refresh",
    title: "Using updateTag When You Mean to Use refresh",
    mode: "explain",
    problem:
      "Cache tag invalidation and router.refresh solve different staleness problems; mixing them up leaves bad UX.",
    solution:
      "revalidateTag/revalidatePath for tagged static caches; router.refresh() to re-read dynamic data.",
  },
  {
    id: 9,
    slug: "context-provider-layout",
    title: "Incorrectly Using Context Providers with the App Router",
    mode: "live",
    problem:
      "Marking the root layout as a client provider can push the whole tree to the client.",
    solution:
      'Create a client ThemeProvider that accepts children, then wrap layout children with it — server/client interleaving stays intact.',
  },
  {
    id: 10,
    slug: "window-in-server-component",
    title: "Using window or Client Handlers Inside a Server Component",
    mode: "live",
    problem:
      "Server Components run in Node and have no window, document, or DOM event handlers.",
    solution:
      "Extract browser API and interactivity into a dedicated client component.",
  },
  {
    id: 11,
    slug: "unnecessary-use-client",
    title: 'Adding "use client" Unnecessarily',
    mode: "live",
    problem:
      'Developers add "use client" for simple forms, assuming any interactivity needs it.',
    solution:
      "Forms submitting via Server Actions often need no client boundary. Use client only for real client state/APIs.",
  },
  {
    id: 12,
    slug: "revalidate-after-mutation",
    title: "Not Revalidating Data After Mutations",
    mode: "live",
    problem:
      "After a Server Action mutation, the UI can stay stale if caches are not updated.",
    solution:
      "Call revalidatePath or revalidateTag after successful mutations.",
  },
  {
    id: 13,
    slug: "redirect-in-try-catch",
    title: "Redirecting Inside a try-catch Block",
    mode: "live",
    problem:
      "redirect() throws internally; a catch block can swallow it and block navigation.",
    solution:
      "Call redirect outside try/catch, or rethrow redirect errors in catch.",
  },
  {
    id: 14,
    slug: "force-server-interactive",
    title: "Forcing Everything to Be a Server Component",
    mode: "live",
    problem:
      "Highly interactive UI as Server Components means laggy round-trips and poor UX.",
    solution:
      "Use client components for counters, drag-and-drop, animations, and browser APIs.",
  },
  {
    id: 15,
    slug: "loading-tsx",
    title: "Not Using loading.tsx for Loading States",
    mode: "live",
    problem:
      "Converting pages to client components just to show a spinner adds unnecessary JS.",
    solution:
      "Use loading.tsx at the route segment; keep the page a Server Component.",
  },
  {
    id: 16,
    slug: "duplicate-fetch-metadata",
    title: "Fetching the Same Data Twice (Metadata and Page)",
    mode: "explain",
    problem:
      "Calling the same fetch in generateMetadata and the page doubles work.",
    solution:
      "Wrap the fetch in React cache() so both share one memoized result per request.",
  },
  {
    id: 17,
    slug: "hydration-errors",
    title: "Not Resolving Hydration Errors Correctly",
    mode: "live",
    problem:
      "Server HTML that does not match client HTML causes hydration errors.",
    solution:
      "Fix invalid HTML nesting and gate browser-only values so server and client output match.",
  },
  {
    id: 18,
    slug: "layout-persistent-fetch",
    title: "Not Using layout.tsx for Persistent Data Fetching",
    mode: "explain",
    problem:
      "Refetching shared nav/profile data on every page wastes work.",
    solution:
      "Fetch shared data in a parent layout so it persists across child routes.",
  },
  {
    id: 19,
    slug: "cache-expensive-functions",
    title: "Not Caching Repeatable Code / Expensive Functions",
    mode: "explain",
    problem:
      "The same expensive function runs multiple times in one render tree.",
    solution:
      "Memoize with React cache() (or unstable_cache) and reuse the result.",
  },
  {
    id: 20,
    slug: "env-vars-client",
    title: "Using Environment Variables in Client Components Without Proper Naming",
    mode: "live",
    problem:
      "Server secrets leak if exposed to the client, or public vars fail if misnamed.",
    solution:
      "Server-only: process.env.SECRET. Client: NEXT_PUBLIC_*. Never pass secrets into client components.",
  },
  {
    id: 21,
    slug: "error-tsx",
    title: "Not Using error.tsx Alongside loading.tsx",
    mode: "live",
    problem:
      "loading.tsx without error.tsx leaves a broken UI when fetching fails.",
    solution:
      "Add error.tsx with a recovery UI at the same segment level.",
  },
  {
    id: 22,
    slug: "dynamic-metadata-export",
    title: "Trying to Use Dynamic Functions Directly in metadata Export",
    mode: "explain",
    problem:
      "export const metadata must be a static object; dynamic values do not work there.",
    solution:
      "Use generateMetadata for params, searchParams, or fetched titles.",
  },
  {
    id: 23,
    slug: "cache-request-memoization",
    title: "Not Using the cache Function for Request Memoization",
    mode: "explain",
    problem:
      "Identical requests fire multiple times in one render cycle.",
    solution:
      "Wrap data loaders with React cache() so same-argument calls reuse the result.",
  },
  {
    id: 24,
    slug: "redirect-vs-router-push",
    title: "Mixing Up redirect vs router.push",
    mode: "live",
    problem:
      "Using the wrong navigation API for server vs client context.",
    solution:
      "redirect() on the server; router.push() on the client when you need local UI first (toasts, state).",
  },
  {
    id: 25,
    slug: "next-font",
    title: "Causing Layout Shifts by Loading Google Fonts Manually",
    mode: "live",
    problem:
      "Manual CSS/script font loading causes CLS while fallback fonts flash.",
    solution:
      "Use next/font/google or next/font/local for optimized, shift-resistant loading.",
  },
  {
    id: 26,
    slug: "remove-console",
    title: "Leaving Debug Logs That Clutter Server Logs",
    mode: "explain",
    problem:
      "console.log in production clutters logs, can leak data, and costs money at scale.",
    solution:
      "Set compiler.removeConsole in next.config (optionally exclude error).",
  },
  {
    id: 27,
    slug: "image-sizes",
    title: "Images Without sizes Prop",
    mode: "live",
    problem:
      "Without sizes, next/image may download oversized assets on small viewports.",
    solution:
      "Always pass sizes so the browser can pick an appropriate source width.",
  },
  {
    id: 28,
    slug: "cache-tags",
    title: "Not Tagging the Cache Correctly",
    mode: "explain",
    problem:
      "Without tags you cannot selectively invalidate; you end up purging broad caches.",
    solution:
      "Tag fetch/unstable_cache entries and call revalidateTag for granular updates.",
  },
  {
    id: 29,
    slug: "mutations-in-rsc",
    title: "Executing Mutations Inside Server Components",
    mode: "live",
    problem:
      "Mutating during RSC render causes races and stale UI — components do not re-render after side effects.",
    solution:
      "Fetch in Server Components; mutate via Server Actions; then revalidate or refresh.",
  },
];

export function getMistake(slug: string): Mistake | undefined {
  return mistakes.find((m) => m.slug === slug);
}

export function getAllSlugs(): string[] {
  return mistakes.map((m) => m.slug);
}

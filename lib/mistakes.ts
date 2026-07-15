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
    mode: "live",
    problem:
      "Cache tag invalidation and router.refresh solve different staleness problems; mixing them up leaves bad UX.",
    solution:
      "Use updateTag (or revalidateTag) for tagged server caches after mutations; router.refresh() only re-reads dynamic/uncached data.",
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
    mode: "live",
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
    mode: "live",
    problem:
      "Refetching shared nav/profile data on every page wastes work.",
    solution:
      "Fetch shared data in a parent layout so it persists across child routes.",
  },
  {
    id: 19,
    slug: "cache-expensive-functions",
    title: "Not Caching Repeatable Code / Expensive Functions",
    mode: "live",
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
    mode: "live",
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
    mode: "live",
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
  {
    id: 30,
    slug: "rsc-calls-own-api",
    title: "Calling Your Own Route Handlers from Server Components",
    mode: "live",
    problem:
      "An RSC that fetch()es its own /api route adds a pointless HTTP hop, base-URL pain, and extra serialization.",
    solution:
      "Put shared reads in a data/DAL module and import it from both RSC and Route Handlers.",
  },
  {
    id: 31,
    slug: "sequential-fetch-waterfall",
    title: "Creating Sequential Data-Fetching Waterfalls",
    mode: "live",
    problem:
      "Awaiting independent requests one after another doubles latency for no reason.",
    solution:
      "Start independent fetches together and await Promise.all (or stream with Suspense).",
  },
  {
    id: 32,
    slug: "no-next-dynamic",
    title: "Eagerly Importing Heavy Client Libraries",
    mode: "live",
    problem:
      "Statically importing large client-only UI pulls it into the initial JS bundle.",
    solution:
      "Lazy-load with next/dynamic and a loading fallback so the shell paints first.",
  },
  {
    id: 33,
    slug: "client-auth-redirect",
    title: "Doing Auth Redirects Only on the Client",
    mode: "live",
    problem:
      "Checking auth in useEffect + router.push flashes protected UI before redirecting.",
    solution:
      "Redirect in proxy.ts (or the server) before the page renders for protected segments.",
  },
  {
    id: 34,
    slug: "missing-generate-static-params",
    title: "Skipping generateStaticParams for Known Dynamic Routes",
    mode: "live",
    problem:
      "Dynamic segments with a known finite set of params are rendered on demand with no prebuild.",
    solution:
      "Export generateStaticParams so common paths can be prerendered.",
  },
  {
    id: 35,
    slug: "non-serializable-props",
    title: "Passing Non-Serializable Props from Server to Client",
    mode: "live",
    problem:
      "Functions, class instances, and other non-serializable values cannot cross the RSC → client boundary.",
    solution:
      "Pass plain data (strings, numbers, plain objects); reconstruct richer types on the client.",
  },
  {
    id: 36,
    slug: "overbroad-revalidate",
    title: "Revalidating Far Too Broadly After Mutations",
    mode: "live",
    problem:
      "Calling revalidatePath('/') (or huge trees) after a tiny write thrash-caches unrelated UI.",
    solution:
      "Invalidate the specific path or cache tag that actually changed.",
  },
  {
    id: 37,
    slug: "route-groups",
    title: "Not Using Route Groups to Organize the App Tree",
    mode: "explain",
    problem:
      "A flat app/ folder mixes auth, app, and admin routes and makes shared layouts awkward.",
    solution:
      "Use (route groups) to share layouts and organize code without changing URLs.",
  },
  {
    id: 38,
    slug: "searchparams-without-suspense",
    title: "Using useSearchParams Without a Suspense Boundary",
    mode: "live",
    problem:
      "Calling useSearchParams in a large client tree without Suspense can bail out static rendering for the whole segment.",
    solution:
      "Isolate useSearchParams in a small client child wrapped in Suspense.",
  },
  {
    id: 39,
    slug: "blocking-layout-await",
    title: "Blocking the Entire Tree with a Layout Await",
    mode: "live",
    problem:
      "Awaiting slow data in layout.tsx delays every child route until that work finishes.",
    solution:
      "Keep layouts light; move slow fetches into slotted children behind Suspense.",
  },
  {
    id: 40,
    slug: "fetch-cache-defaults",
    title: "Not Setting fetch Cache Options Intentionally",
    mode: "live",
    problem:
      "Relying on implicit fetch caching leaves data mysteriously stale or over-dynamic.",
    solution:
      "Choose cache: 'no-store', next.revalidate, or next.tags explicitly for each request.",
  },
  {
    id: 41,
    slug: "rsc-secret-leak",
    title: "Leaking Secrets Through the RSC Payload",
    mode: "live",
    problem:
      "Passing full DB rows (tokens, hashes) into Client Components ships secrets in the flight payload.",
    solution:
      "Map to a public DTO before crossing the server/client boundary.",
  },
  {
    id: 42,
    slug: "missing-server-only",
    title: "Forgetting server-only on Data Access Modules",
    mode: "live",
    problem:
      "Without import 'server-only', a DAL can be imported into Client Components and leak server code/secrets.",
    solution:
      "Mark server modules with server-only; expose data to the client via RSC props or Server Actions.",
  },
  {
    id: 43,
    slug: "form-status-boundary",
    title: "Marking a Whole Form Client Just for useFormStatus",
    mode: "live",
    problem:
      "Wrapping an entire form in 'use client' only to show a pending state pulls unnecessary JS.",
    solution:
      "Keep the form on the server; extract a tiny SubmitButton client child that uses useFormStatus.",
  },
  {
    id: 44,
    slug: "link-prefetch-heavy",
    title: "Prefetching Heavy or Auth-Gated Links Unconditionally",
    mode: "live",
    problem:
      "Default Link prefetch on large lists or protected destinations wastes bandwidth and work.",
    solution:
      "Set prefetch={false} (or prefetch on hover) for expensive or gated destinations.",
  },
  {
    id: 45,
    slug: "static-route-handler-cache",
    title: "Surprised by Cached GET Route Handlers",
    mode: "live",
    problem:
      "GET Route Handlers can be cached; a “current time” API then returns a stale timestamp.",
    solution:
      "Opt into dynamic rendering / no-store when the handler must always be fresh.",
  },
];

export function getMistake(slug: string): Mistake | undefined {
  return mistakes.find((m) => m.slug === slug);
}

export function getAllSlugs(): string[] {
  return mistakes.map((m) => m.slug);
}

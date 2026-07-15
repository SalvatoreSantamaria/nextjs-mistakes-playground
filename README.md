# Next.js Mistakes Playground

Interactive Wrong / Right demos of 29 common Next.js App Router mistakes. Built for **Vercel** (full App Router server runtime) — not GitHub Pages static hosting.

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |

## Structure

- `lib/mistakes.ts` — catalog of all 29 mistakes (`live` vs `explain`)
- `lib/registry.tsx` — maps slug → Wrong/Right components
- `app/mistakes/[slug]/page.tsx` — dynamic mistake page + `MistakeShell` toggle
- `components/mistakes/*` — per-mistake Wrong/Right stubs
- Nested demos: `/mistakes/loading-tsx/demo`, `/mistakes/error-tsx/demo`

Toggle state is stored in `?mode=wrong|right` so links are shareable.

## Live vs explanation

- **Live demo** — runnable Wrong/Right UI (Server Actions, RSC fetch, Suspense, etc.)
- **Explanation** — code samples + prose (cache APIs, process topics, config flags)

## Deploy to Vercel

1. Create a new GitHub repo and push this project (keep it separate from your `username.github.io` GitHub Pages site).
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Framework Preset: **Next.js** (defaults are fine).
4. Add env vars from `.env.example` (`DEMO_SECRET`, `NEXT_PUBLIC_DEMO_LABEL`).
5. Deploy.

Optional later: link the deployed URL from your personal resume site.

## Note on GitHub Pages

These demos need Server Components, Server Actions, and related APIs. A static `output: 'export'` build cannot host the live demos correctly. Use Vercel (or another Node host).

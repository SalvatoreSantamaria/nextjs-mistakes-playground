import { cache } from "react";
import { unstable_cache } from "next/cache";

/** In-memory demo stores + request-style counters for live mistake demos. */

const g = globalThis as unknown as {
  __demoProfile?: { name: string };
  __demoPosts?: { id: string; title: string }[];
  __demoPostsGen?: number;
  __demoCounters?: Record<string, number>;
  __demoNote?: string;
};

function counters() {
  if (!g.__demoCounters) g.__demoCounters = {};
  return g.__demoCounters;
}

export function resetCounter(key: string) {
  counters()[key] = 0;
}

export function bumpCounter(key: string) {
  const c = counters();
  c[key] = (c[key] ?? 0) + 1;
  return c[key];
}

export function getCounter(key: string) {
  return counters()[key] ?? 0;
}

// --- #08 / profile (tagged unstable_cache) ---

export const PROFILE_TAG = "demo-profile";

function profileStore() {
  if (!g.__demoProfile) g.__demoProfile = { name: "Ada Lovelace" };
  return g.__demoProfile;
}

export function getProfileRaw() {
  return { ...profileStore() };
}

export function setProfileName(name: string) {
  profileStore().name = name;
}

export function resetProfile() {
  g.__demoProfile = { name: "Ada Lovelace" };
}

/** Cross-request cache keyed + tagged so updateTag can invalidate it. */
export const getCachedProfile = unstable_cache(
  async () => getProfileRaw(),
  ["demo-profile-v1"],
  { tags: [PROFILE_TAG] },
);

// --- #28 / posts ---

export const POSTS_TAG = "demo-posts";

function postsStore() {
  if (!g.__demoPosts) {
    g.__demoPosts = [
      { id: "1", title: "Hello cache" },
      { id: "2", title: "Tagged entries" },
    ];
  }
  return g.__demoPosts;
}

export function getPostsRaw() {
  return postsStore().map((p) => ({ ...p }));
}

export function addPost(title: string) {
  const list = postsStore();
  list.push({ id: crypto.randomUUID(), title });
}

export function resetPosts() {
  g.__demoPosts = [
    { id: "1", title: "Hello cache" },
    { id: "2", title: "Tagged entries" },
  ];
  g.__demoPostsGen = (g.__demoPostsGen ?? 0) + 1;
}

/** Cached without tags — cannot be selectively invalidated. */
export async function getPostsUntagged() {
  const gen = g.__demoPostsGen ?? 0;
  return unstable_cache(
    async () => getPostsRaw(),
    ["demo-posts-untagged", `g${gen}`],
    { revalidate: false },
  )();
}

/** Cached with a tag for revalidateTag / updateTag. */
export async function getPostsTagged() {
  const gen = g.__demoPostsGen ?? 0;
  return unstable_cache(
    async () => getPostsRaw(),
    ["demo-posts-tagged", `g${gen}`],
    { tags: [POSTS_TAG], revalidate: false },
  )();
}

// --- #16 / product for metadata + page ---

export type DemoProduct = { id: string; name: string; price: number };

/** Request-scoped hit counters (shared by generateMetadata + page). */
const uncachedProductHits = cache(() => ({ count: 0 }));
const cachedProductHits = cache(() => ({ count: 0 }));

async function loadProduct(
  id: string,
  hits: { count: number },
): Promise<DemoProduct> {
  hits.count += 1;
  await new Promise((r) => setTimeout(r, 80));
  return {
    id,
    name: id === "notebook" ? "Notebook" : `Product ${id}`,
    price: 12,
  };
}

/** Uncached — generateMetadata + Page each hit the "db". */
export async function getProductUncached(id: string) {
  return loadProduct(id, uncachedProductHits());
}

/** Request-memoized with React cache(). */
export const getProductCached = cache(async (id: string) => {
  return loadProduct(id, cachedProductHits());
});

export function peekProductHits(kind: "uncached" | "cached") {
  return kind === "uncached"
    ? uncachedProductHits().count
    : cachedProductHits().count;
}

// --- #18 / shared user for layout vs pages ---

export type DemoUser = { id: string; name: string; fetchedAt: string };

async function loadUser(): Promise<DemoUser> {
  await new Promise((r) => setTimeout(r, 60));
  return {
    id: "u1",
    name: "Grace Hopper",
    fetchedAt: new Date().toLocaleTimeString(),
  };
}

export async function getUserForPage() {
  return loadUser();
}

export async function getUserForLayout() {
  return loadUser();
}

// --- #19 / expensive aggregation ---

export type DemoOrder = { product: string; total: number };

const SAMPLE_ORDERS: DemoOrder[] = Array.from({ length: 40 }, (_, i) => ({
  product: `SKU-${(i % 8) + 1}`,
  total: ((i * 17) % 90) + 10,
}));

export function getSampleOrders() {
  return SAMPLE_ORDERS;
}

export function computeTopSellersUncached(orders: DemoOrder[]) {
  bumpCounter("expensive-uncached");
  // Busy-work so the cost is visible in the demo.
  let checksum = 0;
  for (let i = 0; i < 25_000; i++) checksum += i % 7;
  void checksum;
  const map = new Map<string, number>();
  for (const o of orders) {
    map.set(o.product, (map.get(o.product) ?? 0) + o.total);
  }
  return [...map.entries()]
    .map(([product, total]) => ({ product, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);
}

export const computeTopSellersCached = cache((orders: DemoOrder[]) => {
  bumpCounter("expensive-cached");
  let checksum = 0;
  for (let i = 0; i < 25_000; i++) checksum += i % 7;
  void checksum;
  const map = new Map<string, number>();
  for (const o of orders) {
    map.set(o.product, (map.get(o.product) ?? 0) + o.total);
  }
  return [...map.entries()]
    .map(([product, total]) => ({ product, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);
});

// --- #23 / request memoization for non-fetch queries ---

export type DemoDbUser = { id: string; name: string; role: string };

const uncachedDbHits = cache(() => ({ count: 0 }));
const cachedDbHits = cache(() => ({ count: 0 }));

async function queryUser(
  id: string,
  hits: { count: number },
): Promise<DemoDbUser> {
  hits.count += 1;
  await new Promise((r) => setTimeout(r, 100));
  return { id, name: "Alan Turing", role: "admin" };
}

export async function getDbUserUncached(id: string) {
  return queryUser(id, uncachedDbHits());
}

export const getDbUserCached = cache(async (id: string) => {
  return queryUser(id, cachedDbHits());
});

export function peekDbUserHits(kind: "uncached" | "cached") {
  return kind === "uncached" ? uncachedDbHits().count : cachedDbHits().count;
}

// --- #36 / sticky note for overbroad revalidate ---

export const NOTE_TAG = "demo-note";

export function getNoteRaw() {
  if (!g.__demoNote) g.__demoNote = "Ship smaller invalidations";
  return g.__demoNote;
}

export function setNote(text: string) {
  g.__demoNote = text;
}

export const getCachedNote = unstable_cache(
  async () => getNoteRaw(),
  ["demo-note-v1"],
  { tags: [NOTE_TAG] },
);

/** Intentionally missing `import 'server-only'` — see mistake #42. */
export const LEAKABLE_DB_URL =
  "postgres://user:hunter2@db.internal:5432/app";

export function getInternalConfig() {
  return { dbUrl: LEAKABLE_DB_URL, region: "us-east-1" };
}

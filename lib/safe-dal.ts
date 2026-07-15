import "server-only";

export const SAFE_DB_URL = "postgres://user:hunter2@db.internal:5432/app";

export function getSafeInternalConfig() {
  return { dbUrl: SAFE_DB_URL, region: "us-east-1" };
}

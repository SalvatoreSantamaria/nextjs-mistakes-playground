const g = globalThis as unknown as { __fetchDemoValue?: string };

export function getFetchDemoValue() {
  if (!g.__fetchDemoValue) g.__fetchDemoValue = "v1";
  return g.__fetchDemoValue;
}

export function bumpFetchDemoValue() {
  const current = getFetchDemoValue();
  const n = Number(current.replace("v", "")) + 1;
  g.__fetchDemoValue = `v${n}`;
  return g.__fetchDemoValue;
}

"use server";

import { addToCart, getDemoProducts } from "@/lib/data";

/** Anti-pattern: read helpers exported from a "use server" file become public endpoints. */
export async function getProductsBad() {
  return getDemoProducts();
}

export async function mutateCartBad(formData: FormData) {
  const name = String(formData.get("name") ?? "Bad item").trim() || "Bad item";
  addToCart(name);
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addToCart, clearCart } from "./data";

/** Intentionally unprotected — wrong-way demo only */
export async function unprotectedDeleteAll() {
  clearCart();
  revalidatePath("/mistakes/unprotected-server-actions");
  return { ok: true, message: "Deleted without auth check" };
}

export async function protectedDeleteAll() {
  const jar = await cookies();
  const session = jar.get("demo_session")?.value;
  if (session !== "admin") {
    return { ok: false, message: "Unauthorized — set demo_session=admin cookie first" };
  }
  clearCart();
  revalidatePath("/mistakes/unprotected-server-actions");
  return { ok: true, message: "Deleted with auth check" };
}

export async function setDemoSession(formData: FormData) {
  const role = String(formData.get("role") ?? "guest");
  const jar = await cookies();
  jar.set("demo_session", role, { path: "/" });
  revalidatePath("/mistakes/unprotected-server-actions");
}

export async function addItemAction(formData: FormData) {
  const name = String(formData.get("name") ?? "Item").trim() || "Item";
  addToCart(name);
  revalidatePath("/mistakes/revalidate-after-mutation");
  revalidatePath("/mistakes/mutations-in-rsc");
  revalidatePath("/mistakes/unnecessary-use-client");
}

export async function addItemWithoutRevalidate(formData: FormData) {
  const name = String(formData.get("name") ?? "Item").trim() || "Item";
  addToCart(name);
  // Intentionally no revalidatePath — wrong way
}

export async function redirectWrong(): Promise<{ ok: boolean; message: string }> {
  try {
    redirect("/mistakes/redirect-in-try-catch?mode=wrong&landed=1");
  } catch {
    return { ok: false, message: "Redirect was swallowed by catch" };
  }
}

export async function redirectRight(): Promise<void> {
  try {
    // simulate work that might throw
    await Promise.resolve();
  } catch (e) {
    throw e;
  }
  redirect("/mistakes/redirect-in-try-catch?mode=right&landed=1");
}

export async function serverRedirectHome() {
  redirect("/");
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath, updateTag } from "next/cache";
import { addToCart, clearCart } from "./data";
import {
  POSTS_TAG,
  PROFILE_TAG,
  addPost,
  resetPosts,
  resetProfile,
  setProfileName,
} from "./demo-cache";

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

/** #08 wrong: mutate only — tagged cache stays fresh from the server's POV */
export async function updateProfileWithoutTag(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim() || "Anonymous";
  setProfileName(name);
}

/** #08 right: mutate + updateTag for read-your-own-writes */
export async function updateProfileWithTag(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim() || "Anonymous";
  setProfileName(name);
  updateTag(PROFILE_TAG);
}

export async function resetProfileDemo() {
  resetProfile();
  updateTag(PROFILE_TAG);
  revalidatePath("/mistakes/update-tag-vs-refresh");
}

/** #28 wrong: mutate but no tag to invalidate — list stays cached */
export async function createPostWithoutTag(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim() || "Untitled";
  addPost(title);
}

/** #28 right: mutate + expire the posts tag immediately */
export async function createPostWithTag(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim() || "Untitled";
  addPost(title);
  updateTag(POSTS_TAG);
}

export async function resetPostsDemo() {
  resetPosts();
  updateTag(POSTS_TAG);
  revalidatePath("/mistakes/cache-tags");
}

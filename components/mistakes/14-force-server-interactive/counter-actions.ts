"use server";

import { revalidatePath } from "next/cache";
import { incrementServerCount } from "./counter-store";

export async function incrementViaServerAction(): Promise<void> {
  incrementServerCount();
  revalidatePath("/mistakes/force-server-interactive");
}

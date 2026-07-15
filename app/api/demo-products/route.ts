import { NextResponse } from "next/server";
import { getDemoProducts } from "@/lib/data";

export async function GET() {
  const products = await getDemoProducts();
  return NextResponse.json({ products });
}

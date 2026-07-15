import { NextResponse } from "next/server";
import { getFetchDemoValue } from "@/lib/fetch-demo-store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    value: getFetchDemoValue(),
    at: new Date().toISOString(),
  });
}

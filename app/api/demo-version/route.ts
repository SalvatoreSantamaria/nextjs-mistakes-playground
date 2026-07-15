import { NextResponse } from "next/server";
import { getFetchDemoValue } from "@/lib/fetch-demo-store";

/** Default GET caching can keep returning an old body — see mistake #40/#45. */
export async function GET() {
  return NextResponse.json({
    value: getFetchDemoValue(),
    at: new Date().toISOString(),
  });
}

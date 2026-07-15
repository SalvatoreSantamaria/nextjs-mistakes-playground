import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Narrow matcher — only the #33 auth demo is gated. */
export function proxy(request: NextRequest) {
  const session = request.cookies.get("demo_session")?.value;
  if (session !== "admin") {
    const url = request.nextUrl.clone();
    url.pathname = "/mistakes/client-auth-redirect";
    url.searchParams.set("mode", "right");
    url.searchParams.set("blocked", "1");
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/mistakes/client-auth-redirect/demo/protected/:path*"],
};

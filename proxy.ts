import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LEGACY_HOSTS = new Set(["portfolio-syco.vercel.app", "www.portfolio-syco.vercel.app"]);
const TARGET_ORIGIN = "https://cybersyco.vercel.app";

export function proxy(request: NextRequest) {
  const hostHeader = request.headers.get("host")?.toLowerCase();

  if (!hostHeader) {
    return NextResponse.next();
  }

  if (!LEGACY_HOSTS.has(hostHeader)) {
    return NextResponse.next();
  }

  const targetUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, TARGET_ORIGIN);
  return NextResponse.redirect(targetUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
